# Portfolio Web - Tsiky Anjara Nomena - Plan de Développement

## Design Guidelines

### Design References (Primary Inspiration)
- **Modern Developer Portfolios**: Clean, professional, tech-focused aesthetic
- **Style**: Modern Minimalism + Dark Mode + Professional Tech Theme

### Color Palette
- Primary: #0F172A (Slate 900 - dark background)
- Secondary: #1E293B (Slate 800 - card backgrounds)
- Accent: #3B82F6 (Blue 500 - highlights and CTAs)
- Success: #10B981 (Emerald 500 - skills/achievements)
- Text: #F8FAFC (Slate 50), #CBD5E1 (Slate 300 - secondary text)

### Typography
- Heading1: Inter font-weight 700 (48px)
- Heading2: Inter font-weight 600 (36px)
- Heading3: Inter font-weight 600 (24px)
- Body/Normal: Inter font-weight 400 (16px)
- Body/Emphasis: Inter font-weight 600 (16px)
- Code: JetBrains Mono font-weight 400 (14px)

### Key Component Styles
- **Cards**: Dark slate background (#1E293B), subtle border, 12px rounded
- **Buttons**: Blue accent (#3B82F6), white text, hover effects
- **Skills Tags**: Emerald accent with dark background
- **Navigation**: Fixed header with smooth scroll

### Images to Generate
1. **hero-developer-workspace.jpg** - Modern developer workspace with multiple monitors, code on screen, professional lighting (Style: photorealistic, tech aesthetic)
2. **profile-background.jpg** - Abstract tech background with subtle code patterns or circuit elements (Style: minimalist, dark theme)
3. **java-spring-illustration.jpg** - Modern illustration representing Java Spring development (Style: vector-style, professional)
4. **python-django-illustration.jpg** - Modern illustration representing Python Django development (Style: vector-style, professional)
5. **database-systems-illustration.jpg** - Abstract representation of database systems and APIs (Style: minimalist, tech-focused)
6. **project-showcase-bg.jpg** - Subtle background for project showcase section (Style: gradient, professional)

---

## Development Tasks

1. **Setup & Structure** - Initialize shadcn-ui template, configure dependencies
2. **Generate Images** - Create all 6 images using ImageCreator.generate_image
3. **Header & Navigation** - Fixed navigation with smooth scroll to sections
4. **Hero Section** - Introduction with name, title, and call-to-action
5. **About Section** - Personal description, contact info, and professional photo
6. **Skills Section** - Technical competencies organized by categories
7. **Experience Section** - Professional experience with project details
8. **Education Section** - Academic background and certifications
9. **Contact Section** - Contact form and social links
10. **Responsive Design** - Mobile-first approach with smooth animations
11. **Final Polish** - Lint check, build verification, and deployment preparation

## File Structure
```
src/
├── components/
│   ├── ui/ (shadcn components)
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   └── Contact.tsx
├── lib/
│   └── utils.ts
├── App.tsx
└── main.tsx
public/
└── assets/
    └── images/ (generated images)
```