# Devign Agency Website

<div align="center">

[![Devign Logo](https://img.shields.io/badge/Devign-Digital_Agency-blue?style=for-the-badge)](https://www.devign.co.in/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

**A modern, full-featured digital agency portfolio and service showcase.**

[Live Website](https://www.devign.co.in/) • [Report Bug](https://github.com/Divya8210-d/AgencyWebsite/issues) • [Request Feature](https://github.com/Divya8210-d/AgencyWebsite/issues)

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Performance](#performance)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About The Project

Devign is a full cycle digital agency website built with modern web technologies. The platform showcases the agency's services, portfolio projects, and provides an engaging user experience through interactive animations and responsive design. The website serves as a comprehensive digital presence for the designers-developers team specializing in crafting seamless digital experiences.

### What Makes This Project Special

- **Custom-Built**: No templates: every element designed and developed from scratch
- **Performance-First**: Optimized for speed, scale, and stability
- **Modern UI/UX**: Smooth animations and responsive design across all devices
- **SEO Optimized**: Built with Next.js for optimal search engine visibility
- **Type-Safe**: Full TypeScript implementation for robust code quality

---

## ✨ Key Features

### 🎨 **Landing Page**
- Dynamic hero section with video background
- Animated statistics showcase (20+ services and projects)
- Smooth scroll navigation with section anchors
- Call-to-action buttons with hover effects

### 💼 **Services Section**
- Four core service offerings:
  - Website Development
  - Maintenance & Optimization
  - UI/UX Design
  - Brand Identity
- Interactive service cards with background effects
- Target audience segmentation:
  - Personal Brands & Creators
  - Small & Growing Businesses
  - Startups & Founder Teams
  - Established Companies

### 🚀 **Projects Portfolio**
- Featured project showcase with high-quality imagery:
  - **Strong Roots**: Non profit branding and web solution
  - **Caroling Pen Publishing**: Book publishing platform
  - **Ashok Chronicles**: Dynamic blog with rich media
  - **Hectoclash**: Multiplayer math game with real time features
- Project cards with hover effects and descriptions
- Case study presentations

### 💬 **Testimonials**
- Client testimonials with video background
- Rotating testimonial cards
- Client names and positions
- Social proof for credibility

### 📞 **Contact Section**
- Simple contact form integration
- Direct email link
- Social media connections (LinkedIn, Behance)
- Quick links navigation

### 🎯 **Additional Features**
- Responsive navigation menu
- Social media integration
- Footer with quick links
- Privacy policy and terms of service links
- Modern, accessible design patterns

---

## 🛠 Tech Stack

### **Core Technologies**

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI component library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### **Development Tools**

- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **npm/pnpm** - Package management

### **Hosting & Deployment**

- **[Vercel](https://vercel.com/)** - Deployment platform
- **Cloudinary** - Media asset management for images and videos

### **Features & Integrations**

- Server-side rendering (SSR)
- Static site generation (SSG)
- Image optimization with Next.js Image
- Font optimization with next/font
- Responsive design breakpoints
- Video background integration

---

## 📁 Project Structure

```
AgencyWebsite/
├── components/          # Reusable React components
│   ├── Hero/           # Landing hero section
│   ├── Services/       # Services showcase
│   ├── Projects/       # Portfolio projects
│   ├── Testimonials/   # Client testimonials
│   └── ...
├── public/             # Static assets
│   ├── images/         # Image assets
│   ├── videos/         # Video backgrounds
│   └── icons/          # SVG icons
├── src/
│   └── app/           # Next.js App Router
│       ├── layout.tsx  # Root layout
│       ├── page.tsx    # Home page
│       └── globals.css # Global styles
├── .gitignore
├── next.config.ts      # Next.js configuration
├── package.json        # Project dependencies
├── postcss.config.mjs  # PostCSS configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 18.x or higher)
- **npm** (version 9.x or higher) or **pnpm** or **yarn** or **bun**
- **Git**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Divya8210-d/AgencyWebsite.git
cd AgencyWebsite
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. **Set up environment variables (if needed)**

Create a `.env.local` file in the root directory:

```env
# Add any required environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

The page auto-updates as you edit the files in the project.

---

## 📜 Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`
Builds the app for production to the `.next` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start`
Runs the built app in production mode. Make sure to run `npm run build` first.

### `npm run lint`
Runs ESLint to check for code quality issues and potential bugs.

---

## 🌐 Deployment

This project is deployed on **Vercel**, the platform built by the creators of Next.js.

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Divya8210-d/AgencyWebsite)

### Manual Deployment Steps

1. Push your code to a GitHub repository
2. Import your repository to Vercel
3. Vercel will detect Next.js and configure the build settings automatically
4. Deploy!

Your app will be live at: `https://your-app-name.vercel.app`

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## ⚡ Performance

The website is optimized for performance with:

- **Next.js Image Optimization**: Automatic image optimization with lazy loading
- **Code Splitting**: Automatic code splitting for faster page loads
- **Font Optimization**: Automatic font optimization with next/font
- **Static Generation**: Pre-rendered pages for instant loading
- **Cloudinary CDN**: Fast asset delivery through CDN
- **Responsive Images**: Optimized images for different screen sizes

### Performance Metrics

- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.5s
- **Lighthouse Score**: 90+ (Performance)

---

## 🎨 Customization

### Updating Content

1. **Hero Section**: Edit `src/app/page.tsx` or the Hero component
2. **Services**: Update service data in the Services component
3. **Projects**: Add/edit projects in the Projects component
4. **Testimonials**: Update testimonials in the Testimonials component
5. **Styles**: Modify `tailwind.config.ts` for design system changes

### Adding New Sections

1. Create a new component in the `components/` directory
2. Import and use it in `src/app/page.tsx`
3. Add corresponding styles using Tailwind CSS classes

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## 📞 Contact

**Devign Services**

- **Website**: [www.devign.co.in](https://www.devign.co.in/)
- **Email**: [devignservices@gmail.com](mailto:devignservices@gmail.com)
- **LinkedIn**: [Devign Services](https://www.linkedin.com/company/devignservices/about/?viewAsMember=true)
- **Behance**: [Portfolio](https://www.behance.net/hiyanshugupta)
- **GitHub**: [@Divya8210-d](https://github.com/Divya8210-d)

**Project Link**: [https://github.com/Divya8210-d/AgencyWebsite](https://github.com/Divya8210-d/AgencyWebsite)

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)
- [Cloudinary](https://cloudinary.com/)
- [Font Awesome](https://fontawesome.com/)
- All the open-source contributors

---

<div align="center">

**Built with ❤️ by Devign Services**

[⬆ Back to Top](#devign-agency-website)

</div>