import { useParams, Link } from "react-router-dom";
import { useMemo, useState } from "react";
import InlineAudio from "../components/InlineAudio";
import { lessons } from "../data/lessons";
import type { ExtraContent } from "../data/lessonTypes";

export default function Lesson() {
  const params = useParams();
  const id = Number(params.id);
  const lesson = lessons.find((l) => l.id === id);
  // Guard: nếu id không hợp lệ hoặc không tìm thấy bài, trả về sớm
  if (!lesson || Number.isNaN(id)) {
    return (
      <div className="container">
        <p>Không tìm thấy bài học.</p>
        <Link to="/" className="btn">Về trang chủ</Link>
      </div>
    );
  }

  // Chỉ dùng dữ liệu biên soạn thủ công trong từng bài
  const extra: ExtraContent = lesson.extra ?? {};

  const [nowPlaying, setNowPlaying] = useState<{ key: string } | null>(null);
  const [stopVersion, setStopVersion] = useState(0);
  const lessonFolder = `l${String(lesson.id).padStart(2, "0")}`;
  const makeSrc = (group: "vocab_basic" | "vocab_it" | "patterns" | "practice", indexZeroBased: number) => {
    const fileIndex = String(indexZeroBased + 1).padStart(3, "0");
    const baseUrl = import.meta.env.BASE_URL || "/";
    return `${baseUrl}audio/lessons/${lessonFolder}/${group}_${fileIndex}.wav`;
  };
  const startItem = (key: string) => {
    setNowPlaying({ key });
    setStopVersion((v) => v + 1);
  };
  const stopItem = () => {
    setNowPlaying(null);
    setStopVersion((v) => v + 1);
  };

  // Tabs setup: xác định các tab khả dụng theo dữ liệu bài học
  const tabs = useMemo(() => {
    const items: { key: string; label: string; show: boolean }[] = [
      { key: "overview", label: "Tổng quan", show: true },
      { key: "vocab", label: "Từ vựng", show: Boolean(extra.vocabularyBasic?.length || extra.vocabularyIT?.length || extra.vocabulary?.length) },
      { key: "patterns", label: "Mẫu câu", show: Boolean(extra.sentencePatterns?.length) },
      { key: "situations", label: "Tình huống", show: Boolean(extra.situations?.length) },
      { key: "practice", label: "Luyện tập", show: Boolean(extra.practice?.length) },
    ];
    return items.filter(i => i.show);
  }, [extra]);
  const [tab, setTab] = useState<string>(() => (tabs[0]?.key || "overview"));

  return (
    <div className="container">
      <nav className="breadcrumb">
        <Link to="/" className="iconBtn" aria-label="Về trang chủ" title="Về trang chủ">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 19l-7-7m0 0 7-7m-7 7h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="srOnly">Về trang chủ</span>
        </Link>
      </nav>
      <article className="lesson">
        <header className="lessonHeader">
          <span className="badge">Bài {lesson.id}</span>
          <h1>{lesson.title}</h1>
        </header>
        {/* Tab bar */}
        <div className="tabs">
          {tabs.map(t => (
            <button key={t.key} className={`tab ${tab === t.key ? 'active' : ''}`} onClick={() => setTab(t.key)}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Nội dung theo tab */}
        {tab === 'overview' && (
          <section>
            <h3>Nội dung chính</h3>
            <p>{lesson.content}</p>
            {lesson.outcome && (
              <div style={{ marginTop: 12 }}>
                <h3>Kết quả đạt được</h3>
                <p>{lesson.outcome}</p>
              </div>
            )}
            {lesson.tasks && lesson.tasks.length > 0 && (
              <div style={{ marginTop: 12 }}>
                <h3>Nhiệm vụ chính</h3>
                <ul>
                  {lesson.tasks.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {tab === 'vocab' && (
          <section>
            {extra.vocabularyBasic && extra.vocabularyBasic.length > 0 && (
              <div>
                <h3>Từ vựng cơ bản</h3>
                <ul>
                  {extra.vocabularyBasic.map((v, i) => (
                    <li key={`vb-${i}`}>
                      <strong>{v.term}</strong> — {v.meaning}
                      {v.example && <span className="muted"> · Ví dụ: {v.example}</span>}
                      <InlineAudio
                        src={makeSrc("vocab_basic", i)}
                        active={nowPlaying?.key === `vb-${i}`}
                        stopVersion={stopVersion}
                        onStart={() => startItem(`vb-${i}`)}
                        onStop={stopItem}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {extra.vocabularyIT && extra.vocabularyIT.length > 0 && (
              <div style={{ marginTop: 12 }}>
                <h3>Từ vựng chuyên ngành IT</h3>
                <ul>
                  {extra.vocabularyIT.map((v, i) => (
                    <li key={`vi-${i}`}>
                      <strong>{v.term}</strong> — {v.meaning}
                      {v.example && <span className="muted"> · Ví dụ: {v.example}</span>}
                      <InlineAudio
                        src={makeSrc("vocab_it", i)}
                        active={nowPlaying?.key === `vi-${i}`}
                        stopVersion={stopVersion}
                        onStart={() => startItem(`vi-${i}`)}
                        onStop={stopItem}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {!extra.vocabularyBasic && !extra.vocabularyIT && extra.vocabulary && extra.vocabulary.length > 0 && (
              <div>
                <h3>Từ vựng cần học</h3>
                <ul>
                  {extra.vocabulary.map((v, i) => (
                    <li key={i}>
                      <strong>{v.term}</strong> — {v.meaning}
                      {v.example && <span className="muted"> · Ví dụ: {v.example}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {tab === 'patterns' && extra.sentencePatterns && extra.sentencePatterns.length > 0 && (
          <section>
            <h3>Các mẫu câu thường dùng</h3>
            <ul>
              {extra.sentencePatterns.map((p, i) => (
                <li key={i}>
                  <code>{p.pattern}</code>
                  {p.example && <span className="muted"> · Ví dụ: {p.example}</span>}
                  <InlineAudio
                    src={makeSrc("patterns", i)}
                    active={nowPlaying?.key === `pt-${i}`}
                    stopVersion={stopVersion}
                    onStart={() => startItem(`pt-${i}`)}
                    onStop={stopItem}
                  />
                </li>
              ))}
            </ul>
          </section>
        )}

        {tab === 'situations' && extra.situations && extra.situations.length > 0 && (
          <section>
            <h3>Các tình huống thường gặp</h3>
            <ul>
              {extra.situations.map((s, i) => (
                <li key={i}>
                  <strong>{s.title}</strong>
                  {s.example && <span className="muted"> · Ví dụ: {s.example}</span>}
                </li>
              ))}
            </ul>
          </section>
        )}

        {tab === 'practice' && extra.practice && extra.practice.length > 0 && (
          <section>
            <h3>Luyện tập</h3>
            <ul>
              {extra.practice.map((p, i) => (
                <li key={i}>
                  <strong>{p.title}</strong>
                  <span className="muted"> · {p.prompt}</span>
                  <InlineAudio
                    src={makeSrc("practice", i)}
                    active={nowPlaying?.key === `pr-${i}`}
                    stopVersion={stopVersion}
                    onStart={() => startItem(`pr-${i}`)}
                    onStop={stopItem}
                  />
                  {p.sample && (
                    <div className="muted" style={{ marginTop: 6 }}>
                      {p.sample.split("\n").map((line, idx) => (
                        <div key={idx}>{line}</div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
      <footer style={{ marginTop: 16 }}>
        {nowPlaying && (
          <button className="btn" onClick={stopItem}>Dừng đọc</button>
        )}
      </footer>
    </div>
  );
}