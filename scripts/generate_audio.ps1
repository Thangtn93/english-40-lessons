<#
 Generates WAV audio files for a given LessonId by parsing the corresponding TypeScript lesson file.
 - Extracts vocabularyBasic (term + example)
 - Extracts vocabularyIT (term + example)
 - Extracts sentencePatterns (pattern + example)
 - Extracts practice samples (sample)
 Saves files to public\audio\lessons\lXX\ with names:
   - vocab_basic_001.wav, vocab_it_001.wav, patterns_001.wav, practice_001.wav

 Usage examples (PowerShell on Windows):
   powershell -ExecutionPolicy Bypass -File scripts/generate_audio.ps1 -LessonId 07 -Rate 0 -Volume 100 -Culture en-US

 Notes:
 - Requires System.Speech (built-in on Windows).
 - The script reads the TS source and uses regex to extract items. Keep lesson files formatted similarly to other lessons.
#>

param(
  [Parameter(Mandatory = $true)]
  [string]$LessonId,
  [int]$Rate = 0,
  [int]$Volume = 100,
  [string]$Culture = "en-US",
  [string]$OutRoot = "public\\audio\\lessons"
)

# Normalize lesson id (2 digits)
$lid = ([int]$LessonId).ToString("D2")
$lessonFile = Join-Path "src\data\lessons" ("l{0}.ts" -f $lid)
$outDir = Join-Path $OutRoot ("l{0}" -f $lid)

Write-Host "Reading lesson file:" $lessonFile
Write-Host "Output directory:" $outDir

if (!(Test-Path $lessonFile)) {
  Write-Error ("Lesson file not found: {0}" -f $lessonFile)
  exit 1
}

New-Item -ItemType Directory -Force -Path $outDir | Out-Null

Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$synth.Rate = $Rate
$synth.Volume = $Volume

# Select voice
$voices = $synth.GetInstalledVoices()
$enVoices = $voices | Where-Object { $_.VoiceInfo.Culture -eq $Culture }
if ($enVoices.Count -gt 0) {
  $synth.SelectVoice($enVoices[0].VoiceInfo.Name)
  Write-Host "Using voice:" $enVoices[0].VoiceInfo.Name
} else {
  Write-Warning ("No {0} voice found. Using default voice." -f $Culture)
}

$content = Get-Content -Raw -Path $lessonFile

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
    $file = Join-Path $outDir ("{0}_{1:D3}.wav" -f $prefix, $i)
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
if ($vbLines.Count -gt 0) { Export-AudioLines -lines $vbLines -prefix "vocab_basic" } else { Write-Host "No vocabularyBasic items found." }

# Extract vocabularyIT items (term + example)
$vitBlock = Get-Block -source $content -key "vocabularyIT"
$vitMatches = [regex]::Matches($vitBlock, '\{[^}]*term:\s*"([^"]+)"[^}]*example:\s*"([^"]+)"[^}]*\}',
  [System.Text.RegularExpressions.RegexOptions]::Singleline)
$vitLines = @()
foreach ($m in $vitMatches) { $vitLines += ("{0}. {1}" -f $m.Groups[1].Value, $m.Groups[2].Value) }
if ($vitLines.Count -gt 0) { Export-AudioLines -lines $vitLines -prefix "vocab_it" } else { Write-Host "No vocabularyIT items found." }

# Extract sentencePatterns (pattern + example)
$spBlock = Get-SectionByMarkers -source $content -startKey "sentencePatterns:" -endKey "situations:"
$spMatches = [regex]::Matches($spBlock, 'pattern:\s*"([^"]+)"[\s\S]*?example:\s*"([^"]+)"',
  [System.Text.RegularExpressions.RegexOptions]::Singleline)
$spLines = @()
foreach ($m in $spMatches) { $spLines += ("{0}. {1}" -f $m.Groups[1].Value, $m.Groups[2].Value) }
if ($spLines.Count -gt 0) { Export-AudioLines -lines $spLines -prefix "patterns" } else { Write-Host "No sentencePatterns items found." }

# Extract practice samples (sample only)
# Note: Some sample strings may contain square brackets (e.g., "[Name]") which
# can prematurely terminate a naive array capture with regex. To be robust, we
# scan the entire lesson file for 'sample: "..."' occurrences instead of
# restricting to the 'practice' array block.
$prMatches = [regex]::Matches($content, 'sample:\s*"([^"]+)"',
  [System.Text.RegularExpressions.RegexOptions]::Singleline)
$prLines = @()
foreach ($m in $prMatches) { $prLines += $m.Groups[1].Value }
if ($prLines.Count -gt 0) { Export-AudioLines -lines $prLines -prefix "practice" } else { Write-Host "No practice items found." }

Write-Host "Done. Audio files saved to:" (Resolve-Path $outDir)