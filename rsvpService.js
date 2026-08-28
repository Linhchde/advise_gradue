/**
 * ==============================================================================
 * RSVP SERVICE (rsvpService.js)
 * Module xử lý xác nhận tham dự (RSVP) với chế độ Mock Mode và cấu hình API thật.
 * ==============================================================================
 */

const rsvpService = {
  // Cấu hình chế độ hoạt động:
  // 'mock': Chế độ thử nghiệm không cần backend (mặc định)
  // 'google-sheets': Gửi dữ liệu vào Google Sheets thông qua Google Apps Script Web App
  // 'supabase': Gửi dữ liệu vào cơ sở dữ liệu Supabase
  // 'custom-api': Gửi POST request tới API backend riêng
  mode: 'mock',

  // Điền URL endpoint khi bạn kết nối thật:
  endpoints: {
    googleAppsScriptUrl: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec',
    supabaseUrl: 'https://YOUR_PROJECT.supabase.co/rest/v1/rsvps',
    supabaseAnonKey: 'YOUR_SUPABASE_ANON_KEY',
    customApiUrl: 'https://api.yourdomain.com/rsvp'
  },

  /**
   * Kiểm tra tính hợp lệ của dữ liệu RSVP
   * @param {Object} data 
   * @returns {Object} { isValid: boolean, error: string|null }
   */
  validateRSVP(data) {
    if (!data.name || data.name.trim().length < 2) {
      return { isValid: false, error: 'Vui lòng nhập họ và tên của bạn (tối thiểu 2 ký tự).' };
    }

    if (!data.phone || data.phone.trim().length < 9) {
      return { isValid: false, error: 'Vui lòng nhập số điện thoại liên hệ hợp lệ để ban tổ chức đón tiếp chu đáo.' };
    }

    // Kiểm tra định dạng số điện thoại Việt Nam cơ bản
    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    const cleanPhone = data.phone.replace(/[\s.-]/g, '');
    if (!phoneRegex.test(cleanPhone) && cleanPhone.length !== 10) {
      return { isValid: false, error: 'Số điện thoại chưa đúng định dạng. Ví dụ: 0905 123 456' };
    }

    if (!data.attendance) {
      return { isValid: false, error: 'Vui lòng chọn trạng thái tham dự của bạn.' };
    }

    return { isValid: true, error: null };
  },

  /**
   * Gửi dữ liệu xác nhận tham dự RSVP
   * @param {Object} rsvpData 
   * @returns {Promise<Object>}
   */
  async submitRSVP(rsvpData) {
    // 1. Kiểm tra dữ liệu đầu vào
    const validation = this.validateRSVP(rsvpData);
    if (!validation.isValid) {
      return {
        success: false,
        error: validation.error
      };
    }

    const payload = {
      name: rsvpData.name.trim(),
      phone: rsvpData.phone.trim(),
      attendance: rsvpData.attendance, // 'yes' (Chắc chắn tham gia) | 'tentative' (Chưa chắc chắn) | 'no' (Không thể tham gia)
      guestsCount: parseInt(rsvpData.guestsCount, 10) || 1,
      attendanceDays: rsvpData.attendanceDays || ['day2'], // Các ngày có thể tham gia: ['day1', 'day2', 'day3']
      transportNeeded: !!rsvpData.transportNeeded, // Cần xe đưa đón
      dietaryNote: (rsvpData.dietaryNote || '').trim(), // Ăn chay / Dị ứng thực phẩm
      wishes: (rsvpData.wishes || '').trim(), // Lời chúc mừng tới tân cử nhân
      submittedAt: new Date().toISOString()
    };

    try {
      // 2. Xử lý theo từng chế độ
      if (this.mode === 'mock') {
        // Giả lập cuộc gọi mạng với độ trễ tự nhiên (800ms)
        await new Promise((resolve) => setTimeout(resolve, 800));
        console.log('[RSVP Mock Service] Dữ liệu xác nhận nhận được:', payload);
        
        return {
          success: true,
          data: payload,
          message: 'Xác nhận tham dự thành công! Ban tổ chức đã lưu thông tin của bạn.'
        };
      } 
      
      else if (this.mode === 'google-sheets') {
        // Gửi tới Google Apps Script
        const response = await fetch(this.endpoints.googleAppsScriptUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          mode: 'no-cors' // Google Apps Script thường cần mode no-cors
        });
        
        return {
          success: true,
          data: payload,
          message: 'Xác nhận tham dự thành công! Thông tin đã được ghi nhận vào bảng danh sách.'
        };
      } 
      
      else if (this.mode === 'supabase') {
        // Gửi tới Supabase REST API
        const response = await fetch(this.endpoints.supabaseUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': this.endpoints.supabaseAnonKey,
            'Authorization': `Bearer ${this.endpoints.supabaseAnonKey}`,
            'Prefer': 'return=representation'
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error(`Supabase error: ${response.statusText}`);
        }

        const data = await response.json();
        return {
          success: true,
          data: data,
          message: 'Xác nhận tham dự thành công!'
        };
      } 
      
      else if (this.mode === 'custom-api') {
        // Gửi tới REST API riêng của bạn
        const response = await fetch(this.endpoints.customApiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'Lỗi gửi dữ liệu tới máy chủ.');
        }

        return {
          success: true,
          data: data,
          message: data.message || 'Xác nhận tham dự thành công!'
        };
      }

      throw new Error('Chế độ RSVP không hợp lệ.');
    } catch (err) {
      console.error('[RSVP Service Error]', err);
      return {
        success: false,
        error: 'Có lỗi xảy ra khi kết nối tới máy chủ. Vui lòng thử lại hoặc liên hệ trực tiếp qua số điện thoại.'
      };
    }
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = rsvpService;
}
