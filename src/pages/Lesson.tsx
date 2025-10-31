import { useParams, Link } from "react-router-dom";
import { lessons } from "../data/lessons";
import {
  defaultVocabulary,
  defaultSentencePatterns,
  defaultSituations,
  defaultPractice,
} from "../data/templates";

export default function Lesson() {
  const params = useParams();
  const id = Number(params.id);
  const lesson = lessons.find((l) => l.id === id);

  if (!lesson) {
    return (
      <div className="container">
        <p>Không tìm thấy bài học.</p>
        <Link to="/" className="btn">Về trang chủ</Link>
      </div>
    );
  }

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
        {(lesson.vocabulary ?? defaultVocabulary).length > 0 && (
          <section>
            <h3>Từ vựng cần học</h3>
            <ul>
              {(lesson.vocabulary ?? defaultVocabulary).map((v, i) => (
                <li key={i}>
                  <strong>{v.term}</strong> — {v.meaning}
                  {v.example && (
                    <div className="muted">Ví dụ: {v.example}</div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}
        {(lesson.sentencePatterns ?? defaultSentencePatterns).length > 0 && (
          <section>
            <h3>Các mẫu câu thường dùng</h3>
            <ul>
              {(lesson.sentencePatterns ?? defaultSentencePatterns).map((p, i) => (
                <li key={i}>
                  <code>{p.pattern}</code>
                  {p.example && (
                    <div className="muted">Ví dụ: {p.example}</div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}
        {(lesson.situations ?? defaultSituations).length > 0 && (
          <section>
            <h3>Các tình huống thường gặp</h3>
            <ul>
              {(lesson.situations ?? defaultSituations).map((s, i) => (
                <li key={i}>
                  <strong>{s.title}</strong>
                  {s.example && (
                    <div className="muted">Ví dụ: {s.example}</div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}
        {(lesson.practice ?? defaultPractice).length > 0 && (
          <section>
            <h3>Luyện tập</h3>
            <ul>
              {(lesson.practice ?? defaultPractice).map((p, i) => (
                <li key={i}>
                  <strong>{p.title}</strong>
                  <div>{p.prompt}</div>
                </li>
              ))}
            </ul>
          </section>
        )}
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
      </article>
    </div>
  );
}