import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  active: boolean;
  stopVersion: number;
  onStart: () => void;
  onStop: () => void;
  initialRate?: number;
};

function formatTime(t: number) {
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function InlineAudio({ src, active, stopVersion, onStart, onStop, initialRate = 1 }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [rate, setRate] = useState(initialRate);
  const [repeat, setRepeat] = useState(false);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.playbackRate = rate;
  }, [rate]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    if (!active) {
      el.pause();
      setIsPlaying(false);
    }
  }, [stopVersion, active]);

  const togglePlay = () => {
    const el = audioRef.current;
    if (!el) return;
    if (!isPlaying) {
      onStart();
      el.src = src;
      el.load();
      el.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    } else {
      el.pause();
      setIsPlaying(false);
      onStop();
    }
  };

  const onLoaded = () => {
    const el = audioRef.current;
    if (!el) return;
    setDuration(el.duration || 0);
  };

  const onTime = () => {
    const el = audioRef.current;
    if (!el) return;
    setCurrentTime(el.currentTime || 0);
  };

  const onEnded = () => {
    const el = audioRef.current;
    if (!el) return;
    if (repeat) {
      el.currentTime = 0;
      el.play().catch(() => {});
    } else {
      setIsPlaying(false);
      onStop();
    }
  };

  const seek = (v: number) => {
    const el = audioRef.current;
    if (!el) return;
    el.currentTime = v;
  };

  return (
    <div className={`audioItem${active ? " active" : ""}`}> 
      <button className="btn small" onClick={togglePlay}>{isPlaying ? "Tạm dừng" : "Nghe"}</button>
      <div className="audioControls">
        <span className="time">{formatTime(currentTime)} / {formatTime(duration)}</span>
        <input
          type="range"
          min={0}
          max={Math.max(duration, 0) || 0}
          step={0.01}
          value={Math.min(currentTime, duration || 0)}
          onChange={(e) => seek(Number(e.target.value))}
        />
        <select value={rate} onChange={(e) => setRate(Number(e.target.value))}>
          <option value={0.75}>0.75x</option>
          <option value={1}>1x</option>
          <option value={1.25}>1.25x</option>
          <option value={1.5}>1.5x</option>
        </select>
        <label className="repeat">
          <input type="checkbox" checked={repeat} onChange={(e) => setRepeat(e.target.checked)} /> Lặp
        </label>
      </div>
      <audio
        ref={audioRef}
        onLoadedMetadata={onLoaded}
        onTimeUpdate={onTime}
        onEnded={onEnded}
      />
    </div>
  );
}