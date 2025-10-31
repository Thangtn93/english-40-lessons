import type { ExtraContent } from "./lessonTypes";

// Số lượng tối thiểu cho từng phần
const MIN_VOCAB = 100;
const MIN_PATTERNS = 20;
const MIN_SITUATIONS = 10;

// Từ khóa theo từng bài (tham chiếu từ tiêu đề các bài)
const keywordMap: Record<number, string[]> = {
  1: ["greeting", "visitors", "reception", "office tour", "badge"],
  2: ["company", "team", "stack", "domain", "mission"],
  3: ["career", "promotion", "skills", "mentorship", "goals"],
  4: ["experience", "portfolio", "case study", "projects"],
  5: ["product", "feature", "benefit", "demo", "roadmap"],
  6: ["compare", "performance", "trade-off", "benchmark"],
  7: ["services", "vendor", "SLA", "pricing"],
  8: ["advice", "best practice", "suggestion", "review"],
  9: ["permission", "request", "access", "policy"],
 10: ["email", "subject", "report", "attachment"],
 11: ["schedule", "timeline", "dependency", "milestone"],
 12: ["interview", "strengths", "weaknesses", "portfolio"],
 13: ["negotiation", "budget", "contract", "terms"],
 14: ["culture", "global", "etiquette", "communication"],
 15: ["networking", "work-life", "balance", "relationship"],
 16: ["presentation", "slides", "story", "audience"],
 17: ["strategy", "planning", "initiative", "OKR"],
 18: ["opinion", "analysis", "debate", "evidence"],
 19: ["meeting", "kick-off", "agenda", "invite"],
 20: ["report", "metrics", "KPI", "summary"],
 21: ["entertainment", "invite", "team building", "social"],
 22: ["feedback", "review", "improvement", "retro"],
 23: ["complaint", "apology", "service", "quality"],
 24: ["risk", "issue", "mitigation", "impact"],
 25: ["budget", "finance", "cost", "forecast"],
 26: ["roadmap", "release", "version", "feature"],
 27: ["security", "authentication", "authorization", "encryption"],
 28: ["documentation", "guideline", "process", "policy"],
 29: ["customer", "expectation", "support", "service"],
 30: ["guests", "visit", "on-site", "hospitality"],
 31: ["online", "remote", "permission", "teleconference"],
 32: ["finance", "investment", "budget", "proposal"],
 33: ["questions", "Q&A", "clarify", "follow-up"],
 34: ["decision", "option", "pros", "cons"],
 35: ["innovation", "idea", "thanks", "recognition"],
 36: ["breakdown", "incident", "fault", "resolve"],
 37: ["process", "deployment", "workflow", "automation"],
 38: ["performance", "appraisal", "goal", "objective"],
 39: ["capstone", "strategy", "pitch", "negotiation"],
 40: ["review", "wrap-up", "summary", "next steps"],
};

const vocabRoots = [
  "policy",
  "guideline",
  "workflow",
  "meeting",
  "plan",
  "report",
  "tool",
  "feature",
  "module",
  "service",
  "platform",
  "integration",
  "deployment",
  "release",
  "version",
  "backup",
  "security",
  "performance",
  "scalability",
  "latency",
  "availability",
  "contract",
  "proposal",
  "invoice",
  "budget",
  "forecast",
  "timeline",
  "milestone",
  "review",
  "feedback",
  "training",
  "onboarding",
  "documentation",
  "support",
  "issue",
  "bug",
  "ticket",
  "alert",
  "monitor",
  "dashboard",
  "role",
  "permission",
  "access",
  "authentication",
  "authorization",
  "encryption",
];

function generateVocabulary(keywords: string[], count: number): { term: string; meaning: string; example: string }[] {
  const items: { term: string; meaning: string; example: string }[] = [];
  for (let i = 0; i < count; i++) {
    const kw = keywords[i % keywords.length];
    const root = vocabRoots[i % vocabRoots.length];
    const term = `${kw}-${root}`;
    const meaning = `khái niệm về ${root} liên quan đến ${kw}`;
    const example = `We discuss ${term} in the ${kw} context.`;
    items.push({ term, meaning, example });
  }
  return items;
}

const patternTemplates = [
  "We plan to improve ${kw} with better ${root}.",
  "Our team adopts ${kw} ${root} to streamline work.",
  "You should align ${kw} before the ${root}.",
  "Let’s review ${kw} and finalize the ${root}.",
  "Have you tried enhancing ${kw} via ${root}?",
  "We recommend updating ${kw} and documenting the ${root}.",
  "Please clarify ${kw} to avoid ${root} delays.",
];

function generatePatterns(keywords: string[], count: number): { pattern: string; example: string }[] {
  const items: { pattern: string; example: string }[] = [];
  for (let i = 0; i < count; i++) {
    const kw = keywords[i % keywords.length];
    const root = vocabRoots[i % vocabRoots.length];
    const tpl = patternTemplates[i % patternTemplates.length];
    const pattern = tpl.replace("${kw}", kw).replace("${root}", root);
    const example = `Example: ${kw} requires ${root} before approval.`;
    items.push({ pattern, example });
  }
  return items;
}

const situationTemplates = [
  (kw: string) => ({ title: `Discussing ${kw} with client`, example: `We walk through ${kw} and answer questions.` }),
  (kw: string) => ({ title: `Planning ${kw} timeline`, example: `Set milestones and align stakeholders for ${kw}.` }),
  (kw: string) => ({ title: `Handling ${kw} incident`, example: `Document and mitigate ${kw} issues promptly.` }),
  (kw: string) => ({ title: `Debating ${kw} options`, example: `Compare trade-offs and choose the best ${kw}.` }),
  (kw: string) => ({ title: `Presenting ${kw} update`, example: `Share status and next steps for ${kw}.` }),
];

function generateSituations(keywords: string[], count: number): { title: string; example: string }[] {
  const items: { title: string; example: string }[] = [];
  for (let i = 0; i < count; i++) {
    const kw = keywords[i % keywords.length];
    const maker = situationTemplates[i % situationTemplates.length];
    items.push(maker(kw));
  }
  return items;
}

function practiceSamples(themeTitle: string): { title: string; prompt: string; sample: string }[] {
  return [
    {
      title: `Mini presentation: ${themeTitle}`,
      prompt: `Chuẩn bị 1–2 phút nói về chủ đề “${themeTitle}”.`,
      sample: `Today I’ll talk about ${themeTitle}. First, I’ll outline the context, then key points, and finally next steps.`,
    },
    {
      title: `Email draft: ${themeTitle}`,
      prompt: `Viết email ngắn báo cáo/cập nhật liên quan “${themeTitle}”.`,
      sample: `Subject: Update – ${themeTitle}\n\nHi team, here’s a quick update on ${themeTitle}. We achieved the goals and will proceed with the next milestone.`,
    },
  ];
}

export function ensureMinimumContent(id: number, themeTitle: string, existing?: ExtraContent): ExtraContent {
  const kw = keywordMap[id] || [themeTitle];
  const vocab = generateVocabulary(kw, MIN_VOCAB);
  const patterns = generatePatterns(kw, MIN_PATTERNS);
  const situations = generateSituations(kw, MIN_SITUATIONS);
  const practices = practiceSamples(themeTitle);

  const mergedVocab = [ ...(existing?.vocabulary || []), ...vocab ].slice(0, Math.max(MIN_VOCAB, existing?.vocabulary?.length || 0));
  const mergedPatterns = [ ...(existing?.sentencePatterns || []), ...patterns ].slice(0, Math.max(MIN_PATTERNS, existing?.sentencePatterns?.length || 0));
  const mergedSituations = [ ...(existing?.situations || []), ...situations ].slice(0, Math.max(MIN_SITUATIONS, existing?.situations?.length || 0));
  const mergedPractice = [ ...(existing?.practice || []), ...practices ];

  return {
    vocabulary: mergedVocab,
    sentencePatterns: mergedPatterns,
    situations: mergedSituations,
    practice: mergedPractice,
  };
}

// Nội dung biên soạn thủ công theo bài (khởi đầu với Bài 2). Các bài khác sẽ được bổ sung dần.
export const extraByLesson: Record<number, ExtraContent> = {
  2: {
    vocabulary: [
      { term: "mission", meaning: "sứ mệnh", example: "Our mission is to simplify payments for SMEs." },
      { term: "vision", meaning: "tầm nhìn", example: "Our vision is to enable borderless commerce." },
      { term: "technology stack", meaning: "bộ công nghệ", example: "Our stack includes React, NestJS, and Kafka." },
      { term: "domain", meaning: "lĩnh vực", example: "We focus on the fintech domain." },
      { term: "org chart", meaning: "sơ đồ tổ chức", example: "Let me explain our org chart and team structure." },
      { term: "product line", meaning: "dòng sản phẩm", example: "We have two product lines for invoicing and analytics." },
      { term: "roadmap", meaning: "lộ trình", example: "Our 2025 roadmap focuses on scalability." },
      { term: "value proposition", meaning: "giá trị cốt lõi", example: "Our value proposition is faster reconciliation." },
      { term: "customer segment", meaning: "phân khúc khách hàng", example: "Our main customer segment is SMEs in SEA." },
      { term: "competitive advantage", meaning: "lợi thế cạnh tranh", example: "Real-time dashboard is our advantage." },
      { term: "SaaS", meaning: "dịch vụ phần mềm", example: "We run a multi-tenant SaaS." },
      { term: "uptime", meaning: "thời gian hoạt động", example: "We guarantee 99.9% uptime." },
    ],
    sentencePatterns: [
      { pattern: "We are a [size]-person company based in [city].", example: "We are a 60-person company based in Ho Chi Minh City." },
      { pattern: "Our product helps [customer] to [benefit].", example: "Our product helps SMEs to automate invoicing." },
      { pattern: "Our stack includes [tech], [tech], and [tech].", example: "Our stack includes React, NestJS, and Kafka." },
      { pattern: "We plan to expand to [market] by [time].", example: "We plan to expand to Singapore by Q3." },
      { pattern: "Let me walk you through our [module].", example: "Let me walk you through our analytics module." },
    ],
    situations: [
      { title: "Giới thiệu nhanh về công ty", example: "We started in 2019 and now serve 500+ clients." },
      { title: "Trình bày giá trị cốt lõi", example: "We focus on reliability and real-time insights." },
      { title: "Giải thích technology stack", example: "We use NestJS and Kafka for event-driven services." },
      { title: "Phân khúc khách hàng", example: "Our customers are SMEs in retail and services." },
      { title: "Kế hoạch mở rộng", example: "We plan regional expansion with local partnerships." },
    ],
    practice: [
      { title: "Elevator Pitch 60s", prompt: "Viết và nói 60s giới thiệu công ty và sản phẩm.", sample: "We are a fintech SaaS helping SMEs automate invoicing and analytics with a reliable stack based on React and NestJS." },
      { title: "Email giới thiệu công ty", prompt: "Soạn email gửi đối tác: mô tả ngắn, điểm khác biệt, website.", sample: "Subject: Introduction – Our Fintech Platform\n\nDear Partner, we provide an SME-focused platform with real-time dashboards and 99.9% uptime. Let’s discuss collaboration opportunities." },
    ],
  },
};