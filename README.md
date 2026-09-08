# Thư Mời Lễ Tốt Nghiệp • Cao Hoàng Linh

Website thư mời lễ tốt nghiệp chuyên ngành **Kỹ sư phần mềm**, thiết kế theo phong cách thiệp FPT University với giấy kem, khung vàng, vòm xanh và dải ruy-băng cam–xanh. Three.js dựng phong bì, con dấu sáp, mũ tốt nghiệp cùng hiệu ứng ánh sáng và chuyển động.

## Thông tin sự kiện

- **Thời gian:** 06:30, Thứ Bảy, ngày 12/09/2026
- **Địa điểm:** Trường Đại học FPT Đà Nẵng
- **Bữa cơm trưa:** 12:00

## Chạy trên máy tính

Từ thư mục gốc dự án, chạy:

```bash
python -m http.server 8000
```

Sau đó mở `http://localhost:8000`.

Bạn cũng có thể mở thư mục bằng Live Server trong VS Code.

## Triển khai lên Vercel

Dự án đã sẵn sàng triển khai:
- **Qua Vercel Dashboard**: Kết nối repository GitHub `advise_gradue` trên [vercel.com](https://vercel.com) và bấm Deploy.
- **Qua Vercel CLI**:
  ```bash
  npx vercel --prod
  ```

## Cấu trúc thư mục

```text
├── index.html            # Trang thiệp mời chính
├── assets/
│   ├── app.js            # Logic đếm ngược, lưu lịch .ics, chia sẻ liên kết
│   ├── styles.css        # Thiết kế & responsive
│   └── three-scene.js    # Mô hình 3D Three.js (mũ tốt nghiệp, con dấu sáp)
├── vercel.json           # Cấu hình tối ưu Vercel & cache header
├── .gitignore            # Loại trừ file nhạy cảm
└── README.md
```
