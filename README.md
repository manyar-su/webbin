# Webbin

Webbin adalah website promosi jasa pembuatan website profesional untuk bisnis Indonesia. Situs ini menampilkan layanan, demo website per kategori bisnis, kalkulator estimasi harga, paket layanan, studi kasus, proses kerja, testimoni, FAQ, artikel edukasi, dan CTA WhatsApp.

## Fokus Website

- Jasa pembuatan website untuk UMKM, cafe, resto, laundry, barbershop, fashion, travel, villa, company profile, rental mobil, peternakan, marketplace, dan landing page.
- Optimasi SEO lokal dan GEO agar konten mudah dipahami mesin pencari serta AI search.
- Demo portofolio berbasis kategori dengan aset gambar yang bisa diganti dari folder `public/assets/demo`.
- CTA utama ke WhatsApp untuk konsultasi pembuatan website.

## Teknologi

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Radix UI
- Lucide React
- TanStack Query

## Menjalankan Lokal

```bash
npm install
npm run dev
```

Build produksi:

```bash
npm run build
```

Preview hasil build:

```bash
npm run preview
```

## Asset Demo

Gambar kartu demo berada di:

```text
public/assets/demo/
```

File default memakai nama kategori seperti `cafe-resto.svg`, `laundry.svg`, `marketplace.svg`, dan `landing.svg`. Untuk mengganti gambar demo, simpan screenshot/mockup baru di folder itu lalu gunakan nama file yang sama, atau update field `imageUrl` pada data portofolio.

## SEO dan GEO

Situs sudah menyiapkan:

- Title dan meta description berbahasa Indonesia.
- Canonical URL.
- Open Graph dan Twitter Card.
- Schema JSON-LD untuk `LocalBusiness`, `ProfessionalService`, `Service`, `WebSite`, `FAQPage`, dan `BreadcrumbList`.
- `robots.txt`, `sitemap.xml`, `llms.txt`, dan manifest.
- Sinyal lokasi Jakarta/Indonesia untuk pencarian lokal.

## Struktur Penting

- `src/data/site.js`: identitas brand, kontak, dan navigasi.
- `src/data/portfolio.js`: kategori dan item demo website.
- `src/components/sections/`: section utama landing page.
- `public/assets/demo/`: aset gambar demo yang bisa diganti.
- `index.html`: metadata SEO/GEO dan schema.
