# E-Commerce-MERN
feat: cart feature implementation &amp; navigation styling

- Menambahkan fitur cart dengan total harga otomatis dalam format Rupiah
- Styling navigasi dengan underline offset agar lebih rapi
- Integrasi lucide-react untuk icon cart
- Perbaikan struktur komponen agar lebih teratur

E-Commerce MERN dengan React, Node.js, Express, dan MongoDB.
Menggunakan TailwindCSS untuk styling modern dan responsive.
Fitur utama:
- Shopping cart interaktif dengan total harga otomatis
- Navigasi dengan highlight section aktif
- Checkout button dengan animasi hover
- Format harga dalam Rupiah (Rp) dengan pemisah ribuan

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
---
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
   ```
