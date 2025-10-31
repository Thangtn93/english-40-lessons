import { useParams, Link } from "react-router-dom";
import { lessons } from "../data/lessons";

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