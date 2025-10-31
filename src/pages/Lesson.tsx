import { useParams, Link } from "react-router-dom";
import { useState } from "react";
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

  // Audio playback helpers for pre-generated files in public/audio/lessons/lXX
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const stopAudio = () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setCurrentAudio(null);
    }
  };
  const lessonFolder = `l${String(lesson.id).padStart(2, "0")}`;
  const playAudio = (group: "vocab_basic" | "vocab_it" | "patterns" | "practice", indexZeroBased: number) => {
    const fileIndex = String(indexZeroBased + 1).padStart(3, "0");
    const url = `/audio/lessons/${lessonFolder}/${group}_${fileIndex}.wav`;
    // Stop any existing audio
    stopAudio();
    const audio = new Audio(url);
    audio.play().catch(() => {
      // Fail silently; file may not exist for some lessons
    });
    setCurrentAudio(audio);
  };

  return (
    <div className="container">
      <nav className="breadcrumb">
        <Link to="/">← Về trang chủ</Link>
      </nav>
      <article className="lesson">
        <header className="lessonHeader">
          <span className="badge">Bài {lesson.id}</span>
          <h1>{lesson.title}</h1>
        </header>
        <section>
          <h3>Nội dung chính</h3>
          <p>{lesson.content}</p>
        </section>
        {lesson.outcome && (
          <section>
            <h3>Kết quả đạt được</h3>
            <p>{lesson.outcome}</p>
          </section>
        )}
        {lesson.tasks && lesson.tasks.length > 0 && (
          <section>
            <h3>Nhiệm vụ chính</h3>
            <ul>
              {lesson.tasks.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </section>
        )}
        {(extra.vocabularyBasic || extra.vocabularyIT || (extra.vocabulary && extra.vocabulary.length > 0)) && (
          <section>
            {extra.vocabularyBasic && extra.vocabularyBasic.length > 0 && (
              <div>
                <h3>Từ vựng cơ bản</h3>
                <ul>
                  {extra.vocabularyBasic.map((v, i) => (
                    <li key={`vb-${i}`}>
                      <strong>{v.term}</strong> — {v.meaning}
                      {v.example && <span className="muted"> · Ví dụ: {v.example}</span>}
                      <button className="btn small" style={{ marginLeft: 8 }} onClick={() => playAudio("vocab_basic", i)}>Nghe</button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {extra.vocabularyIT && extra.vocabularyIT.length > 0 && (
              <div>
                <h3>Từ vựng chuyên ngành IT</h3>
                <ul>
                  {extra.vocabularyIT.map((v, i) => (
                    <li key={`vi-${i}`}>
                      <strong>{v.term}</strong> — {v.meaning}
                      {v.example && <span className="muted"> · Ví dụ: {v.example}</span>}
                      <button className="btn small" style={{ marginLeft: 8 }} onClick={() => playAudio("vocab_it", i)}>Nghe</button>
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
        {extra.sentencePatterns && extra.sentencePatterns.length > 0 && (
          <section>
            <h3>Các mẫu câu thường dùng</h3>
            <ul>
              {extra.sentencePatterns.map((p, i) => (
                <li key={i}>
                  <code>{p.pattern}</code>
                  {p.example && <span className="muted"> · Ví dụ: {p.example}</span>}
                  <button className="btn small" style={{ marginLeft: 8 }} onClick={() => playAudio("patterns", i)}>Nghe</button>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 8 }}>
              <button className="btn" onClick={stopAudio}>Dừng</button>
            </div>
          </section>
        )}
        {extra.situations && extra.situations.length > 0 && (
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
        {extra.practice && extra.practice.length > 0 && (
          <section>
            <h3>Luyện tập</h3>
            <ul>
              {extra.practice.map((p, i) => (
                <li key={i}>
                  <strong>{p.title}</strong>
                  <span className="muted"> · {p.prompt}</span>
                  <button className="btn small" style={{ marginLeft: 8 }} onClick={() => playAudio("practice", i)}>Nghe mẫu</button>
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
            <div style={{ marginTop: 8 }}>
              <button className="btn" onClick={stopAudio}>Dừng</button>
            </div>
          </section>
        )}
      </article>
      <footer style={{ marginTop: 16 }}>
        {currentAudio && (
          <button className="btn" onClick={stopAudio}>Dừng đọc</button>
        )}
      </footer>
    </div>
  );
}