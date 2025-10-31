import type { Lesson } from "../lessonTypes";

export const lesson4: Lesson = {
  id: 4,
  title: "Experience",
  content: "Sử dụng Present Perfect để nói về kinh nghiệm (ví dụ: 'I have used React for 3 years'). Trao đổi với đồng nghiệp/khách về kinh nghiệm dự án.",
  outcome: "Trình bày các kinh nghiệm, kỹ năng cốt lõi, lưu ý cách dẫn chứng.",
  extra: {
    vocabularyBasic: [
      { term: "portfolio", meaning: "hồ sơ dự án", example: "I maintain a portfolio of case studies." },
      { term: "case study", meaning: "nghiên cứu điển hình", example: "We published a case study on scaling APIs." },
      { term: "project", meaning: "dự án", example: "This project involved cross-team collaboration." },
      { term: "experience", meaning: "kinh nghiệm", example: "I have experience leading migrations." },
      { term: "achievement", meaning: "thành tựu", example: "A key achievement was reducing costs by 20%." },
      { term: "contribution", meaning: "đóng góp", example: "My contribution focused on design and mentorship." },
      { term: "responsibility", meaning: "trách nhiệm", example: "My responsibilities included planning and execution." },
      { term: "challenge", meaning: "thách thức", example: "A major challenge was balancing speed and quality." },
      { term: "result", meaning: "kết quả", example: "The result was improved reliability and performance." },
      { term: "lessons learned", meaning: "bài học rút ra", example: "We documented lessons learned for future projects." },
    ],
    vocabularyIT: [
      { term: "migration", meaning: "di chuyển hệ thống", example: "We migrated services to Kubernetes." },
      { term: "refactor", meaning: "tái cấu trúc", example: "We refactored the legacy module." },
      { term: "scalability", meaning: "khả năng mở rộng", example: "We improved scalability with caching." },
      { term: "performance", meaning: "hiệu năng", example: "We reduced latency by 40%." },
      { term: "reliability", meaning: "độ tin cậy", example: "Reliability increased after the redesign." },
      { term: "outage", meaning: "mất dịch vụ", example: "We had a minor outage last quarter." },
      { term: "latency", meaning: "độ trễ", example: "We cut API latency from 300ms to 180ms." },
      { term: "bug fix", meaning: "sửa lỗi", example: "I fixed critical bugs blocking production." },
      { term: "incident", meaning: "sự cố", example: "We handled a payment incident during peak hours." },
      { term: "root cause analysis", meaning: "phân tích nguyên nhân gốc", example: "We did RCA and improved monitoring." },
    ],
    sentencePatterns: [
      { pattern: "I’ve worked on [area] for [time].", example: "I’ve worked on performance optimization for two years." },
      { pattern: "We improved [metric] by [value].", example: "We improved latency by 40%." },
      { pattern: "My responsibilities included [tasks].", example: "My responsibilities included planning and refactoring." },
      { pattern: "A major challenge was [challenge].", example: "A major challenge was avoiding outages during migration." },
      { pattern: "I contributed by [action].", example: "I contributed by leading the RCA and fixes." },
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