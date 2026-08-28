/**
 * ==============================================================================
 * INVITATION CONFIGURATION (invitationConfig.js)
 * Trung tâm quản lý toàn bộ dữ liệu, thông tin cá nhân và lịch trình sự kiện.
 * Thay đổi thông tin tại đây sẽ tự động cập nhật trên toàn bộ website.
 * ==============================================================================
 */

const invitationConfig = {
  // 1. Thông tin cá nhân & Nhân vật chính
  graduateName: "Cao Hoàng Linh",
  guestName: "", // Để trống để tự động lấy từ tham số URL (?guest=Tên hoặc ?to=Tên), mặc định: "Gia đình và bạn bè"
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

  // 7. Lịch trình chi tiết 3 ngày
  itinerary: [
    {
      dayIndex: 1,
      dayTitle: "Đón đoàn và Khám phá Phố cổ Hội An",
      dateShort: "11/08/2026",
      dateFull: "Thứ Ba, 11/08/2026",
      groupTarget: "Đoàn người thân và bạn bè phương xa",
      badgeType: "optional", // 'ceremony' (chính thức) | 'optional' (tùy chọn)
      badgeLabel: "Lịch trình đón đoàn",
      events: [
        {
          timeSlot: "11:30–13:30",
          period: "Trưa",
          title: "Đón đoàn & Nhận phòng khách sạn",
          isCeremony: false,
          isTentative: false,
          description: "Xe đón đoàn tại Sân bay Quốc tế Đà Nẵng / Ga Đà Nẵng về khách sạn nhận phòng, gửi hành lý và nghỉ ngơi.",
          subSteps: [
            "Thưởng thức bữa trưa nhẹ với đặc sản Đà Nẵng (Bánh tráng cuốn thịt heo Đại Lộc / Mì Quảng ếch).",
            "Nghỉ ngơi hồi sức tại khách sạn ven biển."
          ],
          location: "Khu vực Bãi biển Mỹ Khê, Đà Nẵng",
          mapUrl: "https://maps.google.com/?q=Bãi+biển+Mỹ+Khê,+Đà+Nẵng"
        },
        {
          timeSlot: "15:30–21:00",
          period: "Chiều – Tối",
          title: "Du ngoạn Phố cổ Hội An",
          isCeremony: false,
          isTentative: false,
          description: "Khám phá không gian hoài niệm và ẩm thực truyền thống tại Di sản Văn hóa Thế giới Phố cổ Hội An.",
          subSteps: [
            "15:30: Xe đón đoàn xuất phát đi Hội An (thời gian di chuyển khoảng 40 phút).",
            "16:30: Dạo bộ ngắm hoàng hôn phố cổ, check-in di tích Chùa Cầu và giàn hoa giấy rực rỡ.",
            "18:00: Ăn tối đặc sản Hội An (cơm gà bà Buội, cao lầu, bánh bao bánh vạc).",
            "19:00: Đi thuyền gỗ trên sông Hoài, thả hoa đăng nguyện ước, thưởng thức nước Mót thảo mộc và kem ống truyền thống.",
            "21:00: Xe đón đoàn về lại khách sạn tại Đà Nẵng nghỉ ngơi."
          ],
          location: "Phố cổ Hội An, Quảng Nam",
          mapUrl: "https://maps.google.com/?q=Phố+cổ+Hội+An,+Quảng+Nam"
        }
      ]
    },
    {
      dayIndex: 2,
      dayTitle: "Đại Lễ Tốt Nghiệp và Tiệc Mừng Kỷ Niệm",
      dateShort: "12/08/2026",
      dateFull: "Thứ Tư, 12/08/2026",
      groupTarget: "Toàn thể Gia đình, Thầy cô và Bạn bè thân hữu",
      badgeType: "ceremony",
      badgeLabel: "Sự kiện chính",
      events: [
        {
          timeSlot: "07:30–11:30",
          period: "Sáng",
          title: "ĐẠI LỄ TỐT NGHIỆP TRANG TRỌNG",
          isCeremony: true,
          isTentative: false,
          description: "Tham dự buổi Lễ trao bằng Tốt nghiệp Đại học chính thức của tân cử nhân/kỹ sư Cao Hoàng Linh.",
          subSteps: [
            "07:00: Đón tiếp Quý khách và ổn định chỗ ngồi tại Hội trường Trống Đồng.",
            "07:30: Khai mạc nghi lễ trao bằng tốt nghiệp trang trọng.",
            "10:30–11:30: Chụp ảnh lưu niệm cùng gia đình, thầy cô và bạn bè tại các khu check-in trường."
          ],
          location: "Hội trường Trống Đồng – Đại học FPT Đà Nẵng",
          mapUrl: "https://maps.google.com/?q=Đại+học+FPT+Đà+Nẵng"
        },
        {
          timeSlot: "11:30–14:00",
          period: "Trưa",
          title: "Tiệc Liên Hoan Mừng Tốt Nghiệp",
          isCeremony: true,
          isTentative: false,
          description: "Bữa tiệc liên hoan thân mật, ấm cúng cùng gia đình, người thân và bạn bè thân hữu.",
          subSteps: [
            "Nâng ly chúc mừng tân cử nhân và chia sẻ những khoảnh khắc đáng nhớ.",
            "Sau bữa tiệc, xe đưa quý khách về khách sạn nghỉ trưa."
          ],
          location: "Nhà hàng Hải sản Bé Mặn, Đường Võ Nguyên Giáp, Đà Nẵng",
          mapUrl: "https://maps.google.com/?q=Nhà+hàng+Bé+Mặn,+Võ+Nguyên+Giáp,+Sơn+Trà,+Đà+Nẵng"
        },
        {
          timeSlot: "15:30–17:30",
          period: "Chiều",
          title: "Viếng Chùa Linh Ứng và Ngắm Biển Mỹ Khê",
          isCeremony: false,
          isTentative: false,
          description: "Tham quan Bán đảo Sơn Trà, chiêm bái Tượng Phật Bà Quan Âm 67m ngắm toàn cảnh Vịnh Đà Nẵng, sau đó tắm biển Mỹ Khê.",
          subSteps: [
            "Viếng Chùa Linh Ứng Bãi Bụt cầu bình an và may mắn.",
            "Thư giãn, tắm biển và ngắm hoàng hôn tuyệt đẹp trên bãi biển Mỹ Khê."
          ],
          location: "Chùa Linh Ứng (Sơn Trà) và Biển Mỹ Khê",
          mapUrl: "https://maps.google.com/?q=Chùa+Linh+Ứng,+Bãi+Bụt,+Bán+đảo+Sơn+Trà,+Đà+Nẵng"
        },
        {
          timeSlot: "18:30–21:30",
          period: "Tối",
          title: "Đại Tiệc Ẩm Thực và Chiêm Ngưỡng Cầu Rồng Sông Hàn",
          isCeremony: false,
          isTentative: false,
          description: "Thưởng thức ẩm thực miền Trung và dạo mát ngắm thành phố Đà Nẵng lung linh về đêm.",
          subSteps: [
            "Bữa tối ấm cúng cùng hải sản tươi sống và món ngon Đà thành.",
            "Dạo bộ ngắm cảnh đôi bờ Sông Hàn, check-in Cầu Tình Yêu, tượng Cá Chép Hóa Rồng và Chợ đêm Sơn Trà."
          ],
          location: "Cầu Tình Yêu và Cầu Rồng Sông Hàn, Đà Nẵng",
          mapUrl: "https://maps.google.com/?q=Cầu+Tình+Yêu,+Đường+Trần+Hưng+Đạo,+Đà+Nẵng"
        }
      ]
    },
    {
      dayIndex: 3,
      dayTitle: "Mua Sắm Đặc Sản và Tạm Biệt Đà Nẵng",
      dateShort: "13/08/2026",
      dateFull: "Thứ Năm, 13/08/2026",
      groupTarget: "Gia đình và bạn bè",
      badgeType: "optional",
      badgeLabel: "Lịch trình tự do",
      events: [
        {
          timeSlot: "08:00–10:30",
          period: "Sáng",
          title: "Thưởng thức Bún Chả Cá, Mua Quà Chợ Hàn và Check-in Công viên APEC",
          isCeremony: false,
          isTentative: false,
          description: "Khám phá ẩm thực điểm tâm truyền thống và mua sắm quà lưu niệm đặc sản Đà Nẵng trước khi rời thành phố.",
          subSteps: [
            "08:00: Điểm tâm sáng với món Bún chả cá Đà Nẵng trứ danh (hoặc Bánh canh ruộng).",
            "09:00: Tham quan và mua sắm đặc sản miền Trung tại Chợ Hàn (chả bò Đà Nẵng loại 1, tré Bà Đệ, mực rim me, bánh khô mè Cẩm Lệ).",
            "10:00: Check-in chụp ảnh kỷ niệm tại kiến trúc Cánh diều Công viên APEC bên bờ sông Hàn.",
            "10:30: Đoàn trả phòng khách sạn, xe đưa tiễn ra sân bay / nhà ga. Kết thúc chuyến đi trọn vẹn và ý nghĩa!"
          ],
          location: "Chợ Hàn và Công viên APEC, Quận Hải Châu, Đà Nẵng",
          mapUrl: "https://maps.google.com/?q=Chợ+Hàn,+Đà+Nẵng"
        }
      ]
    }
  ]
};

// Export để sử dụng trong trình duyệt hoặc Node.js môi trường
if (typeof module !== "undefined" && module.exports) {
  module.exports = invitationConfig;
}
