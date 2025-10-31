<#
 Generates WAV audio files for Lesson 1 by parsing src\data\lessons\l01.ts.
 - Extracts vocabularyBasic (term + example)
 - Extracts vocabularyIT (term + example)
 - Extracts sentencePatterns (pattern + example)
 - Extracts practice samples (sample)
 Saves files to public\audio\lessons\l01\.
#>

param(
  [string]$LessonFile = "src\data\lessons\l01.ts",
  [string]$OutDir = "public\audio\lessons\l01",
  [int]$Rate = 0,
  [int]$Volume = 100,
  [string]$PreferredCulture = "en-US"
)

Write-Host "Reading lesson file:" $LessonFile

if (!(Test-Path $LessonFile)) {
  Write-Error "Lesson file not found: $LessonFile"
  exit 1
}

New-Item -ItemType Directory -Force -Path $OutDir | Out-Null

Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$synth.Rate = $Rate
$synth.Volume = $Volume

# Pick an English (en-US) voice if available
$voices = $synth.GetInstalledVoices()
$enVoices = $voices | Where-Object { $_.VoiceInfo.Culture -eq $PreferredCulture }
if ($enVoices.Count -gt 0) {
  $synth.SelectVoice($enVoices[0].VoiceInfo.Name)
  Write-Host "Using voice:" $enVoices[0].VoiceInfo.Name
} else {
  Write-Warning "No $PreferredCulture voice found. Using default voice."
}

$content = Get-Content -Raw -Path $LessonFile

function Get-Block {
  param([string]$source, [string]$key)
  # Capture content inside key: [ ... ]
  $m = [regex]::Match($source, [string]::Format("{0}:\s*\[(.*?)\]", [regex]::Escape($key)),
    [System.Text.RegularExpressions.RegexOptions]::Singleline)
  if ($m.Success) { return $m.Groups[1].Value } else { return "" }
}

function Get-SectionByMarkers {
  param([string]$source, [string]$startKey, [string]$endKey)
  $startIndex = $source.IndexOf($startKey)
  if ($startIndex -lt 0) { return "" }
  $endIndex = $source.IndexOf($endKey, $startIndex)
  if ($endIndex -lt 0) { $endIndex = $source.Length }
  return $source.Substring($startIndex, $endIndex - $startIndex)
}

function Export-AudioLines {
  param([string[]]$lines, [string]$prefix)
  $i = 1
  foreach ($line in $lines) {
    if (-not $line -or $line.Trim().Length -eq 0) { continue }
    $file = Join-Path $OutDir ("{0}_{1:D3}.wav" -f $prefix, $i)
    $synth.SetOutputToWaveFile($file)
    $synth.Speak($line)
    $synth.SetOutputToNull()
    $i++
  }
  Write-Host ("Generated {0} files for {1}" -f ($i-1), $prefix)
}

# Extract vocabularyBasic items (term + example)
$vbBlock = Get-Block -source $content -key "vocabularyBasic"
$vbMatches = [regex]::Matches($vbBlock, '\{[^}]*term:\s*"([^"]+)"[^}]*example:\s*"([^"]+)"[^}]*\}',
  [System.Text.RegularExpressions.RegexOptions]::Singleline)
$vbLines = @()
foreach ($m in $vbMatches) { $vbLines += ("{0}. {1}" -f $m.Groups[1].Value, $m.Groups[2].Value) }
Export-AudioLines -lines $vbLines -prefix "vocab_basic"

# Extract vocabularyIT items (term + example)
$vitBlock = Get-Block -source $content -key "vocabularyIT"
$vitMatches = [regex]::Matches($vitBlock, '\{[^}]*term:\s*"([^"]+)"[^}]*example:\s*"([^"]+)"[^}]*\}',
  [System.Text.RegularExpressions.RegexOptions]::Singleline)
$vitLines = @()
foreach ($m in $vitMatches) { $vitLines += ("{0}. {1}" -f $m.Groups[1].Value, $m.Groups[2].Value) }
Export-AudioLines -lines $vitLines -prefix "vocab_it"

# Extract sentencePatterns (pattern + example) using marker-based section to avoid ] inside strings
$spBlock = Get-SectionByMarkers -source $content -startKey "sentencePatterns:" -endKey "situations:"
$spMatches = [regex]::Matches($spBlock, 'pattern:\s*"([^"]+)"[\s\S]*?example:\s*"([^"]+)"',
  [System.Text.RegularExpressions.RegexOptions]::Singleline)
$spLines = @()
foreach ($m in $spMatches) { $spLines += ("{0}. {1}" -f $m.Groups[1].Value, $m.Groups[2].Value) }
Export-AudioLines -lines $spLines -prefix "patterns"

# Extract practice samples (sample only)
$prBlock = Get-Block -source $content -key "practice"
$prMatches = [regex]::Matches($prBlock, 'sample:\s*"([^"]+)"',
  [System.Text.RegularExpressions.RegexOptions]::Singleline)
$prLines = @()
foreach ($m in $prMatches) { $prLines += $m.Groups[1].Value }
Export-AudioLines -lines $prLines -prefix "practice"

Write-Host "Done. Audio files saved to:" (Resolve-Path $OutDir)