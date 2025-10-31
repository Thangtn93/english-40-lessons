import type { Lesson } from "../lessonTypes";

export const lesson4: Lesson = {
  id: 4,
  title: "Experience",
  content: "Sử dụng Present Perfect để nói về kinh nghiệm (ví dụ: 'I have used React for 3 years'). Trao đổi với đồng nghiệp/khách về kinh nghiệm dự án.",
  outcome: "Trình bày các kinh nghiệm, kỹ năng cốt lõi, lưu ý cách dẫn chứng.",
  extra: {
    vocabulary: [
      { term: "portfolio", meaning: "hồ sơ dự án", example: "I maintain a portfolio of case studies." },
      { term: "case study", meaning: "nghiên cứu điển hình", example: "We published a case study on scaling APIs." },
      { term: "project", meaning: "dự án", example: "This project involved data migration." },
      { term: "migration", meaning: "di chuyển hệ thống", example: "We migrated services to Kubernetes." },
      { term: "refactor", meaning: "tái cấu trúc", example: "We refactored the legacy module." },
      { term: "scalability", meaning: "khả năng mở rộng", example: "We improved scalability with caching." },
      { term: "performance", meaning: "hiệu năng", example: "We reduced latency by 40%." },
      { term: "reliability", meaning: "độ tin cậy", example: "Reliability increased after the redesign." },
      { term: "outage", meaning: "mất dịch vụ", example: "We had a minor outage last quarter." },
      { term: "incident", meaning: "sự cố", example: "We documented the incident thoroughly." },
      { term: "postmortem", meaning: "báo cáo sau sự cố", example: "We wrote a postmortem with actions." },
      { term: "user story", meaning: "câu chuyện người dùng", example: "Each feature has user stories." },
      { term: "acceptance criteria", meaning: "tiêu chí chấp nhận", example: "We defined clear acceptance criteria." },
      { term: "deliverables", meaning: "sản phẩm bàn giao", example: "Deliverables included docs and demos." },
      { term: "timeline", meaning: "dòng thời gian", example: "We met the timeline ahead of schedule." },
      { term: "constraint", meaning: "ràng buộc", example: "Budget was our main constraint." },
    ],
    sentencePatterns: [
      { pattern: "I have worked with [tech] for [time].", example: "I have worked with React for 3 years." },
      { pattern: "I have led [type] projects.", example: "I have led migration projects." },
      { pattern: "I improved [aspect] by [method].", example: "I improved performance by adding caching." },
      { pattern: "We documented [event] and [action].", example: "We documented the outage and postmortem." },
      { pattern: "I collaborated with [team] to deliver [deliverable].", example: "I collaborated with QA to deliver a stable release." },
    ],
    situations: [
      { title: "Chia sẻ kinh nghiệm trong cuộc họp", example: "I’ve led two migrations and improved latency." },
      { title: "Phỏng vấn: kể về dự án", example: "Could you walk us through your last project?" },
      { title: "Thảo luận thách thức và cách giải", example: "We faced an outage and improved reliability." },
      { title: "Giải thích đóng góp cá nhân", example: "I refactored the module and reduced bugs." },
    ],
    practice: [
      { title: "Viết tóm tắt kinh nghiệm", prompt: "Tóm tắt 3 kinh nghiệm nổi bật bằng Present Perfect.", sample: "I have led two migrations, improved latency by 40%, and mentored junior engineers." },
      { title: "Giới thiệu case study", prompt: "Chuẩn bị bài nói 1–2 phút về một case study.", sample: "In this case study, we scaled our API, reduced response time, and improved reliability." },
    ],
  },
};