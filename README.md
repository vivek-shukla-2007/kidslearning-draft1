# Kids Learning Platform

The best **FREE** learning platform for Reception to Year 2 following the UK National Curriculum.

## 🎯 Mission

Every decision answers one question: **"Will this help a 5-year-old learn better today?"**

- **Best for ages:** 4-7 years old (Reception, Year 1, Year 2)
- **Curriculum:** UK National Curriculum
- **Cost:** Completely free
- **Login:** Not required
- **Content:** Interactive lessons, games, and printable worksheets

## 👥 Our Users

- **Children:** Learners
- **Parents:** Customers (drive adoption)
- **Teachers:** Promoters (recommend the platform)

Every page must satisfy all three.

## 🏗️ Architecture

### Monorepo Structure
```
artifacts/
  └── web-app/        # Main React application
lib/
  └── ui-components/  # Shared reusable components
```

### Tech Stack
- **React 19** + **TypeScript** for type safety
- **Vite** for blazing-fast builds and HMR
- **Tailwind CSS** for accessible, responsive styling
- **Radix UI** for unstyled, accessible components
- **Wouter** for lightweight routing
- **Local Storage** for progress (no backend needed initially)

## 🚀 Quick Start

### Prerequisites
- **pnpm** (required, not npm or yarn)
  ```bash
  npm install -g pnpm
  ```

### Installation
```bash
git clone https://github.com/vivek-shukla-2007/kidslearning-draft1.git
cd kidslearning-draft1
pnpm install
```

### Development
```bash
pnpm dev
```
Runs the Vite dev server on `http://localhost:5173`

### Build for Production
```bash
pnpm build
```
Outputs optimized build to `artifacts/web-app/dist/`

## 📚 Content Structure

Content is organized by **child's learning journey**, not subject:

```
Reception/
  Reading/
    Phonics/
      Phase2/
        S, A, T, P, I, N, ...
    Tricky Words/
    Read Sentences/
  Maths/
    Counting/
    Number Bonds/
    Addition/
```

Each sound/topic has:
- 📖 **Lesson** (interactive, with visuals and audio)
- 🎮 **Practice** (reinforcement games)
- 📝 **Worksheet** (printable + online viewer)
- 🧪 **Quiz** (progress tracking)

## 🎨 Design Principles

1. **Simple Navigation** - 7 items max at top level
2. **Large Tap Targets** - 44px minimum for children
3. **Clear Feedback** - Progress bars, badges, certificates
4. **No Distractions** - Minimal ads, animations with purpose
5. **Accessibility First** - Keyboard navigation, screen readers, color contrast
6. **Fast Loading** - Optimized for slow connections

## 🏆 Quality Standards

Before shipping any component, ask:
- ✅ Would the BBC use this?
- ✅ Would a teacher recommend this?
- ✅ Would a parent trust this?
- ✅ Is it accessible?
- ✅ Is it performant?

## 🌍 Deployment

### Hostinger Deployment
1. Build: `pnpm build`
2. Upload `artifacts/web-app/dist/` to Hostinger via FTP or File Manager
3. Ensure `.htaccess` is in place for SPA routing
4. Set up gzip compression for CSS/JS files

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 📖 Week 1 Deliverables

- ✅ Complete monorepo setup
- ✅ Design system (colors, typography, components)
- ✅ Perfect homepage with hero section
- ✅ Year selector (Reception, Year 1, Year 2)
- ✅ Navigation (LEARN, PRACTICE, WORKSHEETS, READ, PARENTS, ABOUT)
- ✅ Footer with links
- ✅ Basic accessibility audit
- ✅ Mobile responsive

## 📞 Contributing

This is a mission-driven project. All contributions must prioritize:
1. Learning outcomes
2. Parent trust
3. Accessibility
4. Performance
5. Maintainability

## 📄 License

MIT License - Free to use and modify

---

**Made with ❤️ for children aged 4-7 learning in the UK.**
