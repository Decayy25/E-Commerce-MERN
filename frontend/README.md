# 🛒 E-Commerce MERN + React + TailwindCSS

Project ini adalah aplikasi e-commerce sederhana dengan stack **MERN (MongoDB, Express, React, Node.js)**.  
Menggunakan **TailwindCSS** untuk tampilan modern dan responsive, serta integrasi fitur **shopping cart** interaktif.

---

## ✨ Fitur Utama
- ✅ **Product Grid**: Menampilkan daftar produk dari API (Node.js + Express).
- ✅ **Shopping Cart**:
  - Tambah & hapus produk dari cart
  - Ubah jumlah (quantity) produk
  - Total harga otomatis dengan format **Rp (Rupiah)** dan pemisah ribuan
- ✅ **Cart Sidebar**: Cart muncul dari sisi kanan layar, lebih interaktif.
- ✅ **Navigation Active State**: Menu aktif otomatis berubah saat user scroll (dengan IntersectionObserver).
- ✅ **Responsive Design**: Optimal untuk desktop maupun mobile.
- ✅ **Checkout Button** dengan animasi hover.

---

## 🛠️ Tech Stack
- **Frontend**: React + TailwindCSS
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **HTTP Client**: Axios
- **Icons**: lucide-react

---

## 📂 Struktur Proyek
ecommerce-app/
│── backend/ # API dengan Node.js + Express
│ ├── models/ # Schema MongoDB
│ ├── routes/ # Routing API
│ └── server.js # Entry point server
│
│── frontend/ # React + Tailwind
│ ├── components/ # Reusable Components
│ ├── App.jsx # Main App
│ ├── index.jsx # React entry point
│ └── ...
│
└── README.md

---

## 🚀 Cara Menjalankan
1. Clone repo ini:
   ```bash
   git clone https://github.com/username/ecommerce-app.git
   cd ecommerce-app
Install dependencies di backend & frontend:

cd backend
npm install
cd ../frontend
npm install


Jalankan server backend:

cd backend
npm start


Server berjalan di http://localhost:5000

Jalankan frontend React:

cd frontend
npm run dev


Akses aplikasi di http://localhost:5173