import type { Lesson } from "../lessonTypes";

export const lesson6: Lesson = {
  id: 6,
  title: "Compare products",
  content:
    "Ngữ pháp so sánh hơn (comparative). Thực hành trình bày ưu/nhược giữa các sản phẩm (ví dụ: React vs Vue).",
  outcome: "Đưa ra so sánh, phân tích có lý và dẫn chứng kỹ thuật.",
  extra: {
    vocabularyBasic: [
      { term: "advantage", meaning: "ưu điểm", example: "React’s advantage is a large ecosystem." },
      { term: "disadvantage", meaning: "nhược điểm", example: "A disadvantage is the learning curve." },
      { term: "pros and cons", meaning: "ưu và nhược điểm", example: "Let’s list the pros and cons of each option." },
      { term: "trade-off", meaning: "đánh đổi", example: "The trade-off is performance vs flexibility." },
      { term: "criteria", meaning: "tiêu chí", example: "Our criteria include cost and maintainability." },
      { term: "fit", meaning: "phù hợp", example: "This product fits our requirements better." },
      { term: "ease of use", meaning: "dễ sử dụng", example: "Vue is easier to learn for newcomers." },
      { term: "cost", meaning: "chi phí", example: "This solution is more cost-effective." },
      { term: "license", meaning: "giấy phép", example: "Check the license compatibility for enterprise." },
      { term: "community", meaning: "cộng đồng", example: "A strong community provides better support." },
    ],
    vocabularyIT: [
      { term: "performance", meaning: "hiệu năng", example: "Product A performs better under high load." },
      { term: "scalability", meaning: "khả năng mở rộng", example: "Service B scales more efficiently." },
      { term: "maintainability", meaning: "dễ bảo trì", example: "This codebase is more maintainable." },
      { term: "test coverage", meaning: "độ bao phủ kiểm thử", example: "Library A has higher test coverage." },
      { term: "ecosystem", meaning: "hệ sinh thái", example: "React has a richer ecosystem." },
      { term: "framework", meaning: "framework", example: "We compare the framework features in detail." },
      { term: "library", meaning: "thư viện", example: "This library is more lightweight." },
      { term: "benchmark", meaning: "đo hiệu năng", example: "We ran benchmarks to compare throughput." },
      { term: "throughput", meaning: "lưu lượng xử lý", example: "System A has higher throughput." },
      { term: "latency", meaning: "độ trễ", example: "System B has lower latency." },
    ],
    sentencePatterns: [
      { pattern: "X is more [adj] than Y.", example: "React is more flexible than Angular." },
      { pattern: "X is easier to [verb] than Y.", example: "Vue is easier to learn than React." },
      { pattern: "Compared to Y, X offers [benefit].", example: "Compared to manual tools, this product offers automation." },
      { pattern: "X suits [use case] better because [reason].", example: "This library suits data visualization better because of its APIs." },
      { pattern: "We should choose X if [condition].", example: "We should choose React if we need a larger ecosystem." },
      { pattern: "The trade-off is [A] vs [B].", example: "The trade-off is performance vs developer experience." },
    ],
    situations: [
      { title: "So sánh hai sản phẩm trong cuộc họp", example: "Product A is more scalable, but Product B is cheaper." },
      { title: "Pre-sales: giới thiệu ưu/nhược", example: "Compared to X, our solution offers better performance." },
      { title: "Viết tài liệu so sánh", example: "We summarized pros and cons with clear criteria." },
      { title: "Demo ngắn để minh họa", example: "Let me show a quick benchmark comparison." },
      { title: "Thảo luận lựa chọn công cụ", example: "This framework is easier to maintain long-term." },
    ],
    practice: [
      {
        title: "Bảng so sánh 5 tiêu chí",
        prompt:
          "Tạo bảng so sánh hai sản phẩm theo 5 tiêu chí (cost, performance, scalability, maintainability, ecosystem).",
        sample:
          "Product A: higher performance, better scalability; Product B: lower cost, easier onboarding.",
      },
      {
        title: "Đề xuất lựa chọn",
        prompt: "Trình bày 1–2 phút đề xuất chọn sản phẩm phù hợp.",
        sample:
          "We recommend Product A for high throughput workloads due to its performance and scalability, despite the higher cost.",
      },
    ],
  },
};