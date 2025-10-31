import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson/:id" element={<Lesson />} />
      </Routes>
    </BrowserRouter>
  );
}
