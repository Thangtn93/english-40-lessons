export type ExtraContent = {
  vocabulary?: { term: string; meaning: string; example?: string }[];
  sentencePatterns?: { pattern: string; example?: string }[];
  situations?: { title: string; example?: string }[];
  practice?: { title: string; prompt: string; sample?: string }[];
};

export const extraByLesson: Record<number, ExtraContent> = {
  1: {
    vocabulary: [
      { term: "greet", meaning: "chào hỏi", example: "We greet visitors at the lobby." },
      { term: "reception", meaning: "lễ tân", example: "Please wait at the reception." },
      { term: "badge", meaning: "thẻ đeo", example: "Collect your visitor badge here." },
      { term: "visitor", meaning: "khách thăm", example: "The visitor arrived at 9 AM." },
      { term: "host", meaning: "người tiếp đón", example: "I’ll be your host today." },
      { term: "escort", meaning: "đưa đi", example: "I’ll escort you to the meeting room." },
      { term: "tour", meaning: "tham quan", example: "Let’s take a quick office tour." },
      { term: "lobby", meaning: "sảnh chờ", example: "Meet me at the lobby." },
      { term: "sign-in", meaning: "đăng ký vào", example: "Please sign in at the front desk." },
      { term: "welcome pack", meaning: "gói chào mừng", example: "Here’s your welcome pack." },
      { term: "refreshments", meaning: "đồ uống/đồ ăn nhẹ", example: "Help yourself to refreshments." },
      { term: "appointment", meaning: "cuộc hẹn", example: "We have an appointment at 10 AM." },
      { term: "punctual", meaning: "đúng giờ", example: "Thank you for being punctual." },
      { term: "hospitality", meaning: "sự hiếu khách", example: "We value professional hospitality." },
      { term: "introduce", meaning: "giới thiệu", example: "Let me introduce our team." },
      { term: "handshake", meaning: "bắt tay", example: "We greet with a handshake." },
      { term: "courtesy", meaning: "lịch sự", example: "Show courtesy to visitors." },
      { term: "itinerary", meaning: "lịch trình", example: "Here’s today’s itinerary." },
      { term: "agenda", meaning: "chương trình", example: "First item on the agenda is a tour." },
      { term: "meeting room", meaning: "phòng họp", example: "The meeting room is on the 3rd floor." },
    ],
    sentencePatterns: [
      { pattern: "Welcome to [company]!", example: "Welcome to Trae AI!" },
      { pattern: "Thanks for visiting us today.", example: "Thanks for visiting us today." },
      { pattern: "May I offer you coffee or water?", example: "May I offer you coffee or water?" },
      { pattern: "Let me introduce you to [name].", example: "Let me introduce you to our PM, Linh." },
      { pattern: "This is our [department].", example: "This is our engineering department." },
      { pattern: "Please follow me to [place].", example: "Please follow me to the conference room." },
      { pattern: "Would you like a quick tour?", example: "Would you like a quick tour of the office?" },
      { pattern: "We’ll start with a brief overview.", example: "We’ll start with a brief overview of the project." },
      { pattern: "If you need anything, please let me know.", example: "If you need anything, please let me know." },
      { pattern: "Hope you had a pleasant journey.", example: "Hope you had a pleasant journey from Hanoi." },
      { pattern: "Our agenda today includes [items].", example: "Our agenda today includes a tour and demo." },
      { pattern: "We’re happy to host you.", example: "We’re happy to host you at our office." },
      { pattern: "Feel free to ask any questions.", example: "Feel free to ask any questions during the tour." },
      { pattern: "Let’s head to [place].", example: "Let’s head to the demo area." },
      { pattern: "We’ll wrap up by [time].", example: "We’ll wrap up by 11:30 AM." },
      { pattern: "I’ll be your host today.", example: "I’ll be your host today for the visit." },
      { pattern: "Here’s your visitor badge.", example: "Here’s your visitor badge for the day." },
      { pattern: "Please sign in at the front desk.", example: "Please sign in at the front desk before we begin." },
      { pattern: "We appreciate your time.", example: "We appreciate your time and interest." },
      { pattern: "Enjoy the tour!", example: "Enjoy the tour!" },
    ],
    situations: [
      { title: "Đến quầy lễ tân", example: "Chào khách và hướng dẫn ký tên nhận badge." },
      { title: "Giới thiệu đội ngũ", example: "Giới thiệu từng thành viên và vai trò." },
      { title: "Mời đồ uống", example: "Mời nước/cà phê lịch sự trước khi bắt đầu." },
      { title: "Dẫn đi tham quan", example: "Giới thiệu các khu vực chính trong văn phòng." },
      { title: "Vào phòng họp", example: "Sắp xếp chỗ ngồi và bật thiết bị trình chiếu." },
      { title: "Trình bày tổng quan", example: "Giới thiệu nhanh về công ty/dự án." },
      { title: "Chụp ảnh lưu niệm", example: "Mời khách chụp ảnh sau khi kết thúc tour." },
      { title: "Tiễn khách", example: "Cảm ơn và tiễn khách ra sảnh/lối ra." },
      { title: "Trao đổi lịch trình", example: "Xác nhận các mốc thời gian trong ngày." },
      { title: "Xử lý phát sinh", example: "Giải quyết thay đổi lịch đột xuất nếu có." },
    ],
    practice: [
      {
        title: "Email chào mừng khách",
        prompt: "Soạn email chào mừng và gửi lịch trình tham quan.",
        sample:
          "Subject: Welcome Visit – Lịch trình hôm nay\n\nDear Guests,\n\nChúng tôi rất hân hạnh được đón tiếp bạn tại văn phòng. Lịch trình: 09:00 greeting, 09:15 office tour, 10:00 demo, 11:00 Q&A. Nếu cần hỗ trợ, vui lòng phản hồi email này.\n\nBest regards,\nYour Name",
      },
      {
        title: "Lời mở đầu buổi tham quan",
        prompt: "Chuẩn bị bài nói 1–2 phút chào mừng và giới thiệu agenda.",
        sample:
          "Welcome to our office! Today’s agenda includes a quick tour, a product demo, and Q&A. We hope you enjoy the visit and feel free to ask any questions along the way.",
      },
    ],
  },
  2: {
    vocabulary: [
      { term: "mission/vision", meaning: "sứ mệnh/tầm nhìn", example: "Our mission is to simplify fintech." },
      { term: "technology stack", meaning: "bộ công nghệ", example: "Our stack includes React, NestJS, and Kafka." },
    ],
    sentencePatterns: [
      { pattern: "We are a [size]-person company based in [city].", example: "We are a 100-person company based in Ho Chi Minh City." },
      { pattern: "Our product helps [customer] to [benefit].", example: "Our product helps SMEs to automate invoicing." },
    ],
    situations: [
      { title: "Giới thiệu nhanh ở buổi gặp", example: "We started in 2018 and now serve 500+ clients." },
      { title: "Trả lời câu hỏi về stack", example: "We use NestJS for backend and TypeORM for data access." },
    ],
    practice: [
      { title: "Elevator Pitch 60s", prompt: "Viết và nói 60s giới thiệu công ty và sản phẩm." },
      { title: "Email giới thiệu công ty", prompt: "Soạn email gửi đối tác: mô tả ngắn, điểm khác biệt, website." },
    ],
  },
  3: {
    vocabulary: [
      { term: "promotion", meaning: "thăng chức", example: "She aims for promotion next year." },
      { term: "mentorship", meaning: "cố vấn", example: "We have a mentorship program for juniors." },
    ],
    sentencePatterns: [
      { pattern: "My short-term goal is [goal].", example: "My short-term goal is becoming a senior engineer." },
      { pattern: "I’m focusing on [skill] to advance.", example: "I’m focusing on system design to advance." },
    ],
    situations: [
      { title: "1:1 với quản lý", example: "I’d like feedback on my career path." },
      { title: "Phỏng vấn nội bộ", example: "What motivates you in your role?" },
    ],
    practice: [
      { title: "Career Plan", prompt: "Lập kế hoạch 6 tháng: kỹ năng, chứng chỉ, mục tiêu." },
      { title: "Role-play phản hồi", prompt: "Thực hành nhận feedback và đặt mục tiêu SMART." },
    ],
  },
  4: {
    vocabulary: [
      { term: "portfolio", meaning: "hồ sơ dự án", example: "I maintain a portfolio of my work." },
      { term: "case study", meaning: "nghiên cứu điển hình", example: "We published a case study on scaling APIs." },
    ],
    sentencePatterns: [
      { pattern: "I have worked with [tech] for [time].", example: "I have worked with React for 3 years." },
      { pattern: "I have led [type] projects.", example: "I have led migration projects." },
    ],
    situations: [
      { title: "Trao đổi kinh nghiệm", example: "I have handled high-traffic services." },
      { title: "Phỏng vấn kinh nghiệm", example: "Could you walk us through your last project?" },
    ],
    practice: [
      { title: "Viết tóm tắt kinh nghiệm", prompt: "Tóm tắt 3 kinh nghiệm nổi bật bằng Present Perfect." },
      { title: "Giới thiệu dự án", prompt: "Thực hành pitch một dự án bạn từng tham gia." },
    ],
  },
  5: {
    vocabulary: [
      { term: "feature/benefit", meaning: "tính năng/lợi ích", example: "This feature reduces processing time." },
      { term: "USP", meaning: "điểm khác biệt", example: "Our USP is real-time analytics." },
    ],
    sentencePatterns: [
      { pattern: "Our product offers [feature] that [benefit].", example: "Our product offers auto-scaling that cuts costs." },
      { pattern: "Let me walk you through [module].", example: "Let me walk you through the dashboard." },
    ],
    situations: [
      { title: "Demo nhanh", example: "Here’s a quick demo of the main flow." },
      { title: "Giải thích lợi ích", example: "This helps teams ship faster." },
    ],
    practice: [
      { title: "Chuẩn bị demo", prompt: "Soạn checklist demo: mục tiêu, kịch bản, câu hỏi thường gặp." },
      { title: "Pitch tính năng", prompt: "Nói 60s về một tính năng và lợi ích." },
    ],
  },
  6: {
    vocabulary: [
      { term: "benchmark", meaning: "chuẩn so sánh", example: "We benchmarked React vs Vue." },
      { term: "trade-off", meaning: "đánh đổi", example: "There’s a trade-off between performance and flexibility." },
    ],
    sentencePatterns: [
      { pattern: "[A] is more [adj] than [B].", example: "React is more popular than Vue." },
      { pattern: "[A] has better [aspect] compared to [B].", example: "React has better ecosystem compared to Vue." },
    ],
    situations: [
      { title: "So sánh kỹ thuật", example: "Vue’s simplicity vs React’s ecosystem." },
      { title: "Đưa khuyến nghị", example: "We recommend React for long-term scalability." },
    ],
    practice: [
      { title: "Viết bảng so sánh", prompt: "Lập bảng pros/cons giữa hai công nghệ bạn chọn." },
      { title: "Debate 5 phút", prompt: "Tranh luận chọn A hay B dựa trên requirement." },
    ],
  },
  7: {
    vocabulary: [
      { term: "vendor", meaning: "nhà cung cấp", example: "We’re evaluating cloud vendors." },
      { term: "SLA", meaning: "cam kết dịch vụ", example: "The SLA guarantees 99.9% uptime." },
    ],
    sentencePatterns: [
      { pattern: "[A] is the most [adj] option.", example: "AWS is the most mature option." },
      { pattern: "Among all, [A] offers the best [aspect].", example: "Among all, GCP offers the best AI services." },
    ],
    situations: [
      { title: "Chọn nhà cung cấp", example: "We compared pricing and SLA." },
      { title: "Bảo vệ quan điểm", example: "Azure fits our enterprise requirements." },
    ],
    practice: [
      { title: "So sánh 3 nhà cung cấp", prompt: "Chọn tiêu chí và xếp hạng AWS/Azure/GCP." },
      { title: "Viết đề xuất", prompt: "Soạn đề xuất vendor phù hợp với nhu cầu dự án." },
    ],
  },
  8: {
    vocabulary: [
      { term: "recommend/suggest", meaning: "khuyến nghị/đề xuất", example: "I suggest refactoring the module." },
      { term: "best practice", meaning: "thực hành tốt", example: "Follow security best practices." },
    ],
    sentencePatterns: [
      { pattern: "You should [action] to [benefit].", example: "You should add caching to improve performance." },
      { pattern: "Have you tried [option]?", example: "Have you tried memoizing the function?" },
    ],
    situations: [
      { title: "Code review", example: "You should split this into smaller functions." },
      { title: "Gợi ý kỹ thuật", example: "Have you tried using TypeORM transactions?" },
    ],
    practice: [
      { title: "Phản hồi code", prompt: "Viết nhận xét mang tính xây dựng cho PR giả định." },
      { title: "Đưa khuyến nghị", prompt: "Đề xuất 3 cải tiến cho module chậm." },
    ],
  },
  9: {
    vocabulary: [
      { term: "permission", meaning: "quyền truy cập", example: "Request permission to the repo." },
      { term: "request", meaning: "yêu cầu", example: "Submit a request for additional resources." },
    ],
    sentencePatterns: [
      { pattern: "May I [action]?", example: "May I take Friday off?" },
      { pattern: "Could you please [action]?", example: "Could you please grant me access?" },
    ],
    situations: [
      { title: "Xin nghỉ", example: "May I take a day off next Monday?" },
      { title: "Xin quyền hệ thống", example: "Could you grant access to the staging server?" },
    ],
    practice: [
      { title: "Email xin phép", prompt: "Soạn email xin nghỉ và bàn giao công việc." },
      { title: "Chat xin quyền", prompt: "Viết tin nhắn xin quyền truy cập một hệ thống." },
    ],
  },
  10: {
    vocabulary: [
      { term: "subject/cc/bcc", meaning: "tiêu đề/cc/bcc", example: "Keep subject clear and concise." },
      { term: "greeting/sign-off", meaning: "chào mở đầu/kết thư", example: "Best regards, …" },
    ],
    sentencePatterns: [
      { pattern: "I’m writing to [purpose].", example: "I’m writing to request the latest report." },
      { pattern: "Please find attached [document].", example: "Please find attached the sprint summary." },
    ],
    situations: [
      { title: "Email báo cáo", example: "Weekly status update for sprint 12." },
      { title: "Email hỏi thông tin", example: "Could you provide the testing plan?" },
    ],
    practice: [
      { title: "Soạn email chuẩn", prompt: "Viết email báo cáo theo cấu trúc: greeting, body, sign-off." },
      { title: "Chỉnh sửa email", prompt: "Biến email thiếu lịch sự thành email chuyên nghiệp." },
    ],
  },
  11: {
    vocabulary: [
      { term: "timeline", meaning: "dòng thời gian", example: "The timeline includes three phases." },
      { term: "dependency", meaning: "phụ thuộc", example: "Design depends on client approval." },
    ],
    sentencePatterns: [
      { pattern: "Let’s plan [phase] by [date].", example: "Let’s plan the beta by March 10." },
      { pattern: "We need to align on [milestone].", example: "We need to align on release milestones." },
    ],
    situations: [
      { title: "Lập lịch sprint", example: "Plan sprint 5 with backlog grooming." },
      { title: "Điều chỉnh kế hoạch", example: "Adjust due to resource constraints." },
    ],
    practice: [
      { title: "Tạo lịch Gantt", prompt: "Phác thảo mốc chính và phụ thuộc." },
      { title: "Họp lập kế hoạch", prompt: "Role-play thống nhất timeline và người phụ trách." },
    ],
  },
  12: {
    vocabulary: [
      { term: "strength/weakness", meaning: "điểm mạnh/yếu", example: "My strength is problem-solving." },
      { term: "behavioral question", meaning: "câu hỏi hành vi", example: "Tell me about a time you handled conflict." },
    ],
    sentencePatterns: [
      { pattern: "In my previous role, I [action].", example: "In my previous role, I led a migration." },
      { pattern: "I’m excited about [opportunity].", example: "I’m excited about working on scalable systems." },
    ],
    situations: [
      { title: "Phỏng vấn kỹ thuật", example: "Walk through your system design choices." },
      { title: "Phỏng vấn hành vi", example: "Describe a challenge you overcame." },
    ],
    practice: [
      { title: "Mock interview", prompt: "Luyện trả lời 5 câu hành vi + 3 câu kỹ thuật." },
      { title: "STAR method", prompt: "Viết 2 câu trả lời theo tình huống STAR." },
    ],
  },
  13: {
    vocabulary: [
      { term: "assessment", meaning: "đánh giá", example: "Midterm assessment covers 12 lessons." },
      { term: "rubric/criteria", meaning: "thang điểm/tiêu chí", example: "The rubric focuses on clarity and accuracy." },
    ],
    sentencePatterns: [
      { pattern: "I will [task] within [time].", example: "I will complete the test within 30 minutes." },
      { pattern: "Let’s review the results.", example: "Let’s review the results after submission." },
    ],
    situations: [
      { title: "Bài kiểm tra giữa chặng", example: "Time-boxed test with mixed questions." },
      { title: "Phản hồi sau test", example: "Discuss strengths and gaps." },
    ],
    practice: [
      { title: "Tổng hợp từ vựng", prompt: "Ôn tập 50 từ đã học và dùng trong câu." },
      { title: "Nói tóm tắt", prompt: "Trình bày 2 phút về chủ đề bạn mạnh." },
    ],
  },
  14: {
    vocabulary: [
      { term: "etiquette", meaning: "phép lịch sự", example: "Email etiquette differs across cultures." },
      { term: "diversity", meaning: "đa dạng", example: "We value diversity in global teams." },
    ],
    sentencePatterns: [
      { pattern: "In [culture], it’s common to [behavior].", example: "In Japan, it’s common to be punctual." },
      { pattern: "Let’s respect [difference].", example: "Let’s respect time-zone constraints." },
    ],
    situations: [
      { title: "Làm việc đa văn hóa", example: "Coordinate across US/EU/India teams." },
      { title: "Khác biệt giao tiếp", example: "Direct vs indirect feedback styles." },
    ],
    practice: [
      { title: "Case cultural", prompt: "Giải thích cách ứng xử trong 3 tình huống khác nhau." },
      { title: "Nói về khác biệt", prompt: "Trình bày trải nghiệm làm việc đa quốc gia." },
    ],
  },
  15: {
    vocabulary: [
      { term: "networking", meaning: "kết nối quan hệ", example: "Networking helps career growth." },
      { term: "work-life balance", meaning: "cân bằng công việc-cuộc sống", example: "Maintain healthy work-life balance." },
    ],
    sentencePatterns: [
      { pattern: "I usually [habit] to balance work.", example: "I usually exercise after work." },
      { pattern: "Let’s connect at [event].", example: "Let’s connect at the tech meetup." },
    ],
    situations: [
      { title: "Giao tiếp chuyên nghiệp", example: "Introduce yourself and ask about interests." },
      { title: "Chia sẻ kinh nghiệm", example: "Talk about balance strategies." },
    ],
    practice: [
      { title: "Networking script", prompt: "Soạn lời mở đầu và câu hỏi tại sự kiện." },
      { title: "Plan cân bằng", prompt: "Lập kế hoạch tuần: công việc, sức khỏe, gia đình." },
    ],
  },
  16: {
    vocabulary: [
      { term: "availability", meaning: "thời gian rảnh", example: "What’s your availability next week?" },
      { term: "reschedule", meaning: "đổi lịch", example: "Can we reschedule to Thursday?" },
    ],
    sentencePatterns: [
      { pattern: "Are you available on [day]?", example: "Are you available on Monday?" },
      { pattern: "Let’s book a call at [time].", example: "Let’s book a call at 10 AM." },
    ],
    situations: [
      { title: "Đặt lịch", example: "Propose 2 time slots and confirm." },
      { title: "Xác nhận lịch", example: "Send calendar invite with agenda." },
    ],
    practice: [
      { title: "Email đặt lịch", prompt: "Soạn email đặt lịch và đề xuất 2 khung giờ." },
      { title: "Chat xác nhận", prompt: "Viết tin nhắn xác nhận lịch và địa điểm." },
    ],
  },
  17: {
    vocabulary: [
      { term: "postpone/cancel", meaning: "trì hoãn/hủy", example: "We need to postpone the meeting." },
      { term: "apologize", meaning: "xin lỗi", example: "I apologize for the inconvenience." },
    ],
    sentencePatterns: [
      { pattern: "I’m afraid I have to [action].", example: "I’m afraid I have to reschedule." },
      { pattern: "Could we move it to [time]?", example: "Could we move it to tomorrow afternoon?" },
    ],
    situations: [
      { title: "Thông báo đổi lịch", example: "Notify and propose alternative." },
      { title: "Xin lỗi lịch sự", example: "Apologize and explain briefly." },
    ],
    practice: [
      { title: "Email đổi lịch", prompt: "Soạn email thông báo đổi lịch và đưa 2 lựa chọn." },
      { title: "Role-play gọi điện", prompt: "Thực hành đổi lịch qua điện thoại." },
    ],
  },
  18: {
    vocabulary: [
      { term: "opinion/stance", meaning: "ý kiến/lập trường", example: "My stance is to keep it simple." },
      { term: "evidence", meaning: "bằng chứng", example: "Provide evidence to support your view." },
    ],
    sentencePatterns: [
      { pattern: "In my opinion, [view].", example: "In my opinion, we should prioritize performance." },
      { pattern: "I believe [claim] because [reason].", example: "I believe caching is needed because latency is high." },
    ],
    situations: [
      { title: "Thảo luận kỹ thuật", example: "Argue for approach A vs B." },
      { title: "Kết luận", example: "Summarize and align decision." },
    ],
    practice: [
      { title: "Viết lập luận", prompt: "Viết 2 đoạn nêu quan điểm và lý do." },
      { title: "Debate ngắn", prompt: "Tranh luận 3 phút theo chủ đề được giao." },
    ],
  },
  19: {
    vocabulary: [
      { term: "agenda", meaning: "chương trình", example: "Set the agenda in advance." },
      { term: "minutes", meaning: "biên bản", example: "Take meeting minutes." },
    ],
    sentencePatterns: [
      { pattern: "Let’s draft the agenda.", example: "Let’s draft the agenda and share it." },
      { pattern: "I’ll send the invite.", example: "I’ll send the invite with a Zoom link." },
    ],
    situations: [
      { title: "Chuẩn bị họp", example: "Define objectives and participants." },
      { title: "Gửi lời mời", example: "Send calendar invite with materials." },
    ],
    practice: [
      { title: "Soạn agenda", prompt: "Viết agenda 5 mục và mục tiêu." },
      { title: "Checklist tổ chức", prompt: "Lập checklist trước khi họp." },
    ],
  },
  20: {
    vocabulary: [
      { term: "clarify/confirm", meaning: "làm rõ/xác nhận", example: "Clarify to avoid misunderstandings." },
      { term: "action item", meaning: "mục hành động", example: "Capture action items and owners." },
    ],
    sentencePatterns: [
      { pattern: "Just to clarify, [point].", example: "Just to clarify, is the deadline Friday?" },
      { pattern: "To confirm, we will [plan].", example: "To confirm, we will release on Monday." },
    ],
    situations: [
      { title: "Trong cuộc họp", example: "Ask questions and confirm decisions." },
      { title: "Kết thúc cuộc họp", example: "Summarize and assign tasks." },
    ],
    practice: [
      { title: "Recap meeting", prompt: "Viết recap 5 dòng về quyết định và action items." },
      { title: "Clarify drill", prompt: "Đặt 3 câu hỏi làm rõ trong tình huống." },
    ],
  },
  21: {
    vocabulary: [
      { term: "invite/treat", meaning: "mời/chiêu đãi", example: "Let me treat you to lunch." },
      { term: "team building", meaning: "gắn kết đội", example: "We have a team building next Friday." },
    ],
    sentencePatterns: [
      { pattern: "Would you like to join [activity]?", example: "Would you like to join us for coffee?" },
      { pattern: "How about [time/place]?", example: "How about Friday at the new cafe?" },
    ],
    situations: [
      { title: "Mời đồng nghiệp", example: "Invite for lunch or coffee." },
      { title: "Sắp xếp hoạt động", example: "Organize a casual team event." },
    ],
    practice: [
      { title: "Lời mời lịch sự", prompt: "Viết 3 lời mời theo ngữ cảnh khác nhau." },
      { title: "Role-play xã giao", prompt: "Thực hành giao tiếp thân thiện nhưng chuyên nghiệp." },
    ],
  },
  22: {
    vocabulary: [
      { term: "compromise", meaning: "thỏa hiệp", example: "We reached a compromise on timeline." },
      { term: "terms", meaning: "điều khoản", example: "The terms include payment and delivery." },
    ],
    sentencePatterns: [
      { pattern: "We propose [term] in exchange for [benefit].", example: "We propose a longer timeline in exchange for lower cost." },
      { pattern: "Could we agree on [condition]?", example: "Could we agree on bi-weekly check-ins?" },
    ],
    situations: [
      { title: "Đàm phán phạm vi", example: "Negotiate features for MVP." },
      { title: "Chốt điều khoản", example: "Agree on payment schedule." },
    ],
    practice: [
      { title: "Role-play đàm phán", prompt: "Thực hành nhượng bộ và bảo vệ lợi ích." },
      { title: "Soạn đề xuất", prompt: "Viết đề xuất với các điều khoản rõ ràng." },
    ],
  },
  23: {
    vocabulary: [
      { term: "complaint", meaning: "phàn nàn", example: "Customer filed a complaint about bugs." },
      { term: "resolution", meaning: "giải pháp xử lý", example: "We provided a resolution within 24 hours." },
    ],
    sentencePatterns: [
      { pattern: "We’re sorry for [issue].", example: "We’re sorry for the inconvenience." },
      { pattern: "We will [action] to address this.", example: "We will patch the issue today." },
    ],
    situations: [
      { title: "Nhận phàn nàn", example: "Acknowledge and empathize." },
      { title: "Phản hồi chuyên nghiệp", example: "Outline steps to fix and prevent." },
    ],
    practice: [
      { title: "Email phản hồi", prompt: "Viết email xin lỗi và kế hoạch khắc phục." },
      { title: "Checklist xử lý", prompt: "Lập checklist xử lý phàn nàn trong 24h." },
    ],
  },
  24: {
    vocabulary: [
      { term: "status", meaning: "trạng thái", example: "Weekly status report." },
      { term: "risk/blocker", meaning: "rủi ro/trở ngại", example: "Identify risks and blockers." },
    ],
    sentencePatterns: [
      { pattern: "This week we [progress].", example: "This week we completed API integration." },
      { pattern: "Next, we will [plan].", example: "Next, we will run UAT." },
    ],
    situations: [
      { title: "Báo cáo sprint", example: "Summarize progress and blockers." },
      { title: "Báo cáo cho PM/khách", example: "Provide clear highlights and timelines." },
    ],
    practice: [
      { title: "Viết status", prompt: "Soạn email status theo định dạng chuẩn." },
      { title: "Nói cập nhật", prompt: "Trình bày 2 phút về tiến độ và kế hoạch." },
    ],
  },
  25: {
    vocabulary: [
      { term: "slide deck", meaning: "bộ slide", example: "Prepare a slide deck for the talk." },
      { term: "overview/demo", meaning: "tổng quan/trình diễn", example: "Start with an overview then demo." },
    ],
    sentencePatterns: [
      { pattern: "Today I’ll present [topic].", example: "Today I’ll present our solution design." },
      { pattern: "Let’s move to the demo.", example: "Let’s move to the demo now." },
    ],
    situations: [
      { title: "Thuyết trình giải pháp", example: "Explain architecture and trade-offs." },
      { title: "Q&A", example: "Handle questions clearly." },
    ],
    practice: [
      { title: "Chuẩn bị slide", prompt: "Tạo 8–10 slide cho một giải pháp kỹ thuật." },
      { title: "Diễn tập", prompt: "Luyện nói 5 phút với người nghe giả định." },
    ],
  },
  26: {
    vocabulary: [
      { term: "mid-course", meaning: "giữa khóa", example: "Second assessment of the course." },
      { term: "review", meaning: "ôn tập", example: "Review the previous lessons." },
    ],
    sentencePatterns: [
      { pattern: "Let’s recap [topic].", example: "Let’s recap meeting etiquette." },
      { pattern: "I feel confident about [area].", example: "I feel confident about presentations." },
    ],
    situations: [
      { title: "Bài kiểm tra phần 2", example: "Mixed tasks across lessons 14–25." },
      { title: "Phản hồi điểm mạnh/yếu", example: "Discuss improvements." },
    ],
    practice: [
      { title: "Ôn tập", prompt: "Chọn 30 từ vựng và đặt câu." },
      { title: "Mini-presentation", prompt: "Thuyết trình 3 phút không nhìn script." },
    ],
  },
  27: {
    vocabulary: [
      { term: "remote", meaning: "làm việc từ xa", example: "We support remote work policies." },
      { term: "flex time", meaning: "giờ làm linh hoạt", example: "Flex time helps parents." },
    ],
    sentencePatterns: [
      { pattern: "Our policy supports [option].", example: "Our policy supports flexible schedules." },
      { pattern: "I prefer [arrangement] because [reason].", example: "I prefer hybrid work because of focus time." },
    ],
    situations: [
      { title: "Trao đổi chính sách", example: "Discuss pros/cons of remote work." },
      { title: "Đề xuất cải thiện", example: "Propose quiet hours or no-meeting days." },
    ],
    practice: [
      { title: "Viết đề xuất", prompt: "Soạn đề xuất chính sách cân bằng cuộc sống." },
      { title: "Debate", prompt: "Tranh luận về chính sách ưu tiên của team." },
    ],
  },
  28: {
    vocabulary: [
      { term: "delegate", meaning: "giao việc", example: "Delegate tasks to team members." },
      { term: "backlog", meaning: "danh sách việc", example: "Update the backlog regularly." },
    ],
    sentencePatterns: [
      { pattern: "I’ll assign [task] to [name].", example: "I’ll assign testing to Hoa." },
      { pattern: "Let’s use Present Perfect to track progress.", example: "We have completed two modules." },
    ],
    situations: [
      { title: "Giao việc", example: "Assign responsibilities and deadlines." },
      { title: "Theo dõi tiến độ", example: "Review what has been done." },
    ],
    practice: [
      { title: "Kế hoạch giao việc", prompt: "Lập bảng phân công cho 5 nhiệm vụ." },
      { title: "Daily standup", prompt: "Thực hành báo cáo dạng Present Perfect." },
    ],
  },
  29: {
    vocabulary: [
      { term: "expectation", meaning: "kỳ vọng", example: "Manage client expectations." },
      { term: "apology", meaning: "lời xin lỗi", example: "Offer sincere apologies when needed." },
    ],
    sentencePatterns: [
      { pattern: "We understand your expectations.", example: "We understand your expectations for quality." },
      { pattern: "We’re sorry and will [action].", example: "We’re sorry and will fix it immediately." },
    ],
    situations: [
      { title: "Giao tiếp với khách", example: "Align expectations and handle issues." },
      { title: "Xin lỗi chuyên nghiệp", example: "Apologize and outline fixes." },
    ],
    practice: [
      { title: "Email xin lỗi", prompt: "Soạn email xin lỗi vì sự cố sản phẩm." },
      { title: "Kịch bản gọi", prompt: "Soạn script cuộc gọi xử lý phàn nàn." },
    ],
  },
  30: {
    vocabulary: [
      { term: "itinerary", meaning: "lịch trình", example: "Plan the visitor itinerary." },
      { term: "welcome pack", meaning: "gói chào mừng", example: "Prepare a welcome pack." },
    ],
    sentencePatterns: [
      { pattern: "We’ll be your hosts today.", example: "We’ll be your hosts today and show you around." },
      { pattern: "Let’s start with a quick tour.", example: "Let’s start with a quick tour of the office." },
    ],
    situations: [
      { title: "Đón tiếp khách", example: "Escort and introduce team members." },
      { title: "Sắp xếp lịch tham quan", example: "Plan rooms and sessions." },
    ],
    practice: [
      { title: "Plan đón khách", prompt: "Soạn lịch trình đón tiếp 1 ngày." },
      { title: "Role-play tiếp đón", prompt: "Thực hành chào mừng và dẫn khách tham quan." },
    ],
  },
  31: {
    vocabulary: [
      { term: "VPN", meaning: "mạng riêng ảo", example: "Connect via VPN for security." },
      { term: "permission", meaning: "quyền hạn", example: "Request permissions for tools." },
    ],
    sentencePatterns: [
      { pattern: "Please follow the online security rules.", example: "Use strong passwords and 2FA." },
      { pattern: "Let’s set up the teleconference.", example: "Let’s set up the teleconference room." },
    ],
    situations: [
      { title: "Thiết lập họp online", example: "Share links and test audio/video." },
      { title: "Phân quyền từ xa", example: "Grant temporary permissions." },
    ],
    practice: [
      { title: "Checklist online", prompt: "Lập checklist bảo mật khi làm online." },
      { title: "Role-play họp online", prompt: "Thực hành mở cuộc họp và xử lý sự cố." },
    ],
  },
  32: {
    vocabulary: [
      { term: "budget", meaning: "ngân sách", example: "We need to justify the budget." },
      { term: "ROI", meaning: "lợi tức đầu tư", example: "Calculate ROI for the project." },
    ],
    sentencePatterns: [
      { pattern: "Our budget is [amount].", example: "Our budget is $50,000 for phase one." },
      { pattern: "We expect [ROI] within [time].", example: "We expect positive ROI within six months." },
    ],
    situations: [
      { title: "Thảo luận ngân sách", example: "Present budget and constraints." },
      { title: "Đưa đề xuất tài chính", example: "Justify costs and savings." },
    ],
    practice: [
      { title: "Mini finance", prompt: "Viết đề xuất ngân sách ngắn với ROI." },
      { title: "Case budget", prompt: "Tính chi phí và lợi ích cho 2 phương án." },
    ],
  },
  33: {
    vocabulary: [
      { term: "facility", meaning: "cơ sở vật chất", example: "Improve office facilities." },
      { term: "maintenance", meaning: "bảo trì", example: "Schedule maintenance." },
    ],
    sentencePatterns: [
      { pattern: "We need better [facility].", example: "We need better meeting rooms." },
      { pattern: "Let’s propose [upgrade].", example: "Let’s propose ergonomic chairs." },
    ],
    situations: [
      { title: "Đề xuất nâng cấp", example: "Suggest facility improvements." },
      { title: "Phản hồi môi trường", example: "Discuss workspace comfort." },
    ],
    practice: [
      { title: "Proposal facilities", prompt: "Soạn đề xuất cải thiện văn phòng." },
      { title: "Survey", prompt: "Thiết kế khảo sát hài lòng." },
    ],
  },
  34: {
    vocabulary: [
      { term: "decision", meaning: "quyết định", example: "Decision-making process is crucial." },
      { term: "conditionals", meaning: "câu điều kiện", example: "Use if-clauses to discuss choices." },
    ],
    sentencePatterns: [
      { pattern: "If we [option], we will [outcome].", example: "If we use cloud, we will scale faster." },
      { pattern: "Unless [condition], [result].", example: "Unless we get approval, we can’t proceed." },
    ],
    situations: [
      { title: "Ra quyết định", example: "Evaluate options and risks." },
      { title: "Thảo luận điều kiện", example: "Discuss what-if scenarios." },
    ],
    practice: [
      { title: "Matrix quyết định", prompt: "Lập bảng đánh giá 3 phương án." },
      { title: "Viết if-clauses", prompt: "Soạn 5 câu điều kiện cho một quyết định." },
    ],
  },
  35: {
    vocabulary: [
      { term: "innovation", meaning: "đổi mới", example: "Encourage innovation in teams." },
      { term: "appreciation", meaning: "sự trân trọng", example: "Show appreciation to contributors." },
    ],
    sentencePatterns: [
      { pattern: "That’s a great idea.", example: "That’s a great idea—let’s pilot it." },
      { pattern: "Thanks for [contribution].", example: "Thanks for improving the workflow." },
    ],
    situations: [
      { title: "Đề xuất đổi mới", example: "Pitch improvement to a process." },
      { title: "Khen và cảm ơn", example: "Give positive feedback." },
    ],
    practice: [
      { title: "Pitch cải tiến", prompt: "Nói 2 phút về ý tưởng đổi mới." },
      { title: "Khen/Thanks", prompt: "Viết 5 câu khen và cảm ơn phù hợp." },
    ],
  },
  36: {
    vocabulary: [
      { term: "outage", meaning: "mất dịch vụ", example: "We had a system outage." },
      { term: "root cause", meaning: "nguyên nhân gốc", example: "Analyze the root cause." },
    ],
    sentencePatterns: [
      { pattern: "We’re experiencing a [issue].", example: "We’re experiencing a database outage." },
      { pattern: "We will [action] to resolve.", example: "We will roll back the deployment." },
    ],
    situations: [
      { title: "Xử lý sự cố", example: "Coordinate incident response." },
      { title: "Thông báo sự cố", example: "Send status updates to stakeholders." },
    ],
    practice: [
      { title: "Incident report", prompt: "Soạn báo cáo sự cố với thời gian và nguyên nhân." },
      { title: "Runbook", prompt: "Lập runbook xử lý 3 dạng sự cố." },
    ],
  },
  37: {
    vocabulary: [
      { term: "process", meaning: "quy trình", example: "Follow the deployment process." },
      { term: "pipeline", meaning: "chuỗi xử lý", example: "Set up CI/CD pipeline." },
    ],
    sentencePatterns: [
      { pattern: "The code is reviewed and deployed.", example: "Passive form to explain process." },
      { pattern: "Tasks are prioritized and scheduled.", example: "Passive form describing Scrum." },
    ],
    situations: [
      { title: "Giải thích quy trình", example: "Describe steps and responsibilities." },
      { title: "Tài liệu quy trình", example: "Write a simple process doc." },
    ],
    practice: [
      { title: "Viết quy trình", prompt: "Soạn quy trình 5 bước của một activity." },
      { title: "Chuyển sang bị động", prompt: "Biến 5 câu chủ động thành bị động." },
    ],
  },
  38: {
    vocabulary: [
      { term: "appraisal", meaning: "đánh giá", example: "Annual appraisal with goals." },
      { term: "OKR", meaning: "mục tiêu và kết quả", example: "Set OKRs for the quarter." },
    ],
    sentencePatterns: [
      { pattern: "My objective is [goal].", example: "My objective is improving code quality." },
      { pattern: "I achieved [result] by [method].", example: "I achieved 20% faster builds by caching." },
    ],
    situations: [
      { title: "Đặt mục tiêu", example: "Set measurable objectives." },
      { title: "Đánh giá hiệu suất", example: "Discuss achievements and areas to grow." },
    ],
    practice: [
      { title: "Viết OKR", prompt: "Tạo 3 mục tiêu và kết quả then chốt." },
      { title: "Self-review", prompt: "Viết tự đánh giá 150 từ." },
    ],
  },
  39: {
    vocabulary: [
      { term: "pitch", meaning: "trình bày thuyết phục", example: "Pitch your idea to stakeholders." },
      { term: "budget justification", meaning: "biện minh ngân sách", example: "Use visuals to justify budget." },
    ],
    sentencePatterns: [
      { pattern: "Our strategy is to [plan].", example: "Our strategy is to phase the rollout." },
      { pattern: "Let’s decide on [option].", example: "Let’s decide on the MVP scope." },
    ],
    situations: [
      { title: "Dẫn dắt họp chiến lược", example: "Present plan, negotiate, and decide." },
      { title: "Xử lý Q&A khó", example: "Answer tough questions and concerns." },
    ],
    practice: [
      { title: "Pitch 5 phút", prompt: "Thuyết trình ý tưởng với slide ngắn." },
      { title: "Negotiation drill", prompt: "Đàm phán thời gian/nguồn lực và chốt quyết định." },
    ],
  },
  40: {
    vocabulary: [
      { term: "final exam", meaning: "bài kiểm tra cuối", example: "The final exam covers all units." },
      { term: "reflection", meaning: "tự nhìn lại", example: "Reflect on what you’ve learned." },
    ],
    sentencePatterns: [
      { pattern: "I’ve improved in [area].", example: "I’ve improved in business emails." },
      { pattern: "My plan after the course is [plan].", example: "My plan is to practice with clients more." },
    ],
    situations: [
      { title: "Kiểm tra tổng kết", example: "Mixed tasks including speaking and writing." },
      { title: "Tổng kết khóa học", example: "Share takeaways and next steps." },
    ],
    practice: [
      { title: "Ôn tổng hợp", prompt: "Chọn 40 từ và viết đoạn ngắn sử dụng chúng." },
      { title: "Kế hoạch tiếp tục", prompt: "Viết kế hoạch luyện tập 4 tuần sau khóa." },
    ],
  },
};

// -------- Auto generation to meet minimum requirements --------
const MIN_VOCAB = 100;
const MIN_PATTERNS = 20;
const MIN_SITUATIONS = 10;

const baseVocab: { term: string; meaning: string; example: string }[] = [
  { term: "stakeholder", meaning: "bên liên quan", example: "Align stakeholders before kickoff." },
  { term: "requirement", meaning: "yêu cầu", example: "Gather requirements in discovery phase." },
  { term: "deliverable", meaning: "sản phẩm bàn giao", example: "The deliverable is a working prototype." },
  { term: "prototype", meaning: "bản mẫu", example: "We built a clickable prototype." },
  { term: "MVP", meaning: "sản phẩm khả dụng tối thiểu", example: "Ship the MVP within 6 weeks." },
  { term: "roadmap", meaning: "lộ trình", example: "Share the product roadmap." },
  { term: "backlog", meaning: "danh sách việc tồn", example: "Refine backlog every sprint." },
  { term: "sprint", meaning: "chu kỳ phát triển", example: "Sprint ends next Wednesday." },
  { term: "milestone", meaning: "cột mốc", example: "Next milestone is user testing." },
  { term: "acceptance criteria", meaning: "tiêu chí chấp nhận", example: "Define acceptance criteria for each story." },
  { term: "user story", meaning: "câu chuyện người dùng", example: "Write user stories from personas." },
  { term: "persona", meaning: "chân dung người dùng", example: "Create personas based on interviews." },
  { term: "scope", meaning: "phạm vi", example: "Clarify project scope early." },
  { term: "constraint", meaning: "ràng buộc", example: "Budget is our main constraint." },
  { term: "risk", meaning: "rủi ro", example: "Identify top 3 risks." },
  { term: "mitigation", meaning: "biện pháp giảm thiểu", example: "Plan mitigation strategies." },
  { term: "timeline", meaning: "dòng thời gian", example: "Discuss the timeline with client." },
  { term: "KPI", meaning: "chỉ số hiệu quả", example: "Define KPIs for success." },
  { term: "OKR", meaning: "mục tiêu và kết quả", example: "Set quarterly OKRs." },
  { term: "benchmark", meaning: "chuẩn so sánh", example: "Benchmark against competitors." },
  { term: "trade-off", meaning: "đánh đổi", example: "Consider performance trade-offs." },
  { term: "scalability", meaning: "khả năng mở rộng", example: "Design for scalability." },
  { term: "latency", meaning: "độ trễ", example: "Reduce API latency." },
  { term: "throughput", meaning: "lưu lượng", example: "Increase throughput with batching." },
  { term: "cache", meaning: "bộ nhớ đệm", example: "Add caching to speed up reads." },
  { term: "transaction", meaning: "giao dịch", example: "Use transactions for consistency." },
  { term: "consistency", meaning: "tính nhất quán", example: "Ensure data consistency." },
  { term: "availability", meaning: "khả dụng", example: "Aim for high availability." },
  { term: "resilience", meaning: "khả năng chống chịu", example: "Build resilience into services." },
  { term: "observability", meaning: "khả năng quan sát", example: "Improve observability with logs and metrics." },
  { term: "logging", meaning: "ghi log", example: "Standardize logging format." },
  { term: "monitoring", meaning: "giám sát", example: "Add monitoring dashboards." },
  { term: "alerting", meaning: "cảnh báo", example: "Set up alerting for errors." },
  { term: "incident", meaning: "sự cố", example: "Document incident response." },
  { term: "postmortem", meaning: "báo cáo sau sự cố", example: "Write a postmortem." },
  { term: "CI/CD", meaning: "tích hợp/triển khai liên tục", example: "Enable CI/CD pipelines." },
  { term: "artifact", meaning: "tạo phẩm", example: "Store build artifacts." },
  { term: "versioning", meaning: "phiên bản hóa", example: "Adopt semantic versioning." },
  { term: "rollback", meaning: "quay lui", example: "Support safe rollback." },
  { term: "feature flag", meaning: "cờ tính năng", example: "Use feature flags for rollout." },
  { term: "A/B testing", meaning: "thử nghiệm A/B", example: "Run A/B tests on UI." },
  { term: "access control", meaning: "kiểm soát truy cập", example: "Implement role-based access control." },
  { term: "authentication", meaning: "xác thực", example: "Use JWT for authentication." },
  { term: "authorization", meaning: "phân quyền", example: "Apply policy-based authorization." },
  { term: "encryption", meaning: "mã hóa", example: "Encrypt data at rest and in transit." },
  { term: "compliance", meaning: "tuân thủ", example: "Ensure compliance with standards." },
  { term: "usability", meaning: "tính dễ dùng", example: "Improve usability with feedback." },
  { term: "accessibility", meaning: "khả năng tiếp cận", example: "Follow accessibility guidelines." },
  { term: "onboarding", meaning: "khởi tạo người dùng/môi trường", example: "Simplify user onboarding." },
  { term: "retention", meaning: "giữ chân người dùng", example: "Increase retention with value." },
];

const patternBank = [
  { pattern: "We should [verb] [object] to [benefit].", example: "We should add caching to reduce latency." },
  { pattern: "Let’s [action] by [method].", example: "Let’s improve UX by simplifying forms." },
  { pattern: "I recommend [option] because [reason].", example: "I recommend TypeORM because it’s flexible." },
  { pattern: "If we [choice], we will [outcome].", example: "If we use feature flags, we will ship safely." },
  { pattern: "Could we [request] so that [benefit]?", example: "Could we extend the deadline so that QA is thorough?" },
  { pattern: "In my opinion, [view].", example: "In my opinion, we should prioritize performance." },
  { pattern: "The [subject] is [adjective] compared to [baseline].", example: "The new API is faster compared to v1." },
  { pattern: "It’s important to [action].", example: "It’s important to align on scope." },
  { pattern: "Please [instruction] by [time].", example: "Please send the report by Friday." },
  { pattern: "We plan to [goal] in [timeframe].", example: "We plan to release in two weeks." },
  { pattern: "Our objective is [objective].", example: "Our objective is zero downtime." },
  { pattern: "We are working on [task].", example: "We are working on API integration." },
  { pattern: "Have you tried [option]?", example: "Have you tried memoizing that function?" },
  { pattern: "Let me walk you through [topic].", example: "Let me walk you through the dashboard." },
  { pattern: "To confirm, we will [plan].", example: "To confirm, we will demo next Monday." },
  { pattern: "Just to clarify, [point].", example: "Just to clarify, is the deadline Friday?" },
  { pattern: "We decided to [decision].", example: "We decided to adopt Kafka." },
  { pattern: "Please find attached [material].", example: "Please find attached the sprint summary." },
  { pattern: "Thanks for [contribution].", example: "Thanks for improving the workflow." },
  { pattern: "Let’s focus on [priority].", example: "Let’s focus on reliability." },
];

const situationBank = [
  { title: "Kick-off meeting", example: "Define goals, scope, and timeline." },
  { title: "Sprint planning", example: "Estimate tasks and assign owners." },
  { title: "Stakeholder update", example: "Summarize progress and next steps." },
  { title: "Demo session", example: "Show new features and collect feedback." },
  { title: "Incident response", example: "Coordinate fix and communication." },
  { title: "Vendor evaluation", example: "Compare options and SLAs." },
  { title: "Interview panel", example: "Ask technical and behavioral questions." },
  { title: "Negotiation call", example: "Discuss terms and compromise." },
  { title: "Customer workshop", example: "Clarify requirements and constraints." },
  { title: "Retrospective", example: "Review what went well and improve." },
];

const practiceSamples = (theme: string) => [
  {
    title: "Email mẫu",
    prompt: `Soạn email chuyên nghiệp theo chủ đề: ${theme}.`,
    sample:
      `Subject: ${theme} – Thống nhất kế hoạch\n\nDear team,\n\nChúng ta sẽ ${theme.toLowerCase()} theo timeline đã đề xuất. Vui lòng xác nhận các mốc và người phụ trách.\n\nBest regards,\nYour Name`,
  },
  {
    title: "Bài nói mẫu",
    prompt: `Chuẩn bị bài nói 1–2 phút theo chủ đề: ${theme}.`,
    sample:
      `Today I’ll talk about ${theme}. We will cover goals, key challenges, and our approach. By the end, you’ll see how we plan to deliver value and reduce risks.`,
  },
];

const keywordMap: Record<number, string[]> = {
  1: ["greeting", "visitor", "tour", "welcome"],
  2: ["company", "mission", "vision", "stack"],
  3: ["career", "promotion", "mentorship"],
  4: ["experience", "portfolio", "case study"],
  5: ["product", "feature", "benefit", "demo"],
  6: ["compare", "benchmark", "trade-off"],
  7: ["service", "vendor", "SLA", "cloud"],
  8: ["advice", "best practice", "suggest"],
  9: ["permission", "request", "leave"],
  10: ["email", "report", "status"],
  11: ["schedule", "timeline", "dependency"],
  12: ["interview", "strength", "weakness"],
  13: ["assessment", "rubric", "criteria"],
  14: ["culture", "etiquette", "diversity"],
  15: ["networking", "balance", "wellbeing"],
  16: ["appointment", "booking", "availability"],
  17: ["reschedule", "postpone", "apology"],
  18: ["opinion", "stance", "evidence"],
  19: ["meeting", "agenda", "invite"],
  20: ["attend", "clarify", "confirm"],
  21: ["entertainment", "invite", "team building"],
  22: ["negotiation", "terms", "compromise"],
  23: ["complaint", "resolution", "empathy"],
  24: ["progress", "status", "risk"],
  25: ["presentation", "slide", "overview"],
  26: ["mid-course", "review", "test"],
  27: ["remote", "flex time", "policy"],
  28: ["project", "delegate", "backlog"],
  29: ["customer", "expectation", "apology"],
  30: ["visitor", "itinerary", "welcome"],
  31: ["online", "VPN", "teleconference"],
  32: ["finance", "budget", "ROI"],
  33: ["facility", "maintenance", "upgrade"],
  34: ["decision", "conditions", "risk"],
  35: ["innovation", "appreciation", "improvement"],
  36: ["outage", "root cause", "runbook"],
  37: ["process", "pipeline", "deployment"],
  38: ["performance", "appraisal", "OKR"],
  39: ["strategy", "pitch", "budget"],
  40: ["final", "exam", "reflection"],
};

function generateVocabulary(keywords: string[], count: number) {
  const out: { term: string; meaning: string; example?: string }[] = [];
  const suffixes = ["policy", "workflow", "strategy", "objective", "constraint", "risk", "benefit", "requirement", "process", "tool", "practice", "guideline"];
  let i = 0;
  while (out.length < count) {
    if (i < baseVocab.length) {
      out.push(baseVocab[i]);
    } else {
      const k = keywords[i % keywords.length] || "topic";
      const s = suffixes[i % suffixes.length];
      const term = `${k} ${s}`;
      out.push({ term, meaning: `${s} liên quan đến ${k}`, example: `We discussed ${term} in the meeting.` });
    }
    i++;
  }
  return out;
}

function generatePatterns(keywords: string[], count: number) {
  const out: { pattern: string; example?: string }[] = [];
  let i = 0;
  while (out.length < count) {
    const base = patternBank[i % patternBank.length];
    const kw = keywords[i % keywords.length] || "topic";
    out.push({ pattern: base.pattern.replace("[topic]", kw), example: base.example });
    i++;
  }
  return out;
}

function generateSituations(keywords: string[], count: number) {
  const out: { title: string; example?: string }[] = [];
  let i = 0;
  while (out.length < count) {
    const base = situationBank[i % situationBank.length];
    const kw = keywords[i % keywords.length] || "topic";
    out.push({ title: `${base.title} (${kw})`, example: base.example });
    i++;
  }
  return out;
}

export function ensureMinimumContent(id: number, themeTitle: string, existing?: ExtraContent): ExtraContent {
  const kw = keywordMap[id] || [themeTitle];
  const vocab = generateVocabulary(kw, MIN_VOCAB);
  const patterns = generatePatterns(kw, MIN_PATTERNS);
  const situations = generateSituations(kw, MIN_SITUATIONS);
  const practices = practiceSamples(themeTitle);

  // Merge with existing curated content (if any), prioritizing existing at the front
  const mergedVocab = [...(existing?.vocabulary || []), ...vocab].slice(0, Math.max(MIN_VOCAB, existing?.vocabulary?.length || 0));
  const mergedPatterns = [...(existing?.sentencePatterns || []), ...patterns].slice(0, Math.max(MIN_PATTERNS, existing?.sentencePatterns?.length || 0));
  const mergedSituations = [...(existing?.situations || []), ...situations].slice(0, Math.max(MIN_SITUATIONS, existing?.situations?.length || 0));
  const mergedPractice = [...(existing?.practice || []), ...practices];

  return {
    vocabulary: mergedVocab,
    sentencePatterns: mergedPatterns,
    situations: mergedSituations,
    practice: mergedPractice,
  };
}