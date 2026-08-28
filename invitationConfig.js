/**
 * ==============================================================================
 * INVITATION CONFIGURATION (invitationConfig.js)
 * Cấu hình trung tâm cho 3D Origami Pop-up Storybook
 * ==============================================================================
 */

const invitationConfig = {
  // 1. Thông tin cá nhân & Nhân vật chính
  graduateName: "Cao Hoàng Linh",
  guestName: "", // Tự động lấy từ query string (?guest=Tên hoặc ?to=Tên), mặc định: "Gia đình và những người bạn thân yêu"
  universityName: "Đại học FPT Đà Nẵng",
  faculty: "Khoa Công nghệ Thông tin",
  major: "Kỹ thuật Phần mềm",
  degreeTitle: "Kỹ sư Kỹ thuật Phần mềm",

  // 2. Thời gian & Địa điểm Lễ Tốt Nghiệp Chính Thức
  graduationDate: "12/08/2026",
  graduationDateFormatted: "Thứ Tư, 12/08/2026",
  graduationYear: "2026",
  ceremonyStartTime: "07:30",
  ceremonyEndTime: "11:30",
  guestArrivalTime: "07:00",
  ceremonyVenue: "Tòa nhà Alpha – Đại học FPT Đà Nẵng",
  ceremonyAddress: "Khu đô thị FPT City, Ngũ Hành Sơn, Đà Nẵng 550000, Việt Nam",
  ceremonyMapUrl: "https://maps.google.com/?q=Đại+học+FPT+Đà+Nẵng,+Khu+đô+thị+FPT+City,+Ngũ+Hành+Sơn,+Đà+Nẵng",

  // 3. Tiệc mừng liên hoan & Khách sạn lưu trú
  partyVenue: "Nhà hàng Hải sản Bé Mặn (Khu vực VIP)",
  partyAddress: "Lô 11 Võ Nguyên Giáp, Phường Mạn Thái, Quận Sơn Trà, Đà Nẵng",
  partyMapUrl: "https://maps.google.com/?q=Nhà+hàng+Bé+Mặn,+Võ+Nguyên+Giáp,+Sơn+Trà,+Đà+Nẵng",
  
  hotelName: "Khách sạn Biển Đà Nẵng (Khu vực Bãi biển Mỹ Khê)",
  hotelAddress: "Đường Võ Nguyên Giáp, Phường Phước Mỹ, Quận Sơn Trà, Đà Nẵng",
  hotelMapUrl: "https://maps.google.com/?q=Bãi+biển+Mỹ+Khê,+Đà+Nẵng",

  // 4. Thông tin liên hệ
  contactName: "Cao Hoàng Linh",
  contactPhone: "0905 123 456",
  contactPhoneDisplay: "0905 123 456",
  contactMessengerUrl: "https://m.me/linhchde",
  contactZaloUrl: "https://zalo.me/0905123456",

  // 5. Cấu hình Timeline 3D Pop-up Book
  timeline: {
    prologue: {
      range: [0.00, 0.12],
      title: "Prologue • Lá Thư",
      lead: "Gửi gia đình và những người bạn thân yêu,",
      quote: "Có những hành trình được bắt đầu bằng một chuyến đi.\nCó những hành trình lại bắt đầu từ một lời hẹn.\n\nMột hành trình đặc biệt đang chờ được mở ra tại Đà Nẵng…"
    },
    morphToBook: {
      range: [0.12, 0.20],
      title: "Mở Cuốn Sách Origami"
    },
    chapter1: {
      range: [0.20, 0.42],
      title: "Chương I • Đà Nẵng & Hội An",
      dateFormatted: "Thứ Ba, 11/08/2026",
      leadQuote: "Trước ngày quan trọng nhất, chúng ta sẽ gặp nhau tại thành phố biển.",
      scheduleItems: [
        { time: "15:30", text: "Khởi hành đến Hội An" },
        { time: "16:30", text: "Dạo phố cổ, Chùa Cầu và những giàn hoa giấy" },
        { time: "18:00", text: "Thưởng thức đặc sản Hội An" },
        { time: "19:00", text: "Thuyền sông Hoài, hoa đăng và phố cổ về đêm" },
        { time: "21:00", text: "Trở về Đà Nẵng nghỉ ngơi" }
      ]
    },
    chapter2: {
      range: [0.42, 0.74],
      title: "Chương II • Lễ Tốt Nghiệp & Tiệc Mừng",
      dateFormatted: "Thứ Tư, 12/08/2026",
      leadQuote: "Sau những năm tháng học tập, những lần vấp ngã và không ngừng cố gắng, ngày mà chúng ta chờ đợi cuối cùng cũng đã đến.",
      beats: [
        {
          period: "Sáng • 07:30–11:30",
          title: "Đại lễ tốt nghiệp tại Đại học FPT Đà Nẵng",
          desc: "Khoảnh khắc bước lên lễ đài tại Tòa nhà Alpha nhận bằng tốt nghiệp.",
          mapUrl: "https://maps.google.com/?q=Đại+học+FPT+Đà+Nẵng"
        },
        {
          period: "Trưa • 11:30–14:00",
          title: "Tiệc liên hoan mừng tốt nghiệp",
          desc: "Bữa tiệc ấm cúng cùng gia đình và bạn bè (đoàn 12–17 người) tại nhà hàng hải sản ven biển. Sau bữa tiệc, đoàn trở về khách sạn nghỉ ngơi.",
          mapUrl: "https://maps.google.com/?q=Nhà+hàng+Bé+Mặn,+Võ+Nguyên+Giáp,+Sơn+Trà,+Đà+Nẵng"
        },
        {
          period: "Chiều • 15:30–17:30",
          title: "Sơn Trà & Biển Mỹ Khê",
          desc: "Viếng Chùa Linh Ứng tại Bán đảo Sơn Trà. Sau đó cùng nhau đến biển Mỹ Khê tắm biển và ngắm hoàng hôn.",
          mapUrl: "https://maps.google.com/?q=Chùa+Linh+Ứng,+Sơn+Trà,+Đà+Nẵng"
        },
        {
          period: "Tối • 18:30–21:30",
          title: "Hải sản & Phố đêm Sông Hàn",
          desc: "Thưởng thức hải sản và ẩm thực địa phương (12–17 người). Dạo mát bên sông Hàn, check-in Cầu Tình Yêu, xem Cầu Rồng và ghé chợ đêm.",
          mapUrl: "https://maps.google.com/?q=Cầu+Rồng,+Đà+Nẵng"
        }
      ]
    },
    chapter3: {
      range: [0.74, 0.88],
      title: "Chương III • Những Khoảnh Khắc Cuối",
      dateFormatted: "Thứ Năm, 13/08/2026",
      leadQuote: "Mọi chuyến đi rồi cũng đến lúc khép lại. Nhưng trước khi nói lời tạm biệt, hãy cùng nhau giữ thêm một vài ký ức về Đà Nẵng.",
      scheduleItems: [
        { time: "08:00", text: "Ăn sáng bún chả cá Đà Nẵng nồng nàn vị biển" },
        { time: "09:00", text: "Ghé Chợ Hàn mua quà đặc sản (chả bò, tré, mực rim, bánh khô mè)" },
        { time: "10:00", text: "Check-in kiến trúc Cánh diều Công viên APEC" },
        { time: "10:30", text: "Tạm biệt Đà Nẵng thân yêu!" }
      ]
    },
    epilogue: {
      range: [0.88, 1.00],
      title: "Epilogue • Lời Cảm Ơn",
      quote: "Cảm ơn bạn đã cùng tôi mở từng trang của hành trình này.\n\nMột chặng đường đã khép lại, nhưng những kỷ niệm đẹp chỉ vừa được viết nên.\n\nHẹn gặp nhau tại Đà Nẵng."
    }
  },

  // 6. Tóm tắt lịch trình chi tiết phục vụ Modal
  itinerarySummary: [
    {
      date: "Thứ Ba, 11/08/2026",
      title: "Ngày 1: Đón đoàn & Phố cổ Hội An",
      details: [
        "11:30–13:30: Đón đoàn về khách sạn nhận phòng, ăn trưa nhẹ đặc sản bánh tráng cuốn thịt heo / mì Quảng.",
        "15:30: Xe xuất phát đi Hội An (~40 phút).",
        "16:30: Dạo phố cổ, check-in Chùa Cầu, giàn hoa giấy, uống nước Mót.",
        "18:00: Ăn tối đặc sản cơm gà, cao lầu, bánh bao bánh vạc.",
        "19:00: Thuyền sông Hoài, thả hoa đăng lung linh ngắm phố đèn lồng.",
        "21:00: Xe đưa đoàn về lại khách sạn Đà Nẵng nghỉ ngơi."
      ]
    },
    {
      date: "Thứ Tư, 12/08/2026 (Chính)",
      title: "Ngày 2: Đại Lễ Tốt Nghiệp & Tiệc Mừng",
      details: [
        "07:00: Đón tiếp Quý khách tại Tòa nhà Alpha – Đại học FPT Đà Nẵng.",
        "07:30–11:30: Đại Lễ Trao Bằng Tốt Nghiệp trang trọng và chụp ảnh kỷ niệm.",
        "11:30–14:00: Tiệc liên hoan mừng tốt nghiệp cùng gia đình & bạn bè (12–17 người) tại nhà hàng ấm cúng.",
        "15:30–17:30: Viếng Chùa Linh Ứng Bãi Bụt (Sơn Trà), tắm biển Mỹ Khê ngắm hoàng hôn.",
        "18:30–21:30: Ăn tối hải sản, dạo mát Sông Hàn, check-in Cầu Tình Yêu, xem Cầu Rồng và Chợ đêm."
      ]
    },
    {
      date: "Thứ Năm, 13/08/2026",
      title: "Ngày 3: Đặc Sản & Tạm Biệt",
      details: [
        "08:00: Điểm tâm sáng bún chả cá Đà Nẵng.",
        "09:00: Tham quan và mua sắm quà đặc sản tại Chợ Hàn (chả bò, tré, mực rim, bánh khô mè).",
        "10:00: Check-in Công viên APEC bên bờ sông Hàn.",
        "10:30: Trả phòng khách sạn, tiễn đoàn ra sân bay / ga tàu. Kết thúc chuyến đi!"
      ]
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = invitationConfig;
}
