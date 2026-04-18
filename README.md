# Avion AC - Company Profile Website

Situs profil perusahaan profesional untuk Avion AC, penyedia layanan AC terpercaya di Palembang, Indonesia.

## 🚀 Teknologi yang Digunakan

- **Next.js 14** - Framework React dengan App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations dan transitions
- **React 18** - Latest React features

## 📁 Struktur Folder

```
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout dengan Navbar & Footer
│   ├── page.tsx                 # Halaman beranda
│   ├── globals.css              # Global styles & Tailwind
│   ├── about/                   # Halaman Tentang
│   │   └── page.tsx
│   ├── services/                # Halaman Layanan
│   │   └── page.tsx
│   ├── gallery/                 # Halaman Galeri
│   │   └── page.tsx
│   └── contact/                 # Halaman Kontak
│       └── page.tsx
├── components/                   # Reusable React components
│   ├── Navbar.tsx              # Navigation bar dengan mobile menu
│   ├── Footer.tsx              # Footer dengan info kontak
│   ├── hero/
│   │   └── HeroSection.tsx      # Hero section halaman utama
│   ├── services/
│   │   ├── ServicesSection.tsx  # Services showcase
│   │   └── ServiceCard.tsx      # Individual service card
│   ├── why-choose/
│   │   └── WhyChooseUsSection.tsx # Why Choose Us section
│   ├── testimonials/
│   │   ├── TestimonialsSection.tsx # Testimonials showcase
│   │   └── TestimonialCard.tsx  # Individual testimonial
│   ├── gallery/
│   │   └── GallerySection.tsx   # Gallery section
│   └── contact/
│       └── ContactSection.tsx   # Contact CTA section
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.mjs          # PostCSS configuration
├── package.json                # Project dependencies
├── .env.local                  # Environment variables (WhatsApp config)
└── .gitignore                  # Git ignore rules
```

## 🎨 Design Highlights

- **Modern & Clean**: Design yang minimalis dan profesional
- **Responsive**: Mobile-first approach, sempurna di semua ukuran layar
- **Smooth Animations**: Subtle animations dengan Framer Motion
- **WhatsApp Integration**: Direct messaging CTA untuk lead generation
- **SEO Optimized**: Proper meta tags, headings, dan structured content
- **Accessibility**: WCAG compliant design

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ dan npm/yarn
- Git

### Installation Steps

1. **Clone atau ekstrak project**
   ```bash
   cd "Company Profile Avion AC"
   ```

2. **Install dependencies**
   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Setup environment variables**
   
   Edit `.env.local` dengan informasi WhatsApp Anda:
   ```env
   NEXT_PUBLIC_WHATSAPP_NUMBER=628xxxxxxxxxx
   NEXT_PUBLIC_WHATSAPP_MESSAGE=Halo%20Avion%20AC
   ```

4. **Run development server**
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

   Buka [http://localhost:3000](http://localhost:3000) di browser

## 📝 Available Scripts

```bash
# Development server
npm run dev

# Build untuk production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🎯 Pages Overview

### Home (/)
- Hero section dengan CTA
- Services showcase
- Why Choose Us section
- Testimonials
- Gallery preview
- Contact CTA

### About (/about)
- Company story
- Mission & Values
- Team information
- Statistics

### Services (/services)
- Detailed service descriptions
- Service features
- Pricing information
- Consultation CTA

### Gallery (/gallery)
- Gallery of completed projects
- Featured projects
- Project statistics
- Testimonials dari klien

### Contact (/contact)
- Contact form
- Multiple contact methods (WhatsApp, Email, Phone)
- Operating hours
- FAQ section

## 🎨 Color Scheme

- **Primary**: Biru (perfect untuk AC services)
  - Primary-600: `#0284c7`
  - Primary-700: `#0369a1`
- **Accent**: Purple
  - Accent-600: `#9333ea`
- **Neutral**: Gray scale untuk text dan backgrounds

## 📱 Responsive Design

- **Mobile**: Optimized untuk < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔗 WhatsApp Integration

Website menggunakan WhatsApp Business API dengan format:
```
https://wa.me/[NOMOR]?text=[PESAN_TERENKRIPSI]
```

Contoh button:
```tsx
<a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${message}`}>
  Hubungi via WhatsApp
</a>
```

## 🚀 Deployment

### Deploy ke Vercel (Recommended)

1. Push code ke GitHub
2. Connect repository ke Vercel
3. Set environment variables di Vercel dashboard
4. Deploy!

### Deploy ke Server Lain

```bash
# Build production version
npm run build

# Start production server
npm start
```

## 📊 SEO Configuration

- Meta tags di setiap page
- Proper heading hierarchy
- Descriptive page titles
- Open Graph tags untuk social sharing
- Robots meta untuk search engine crawling

## 🔧 Customization Guide

### Update WhatsApp Number
Edit `.env.local`:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=628xxxxxxxxxx
```

### Change Colors
Edit `tailwind.config.ts` untuk mengubah color palette

### Update Content
- Ubah teks di component files
- Update service list di `/services/ServicesSection.tsx`
- Update testimonials di `/testimonials/TestimonialsSection.tsx`

### Add New Pages
1. Create folder di `app/`
2. Create `page.tsx` file
3. Add link ke Navbar

## 🔐 Environment Variables

```env
# WhatsApp Configuration
NEXT_PUBLIC_WHATSAPP_NUMBER=628123456789
NEXT_PUBLIC_WHATSAPP_MESSAGE=Halo%20Avion%20AC%2C%20saya%20ingin%20mengetahui%20layanan%20Anda
```

## 📦 Dependencies

- **react** & **react-dom**: UI framework
- **next**: Meta framework
- **framer-motion**: Animations
- **tailwindcss**: Styling
- **typescript**: Type safety
- **autoprefixer**: CSS vendor prefixes
- **postcss**: CSS processing

## ✨ Features

✅ Fully responsive design  
✅ Dark mode ready (dapat ditambahkan)  
✅ SEO optimized  
✅ Fast performance (optimized images & code splitting)  
✅ WhatsApp integration  
✅ Smooth animations  
✅ Clean, maintainable code  
✅ TypeScript throughout  
✅ Accessibility compliant  

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Styles not loading
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### TypeScript errors
```bash
npm run lint
```

## 📞 Contact & Support

Untuk pertanyaan teknis atau penyesuaian lebih lanjut, hubungi tim development.

## 📄 License

Project ini adalah kepemilikan Avion AC dan dilindungi oleh hukum.

---

**Happy Building! 🚀**
