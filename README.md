# Enzo Saint Vincent - Official Website

A modern, minimalist indie rock artist website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **SEO Optimized**: Server-side rendering with Next.js App Router
- **Performance**: Optimized images, code splitting, and static generation
- **Responsive**: Mobile-first design that works on all devices
- **Modern Stack**: TypeScript for type safety, Tailwind for styling
- **Smooth Animations**: Intersection Observer API for scroll-based animations
- **Accessibility**: Semantic HTML and ARIA labels

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended) or any static hosting

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

Or build static files:
```bash
npm run build
# Static files will be in the 'out' directory
```

## 📁 Project Structure

```
enzo-saint-vincent/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── Navigation.tsx       # Sticky navigation
│   ├── Hero.tsx             # Hero section with image
│   ├── Music.tsx            # Music/tracks section
│   ├── Shows.tsx            # Tour dates section
│   ├── Contact.tsx          # Contact/social links
│   └── Footer.tsx           # Footer
├── public/
│   └── images/
│       └── hero.png         # Artist photo
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.mjs          # Next.js configuration
```

## 🎨 Customization

### Update Content

- **Tracks**: Edit `components/Music.tsx`
- **Shows**: Edit `components/Shows.tsx`
- **Social Links**: Edit `components/Contact.tsx`
- **SEO**: Edit `app/layout.tsx` metadata

### Update Colors

Edit `tailwind.config.js`:

```js
colors: {
  background: '#0a0a0a',
  foreground: '#e8e8e8',
  accent: '#6b6b6b',
  highlight: '#c9c9c9',
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The site is configured for static export. After running `npm run build`, deploy the `out` folder to:
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting service

## 📝 License

MIT License - Feel free to use this template for your own projects!

## 🎸 Built for Enzo Saint Vincent

Nocturnal soundscapes meet raw emotion.
```