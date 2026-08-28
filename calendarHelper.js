/**
 * ==============================================================================
 * CALENDAR HELPER (calendarHelper.js)
 * Tiện ích tạo link Google Calendar, tệp iCalendar (.ics) và sao chép lịch trình.
 * ==============================================================================
 */

const calendarHelper = {
  /**
   * Tạo đường dẫn trực tiếp mở Google Calendar
   * @param {Object} event 
   * @returns {string} Google Calendar URL
   */
  getGoogleCalendarUrl(event) {
    const baseUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
    
    // Định dạng ngày giờ UTC: YYYYMMDDTHHmmssZ
    // Sự kiện Lễ tốt nghiệp: 12/08/2026 07:30 - 11:30 (Giờ VN = UTC+7 -> UTC: 00:30 - 04:30)
    const title = encodeURIComponent(event.title || `Lễ Tốt Nghiệp Đại Học – ${invitationConfig.graduateName}`);
    const details = encodeURIComponent(
      `${event.description || 'Trân trọng kính mời Quý khách tham dự Lễ tốt nghiệp Đại học.'}\n\n` +
      `👤 Người tốt nghiệp: ${invitationConfig.graduateName}\n` +
      `🎓 Trường: ${invitationConfig.universityName} (${invitationConfig.major})\n` +
      `📍 Địa điểm: ${invitationConfig.ceremonyVenue}\n` +
      `🗺️ Bản đồ: ${invitationConfig.ceremonyMapUrl}\n` +
      `📞 Liên hệ: ${invitationConfig.contactPhone}`
    );
    const location = encodeURIComponent(event.location || invitationConfig.ceremonyAddress);
    
    // 2026-08-12 07:30 VN (00:30 UTC) -> 2026-08-12 11:30 VN (04:30 UTC)
    const dates = event.dates || '20260812T003000Z/20260812T043000Z';

    return `${baseUrl}&text=${title}&dates=${dates}&details=${details}&location=${location}&sf=true&output=xml`;
  },

  /**
   * Tạo và tải xuống tệp iCalendar (.ics) cho Apple Calendar, Outlook, Google Calendar
   * @param {string} mode 'ceremony' (chỉ lễ tốt nghiệp) | 'full' (toàn bộ chuyến đi)
   */
  downloadIcsFile(mode = 'ceremony') {
    let icsContent = '';

    if (mode === 'ceremony') {
      icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Cao Hoang Linh//Graduation Invitation 2026//VI',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'BEGIN:VTIMEZONE',
        'TZID:Asia/Ho_Chi_Minh',
        'BEGIN:STANDARD',
        'DTSTART:19700101T000000',
        'TZOFFSETFROM:+0700',
        'TZOFFSETTO:+0700',
        'TZNAME:ICT',
        'END:STANDARD',
        'END:VTIMEZONE',
        'BEGIN:VEVENT',
        'UID:graduation-ceremony-2026-linhchde@danang',
        'DTSTAMP:' + this.formatIcsDate(new Date()),
        'DTSTART;TZID=Asia/Ho_Chi_Minh:20260812T073000',
        'DTEND;TZID=Asia/Ho_Chi_Minh:20260812T113000',
        `SUMMARY:🎓 Lễ Tốt Nghiệp Đại Học – ${invitationConfig.graduateName}`,
        `DESCRIPTION:Trân trọng kính mời Quý khách tham dự Lễ tốt nghiệp Đại học của ${invitationConfig.graduateName} tại ${invitationConfig.universityName}.\\nĐịa chỉ: ${invitationConfig.ceremonyAddress}\\nBản đồ: ${invitationConfig.ceremonyMapUrl}\\nLiên hệ: ${invitationConfig.contactPhone}`,
        `LOCATION:${invitationConfig.ceremonyVenue}, ${invitationConfig.ceremonyAddress}`,
        'STATUS:CONFIRMED',
        'SEQUENCE:0',
        'BEGIN:VALARM',
        'TRIGGER:-PT2H',
        'ACTION:DISPLAY',
        'DESCRIPTION:Nhắc nhở: Lễ tốt nghiệp sẽ diễn ra trong 2 giờ nữa',
        'END:VALARM',
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\r\n');
    } else {
      // Toàn bộ hành trình 3 ngày
      icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Cao Hoang Linh//Graduation Trip 2026//VI',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'BEGIN:VTIMEZONE',
        'TZID:Asia/Ho_Chi_Minh',
        'BEGIN:STANDARD',
        'DTSTART:19700101T000000',
        'TZOFFSETFROM:+0700',
        'TZOFFSETTO:+0700',
        'TZNAME:ICT',
        'END:STANDARD',
        'END:VTIMEZONE',
        // Event 1: Ngày 1 Hội An
        'BEGIN:VEVENT',
        'UID:trip-day1-hoian-2026@danang',
        'DTSTAMP:' + this.formatIcsDate(new Date()),
        'DTSTART;TZID=Asia/Ho_Chi_Minh:20260811T113000',
        'DTEND;TZID=Asia/Ho_Chi_Minh:20260811T210000',
        `SUMMARY:📍 Ngày 1: Đón đoàn & Khám phá Phố cổ Hội An`,
        `DESCRIPTION:Đón đoàn tại Đà Nẵng, ăn trưa đặc sản, dạo phố cổ Hội An, thả hoa đăng sông Hoài.\\nLiên hệ: ${invitationConfig.contactPhone}`,
        'LOCATION:Phố cổ Hội An, Quảng Nam',
        'END:VEVENT',
        // Event 2: Ngày 2 Lễ tốt nghiệp
        'BEGIN:VEVENT',
        'UID:trip-day2-ceremony-2026@danang',
        'DTSTAMP:' + this.formatIcsDate(new Date()),
        'DTSTART;TZID=Asia/Ho_Chi_Minh:20260812T073000',
        'DTEND;TZID=Asia/Ho_Chi_Minh:20260812T140000',
        `SUMMARY:🎓 Ngày 2: ĐẠI LỄ TỐT NGHIỆP & TIỆC MỪNG (${invitationConfig.graduateName})`,
        `DESCRIPTION:Lễ trao bằng tại Đại học FPT Đà Nẵng và Tiệc mừng cùng gia đình & bạn bè.\\nĐịa điểm: ${invitationConfig.ceremonyVenue}\\nBản đồ: ${invitationConfig.ceremonyMapUrl}`,
        `LOCATION:${invitationConfig.ceremonyVenue}`,
        'END:VEVENT',
        // Event 3: Ngày 3 Đặc sản & Tạm biệt
        'BEGIN:VEVENT',
        'UID:trip-day3-shopping-2026@danang',
        'DTSTAMP:' + this.formatIcsDate(new Date()),
        'DTSTART;TZID=Asia/Ho_Chi_Minh:20260813T080000',
        'DTEND;TZID=Asia/Ho_Chi_Minh:20260813T103000',
        `SUMMARY:🛍️ Ngày 3: Mua sắm đặc sản Chợ Hàn & Check-in APEC`,
        `DESCRIPTION:Ăn sáng bún chả cá, mua sắm quà Chợ Hàn, check-in Công viên APEC và tạm biệt Đà Nẵng.`,
        'LOCATION:Chợ Hàn & Công viên APEC, Đà Nẵng',
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\r\n');
    }

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', mode === 'ceremony' ? 'le-tot-nghiep-cao-hoang-linh.ics' : 'hanh-trinh-tot-nghiep-da-nang-2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },

  formatIcsDate(date) {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  },

  /**
   * Tạo văn bản lịch trình chi tiết và sao chép vào bộ nhớ tạm
   * @returns {Promise<boolean>}
   */
  async copyScheduleToClipboard() {
    const text = 
`🎓 THƯ MỜI LỄ TỐT NGHIỆP & HÀNH TRÌNH DU NGOẠN ĐÀ NẴNG – HỘI AN 2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Người tốt nghiệp: ${invitationConfig.graduateName}
🎓 Trường: ${invitationConfig.universityName} (${invitationConfig.major})
📅 Thời gian chính lễ: ${invitationConfig.ceremonyStartTime} – ${invitationConfig.ceremonyEndTime} | ${invitationConfig.graduationDateFormatted}
📍 Địa điểm lễ: ${invitationConfig.ceremonyVenue}
🗺️ Địa chỉ: ${invitationConfig.ceremonyAddress}
📌 Bản đồ: ${invitationConfig.ceremonyMapUrl}
👔 Trang phục: ${invitationConfig.dressCode}

📍 LỊCH TRÌNH 3 NGÀY CHI TIẾT:
• NGÀY 1 (11/08/2026): Đón đoàn, nhận phòng khách sạn, thưởng thức đặc sản, dạo phố cổ Hội An, thả hoa đăng sông Hoài.
• NGÀY 2 (12/08/2026): Đại Lễ Tốt Nghiệp trang trọng tại trường, Tiệc mừng ấm cúng, viếng Chùa Linh Ứng (Sơn Trà), tắm biển Mỹ Khê, ngắm Cầu Rồng sông Hàn về đêm.
• NGÀY 3 (13/08/2026): Điểm tâm bún chả cá, mua sắm đặc sản Chợ Hàn (chả bò, tré), check-in Công viên APEC và tạm biệt Đà Nẵng.

📞 Liên hệ / Đón tiếp: ${invitationConfig.contactName} (${invitationConfig.contactPhone})
✨ Rất hân hạnh và trân trọng được đón tiếp Quý khách!`;

    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    }
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = calendarHelper;
}
