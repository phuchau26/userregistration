# User Registration Application

Ứng dụng quản lý đăng ký người dùng được xây dựng với **React** (Frontend) và **NestJS** (Backend).

## 📋 Mục lục

- [Yêu cầu hệ thống](#yêu-cầu-hệ-thống)
- [Cài đặt dự án](#cài-đặt-dự-án)
- [Chạy dự án](#chạy-dự-án)
- [Cấu trúc dự án](#cấu-trúc-dự-án)
- [Công nghệ sử dụng](#công-nghệ-sử-dụng)
- [Troubleshooting](#-troubleshooting)

## 🔧 Yêu cầu hệ thống

Đảm bảo bạn đã cài đặt:

- **Node.js**: phiên bản 14.x trở lên (khuyến nghị 18.x hoặc cao hơn)
- **npm**: phiên bản 6.x trở lên hoặc **yarn**

### Kiểm tra cài đặt

```bash
node --version
npm --version
```

## 📥 Cài đặt dự án

### 1. Cài đặt dependencies cho Backend

```bash
cd backend
npm install
```

### 2. Cài đặt dependencies cho Frontend

```bash
cd ../frontend
npm install
```

## 🚀 Chạy dự án

### Bước 1: Chạy Backend (NestJS)

Mở terminal và chạy:

```bash
cd backend
npm run start:dev
```

Backend sẽ chạy tại `http://localhost:3001`

**Các lệnh khác:**

- `npm run build` - Build dự án cho production
- `npm run start:prod` - Chạy production build
- `npm run lint` - Chạy ESLint
- `npm run test` - Chạy unit tests
- `npm run test:e2e` - Chạy end-to-end tests

### Bước 2: Chạy Frontend (React + Vite)

Mở terminal mới và chạy:

```bash
cd frontend
npm run dev
```

Frontend sẽ chạy tại `http://localhost:5173`

**Các lệnh khác:**

- `npm run build` - Build dự án cho production
- `npm run preview` - Xem preview production build
- `npm run lint` - Chạy ESLint

## 📁 Cấu trúc dự án

```
UserRegistration/
├── backend/                 # NestJS Backend
│   ├── src/
│   │   ├── user/           # User module
│   │   │   ├── dto/        # Data Transfer Objects
│   │   │   ├── repositories/
│   │   │   ├── user.controller.ts
│   │   │   ├── user.service.ts
│   │   │   ├── user.schema.ts
│   │   │   └── user.module.ts
│   │   ├── app.controller.ts
│   │   ├── app.service.ts
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── test/               # E2E tests
│   ├── package.json
│   ├── tsconfig.json
│   └── .env               # Environment variables
│
├── frontend/              # React + Vite Frontend
│   ├── src/
│   │   ├── pages/         # React pages
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── components/    # Reusable components
│   │   │   ├── Button.jsx
│   │   │   ├── FormInput.jsx
│   │   │   └── FeedbackMessage.jsx
│   │   ├── api/           # API calls
│   │   │   └── user.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── .env               # Environment variables
│
└── README.md
```

## 🛠 Công nghệ sử dụng

### Backend (NestJS)

- **NestJS** ^11.0.1 - Framework Node.js progressive
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **bcrypt** - Password hashing
- **Class Validator** - Data validation
- **TypeScript** - Type-safe JavaScript

### Frontend (React)

- **React** ^19.2.0 - UI library
- **Vite** ^7.2.4 - Build tool
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Hook Form** - Form management
- **TanStack Query** - Data fetching & caching
- **Tailwind CSS** - Utility-first CSS framework

## 🔗 API Endpoints

| Method | Endpoint        | Mô tả                    |
| ------ | --------------- | ------------------------ |
| GET    | `/api/user`     | Lấy danh sách người dùng |
| GET    | `/api/user/:id` | Lấy chi tiết người dùng  |
| POST   | `/api/user`     | Tạo người dùng mới       |
| PUT    | `/api/user/:id` | Cập nhật người dùng      |
| DELETE | `/api/user/:id` | Xóa người dùng           |

## 📝 Ghi chú

- File `.env` đã được cấu hình sẵn cho cả Backend và Frontend
- MongoDB đang được kết nối qua MongoDB Atlas
- Frontend sẽ tự động gọi API từ Backend thông qua URL được cấu hình

## ❓ Troubleshooting

### Backend không khởi động

- Đảm bảo đã cài đặt dependencies: `npm install`
- Kiểm tra Node.js và npm đã được cài đặt đúng

### Frontend không khởi động

- Đảm bảo đã cài đặt dependencies: `npm install`
- Nếu lỗi port 5173, có thể port đã được sử dụng

### Frontend không kết nối được Backend

- Đảm bảo Backend đang chạy trên `http://localhost:3001`
- Kiểm tra `VITE_API_URL` trong file `.env` frontend

## 📞 Hỗ trợ

Nếu gặp vấn đề, vui lòng kiểm tra logs hoặc tạo issue trong repository.
