import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}> 
      <Routes>
        {/* Trang gốc hiển thị danh sách 40 bài học */}
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/lesson/:id" element={<Lesson />} />
      </Routes>
    </BrowserRouter>
  );
}
