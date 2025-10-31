import type { Lesson } from "../lessonTypes";

export const lesson7: Lesson = {
  id: 7,
  title: "Gathering requirements",
  content:
    "Phỏng vấn/thu thập yêu cầu từ stakeholder, xác định scope, acceptance criteria và rủi ro.",
  outcome: "Xác định rõ yêu cầu, phạm vi và tiêu chí chấp nhận để lập kế hoạch.",
  extra: {
    vocabularyBasic: [
      { term: "requirement", meaning: "yêu cầu", example: "We document all requirements before implementation." },
      { term: "scope", meaning: "phạm vi", example: "Let’s agree on the project scope first." },
      { term: "assumption", meaning: "giả định", example: "Our assumption is monthly reporting is enough." },
      { term: "constraint", meaning: "ràng buộc", example: "Budget constraints limit the options." },
      { term: "acceptance criteria", meaning: "tiêu chí chấp nhận", example: "Define clear acceptance criteria for QA." },
      { term: "deliverable", meaning: "kết quả bàn giao", example: "The deliverable is a working dashboard." },
      { term: "timeline", meaning: "lịch trình", example: "The timeline spans eight weeks." },
      { term: "stakeholder", meaning: "bên liên quan", example: "We need stakeholder approval on the scope." },
      { term: "priority", meaning: "ưu tiên", example: "Let’s prioritize features by impact." },
      { term: "risk", meaning: "rủi ro", example: "We need to mitigate integration risks." },
    ],
    vocabularyIT: [
      { term: "user story", meaning: "câu chuyện người dùng", example: "We capture requirements as user stories." },
      { term: "epic", meaning: "epic", example: "This epic includes three reporting features." },
      { term: "acceptance test", meaning: "kiểm thử chấp nhận", example: "Acceptance tests validate the criteria." },
      { term: "non-functional requirements", meaning: "yêu cầu phi chức năng", example: "Include performance and security NFRs." },
      { term: "integration", meaning: "tích hợp", example: "We plan integration with the billing system." },
      { term: "API contract", meaning: "hợp đồng API", example: "Define the API contract early." },
      { term: "data schema", meaning: "lược đồ dữ liệu", example: "Confirm the data schema for analytics." },
      { term: "backlog refinement", meaning: "chắt lọc backlog", example: "We do backlog refinement weekly." },
      { term: "definition of done (DoD)", meaning: "định nghĩa hoàn thành", example: "DoD includes tests and docs." },
      { term: "definition of ready (DoR)", meaning: "định nghĩa sẵn sàng", example: "DoR ensures stories are ready for dev." },
    ],
    sentencePatterns: [
      { pattern: "Could you clarify [topic] further?", example: "Could you clarify the reporting frequency further?" },
      { pattern: "What does success look like for [feature]?", example: "What does success look like for the dashboard?" },
      { pattern: "Let’s define the acceptance criteria as [criteria].", example: "Let’s define the acceptance criteria as 1s load time." },
      { pattern: "Our constraints include [A] and [B].", example: "Our constraints include budget and compliance." },
      { pattern: "We will prioritize [feature] based on [metric].", example: "We will prioritize alerts based on user impact." },
      { pattern: "The scope excludes [item].", example: "The scope excludes legacy migration." },
    ],
    situations: [
      { title: "Phỏng vấn stakeholder", example: "Hỏi rõ nhu cầu, ràng buộc và kỳ vọng kết quả." },
      { title: "Xác định scope", example: "Làm rõ tính năng bao gồm và loại trừ." },
      { title: "Thảo luận acceptance criteria", example: "Viết tiêu chí rõ ràng, đo lường được." },
      { title: "Đánh giá rủi ro", example: "Liệt kê rủi ro tích hợp và kế hoạch giảm thiểu." },
      { title: "Refine backlog", example: "Chia nhỏ yêu cầu thành các user stories khả thi." },
    ],
    practice: [
      {
        title: "Phỏng vấn yêu cầu 10’",
        prompt: "Viết checklist câu hỏi: mục tiêu, phạm vi, ràng buộc, tiêu chí chấp nhận.",
        sample: "Goal? Scope? Constraints? Acceptance criteria? Stakeholders? Timeline?",
      },
      {
        title: "Định nghĩa DoR/DoD",
        prompt: "Soạn DoR/DoD cho một user story báo cáo doanh thu.",
        sample: "DoR: story has criteria & data schema. DoD: tests pass, docs updated.",
      },
    ],
  },
};