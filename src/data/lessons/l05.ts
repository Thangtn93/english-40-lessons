import type { Lesson } from "../lessonTypes";

export const lesson5: Lesson = {
  id: 5,
  title: "Introduce company's products",
  content: "Từ vựng và cấu trúc để giới thiệu sản phẩm, tính năng (feature) hoặc dịch vụ của công ty/dự án.",
  outcome: "Có khả năng demo hoặc trình bày tính năng cho khách hàng một cách rõ ràng.",
  extra: {
    vocabularyBasic: [
      { term: "feature", meaning: "tính năng", example: "This feature automates invoice reconciliation." },
      { term: "benefit", meaning: "lợi ích", example: "Key benefits include faster processing and fewer errors." },
      { term: "use case", meaning: "tình huống sử dụng", example: "A common use case is cross-border payments." },
      { term: "unique selling point (USP)", meaning: "điểm bán hàng độc đáo", example: "Our USP is real-time analytics." },
      { term: "roadmap", meaning: "lộ trình phát triển", example: "The Q3 roadmap includes mobile SDKs." },
      { term: "demo", meaning: "bản demo", example: "We’ll do a short demo of key flows." },
      { term: "release", meaning: "phát hành", example: "The next release improves performance." },
      { term: "pricing model", meaning: "mô hình giá", example: "The pricing model is subscription starting at $99/month." },
      { term: "value proposition", meaning: "giá trị cốt lõi", example: "Our value proposition is reducing reconciliation time by 60%." },
      { term: "customer segment", meaning: "phân khúc khách hàng", example: "Our main customer segment is SMEs in SEA." },
    ],
    vocabularyIT: [
      { term: "integration", meaning: "tích hợp", example: "We support integration with ERP systems." },
      { term: "API", meaning: "giao diện lập trình ứng dụng", example: "Our REST API is documented with OpenAPI." },
      { term: "SDK", meaning: "bộ công cụ phát triển", example: "We provide SDKs for JavaScript and Python." },
      { term: "webhook", meaning: "webhook", example: "Webhooks notify payment status changes." },
      { term: "analytics", meaning: "phân tích dữ liệu", example: "Real-time analytics show KPIs on the dashboard." },
      { term: "audit trail", meaning: "dấu vết kiểm toán", example: "The audit trail ensures full compliance and visibility." },
      { term: "role-based access", meaning: "phân quyền theo vai trò", example: "We enforce role-based access for security." },
      { term: "real-time", meaning: "thời gian thực", example: "Alerts are sent in real-time to reduce risk." },
      { term: "REST", meaning: "giao thức REST", example: "Integration uses REST APIs and webhooks." },
      { term: "OpenAPI", meaning: "chuẩn mô tả API", example: "Our API is documented with OpenAPI and examples." },
    ],
    sentencePatterns: [
      { pattern: "Key features include [feature1], [feature2], and [feature3].", example: "Key features include real-time analytics, alerts, and role-based access." },
      { pattern: "It integrates with [system] via [method].", example: "It integrates with SAP via REST APIs and webhooks." },
      { pattern: "Compared to [competitor], we offer [advantage].", example: "Compared to manual tools, we offer automation and audit trails." },
      { pattern: "The pricing model is [model] starting at [price].", example: "The pricing model is subscription starting at $99/month." },
      { pattern: "We provide [asset] to support your team.", example: "We provide SDKs, sample apps, and detailed documentation." },
    ],
    situations: [
      { title: "Giới thiệu sản phẩm cho khách mới", example: "Our solution reduces reconciliation time by 60%." },
      { title: "Demo nhanh tính năng chính", example: "Let me show how alerts notify failed transactions." },
      { title: "Q&A về tích hợp", example: "It integrates with your ERP via secure APIs and webhooks." },
      { title: "Xử lý phản đối (objection handling)", example: "We address security concerns with encryption and role-based access." },
      { title: "Trình bày lộ trình và hỗ trợ", example: "Our roadmap includes mobile SDKs and quarterly releases; support is 24/7 for enterprise." },
    ],
    practice: [
      { title: "Soạn elevator pitch", prompt: "Viết 4–5 câu giới thiệu sản phẩm cho khách hàng mới.", sample: "We help finance teams reconcile payments faster. Key features include real-time analytics and automated alerts. It integrates with SAP via REST APIs. Pricing starts at $99/month." },
      { title: "Kịch bản demo", prompt: "Viết kịch bản demo 1–2 phút cho ba tính năng chính.", sample: "First, the dashboard shows KPIs in real time. Second, alerts notify failed transactions instantly. Third, the audit trail provides full visibility and compliance." },
    ],
  },
};