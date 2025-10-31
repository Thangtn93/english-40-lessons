import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { lessons } from "../data/lessons";

export default function Home() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return lessons;
    return lessons.filter(
      (l) =>
        l.title.toLowerCase().includes(t) ||
        l.content.toLowerCase().includes(t)
    );
  }, [q]);

  return (
    <div className="container">
      <header className="header">
        <h1>English Study – 40 Lessons</h1>
        <p className="subtitle">Trang học tập tổng hợp theo 40 bài.</p>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Tìm bài theo tiêu đề hoặc nội dung..."
          className="search"
        />
      </header>

      <ul className="grid">
        {filtered.map((l) => (
          <li key={l.id} className="card">
            <Link to={`/lesson/${l.id}`} className="cardLink">
              <div className="cardHeader">
                <span className="badge">{l.id}</span>
                <h2>{l.title}</h2>
              </div>
              <p className="cardContent">{l.content}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}