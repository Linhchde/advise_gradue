# Thư Mời Lễ Tốt Nghiệp • Cao Hoàng Linh

Website thư mời lễ tốt nghiệp chuyên ngành **Kỹ sư phần mềm**, được thiết kế bằng HTML, CSS, JavaScript và Three.js. Giao diện tối ưu cho cả máy tính lẫn điện thoại, có mô hình mũ tốt nghiệp 3D, hiệu ứng chuyển động nhẹ, lịch trình và nút lưu sự kiện vào lịch.

## Thông tin sự kiện

- **Thời gian:** 06:30, Thứ Bảy, ngày 12/09/2026
- **Địa điểm:** Trường Đại học FPT Đà Nẵng
- **Bữa cơm trưa:** 12:00

## Chạy trên máy tính

Website không cần bước build. Từ thư mục repository, chạy:

```bash
python -m http.server 8000 -d dist
```

Sau đó mở `http://localhost:8000`.

## Triển khai trên Vercel

Repository đã có sẵn `vercel.json`, vì vậy không cần cài thư viện hay chạy lệnh build.
Chỉ cần import repository vào Vercel và triển khai với cấu hình mặc định. Vercel sẽ phục vụ
trực tiếp thư mục `dist`.

Nếu gửi liên kết cho gia đình, hãy tắt **Vercel Authentication** trong phần
**Project Settings → Deployment Protection** để người nhận không bị chuyển tới màn hình đăng nhập.

## Cấu trúc

```text
dist/
├── index.html
└── assets/
    ├── app.js
    ├── styles.css
    └── three-scene.js
```

## Tùy chỉnh nhanh

- Nội dung thư mời và lịch trình: `dist/index.html`
- Màu sắc, bố cục, responsive: `dist/assets/styles.css`
- Đếm ngược và file lịch: `dist/assets/app.js`
- Mô hình, ánh sáng và chuyển động 3D: `dist/assets/three-scene.js`

Three.js được ghim phiên bản `0.180.0` để giao diện ổn định khi triển khai.
