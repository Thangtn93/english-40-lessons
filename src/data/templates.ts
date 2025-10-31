export const defaultVocabulary = [
  { term: "agenda", meaning: "chương trình họp", example: "Let’s review the agenda first." },
  { term: "objective", meaning: "mục tiêu", example: "Our main objective is to finalize scope." },
  { term: "deadline", meaning: "hạn chót", example: "The deadline is next Friday." },
  { term: "milestone", meaning: "cột mốc", example: "We reached the first milestone." },
  { term: "stakeholder", meaning: "bên liên quan", example: "We need stakeholder approval." },
  { term: "follow-up", meaning: "theo dõi/tiếp nối", example: "I’ll send a follow-up email." },
  { term: "clarify", meaning: "làm rõ", example: "Could you clarify the requirement?" },
  { term: "proposal", meaning: "đề xuất", example: "I’ll prepare a proposal." },
  { term: "feedback", meaning: "phản hồi", example: "Thanks for the feedback." },
  { term: "escalate", meaning: "đưa lên cấp cao hơn", example: "We might need to escalate this issue." },
  { term: "capacity", meaning: "năng lực/khả năng tải", example: "We have limited capacity this sprint." },
  { term: "constraint", meaning: "ràng buộc", example: "Budget is a constraint for this phase." }
];

export const defaultSentencePatterns = [
  { pattern: "Could you please [action]?", example: "Could you please share the document?" },
  { pattern: "Let’s [action] to [goal].", example: "Let’s align the scope to avoid delays." },
  { pattern: "I suggest we [action] because [reason].", example: "I suggest we postpone the release because of QA." },
  { pattern: "From my perspective, [opinion].", example: "From my perspective, this approach is more scalable." },
  { pattern: "What do you think about [topic]?", example: "What do you think about moving to microservices?" },
  { pattern: "I’m afraid [issue].", example: "I’m afraid we don’t have enough time." },
  { pattern: "Do you mind if I [action]?", example: "Do you mind if I record the meeting?" },
  { pattern: "Could we [action] later?", example: "Could we revisit this after the demo?" },
  { pattern: "Thanks for [action].", example: "Thanks for joining the call." }
];

export const defaultSituations = [
  { title: "Mở đầu cuộc họp", example: "Let’s start. Today’s agenda has three points." },
  { title: "Làm rõ yêu cầu", example: "Could you clarify the expected outcome for phase one?" },
  { title: "Thống nhất kế hoạch", example: "Let’s agree on the timeline first." },
  { title: "Xử lý trễ tiến độ", example: "We’ll adjust the plan due to the delay." },
  { title: "Gửi email follow-up", example: "I’ll send a follow-up with action items." },
  { title: "Kết thúc buổi làm việc", example: "Thanks everyone. We’ll sync next Tuesday." }
];

export const defaultPractice = [
  { title: "Role-play: mở đầu họp", prompt: "Thực hành chào, giới thiệu agenda, hỏi ý kiến và phân vai." },
  { title: "Viết email follow-up", prompt: "Soạn email tóm tắt action items và deadline." },
  { title: "Chuyển câu nói sang lịch sự", prompt: "Biến câu trực diện thành câu lịch sự phù hợp business." },
  { title: "Tóm tắt và xác nhận", prompt: "Luyện nói câu xác nhận: recap, clarify, confirm." }
];