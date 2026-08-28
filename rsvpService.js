/**
 * ==============================================================================
 * RSVP SERVICE (rsvpService.js)
 * Module xử lý đăng ký tham dự tại chương Epilogue với đầy đủ trường chi tiết
 * ==============================================================================
 */

const rsvpService = {
  mode: 'mock', // 'mock' | 'google-sheets' | 'supabase' | 'custom-api'

  endpoints: {
    googleAppsScriptUrl: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec',
    supabaseUrl: 'https://YOUR_PROJECT.supabase.co/rest/v1/rsvps',
    supabaseAnonKey: 'YOUR_SUPABASE_ANON_KEY',
    customApiUrl: 'https://api.yourdomain.com/rsvp'
  },

  isSubmitting: false,

  validateRSVP(data) {
    if (!data.name || data.name.trim().length < 2) {
      return { isValid: false, error: 'Vui lòng nhập họ và tên của bạn (tối thiểu 2 ký tự).' };
    }

    if (!data.phone || data.phone.trim().length < 9) {
      return { isValid: false, error: 'Vui lòng nhập số điện thoại liên hệ để ban tổ chức đón tiếp chu đáo.' };
    }

    const cleanPhone = data.phone.replace(/[\s.-]/g, '');
    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    if (!phoneRegex.test(cleanPhone) && cleanPhone.length !== 10) {
      return { isValid: false, error: 'Số điện thoại chưa đúng định dạng. Ví dụ: 0905 123 456' };
    }

    if (!data.attendance) {
      return { isValid: false, error: 'Vui lòng chọn trạng thái tham dự của bạn.' };
    }

    return { isValid: true, error: null };
  },

  async submitRSVP(rsvpData) {
    if (this.isSubmitting) {
      return { success: false, error: 'Đang xử lý yêu cầu, vui lòng không bấm liên tục.' };
    }

    const validation = this.validateRSVP(rsvpData);
    if (!validation.isValid) {
      return { success: false, error: validation.error };
    }

    this.isSubmitting = true;

    const payload = {
      name: rsvpData.name.trim(),
      phone: rsvpData.phone.trim(),
      attendance: rsvpData.attendance, // 'yes' | 'tentative' | 'no'
      guestsCount: parseInt(rsvpData.guestsCount, 10) || 1,
      attendHoiAn: !!rsvpData.attendHoiAn, // Tham gia Hội An Ngày 1
      attendCeremony: !!rsvpData.attendCeremony, // Tham dự Lễ tốt nghiệp Ngày 2
      attendParty: !!rsvpData.attendParty, // Tham dự Tiệc mừng Ngày 2
      needTransport: !!rsvpData.needTransport, // Nhu cầu xe đưa đón
      notes: (rsvpData.notes || '').trim(), // Lời chúc / lưu ý ăn uống
      submittedAt: new Date().toISOString()
    };

    try {
      if (this.mode === 'mock') {
        // Giả lập kết nối mạng 850ms
        await new Promise((resolve) => setTimeout(resolve, 850));
        console.log('[RSVP Story Mock Service] Ghi nhận xác nhận tham dự:', payload);
        
        this.isSubmitting = false;
        return {
          success: true,
          data: payload,
          message: 'Xác nhận tham dự thành công! Ban tổ chức đã lưu thông tin của bạn.'
        };
      } 
      
      else if (this.mode === 'google-sheets') {
        await fetch(this.endpoints.googleAppsScriptUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          mode: 'no-cors'
        });
        
        this.isSubmitting = false;
        return {
          success: true,
          data: payload,
          message: 'Xác nhận tham dự thành công! Thông tin đã được ghi nhận vào danh sách đón tiếp.'
        };
      } 
      
      else if (this.mode === 'supabase') {
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

        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        
        this.isSubmitting = false;
        return {
          success: true,
          data: data,
          message: 'Xác nhận tham dự thành công!'
        };
      } 
      
      else if (this.mode === 'custom-api') {
        const response = await fetch(this.endpoints.customApiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Lỗi gửi dữ liệu.');

        this.isSubmitting = false;
        return {
          success: true,
          data: data,
          message: data.message || 'Xác nhận tham dự thành công!'
        };
      }

      throw new Error('Chế độ RSVP không hợp lệ.');
    } catch (err) {
      console.error('[RSVP Error]', err);
      this.isSubmitting = false;
      return {
        success: false,
        error: 'Có lỗi xảy ra khi kết nối. Vui lòng thử lại hoặc liên hệ trực tiếp qua số điện thoại.'
      };
    }
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = rsvpService;
}
