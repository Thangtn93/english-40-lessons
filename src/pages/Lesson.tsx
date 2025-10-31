import { useParams, Link } from "react-router-dom";
import { lessons } from "../data/lessons";
import { extraByLesson, ensureMinimumContent } from "../data/generators";

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

  // Ưu tiên dữ liệu inline trong từng bài; fallback sang extraByLesson nếu chưa có
  const extra = ensureMinimumContent(id, lesson.title, lesson.extra ?? extraByLesson[id]);

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
        {extra.vocabulary && extra.vocabulary.length > 0 && (
          <section>
            <h3>Từ vựng cần học</h3>
            <ul>
              {extra.vocabulary.map((v, i) => (
                <li key={i}>
                  <strong>{v.term}</strong> — {v.meaning}
                  {v.example && <span className="muted"> · Ví dụ: {v.example}</span>}
                </li>
              ))}
            </ul>
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
                </li>
              ))}
            </ul>
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
    </div>
  );
}