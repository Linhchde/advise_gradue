/**
 * ==============================================================================
 * INVITATION CONFIGURATION (invitationConfig.js)
 * Trung tâm quản lý thông tin, dữ liệu sự kiện và nội dung cốt truyện (Storytelling)
 * ==============================================================================
 */

const invitationConfig = {
  // 1. Thông tin cá nhân & Nhân vật chính
  graduateName: "Cao Hoàng Linh",
  guestName: "", // Để trống để tự động lấy từ query string (?guest=Tên hoặc ?to=Tên), mặc định: "Gia đình và những người bạn thân yêu"
  universityName: "Đại học FPT Đà Nẵng",
  faculty: "Khoa Công nghệ Thông tin",
  major: "Kỹ thuật Phần mềm",
  className: "K16 - Software Engineering",
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

  // 7. Cốt truyện 5 chương (Progressive Storytelling Chapters)
  storyChapters: [
    {
      id: 0,
      code: "PROLOGUE",
      title: "Lá thư được gửi đến",
      subtitle: "Khởi đầu của một lời hẹn",
      themeColor: "navy",
      quote1: "Có những hành trình được bắt đầu bằng một chuyến đi.\nCó những hành trình lại bắt đầu từ một lời hẹn.",
      quote2: "Một cột mốc quan trọng đang chờ được mở ra tại Đà Nẵng.\nVà trong câu chuyện ấy, tôi mong bạn sẽ có mặt.",
      ctaText: "MỞ LÁ THƯ",
      fragmentName: "Mảnh Giấy Khởi Đầu",
      fragmentIcon: "ri-mail-star-fill"
    },
    {
      id: 1,
      code: "CHAPTER I",
      title: "Cuộc hẹn nơi phố cổ",
      subtitle: "Thứ Ba, 11/08/2026 • Đà Nẵng và Hội An",
      themeColor: "purple",
      leadQuote: "Trước ngày quan trọng nhất, chúng ta sẽ gặp nhau giữa thành phố biển. Từ đó, hành trình đầu tiên sẽ đưa mọi người đến những con phố nhuốm màu thời gian.",
      moments: [
        {
          tag: "11:30–13:30 • Đà Nẵng",
          title: "Đoàn tụ tại thành phố biển",
          story: "Đón những người thân thương từ mọi miền tại sân bay và ga Đà Nẵng, cùng thưởng thức món bánh tráng cuốn thịt heo Đại Lộc và mì Quảng thân quen trước khi nhận phòng nghỉ ngơi.",
          location: "Bãi biển Mỹ Khê, Đà Nẵng",
          mapUrl: "https://maps.google.com/?q=Bãi+biển+Mỹ+Khê,+Đà+Nẵng",
          icon: "ri-hotel-bed-line"
        },
        {
          tag: "15:30 • Khởi hành",
          title: "Chuyến xe về miền di sản",
          story: "Xe lăn bánh đưa cả nhà rời trung tâm Đà Nẵng về phía nam, băng qua cung đường biển lộng gió để đến với Phố cổ Hội An mộc mạc.",
          location: "Cung đường Đà Nẵng – Hội An",
          icon: "ri-car-line"
        },
        {
          tag: "16:30 • Phố cổ Hội An",
          title: "Hoàng hôn bên mái ngói rêu phong",
          story: "Khi ánh nắng cuối ngày chạm lên những mái ngói cũ, chúng ta sẽ cùng nhau đi qua di tích Chùa Cầu, những giàn hoa giấy rực rỡ và nếm thử ly nước Mót thảo mộc thanh mát.",
          location: "Chùa Cầu & Phố cổ Hội An",
          mapUrl: "https://maps.google.com/?q=Phố+cổ+Hội+An,+Quảng+Nam",
          icon: "ri-ancient-gate-line"
        },
        {
          tag: "19:00 • Sông Hoài",
          title: "Ánh hoa đăng và ngàn ngọn đèn lồng",
          story: "Ngồi thuyền gỗ lững lờ trôi giữa dòng sông Hoài, thả những chiếc hoa đăng lung linh mang theo ước nguyện bình an, trước khi trở về khách sạn Đà Nẵng nghỉ ngơi.",
          location: "Bến thuyền Sông Hoài, Hội An",
          mapUrl: "https://maps.google.com/?q=Sông+Hoài,+Hội+An",
          icon: "ri-flashlight-line"
        }
      ],
      endQuote: "Nhưng hành trình này mới chỉ bắt đầu. Ngày mai là khoảnh khắc mà tất cả chúng ta đã chờ đợi.",
      ctaText: "BƯỚC ĐẾN NGÀY QUAN TRỌNG",
      fragmentName: "Mảnh Ký Ức Phố Cổ",
      fragmentIcon: "ri-ancient-pavilion-fill"
    },
    {
      id: 2,
      code: "CHAPTER II",
      title: "Ngày giấc mơ thành hiện thực",
      subtitle: "Thứ Tư, 12/08/2026 • Lễ Tốt Nghiệp và Tiệc Mừng",
      themeColor: "gold",
      leadQuote: "Sau những năm tháng học tập, những lần vấp ngã và những ngày không ngừng cố gắng, cuối cùng ngày ấy cũng đã đến.",
      scenes: [
        {
          time: "07:00–07:30",
          title: "Buổi sáng trước giờ khai lễ",
          story: "Không gian Hội trường Trống Đồng ngập tràn niềm hân hoan, đón tiếp gia đình và thầy cô bước vào lễ đường trang trọng.",
          icon: "ri-sun-line"
        },
        {
          time: "07:30–10:30",
          title: "Khoảnh khắc bước lên lễ đài",
          story: "Giây phút xướng tên tân kỹ sư Cao Hoàng Linh, đón nhận tấm bằng tốt nghiệp trong tiếng vỗ tay chúc mừng của gia đình và bạn bè.",
          icon: "ri-award-fill",
          isHighlight: true
        },
        {
          time: "10:30–11:30",
          title: "Bức ảnh kỷ niệm vô giá",
          story: "Những nụ cười rạng rỡ bên bó hoa tươi thắm, lưu lại khoảnh khắc thanh xuân trọn vẹn tại khuôn viên trường.",
          icon: "ri-camera-fill"
        },
        {
          time: "11:30–14:00",
          title: "Bữa tiệc liên hoan ấm áp",
          story: "Nâng ly chúc mừng cùng đại gia đình tại nhà hàng hải sản ven biển, sẻ chia những câu chuyện xúc động trong suốt chặng đường đại học.",
          location: "Nhà hàng Hải sản Bé Mặn, Đường Võ Nguyên Giáp",
          mapUrl: "https://maps.google.com/?q=Nhà+hàng+Bé+Mặn,+Võ+Nguyên+Giáp,+Sơn+Trà,+Đà+Nẵng",
          icon: "ri-goblet-fill"
        },
        {
          time: "15:30–21:30",
          title: "Hoàng hôn Sơn Trà & Đêm Sông Hàn",
          story: "Viếng Chùa Linh Ứng Bãi Bụt nhìn ra biển Đông, tắm biển Mỹ Khê và dạo mát ngắm Cầu Rồng phun lửa bên dòng Sông Hàn lung linh.",
          location: "Chùa Linh Ứng (Sơn Trà) & Cầu Rồng Sông Hàn",
          mapUrl: "https://maps.google.com/?q=Chùa+Linh+Ứng,+Bán+đảo+Sơn+Trà,+Đà+Nẵng",
          icon: "ri-water-flash-fill"
        }
      ],
      coreMessage: "Buổi lễ đánh dấu sự kết thúc của một chặng đường, nhưng sự hiện diện của những người tôi yêu quý mới là điều khiến ngày hôm ấy trở nên trọn vẹn.",
      endQuote: "Một tấm bằng khép lại quãng đời sinh viên. Nhưng những kỷ niệm của chúng ta vẫn còn một chương nữa.",
      ctaText: "VIẾT TIẾP HÀNH TRÌNH",
      fragmentName: "Mảnh Vinh Quang Tốt Nghiệp",
      fragmentIcon: "ri-graduation-cap-fill"
    },
    {
      id: 3,
      code: "CHAPTER III",
      title: "Những khoảnh khắc cuối",
      subtitle: "Thứ Năm, 13/08/2026 • Đặc Sản, Tham Quan và Tạm Biệt",
      themeColor: "cyan",
      leadQuote: "Mọi chuyến đi rồi cũng đến lúc khép lại. Nhưng trước khi nói lời tạm biệt, hãy cùng nhau giữ lại thêm một vài ký ức về Đà Nẵng.",
      moments: [
        {
          tag: "08:00 • Điểm tâm sáng",
          title: "Bát bún chả cá nồng nàn vị biển",
          story: "Bắt đầu ngày mới bằng món bún chả cá Đà Nẵng nóng hổi đậm đà hương vị miền Trung.",
          icon: "ri-cup-line"
        },
        {
          tag: "09:00 • Chợ Hàn",
          title: "Gói ghém hương vị làm quà",
          story: "Cùng nhau chọn những gói chả bò thơm lừng, tré Bà Đệ, mực rim me và bánh khô mè Cẩm Lệ gửi tặng người thân.",
          location: "Chợ Hàn, Đường Trần Phú, Đà Nẵng",
          mapUrl: "https://maps.google.com/?q=Chợ+Hàn,+Đà+Nẵng",
          icon: "ri-store-2-line"
        },
        {
          tag: "10:00 • Công viên APEC",
          title: "Cánh diều bay cao bên bờ sông Hàn",
          story: "Chụp tấm ảnh lưu niệm cuối cùng bên công trình kiến trúc Cánh diều APEC biểu tượng cho khát vọng vươn xa.",
          location: "Công viên APEC, Đường 2 Tháng 9, Đà Nẵng",
          mapUrl: "https://maps.google.com/?q=Công+viên+APEC,+Đà+Nẵng",
          icon: "ri-flight-takeoff-line"
        },
        {
          tag: "10:30 • Tạm biệt",
          title: "Hẹn ngày tái ngộ",
          story: "Những cái ôm ấm áp trước giờ ra sân bay và nhà ga, khép lại hành trình 3 ngày đong đầy kỷ niệm.",
          icon: "ri-heart-2-line"
        }
      ],
      endQuote: "Ba ngày có thể trôi qua rất nhanh. Nhưng những khoảnh khắc được sẻ chia sẽ ở lại lâu hơn rất nhiều.",
      ctaText: "MỞ TRANG CUỐI",
      fragmentName: "Mảnh Kỷ Niệm Tạm Biệt",
      fragmentIcon: "ri-gift-fill"
    },
    {
      id: 4,
      code: "EPILOGUE",
      title: "Hẹn gặp nhau tại Đà Nẵng",
      subtitle: "Lời mời chính thức và Xác nhận tham dự",
      themeColor: "rainbow",
      thankQuote: "Cảm ơn bạn đã đi đến cuối hành trình này.\n\nSẽ thật ý nghĩa nếu trong ngày đánh dấu một chặng đường mới, tôi có thể nhìn thấy gia đình và những người bạn thân yêu ở đó.\n\nHẹn gặp bạn tại Đà Nẵng.",
      ceremonySummary: {
        date: "Thứ Tư, 12/08/2026",
        time: "07:30 – 11:30 (Đón khách: 07:00)",
        venue: "Hội trường Trống Đồng – Đại học FPT Đà Nẵng",
        deadline: "Hạn xác nhận: 05/08/2026"
      },
      ctaPrimary: "XÁC NHẬN CÙNG THAM DỰ",
      ctaSecondary: "LƯU HÀNH TRÌNH VÀO LỊCH"
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = invitationConfig;
}
