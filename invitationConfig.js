/**
 * ==============================================================================
 * INVITATION CONFIGURATION (invitationConfig.js)
 * Cấu trúc cốt truyện đa spread cho 3D Origami Pop-up Book (Không có RSVP)
 * ==============================================================================
 */

const invitationConfig = {
  graduateName: "Cao Hoàng Linh",
  guestName: "", // Query string (?guest=Tên hoặc ?to=Tên)
  universityName: "Đại học FPT Đà Nẵng",
  faculty: "Khoa Công nghệ Thông tin",
  major: "Kỹ thuật Phần mềm",
  degreeTitle: "Kỹ sư Kỹ thuật Phần mềm",

  graduationDate: "12/08/2026",
  graduationDateFormatted: "Thứ Tư, 12/08/2026",
  graduationYear: "2026",
  ceremonyStartTime: "07:30",
  ceremonyEndTime: "11:30",
  guestArrivalTime: "07:00",
  ceremonyVenue: "Tòa nhà Alpha – Đại học FPT Đà Nẵng",
  ceremonyAddress: "Khu đô thị FPT City, Ngũ Hành Sơn, Đà Nẵng 550000, Việt Nam",
  ceremonyMapUrl: "https://maps.google.com/?q=Đại+học+FPT+Đà+Nẵng,+Khu+đô+thị+FPT+City,+Ngũ+Hành+Sơn,+Đà+Nẵng",

  partyVenue: "Nhà hàng Hải sản Bé Mặn (Khu vực VIP)",
  partyAddress: "Lô 11 Võ Nguyên Giáp, Phường Mạn Thái, Quận Sơn Trà, Đà Nẵng",
  partyMapUrl: "https://maps.google.com/?q=Nhà+hàng+Bé+Mặn,+Võ+Nguyên+Giáp,+Sơn+Trà,+Đà+Nẵng",
  
  hotelName: "Khách sạn Biển Đà Nẵng (Khu vực Bãi biển Mỹ Khê)",
  hotelAddress: "Đường Võ Nguyên Giáp, Phường Phước Mỹ, Quận Sơn Trà, Đà Nẵng",
  hotelMapUrl: "https://maps.google.com/?q=Bãi+biển+Mỹ+Khê,+Đà+Nẵng",

  contactName: "Cao Hoàng Linh",
  contactPhone: "0905 123 456",
  contactPhoneDisplay: "0905 123 456",
  contactMessengerUrl: "https://m.me/linhchde",
  contactZaloUrl: "https://zalo.me/0905123456",

  // 10 Story Spreads trên trục cuộn thời gian
  storySpreads: [
    // 0. Prologue (0.00 - 0.10)
    {
      id: "prologue",
      title: "Prologue • Lá Thư Mở Đầu",
      quote: "Có những hành trình được bắt đầu bằng một chuyến đi.\nCó những hành trình lại bắt đầu từ một lời hẹn.\n\nMột hành trình đặc biệt đang chờ được mở ra tại Đà Nẵng…"
    },
    // 1. Chương I - Spread 1: Đón đoàn tại Đà Nẵng (0.16 - 0.26)
    {
      id: "ch1_spread1",
      chapter: "CHƯƠNG I • 11/08/2026",
      title: "Đón Đoàn Tại Đà Nẵng",
      time: "11:30–13:30",
      quote: "Trước ngày quan trọng nhất, chúng ta sẽ gặp nhau tại thành phố biển.",
      story: "Đón những người thân thương tại sân bay và ga Đà Nẵng, thưởng thức bữa trưa nhẹ với bánh tráng cuốn thịt heo và mì Quảng trước khi nhận phòng nghỉ ngơi.",
      mapUrl: "https://maps.google.com/?q=Biển+Mỹ+Khê,+Đà+Nẵng"
    },
    // 2. Chương I - Spread 2: Chùa Cầu & Phố Cổ Hội An (0.26 - 0.36)
    {
      id: "ch1_spread2",
      chapter: "CHƯƠNG I • PHỐ CỔ HỘI AN",
      title: "Chùa Cầu & Mái Nhà Cổ Kính",
      time: "15:30–18:00",
      quote: "Con đường đầu tiên sẽ đưa mọi người đến những mái nhà nhuốm màu thời gian.",
      story: "15:30 khởi hành đến Hội An. Dạo bước ngắm hoàng hôn, check-in di tích Chùa Cầu, những giàn hoa giấy và thưởng thức đặc sản cơm gà, cao lầu.",
      mapUrl: "https://maps.google.com/?q=Chùa+Cầu,+Hội+An"
    },
    // 3. Chương I - Spread 3: Thuyền Sông Hoài & Hoa Đăng (0.36 - 0.46)
    {
      id: "ch1_spread3",
      chapter: "CHƯƠNG I • ĐÊM SÔNG HOÀI",
      title: "Ánh Hoa Đăng & Đèn Lồng",
      time: "19:00–21:00",
      quote: "Khi phố cổ lên đèn, hãy cùng nhau giữ lại khoảnh khắc đầu tiên của hành trình.",
      story: "Đi thuyền gỗ lững lờ trên sông Hoài, thả hoa đăng lung linh ngắm phố đèn lồng và uống nước Mót trước khi về khách sạn nghỉ ngơi.",
      mapUrl: "https://maps.google.com/?q=Sông+Hoài,+Hội+An"
    },
    // 4. Chương II - Spread 1: Tòa Alpha FPT & Đại Lễ (0.46 - 0.56)
    {
      id: "ch2_spread1",
      chapter: "CHƯƠNG II • 12/08/2026 (CAO TRÀO)",
      title: "Đại Lễ Tốt Nghiệp FPT",
      time: "07:30–11:30 (Đón khách: 07:00)",
      quote: "Sau những năm tháng học tập, những lần vấp ngã và không ngừng cố gắng, ngày mà chúng ta chờ đợi cuối cùng cũng đã đến.",
      story: "Lễ trao bằng tốt nghiệp kỹ sư CNTT của Cao Hoàng Linh tại Tòa nhà Alpha – Đại học FPT Đà Nẵng.",
      mapUrl: "https://maps.google.com/?q=Đại+học+FPT+Đà+Nẵng"
    },
    // 5. Chương II - Spread 2: Tiệc Mừng Liên Hoan (0.56 - 0.64)
    {
      id: "ch2_spread2",
      chapter: "CHƯƠNG II • TIỆC MỪNG",
      title: "Bữa Tiệc Liên Hoan Ấm Cúng",
      time: "11:30–14:00",
      quote: "Một cột mốc sẽ chỉ thật sự trọn vẹn khi có những người thân yêu ở bên.",
      story: "Tiệc liên hoan mừng tốt nghiệp cùng gia đình và bạn bè (đoàn 12–17 người) tại nhà hàng hải sản ven biển. Sau bữa tiệc, đoàn về khách sạn nghỉ ngơi.",
      mapUrl: "https://maps.google.com/?q=Nhà+hàng+Bé+Mặn,+Sơn+Trà,+Đà+Nẵng"
    },
    // 6. Chương II - Spread 3: Sơn Trà & Biển Mỹ Khê (0.64 - 0.72)
    {
      id: "ch2_spread3",
      chapter: "CHƯƠNG II • BIỂN CHIỀU",
      title: "Sơn Trà & Hoàng Hôn Mỹ Khê",
      time: "15:30–17:30",
      quote: "Ngắm toàn cảnh vịnh biển từ Bán đảo Sơn Trà trước khi hòa mình vào làn nước trong xanh.",
      story: "Viếng Chùa Linh Ứng Bãi Bụt chiêm bái Phật Bà Quan Âm, sau đó cùng nhau tắm biển Mỹ Khê và đón hoàng hôn rực rỡ.",
      mapUrl: "https://maps.google.com/?q=Chùa+Linh+Ứng,+Sơn+Trà,+Đà+Nẵng"
    },
    // 7. Chương II - Spread 4: Cầu Rồng & Sông Hàn (0.72 - 0.80)
    {
      id: "ch2_spread4",
      chapter: "CHƯƠNG II • ĐÊM SÔNG HÀN",
      title: "Hải Sản & Cầu Rồng Rực Rỡ",
      time: "18:30–21:30",
      quote: "Đêm Đà Nẵng lung linh ánh đèn bên dòng sông Hàn biểu tượng.",
      story: "Thưởng thức hải sản tươi ngon cùng gia đình và bạn bè (12–17 người). Dạo mát bên sông Hàn, check-in Cầu Tình Yêu, xem Cầu Rồng và ghé chợ đêm.",
      mapUrl: "https://maps.google.com/?q=Cầu+Rồng,+Đà+Nẵng"
    },
    // 8. Chương III - Spread 1: Chợ Hàn & Đặc Sản (0.80 - 0.88)
    {
      id: "ch3_spread1",
      chapter: "CHƯƠNG III • 13/08/2026",
      title: "Bún Chả Cá & Quà Chợ Hàn",
      time: "08:00–10:00",
      quote: "Mọi chuyến đi rồi cũng đến lúc khép lại. Hãy cùng nhau giữ thêm một vài ký ức về Đà Nẵng.",
      story: "Điểm tâm bún chả cá Đà Nẵng. Ghé Chợ Hàn mua quà đặc sản chả bò, tré Bà Đệ, mực rim và bánh khô mè.",
      mapUrl: "https://maps.google.com/?q=Chợ+Hàn,+Đà+Nẵng"
    },
    // 9. Chương III - Spread 2: Công Viên APEC & Tạm Biệt (0.88 - 0.94)
    {
      id: "ch3_spread2",
      chapter: "CHƯƠNG III • TẠM BIỆT",
      title: "Công Viên APEC & Lời Chào",
      time: "10:00–10:30",
      quote: "Ba ngày có thể trôi qua rất nhanh, nhưng những khoảnh khắc được sẻ chia sẽ ở lại lâu hơn.",
      story: "Check-in kiến trúc Cánh diều Công viên APEC, trả phòng khách sạn và tiễn đoàn ra sân bay / ga tàu.",
      mapUrl: "https://maps.google.com/?q=Công+viên+APEC,+Đà+Nẵng"
    },
    // 10. Epilogue: Lời Cảm Ơn (0.94 - 1.00)
    {
      id: "epilogue",
      title: "Epilogue • Lời Cảm Ơn",
      quote: "Cảm ơn bạn đã cùng tôi mở từng trang của hành trình này.\n\nMột chặng đường đã khép lại, nhưng những kỷ niệm đẹp chỉ vừa được viết nên.\n\nHẹn gặp nhau tại Đà Nẵng."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = invitationConfig;
}
