// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // কোন ফাইলে Tailwind ক্লাস ব্যবহার করা হবে সেটা নির্ধারণ
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // src ফোল্ডারের সব React কম্পোনেন্ট
  ],
  
  // ডার্ক মোড সেটআপ (class দিয়ে টগল করব)
  darkMode: "class", // "media" বা "class" - আমরা class ব্যবহার করব
  
  theme: {
    extend: {
      // কাস্টম কালার, ফন্ট, স্পেসিং ইত্যাদি যোগ করতে পারেন
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          // ... ইত্যাদি
        }
      },
      fontFamily: {
        'custom': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}