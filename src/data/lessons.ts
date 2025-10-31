export type Lesson = {
  id: number;
  title: string;
  content: string;
  outcome?: string;
  tasks?: string[];
  vocabulary?: { term: string; meaning: string; example?: string }[];
  sentencePatterns?: { pattern: string; example?: string }[];
  situations?: { title: string; example?: string }[];
  practice?: { title: string; prompt: string }[];
};

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Greeting Visitors",
    content:
      "Các mẫu câu chào đón khách hàng/đối tác/vendors khi đến thăm công ty.",
    outcome:
      "Tự tin đón tiếp, giao tiếp và hỏi thăm về chuyến thăm.",
    vocabulary: [
      {
        term: "visitor/guest",
        meaning: "khách/khách mời",
        example: "We’re expecting two visitors from our partner.",
      },
      { term: "reception", meaning: "quầy lễ tân", example: "Please wait at the reception." },
      {
        term: "appointment",
        meaning: "cuộc hẹn",
        example: "Do you have an appointment with Ms. Linh?",
      },
      { term: "schedule", meaning: "lịch trình", example: "Let me check today’s schedule." },
      { term: "welcome", meaning: "chào mừng", example: "Welcome to ABC Company!" },
      {
        term: "host",
        meaning: "người tiếp đón/chủ trì",
        example: "Your host will be here in five minutes.",
      },
      {
        term: "arrive/on time/delay",
        meaning: "đến/đúng giờ/trì hoãn",
        example: "Sorry, I’m delayed by 10 minutes.",
      },
      { term: "badge/pass", meaning: "thẻ khách/thẻ ra vào", example: "You’ll need a visitor badge." },
      { term: "meeting room", meaning: "phòng họp", example: "I’ll take you to the meeting room." },
      { term: "refreshments", meaning: "đồ uống/đồ nhẹ", example: "Would you like some coffee or tea?" },
      { term: "escort/show around", meaning: "đưa đi/giới thiệu xung quanh", example: "Let me escort you to the lobby." },
      { term: "lobby", meaning: "sảnh", example: "Please wait in the lobby." },
    ],
    sentencePatterns: [
      { pattern: "Welcome to [Company], I’m [Name].", example: "Welcome to ABC Tech, I’m Minh." },
      { pattern: "My name is [Name]. I’m a [role].", example: "My name is Linh. I’m a project manager." },
      { pattern: "Can I get you some [coffee/tea/water]?", example: "Can I get you some water?" },
      { pattern: "Do you have an appointment with [Name]?", example: "Do you have an appointment with Mr. Nam?" },
      { pattern: "How was your trip? / Did you find us okay?", example: "How was your trip?" },
      { pattern: "Let me show you to the meeting room.", example: "Let me show you to the meeting room." },
      { pattern: "I’m afraid [Name] is running [X] minutes late.", example: "I’m afraid Ms. Hoa is running five minutes late." },
      { pattern: "Would you like me to [action]?", example: "Would you like me to call a taxi after the meeting?" },
      { pattern: "It was a pleasure meeting you. Thanks for visiting.", example: "It was a pleasure meeting you. Thanks for visiting." },
    ],
    situations: [
      { title: "Khách đến quầy lễ tân", example: "Welcome to ABC Tech. Do you have an appointment with Ms. Linh?" },
      { title: "Khách đến sớm/muộn", example: "You’re a bit early—please have a seat. Ms. Linh will be with you shortly." },
      { title: "Chủ trì đến trễ", example: "I’m afraid Mr. Nam is running ten minutes late. Would you like some coffee while you wait?" },
      { title: "Phát thẻ khách/đăng ký bảo vệ", example: "Please sign in and take a visitor badge. I’ll escort you upstairs." },
      { title: "Giới thiệu thành viên", example: "This is Quang, our tech lead. He’ll join the meeting." },
      { title: "Dẫn khách vào phòng họp, mời nước", example: "Let me show you to the meeting room. Would you like some water?" },
    ],
    practice: [
      {
        title: "Role-play: Đón khách tại lễ tân",
        prompt:
          "Người A là lễ tân/host. Người B là khách đến. Thực hành chào hỏi, kiểm tra appointment, mời nước, xử lý host đến trễ 5 phút.",
      },
      {
        title: "Điền mẫu câu",
        prompt:
          "Hoàn thành: “Welcome to ____, I’m ____. Can I get you some ____?”; “I’m afraid ____ is running ____ minutes late.”",
      },
      {
        title: "Viết email ngắn xác nhận lịch",
        prompt:
          "Viết email xác nhận lịch thăm công ty vào 10:00, hướng dẫn nơi đậu xe, và số liên hệ khi đến.",
      },
      {
        title: "Chuyển câu thân mật → chuyên nghiệp",
        prompt:
          "Chuyển: “Wait here. Boss is late.” → “Please have a seat. I’m afraid our manager is running a few minutes late.”",
      },
    ],
  },
  { id: 2, title: "About the company", content: "Giới thiệu công ty/dự án: cơ cấu team, công nghệ (technology stack), domain.", outcome: "Giới thiệu rõ ràng về công ty/dự án cho đối tác (chạy dâu)." },
  { id: 3, title: "Career", content: "Thảo luận về lộ trình sự nghiệp (career path) trong ngành IT: Developer, Senior, Lead, Manager.", outcome: "Nói về các vị trí làm việc, mục tiêu thăng tiến." },
  { id: 4, title: "Experience", content: "Sử dụng Present Perfect để nói về kinh nghiệm (ví dụ: 'I have used React for 3 years'). Trao đổi với đồng nghiệp/khách về kinh nghiệm dự án.", outcome: "Trình bày các kinh nghiệm, kỹ năng cốt lõi, lưu ý cách dẫn chứng." },
  { id: 5, title: "Introduce company's products", content: "Từ vựng và cấu trúc để giới thiệu sản phẩm, tính năng (feature) hoặc dịch vụ của công ty/dự án.", outcome: "Có khả năng demo hoặc trình bày tính năng cho khách hàng một cách rõ ràng." },
  { id: 6, title: "Compare products", content: "Ngữ pháp so sánh hơn (comparative). Thực hành trình bày ưu/nhược giữa các sản phẩm (ví dụ: React vs Vue).", outcome: "Đưa ra so sánh, phân tích có lý và dẫn chứng kỹ thuật." },
  { id: 7, title: "Compare services", content: "Ngữ pháp so sánh nhất (superlative). Thực hành debate về các dịch vụ, nhà cung cấp khác nhau (ví dụ: AWS vs Azure).", outcome: "Đưa ra ý kiến và bảo vệ quan điểm khi so sánh dịch vụ." },
  { id: 8, title: "Giving advice", content: "Các mẫu câu đưa ra lời khuyên trong công việc (You should..., Have you tried...?).", outcome: "Áp dụng để review code, gợi ý giải pháp kỹ thuật." },
  { id: 9, title: "Asking for permission & making requests", content: "Cấu trúc lịch sự để xin phép (xin nghỉ, xin access hệ thống) hoặc đưa ra yêu cầu (thêm resource).", outcome: "Viết email/chat xin phép và yêu cầu hỗ trợ chuyên nghiệp." },
  { id: 10, title: "How to write business emails", content: "Cấu trúc chuẩn email trong ngành IT (báo cáo, cập nhật status, hỏi thông tin, yêu cầu hỗ trợ).", outcome: "Viết email công việc rõ ràng, chuyên nghiệp." },
  { id: 11, title: "Planning a schedule", content: "Đọc email/tài liệu và lập kế hoạch/lịch trình (Sprint, timeline dự án).", outcome: "Lập và trình bày kế hoạch/lịch trình một giai đoạn dự án." },
  { id: 12, title: "Job interview", content: "Chuẩn bị phỏng vấn vị trí IT (2 vai: phỏng vấn và ứng viên).", outcome: "Tự tin tham gia vòng phỏng vấn kỹ thuật hoặc phòng vấn điểm mạnh." },
  { id: 13, title: "Final test", content: "Bài kiểm tra giữa chặng.", outcome: "Đánh giá năng lực phần 1." },
  { id: 14, title: "A global citizen", content: "Thảo luận về khác biệt văn hóa, working culture; đặc biệt khi làm việc đa quốc gia (Ấn Độ, US, Châu Âu).", outcome: "Hiểu văn hóa giao tiếp của các nhóm đa quốc gia." },
  { id: 15, title: "Working life", content: "Thảo luận về networking (xây dựng quan hệ), work-life balance trong ngành IT.", outcome: "Giao tiếp, đặt câu hỏi trong các cuộc hội thoại chuyên nghiệp." },
  { id: 16, title: "Making an appointment", content: "Thực hành hành động đặt lịch (make an appointment), book a call với khách hàng/đồng nghiệp.", outcome: "Viết email/chat đặt lịch cuộc hẹn/meeting." },
  { id: 17, title: "Changing an appointment", content: "Thực hành thay đổi/cancel/delay một cuộc hẹn.", outcome: "Viết email/chat thay đổi lịch hẹn một cách lịch sự." },
  { id: 18, title: "Giving opinions", content: "Đưa ra ý kiến, phân tích một chủ đề chuyên nghiệp. Thực hành debate về một vấn đề kỹ thuật.", outcome: "Tự tin đưa ra ý kiến trong technical discussion hoặc planning meeting." },
  { id: 19, title: "Organizing a meeting", content: "Lên kế hoạch một cuộc họp: kick-off dự án, chuẩn bị agenda, gửi invitation.", outcome: "Có khả năng tổ chức một cuộc họp từ A-Z." },
  { id: 20, title: "Attending a meeting", content: "Kỹ năng trong họp: clarify, confirm, tóm tắt ý.", outcome: "Chủ động tham gia, đóng góp ý kiến và hiểu rõ nội dung cuộc họp." },
  { id: 21, title: "Entertainment", content: "Mẫu câu mời đồng nghiệp/khách hàng đi ăn/trà, team building.", outcome: "Tự tin trong các tình huống xã giao, tiếp đãi khách/đồng nghiệp." },
  { id: 22, title: "Negotiating in English", content: "Đàm phán trong dự án IT: scope, timeline, cost.", outcome: "Có khả năng đàm phán các vấn đề liên quan công việc." },
  { id: 23, title: "Making & dealing with complaints", content: "Xử lý phàn nàn của khách về bug/chất lượng; viết email phản hồi.", outcome: "Xử lý phàn nàn chuyên nghiệp và mang tính xây dựng." },
  { id: 24, title: "Progress report", content: "Kỹ năng báo cáo tiến độ (status/sprint) cho PM hoặc khách.", outcome: "Báo cáo tiến độ rõ ràng, súc tích." },
  { id: 25, title: "How to give a presentation", content: "Các bước thuyết trình một solution/giải pháp kỹ thuật, trình bày demo.", outcome: "Tự tin thuyết trình các chủ đề kỹ thuật/nghiệp vụ." },
  { id: 26, title: "Final test", content: "Bài kiểm tra phần 2.", outcome: "Đánh giá năng lực phần 2." },
  { id: 27, title: "Work-Life Balance", content: "Trao đổi chính sách remote work, flexible time, work-life balance.", outcome: "Đưa ra quan điểm và thảo luận về chính sách nhân sự." },
  { id: 28, title: "Projects", content: "Ngữ pháp (Present Perfect) & delegate tasks cho thành viên trong team.", outcome: "Quản lý và giao việc hiệu quả trong dự án." },
  { id: 29, title: "Customers service", content: "Quản lý kỳ vọng khách hàng (managing expectations), nói 'sorry' khi có sự cố.", outcome: "Giao tiếp với khách hàng ở cấp độ quản lý." },
  { id: 30, title: "Guests & visitors", content: "Lên lịch và đón tiếp khách ghé thăm văn phòng/đi on-site; văn hóa tiếp đón.", outcome: "Tổ chức và tiếp đón khách/đối tác chuyên nghiệp." },
  { id: 31, title: "Working online", content: "Thảo luận về online security, rules, permission cho team remote; teleconference.", outcome: "Quản lý và hợp tác hiệu quả với team làm việc từ xa." },
  { id: 32, title: "Finance", content: "Thảo luận budget, team size, investment; đưa ra đề xuất liên quan tài chính dự án.", outcome: "Trình bày các vấn đề tài chính/ngân sách dự án rõ ràng." },
  { id: 33, title: "Facilities", content: "Cơ sở vật chất và môi trường làm việc; đề xuất cải thiện.", outcome: "Đề xuất nâng cấp môi trường làm việc chuyên nghiệp." },
  { id: 34, title: "Decisions", content: "Quy trình ra quyết định; luyện điều kiện If (conditionals) để nói về lựa chọn.", outcome: "Dẫn dắt thảo luận để đưa ra quyết định hợp lý." },
  { id: 35, title: "Innovation", content: "Thảo luận về đổi mới trong quy trình/sản phẩm; cách khen và cảm ơn team.", outcome: "Khuyến khích và trình bày ý tưởng đổi mới một cách tích cực." },
  { id: 36, title: "Breakdowns", content: "Từ vựng về sự cố/hỏng (faults), thảo luận và giải quyết sự cố hệ thống.", outcome: "Dẫn dắt team xử lý khủng hoảng kỹ thuật." },
  { id: 37, title: "Processes", content: "Giải thích quy trình (deployment, Agile/Scrum), sử dụng câu bị động (passive forms).", outcome: "Xây dựng và giải thích rõ ràng quy trình làm việc." },
  { id: 38, title: "Performance", content: "Nói về phẩm chất cá nhân, đánh giá hiệu suất (appraise) và đặt mục tiêu.", outcome: "Thực hiện performance review cho team một cách tự tin." },
  { id: 39, title: "Capstone: Leading a Strategy Meeting", content: "Mô phỏng dẫn dắt buổi họp chiến lược để pitch một dự án/ý tưởng.", outcome: "Thể hiện tư duy chiến lược và khả năng ra quyết định tự tin bằng Tiếng Anh.", tasks: [
    "Present the pitch: trình bày ý tưởng/giải pháp/kế hoạch (Processes, Projects)",
    "Justify the budget: trình bày visuals và bảo vệ ngân sách (Finance)",
    "Negotiate & Decide: dẫn dắt thảo luận/đàm phán nguồn lực/thời gian/đưa ra quyết định (Decisions)",
    "Handle Q&A: xử lý câu hỏi khó và sự cố (Breakdowns, Dealing with Questions)",
    "Set Objectives: đặt mục tiêu cho team sau khi kết thúc (Performance)"
  ] },
  { id: 40, title: "Final test", content: "Bài kiểm tra tổng kết.", outcome: "Kiểm tra cuối khóa." },
];