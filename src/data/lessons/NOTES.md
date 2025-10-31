# Hướng dẫn biên soạn nội dung cho các bài l01–l40

Mục tiêu: mỗi bài học có phần `extra` được biên soạn thủ công, rõ ràng, đúng chủ đề; UI sẽ tự động hiển thị các mục Từ vựng, Mẫu câu, Tình huống và Bài tập nếu có dữ liệu.

## Cấu trúc dữ liệu cần tuân thủ

Các kiểu dữ liệu nằm ở `src/data/lessonTypes.ts`:

```ts
export type ExtraContent = {
  // Nhóm từ vựng: ưu tiên dùng 2 nhóm bên dưới
  vocabularyBasic?: { term: string; meaning: string; example?: string }[]; // từ vựng cơ bản
  vocabularyIT?: { term: string; meaning: string; example?: string }[];     // từ vựng chuyên ngành IT
  // Fallback: nếu chưa phân nhóm, có thể dùng trường vocabulary (cũ)
  vocabulary?: { term: string; meaning: string; example?: string }[];
  sentencePatterns?: { pattern: string; example?: string }[];
  situations?: { title: string; example?: string }[];
  practice?: { title: string; prompt: string; sample?: string }[];
};

export type Lesson = {
  id: number;
  title: string;
  content: string;
  outcome?: string;
  tasks?: string[];
  extra?: ExtraContent;
};
```

UI hiển thị tại `src/pages/Lesson.tsx` sẽ tự động render nếu các mảng tương ứng tồn tại và có phần tử.

## Nguyên tắc biên soạn

- Bám sát chủ đề bài (`title`, `content`) và ngữ cảnh IT/business.
- Diễn giải tiếng Việt rõ ràng, dễ hiểu; ví dụ tiếng Anh ngắn gọn, tự nhiên.
- Tránh trùng lặp giữa các bài; mỗi bài có bản sắc nội dung riêng.
- Ví dụ phải thực tế, ưu tiên tình huống nghề nghiệp (meeting, email, demo, design, ops...).
- Không nhồi nhét từ vựng hiếm khó dùng; ưu tiên “dùng được ngay” trong công việc.
- Kiểm tra chính tả/ngữ pháp và tính nhất quán thuật ngữ (API, SLA, KPI…).

## Định lượng đề xuất

- Mục tiêu dài hạn: ≥100 từ vựng, ≥20 mẫu câu, ≥10 tình huống, 1–2 bài mẫu (sample) cho phần bài tập.
- Khi mới biên soạn: ưu tiên chất lượng và tính liên quan; có thể bắt đầu với 30–60 từ vựng, 15–25 mẫu câu, 8–12 tình huống, 2–3 bài tập.

## Quy trình 6 bước

1) Đọc `title` và `content` của bài, xác định 3–5 chủ đề con.
2) Soạn danh sách từ vựng theo nhóm chủ đề, thêm ví dụ ngắn.
3) Viết các mẫu câu thường dùng theo bối cảnh của bài, có ví dụ.
4) Liệt kê tình huống thực tế, mỗi tình huống có 1 câu ví dụ.
5) Thiết kế bài tập: `title`, `prompt` rõ ràng; `sample` nếu cần.
6) Cập nhật vào file bài `src/data/lessons/lXX.ts` dưới trường `extra`, chạy dev server để kiểm tra UI.

## Mẫu chèn nội dung vào bài

```ts
import type { Lesson } from "../lessonTypes";

export const lessonX: Lesson = {
  id: X,
  title: "...",
  content: "...",
  outcome: "...",
  extra: {
    // Khuyến nghị: dùng 2 nhóm từ vựng thay vì một mảng chung
    vocabularyBasic: [
      { term: "...", meaning: "...", example: "..." },
    ],
    vocabularyIT: [
      { term: "...", meaning: "...", example: "..." },
    ],
    // Trường vocabulary (cũ) chỉ dùng khi thực sự cần fallback
    sentencePatterns: [
      { pattern: "...", example: "..." },
    ],
    situations: [
      { title: "...", example: "..." },
    ],
    practice: [
      { title: "...", prompt: "...", sample: "..." },
    ],
  },
};
```

## Checklist chất lượng trước khi hoàn tất

- Có đủ 4 mục `vocabulary`, `sentencePatterns`, `situations`, `practice` (tối thiểu mỗi mục có vài phần tử).
- Mỗi từ vựng có `meaning` tiếng Việt và ưu tiên có `example` tiếng Anh.
- Mẫu câu có ví dụ bối cảnh đúng chủ đề bài; ngắn, dễ áp dụng.
- Tình huống gắn với công việc IT (họp, email, demo, thiết kế, sự cố...).
- Bài tập có `prompt` rõ ràng; thêm `sample` nếu có.
- Không trùng lặp nội dung giữa các bài lân cận; từ vựng/mẫu câu không bị lặp lại quá mức.

## Bài 1 — Cấu trúc mẫu để tái sử dụng

Mục tiêu: chuẩn hóa cách biên soạn, tách từ vựng thành hai nhóm và thiết kế luyện tập sinh động, để áp dụng cho các bài sau.

```ts
import type { Lesson } from "../lessonTypes";

export const lesson1: Lesson = {
  id: 1,
  title: "Greeting Visitors",
  content: "Các mẫu câu chào đón khách hàng/đối tác/vendors khi đến thăm công ty.",
  outcome: "Tự tin đón tiếp, giao tiếp và hỏi thăm về chuyến thăm.",
  extra: {
    vocabularyBasic: [
      { term: "hello", meaning: "xin chào", example: "Hello, welcome to our office!" },
      { term: "reception", meaning: "lễ tân", example: "Please wait at the reception." },
      { term: "restroom", meaning: "nhà vệ sinh", example: "The restroom is on the left." },
      { term: "wifi", meaning: "wifi", example: "The guest wifi is 'Company-Guest'." },
    ],
    vocabularyIT: [
      { term: "stakeholder", meaning: "bên liên quan", example: "Align stakeholders before kickoff." },
      { term: "requirement", meaning: "yêu cầu", example: "Gather requirements in discovery phase." },
      { term: "backlog", meaning: "danh sách việc tồn", example: "Refine backlog every sprint." },
      { term: "CI/CD", meaning: "tích hợp/triển khai liên tục", example: "Enable CI/CD pipelines." },
    ],
    sentencePatterns: [
      { pattern: "Welcome to [company]!", example: "Welcome to Trae AI!" },
      { pattern: "This way, please.", example: "This way, please." },
      { pattern: "Our guest wifi is [name].", example: "Our guest wifi is Company-Guest." },
    ],
    situations: [
      { title: "Đến quầy lễ tân", example: "Chào khách và hướng dẫn ký tên nhận badge." },
      { title: "Hướng dẫn wifi", example: "Cung cấp tên mạng và mật khẩu." },
      { title: "Vào phòng họp", example: "Sắp xếp chỗ ngồi và bật thiết bị trình chiếu." },
    ],
    practice: [
      {
        title: "Checklist tech-check trước demo",
        prompt: "Kiểm HDMI/Projector/Âm thanh/Internet và phương án dự phòng.",
        sample: "HDMI connected · Projector on · Audio working · Internet stable · Backup ready",
      },
      {
        title: "Brief IT security cho khách",
        prompt: "Nhắc wifi khách, hạn chế mạng nội bộ, NDA, chính sách chụp ảnh.",
        sample: "Please use our guest wifi. Internal network is restricted. NDA signing at front desk.",
      },
    ],
  },
};
```

Hướng dẫn áp dụng cho bài khác:
- Luôn tách từ vựng thành `vocabularyBasic` và `vocabularyIT` để học dễ và sát công việc.
- Mỗi mục có ví dụ ngắn gọn, tự nhiên; tình huống thực tế ngành IT; bài tập có `sample` để người học tham chiếu.

## Lưu ý về hiển thị

- `Lesson.tsx` sẽ hiển thị mục nào có dữ liệu (mảng > 0 phần tử); không có dữ liệu thì mục đó ẩn.
- Không phụ thuộc nội dung mẫu tự động; ưu tiên biên soạn thủ công trong từng file `l01`–`l40`.

## Gợi ý chủ đề con theo nhóm bài phổ biến

- Demo/giới thiệu sản phẩm: tính năng, lợi ích, tích hợp, giá/tiers, bảo mật/SLA.
- Career/experience: vai trò, kỹ năng, dự án, thành tựu, phản hồi/mentorship.
- Email/business: mở đầu/lời cảm ơn, yêu cầu, xin phép, theo dõi/cặp trạng thái.
- Planning/meeting: timeline, deliverables, agenda, follow-up, hành động/owners.
- Compare/decision: tiêu chí, ưu/nhược, đề xuất, rủi ro, plan B.

---

Thực hiện theo tài liệu này sẽ giúp các bài sau nhất quán, hiển thị đúng trên UI, và tập trung vào nội dung “dùng được ngay” cho môi trường làm việc IT.