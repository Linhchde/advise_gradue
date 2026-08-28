/**
 * ==============================================================================
 * CALENDAR HELPER (calendarHelper.js)
 * Tiện ích tạo link Google Calendar, tệp iCalendar (.ics) và sao chép lịch trình
 * ==============================================================================
 */

const calendarHelper = {
  getGoogleCalendarUrl(event) {
    const baseUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
    const title = encodeURIComponent(event.title || `Lễ Tốt Nghiệp Đại Học – ${invitationConfig.graduateName}`);
    const details = encodeURIComponent(
      `Trân trọng kính mời Quý khách tham dự Lễ tốt nghiệp Đại học của ${invitationConfig.graduateName}.\n\n` +
      `👤 Người tốt nghiệp: ${invitationConfig.graduateName}\n` +
      `🎓 Trường: ${invitationConfig.universityName} (${invitationConfig.major})\n` +
      `📍 Địa điểm: ${invitationConfig.ceremonyVenue}\n` +
      `🗺️ Bản đồ: ${invitationConfig.ceremonyMapUrl}\n` +
      `📞 Liên hệ: ${invitationConfig.contactPhone}`
    );
    const location = encodeURIComponent(event.location || invitationConfig.ceremonyAddress);
    const dates = '20260812T003000Z/20260812T043000Z'; // 07:30 - 11:30 VN Time (UTC+7)

    return `${baseUrl}&text=${title}&dates=${dates}&details=${details}&location=${location}&sf=true&output=xml`;
  },

  async copyScheduleToClipboard() {
    const text = 
`🎓 LỄ TỐT NGHIỆP ĐẠI HỌC • ${invitationConfig.graduateName}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Tân cử nhân/kỹ sư: ${invitationConfig.graduateName}
🎓 Trường: ${invitationConfig.universityName} (${invitationConfig.major})
📅 Thời gian chính lễ: ${invitationConfig.ceremonyStartTime} – ${invitationConfig.ceremonyEndTime} | ${invitationConfig.graduationDateFormatted}
📍 Địa điểm: ${invitationConfig.ceremonyVenue}
🗺️ Địa chỉ: ${invitationConfig.ceremonyAddress}
📌 Bản đồ: ${invitationConfig.ceremonyMapUrl}

📍 LỊCH TRÌNH 3 NGÀY ĐÀ NẴNG – HỘI AN (11–13/08/2026):
• NGÀY 1 (11/08): Đón đoàn, ẩm thực đặc sản, dạo phố cổ Hội An, thả hoa đăng sông Hoài.
• NGÀY 2 (12/08): Đại lễ tốt nghiệp tại Tòa nhà Alpha ĐH FPT, Tiệc mừng (12–17 người), Chùa Linh Ứng (Sơn Trà), biển Mỹ Khê, ngắm Cầu Rồng Sông Hàn.
• NGÀY 3 (13/08): Điểm tâm bún chả cá, mua quà Chợ Hàn (chả bò, tré), check-in Công viên APEC và tạm biệt Đà Nẵng.

📞 Liên hệ: ${invitationConfig.contactName} (${invitationConfig.contactPhone})`;

    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(textArea);
      return ok;
    }
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = calendarHelper;
}
