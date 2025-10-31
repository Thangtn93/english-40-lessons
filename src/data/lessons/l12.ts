import type { Lesson } from "../lessonTypes";
import { extraByLesson } from "../generators";

export const lesson12: Lesson = {
  id: 12,
  title: "Job interview",
  content: "Chuẩn bị phỏng vấn vị trí IT (2 vai: phỏng vấn và ứng viên).",
  outcome: "Tự tin tham gia vòng phỏng vấn kỹ thuật hoặc phòng vấn điểm mạnh.",
  extra: extraByLesson[12],
};