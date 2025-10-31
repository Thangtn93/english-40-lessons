import type { Lesson } from "../lessonTypes";
import { extraByLesson } from "../generators";

export const lesson13: Lesson = {
  id: 13,
  title: "Final test",
  content: "Bài kiểm tra giữa chặng.",
  outcome: "Đánh giá năng lực phần 1.",
  extra: extraByLesson[13],
};