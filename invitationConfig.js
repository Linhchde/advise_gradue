/**
 * ==============================================================================
 * INVITATION CONFIGURATION (invitationConfig.js)
 * Trung tâm quản lý dữ liệu sự kiện, timeline và nội dung kể chuyện (Storybook)
 * ==============================================================================
 */

const invitationConfig = {
  // 1. Thông tin cá nhân & Nhân vật chính
  graduateName: "Cao Hoàng Linh",
  guestName: "", // Tự động lấy từ query string (?guest=Tên hoặc ?to=Tên), mặc định: "Gia đình và những người bạn thân yêu"
  universityName: "Đại học FPT Đà Nẵng",
  faculty: "Khoa Công nghệ Thông tin",
  major: "Kỹ thuật Phần mềm",
  className: "K16 - SE",
  degreeTitle: "Kỹ sư Kỹ thuật Phần mềm",

  // 2. Thời gian & Địa điểm Lễ Tốt Nghiệp Chính Thức
  graduationDate: "12/08/2026",
  graduationDateFormatted: "Thứ Tư, 12/08/2026",
  graduationYear: "2026",
  ceremonyStartTime: "07:30",
  ceremonyEndTime: "11:30",
  guestArrivalTime: "07:00",
  ceremonyVenue: "Hội trường Trống Đồng – Đại học FPT Đà Nẵng",
  ceremonyAddress: "Khu đô thị FPT City, Ngũ Hành Sơn, Đà Nẵng 550000, Việt Nam",
  ceremonyMapUrl: "https://maps.google.com/?q=Đại+học+FPT+Đà+Nẵng,+Khu+đô+thị+FPT+City,+Ngũ+Hành+Sơn,+Đà+Nẵng",

  // 3. Tiệc mừng liên hoan & Khách sạn lưu trú
  partyVenue: "Nhà hàng Hải sản Bé Mặn (Khu vực VIP)",
  partyAddress: "Lô 11 Võ Nguyên Giáp, Phường Mạn Thái, Quận Sơn Trà, Đà Nẵng",
  partyMapUrl: "https://maps.google.com/?q=Nhà+hàng+Bé+Mặn,+Võ+Nguyên+Giáp,+Sơn+Trà,+Đà+Nẵng",
  
  hotelName: "Khách sạn Biển Đà Nẵng (Khu vực Bãi biển Mỹ Khê)",
  hotelAddress: "Đường Võ Nguyên Giáp, Phường Phước Mỹ, Quận Sơn Trà, Đà Nẵng",
  hotelMapUrl: "https://maps.google.com/?q=Bãi+biển+Mỹ+Khê,+Đà+Nẵng",

  // 4. Quy định trang phục & Hạn chót xác nhận
  dressCode: "Trang phục thanh lịch, trang trọng (Khuyến khích tone màu: Trắng, Xanh Navy, Vàng Pastel)",
  rsvpDeadline: "05/08/2026",
  rsvpDeadlineFormatted: "Chủ Nhật, 05/08/2026",

  // 5. Thông tin liên hệ
  contactName: "Cao Hoàng Linh",
  contactPhone: "0905 123 456",
  contactPhoneDisplay: "0905 123 456",
  contactMessengerUrl: "https://m.me/linhchde",
  contactZaloUrl: "https://zalo.me/0905123456",

  // 6. Ghi chú di chuyển
  transportNotes: "Xe ô tô đưa đón gia đình và người thân được bố trí xuyên suốt lịch trình giữa khách sạn, trường đại học và các điểm tham quan.",

  // 7. Cấu hình Timeline Storybook (Scroll Progress: 0.00 -> 1.00)
  storyTimeline: {
    prologue: {
      range: [0.00, 0.14],
      title: "Lá thư xuất hiện",
      code: "PROLOGUE",
      leadText: "Gửi gia đình và những người bạn thân yêu,",
      subText: "Một hành trình đặc biệt đang chờ được mở ra tại Đà Nẵng..."
    },
    chapter1: {
      range: [0.14, 0.38],
      title: "Đà Nẵng và Hội An",
      code: "CHAPTER I",
      dateFormatted: "Thứ Ba, 11/08/2026",
      quotes: [
        "Trước ngày quan trọng nhất, chúng ta sẽ gặp nhau tại thành phố biển.",
        "Con đường đầu tiên sẽ đưa mọi người đến những mái nhà nhuốm màu thời gian.",
        "Khi phố cổ lên đèn, hãy cùng nhau giữ lại khoảnh khắc đầu tiên của hành trình."
      ],
      location: "Đà Nẵng – Phố cổ Hội An (11:30–21:00)",
      mapUrl: "https://maps.google.com/?q=Phố+cổ+Hội+An,+Quảng+Nam"
    },
    chapter2: {
      range: [0.38, 0.70],
      title: "Lễ tốt nghiệp & Tiệc mừng",
      code: "CHAPTER II",
      dateFormatted: "Thứ Tư, 12/08/2026",
      quotes: [
        "Sau những năm tháng học tập, những lần vấp ngã và những ngày không ngừng cố gắng…",
        "Ngày mà chúng ta đã chờ đợi cuối cùng cũng đến.",
        "Một cột mốc sẽ chỉ thật sự trọn vẹn khi có những người thân yêu ở bên."
      ],
      location: "Hội trường Trống Đồng – Đại học FPT Đà Nẵng",
      mapUrl: "https://maps.google.com/?q=Đại+học+FPT+Đà+Nẵng"
    },
    chapter3: {
      range: [0.70, 0.86],
      title: "Những khoảnh khắc cuối",
      code: "CHAPTER III",
      dateFormatted: "Thứ Năm, 13/08/2026",
      quotes: [
        "Mọi chuyến đi rồi cũng đến lúc khép lại.",
        "Trước khi nói lời tạm biệt, hãy cùng nhau giữ thêm một vài ký ức về Đà Nẵng.",
        "Ba ngày có thể trôi qua rất nhanh, nhưng những khoảnh khắc được sẻ chia sẽ ở lại lâu hơn."
      ],
      location: "Bún chả cá, Chợ Hàn & Công viên APEC",
      mapUrl: "https://maps.google.com/?q=Chợ+Hàn,+Đà+Nẵng"
    },
    epilogue: {
      range: [0.86, 1.00],
      title: "Lời mời và Xác nhận tham dự",
      code: "EPILOGUE",
      thankMessage: "Cảm ơn bạn đã đi đến cuối hành trình này.\n\nSự hiện diện của bạn sẽ là mảnh ghép cuối cùng để ngày hôm ấy trở nên trọn vẹn.\n\nHẹn gặp nhau tại Đà Nẵng."
    }
  },

  // 8. Lịch trình chi tiết 3 ngày phục vụ Modal tra cứu
  itineraryDetails: [
    {
      day: "Ngày 1 (11/08/2026)",
      title: "Đón đoàn & Phố cổ Hội An",
      items: [
        "11:30–13:30: Đón đoàn tại Sân bay / Ga Đà Nẵng, nhận phòng khách sạn, ăn trưa nhẹ đặc sản (Bánh tráng cuốn thịt heo / Mì Quảng).",
        "15:30: Xe xuất phát đưa đoàn đi Hội An.",
        "16:30: Dạo bộ ngắm hoàng hôn phố cổ, check-in Chùa Cầu, hoa giấy, uống nước Mót.",
        "18:00: Ăn tối đặc sản Hội An (cơm gà, cao lầu, bánh bao bánh vạc).",
        "19:00: Đi thuyền sông Hoài, thả hoa đăng lung linh ngắm phố đèn lồng.",
        "21:00: Xe đón đoàn về lại khách sạn Đà Nẵng nghỉ ngơi."
      ]
    },
    {
      day: "Ngày 2 (12/08/2026) - Lễ Chính",
      title: "Đại Lễ Tốt Nghiệp & Tiệc Mừng",
      items: [
        "07:00: Đón tiếp Quý khách tại Hội trường Trống Đồng – Đại học FPT Đà Nẵng.",
        "07:30–11:30: Khai mạc Đại Lễ Trao Bằng Tốt Nghiệp chính thức và chụp ảnh kỷ niệm.",
        "11:30–14:00: Tiệc liên hoan mừng tốt nghiệp tại Nhà hàng Hải sản Bé Mặn.",
        "15:30–17:30: Viếng Chùa Linh Ứng (Bán đảo Sơn Trà), ngắm vịnh và tắm biển Mỹ Khê.",
        "18:30–21:30: Ăn tối hải sản, dạo mát Sông Hàn, ngắm Cầu Rồng và Chợ đêm."
      ]
    },
    {
      day: "Ngày 3 (13/08/2026)",
      title: "Đặc Sản & Tạm Biệt Đà Nẵng",
      items: [
        "08:00: Điểm tâm bún chả cá Đà Nẵng truyền thống.",
        "09:00: Tham quan và mua sắm quà lưu niệm tại Chợ Hàn (chả bò, tré, mực rim, bánh khô mè).",
        "10:00: Check-in Công viên APEC bên bờ Sông Hàn.",
        "10:30: Trả phòng khách sạn, tiễn đoàn ra sân bay / ga tàu. Kết thúc chuyến đi!"
      ]
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = invitationConfig;
}
