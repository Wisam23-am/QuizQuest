# 🎮 UTBK Game Simulation

Platform latihan UTBK (Ujian Tulis Berbasis Komputer) yang inovatif dengan pendekatan gamifikasi untuk membuat persiapan ujian lebih menyenangkan dan efektif.

## 📋 Deskripsi

UTBK Game Simulation adalah aplikasi web yang dirancang untuk membantu siswa mempersiapkan diri menghadapi UTBK dengan cara yang lebih interaktif dan menarik. Aplikasi ini menggunakan konsep gamifikasi dengan sistem nyawa, timer, dan leaderboard untuk meningkatkan motivasi belajar.

### ✨ Fitur Utama

- 🎯 **Simulasi Ujian Real-time**: Timer dan sistem penilaian otomatis yang menyerupai ujian UTBK sebenarnya
- ❤️ **Sistem Nyawa**: Game mechanics dengan 3 nyawa untuk meningkatkan fokus dan tantangan
- 🏆 **Leaderboard**: Kompetisi dengan pengguna lain untuk memotivasi pembelajaran
- 📊 **Pelacakan Progress**: Riwayat hasil ujian dan analisis performa
- 👤 **Sistem Autentikasi**: Login dan register untuk menyimpan progres pribadi
- 📱 **Responsive Design**: Dapat diakses dari desktop, tablet, dan mobile

## 🛠️ Teknologi yang Digunakan

- **Framework**: Next.js 16.1.1 (App Router)
- **React**: 19.2.3
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4.x
- **Icons**: Lucide React
- **Linting**: ESLint 9.x

## 📁 Struktur Proyek

```
UTBK-game-simulation/
├── app/                      # App Router pages
│   ├── page.tsx             # Halaman utama (Home)
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── game/                # Halaman simulasi game
│   │   └── page.tsx
│   ├── hasil/               # Halaman hasil ujian
│   │   └── page.tsx
│   ├── login/               # Halaman login
│   │   └── page.tsx
│   ├── register/            # Halaman registrasi
│   │   └── page.tsx
│   ├── profile/             # Halaman profil pengguna
│   │   └── page.tsx
│   └── leaderboard/         # Halaman leaderboard
│       └── page.tsx
├── components/              # Reusable components
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer component
│   ├── Card.tsx            # Card wrapper
│   ├── ButtonPrimary.tsx   # Primary button
│   ├── QuestionOption.tsx  # Question option button
│   └── LifeIndicator.tsx   # Life/health indicator
├── public/                  # Static assets
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── next.config.ts          # Next.js config
├── tailwind.config.ts      # Tailwind config
└── eslint.config.mjs       # ESLint config
```

## 🚀 Instalasi dan Menjalankan Aplikasi

### Prasyarat

- Node.js 20.x atau lebih tinggi
- npm, yarn, pnpm, atau bun

### Langkah-langkah Instalasi

1. **Clone repository**

   ```bash
   git clone <repository-url>
   cd UTBK-game-simulation
   ```

2. **Install dependencies**

   ```bash
   npm install
   # atau
   yarn install
   # atau
   pnpm install
   ```

3. **Jalankan development server**

   ```bash
   npm run dev
   # atau
   yarn dev
   # atau
   pnpm dev
   # atau
   bun dev
   ```

4. **Akses aplikasi**

   Buka browser dan akses [http://localhost:3000](http://localhost:3000)

### Build untuk Production

```bash
npm run build
npm start
```

## 📖 Panduan Penggunaan

### 1. Halaman Utama (Home)

- Landing page dengan informasi tentang platform
- Tombol "Mulai Latihan Sekarang" untuk memulai simulasi
- Informasi fitur dan statistik aplikasi

### 2. Login/Register

- Pengguna baru harus mendaftar terlebih dahulu
- Pengguna terdaftar dapat login untuk menyimpan progres
- Data disimpan di localStorage (untuk prototype)

### 3. Halaman Game

- Simulasi ujian dengan pertanyaan multiple choice
- Timer countdown untuk setiap sesi
- Sistem nyawa (3 nyawa)
- Jawaban salah akan mengurangi 1 nyawa
- Game over jika nyawa habis

### 4. Halaman Hasil

- Menampilkan skor akhir
- Statistik jawaban benar/salah
- Waktu yang digunakan
- Tombol untuk mencoba lagi atau kembali ke home

### 5. Leaderboard

- Daftar 10 pemain teratas
- Ranking berdasarkan skor tertinggi
- Menampilkan nama pengguna dan skor

### 6. Profile

- Informasi pengguna
- Riwayat hasil ujian
- Statistik performa (rata-rata skor, total ujian, dll)

## 🎨 Komponen Utama

### Navbar

Navigation bar yang muncul di semua halaman dengan menu:

- Home
- Game
- Leaderboard
- Profile
- Login/Logout

### Card

Wrapper component untuk konten dengan styling konsisten.

### QuestionOption

Button component khusus untuk pilihan jawaban dengan feedback visual.

### LifeIndicator

Indikator visual untuk menampilkan sisa nyawa pemain.

### ButtonPrimary

Button component dengan styling primary untuk CTA (Call to Action).

## 🗄️ Penyimpanan Data

Saat ini, aplikasi menggunakan **localStorage** untuk menyimpan:

- Status login pengguna
- Data profil pengguna
- Riwayat hasil ujian
- Data leaderboard

> **Note**: Untuk production, disarankan menggunakan backend API dengan database yang proper (PostgreSQL, MongoDB, dll)

## 🔧 Konfigurasi

### Tailwind CSS

Aplikasi menggunakan Tailwind CSS v4 dengan konfigurasi di `tailwind.config.ts`.

### TypeScript

Type checking dikonfigurasi di `tsconfig.json` dengan strict mode.

### ESLint

Linting rules dikonfigurasi di `eslint.config.mjs` menggunakan Next.js recommended config.

## 🚀 Pengembangan Lebih Lanjut

### Fitur yang Dapat Ditambahkan

1. **Backend Integration**

   - API untuk autentikasi
   - Database untuk persistent storage
   - Real-time leaderboard updates

2. **Fitur Tambahan**

   - Berbagai kategori soal (Matematika, Bahasa Indonesia, Bahasa Inggris, dll)
   - Tingkat kesulitan (Easy, Medium, Hard)
   - Mode latihan vs mode ujian
   - Pembahasan soal setelah selesai
   - Achievement system
   - Friend system dan challenges

3. **Analytics**

   - Dashboard analytics untuk guru/admin
   - Tracking performa detail per topik
   - Rekomendasi soal berdasarkan kelemahan

4. **Optimisasi**
   - Image optimization
   - SEO optimization
   - Performance monitoring
   - Progressive Web App (PWA)

## 📝 Scripts

- `npm run dev` - Menjalankan development server
- `npm run build` - Build aplikasi untuk production
- `npm start` - Menjalankan production server
- `npm run lint` - Menjalankan ESLint untuk code quality check

## 🤝 Kontribusi

Kontribusi selalu diterima! Silakan:

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 Lisensi

Project ini dibuat untuk tujuan edukasi.

## 👥 Tim Pengembang

Dikembangkan dengan ❤️ untuk membantu siswa Indonesia mempersiapkan UTBK

## 📞 Kontak & Dukungan

Jika ada pertanyaan atau masalah, silakan buat issue di repository ini.

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🔗 Deploy

Aplikasi ini dapat di-deploy ke berbagai platform:

- **Vercel** (Recommended): [Deploy Guide](https://nextjs.org/docs/app/building-your-application/deploying)
- **Netlify**: [Deploy Guide](https://docs.netlify.com/frameworks/next-js/overview/)
- **Railway**: [Deploy Guide](https://docs.railway.app/guides/nextjs)

---

**Happy Learning! 🎓📚**
