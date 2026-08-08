// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteSitemap from 'vite-plugin-sitemap' // ✅ ডিফল্ট ইমপোর্ট (নামযুক্ত নয়)

export default defineConfig({
  plugins: [
    react(),
    viteSitemap({
      hostname: 'https://techcyfy.com', // আপনার ডোমেইন দিন
      routes: [
        '/',
        '/about',
        '/how-it-works',
        '/vouchers',
        '/reviews',
        '/contact',
        '/blog',
        
      ],
      exclude: ['/admin', '/dashboard'], // বাদ দিতে চাইলে
      outDir: 'dist',
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    })
  ]
})