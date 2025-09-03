# Portfolio

A modern, responsive personal portfolio website built with Next.js, showcasing skills, experience, projects, and contact information. This project is designed to be easily customizable and deployable.

## Features

- **Hero Section**: Eye-catching introduction with key highlights
- **About Section**: Personal background and information
- **Projects Section**: Showcase of featured projects with descriptions and links
- **Skills Section**: Visual display of technical skills and technologies
- **Contact Section**: Contact form and information (currently under construction)
- **Responsive Design**: Optimized for all device sizes
- **Theme Toggle**: Dark and light mode support
- **Smooth Animations**: Powered by Framer Motion
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 15.5.0
- **Frontend**: React 19.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12.23.12
- **Icons**: Lucide React 0.541.0
- **Linting**: ESLint 9

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── sections/          # Main page sections
│   ├── card/              # Card components
│   └── utils/             # Utility components
├── json/                  # Data files
│   ├── skills.json        # Skills data
│   ├── projects.json      # Projects data
│   ├── experience.json    # Experience data
│   └── contact.json       # Contact information
├── lib/                   # Utility functions and types
└── public/                # Static assets and icons
```

## Customization

### Updating Content

1. **Personal Information**: Edit the JSON files in the `json/` directory to update your personal details, skills, projects, and experience.

2. **Styling**: Modify Tailwind CSS classes in the component files or update the global styles in `app/globals.css`.

3. **Components**: Customize sections by editing files in `components/sections/`.

4. **Icons**: Add or replace technology icons in `public/icons/`.

### Adding New Sections

1. Create a new component in `components/sections/`
2. Import and add it to the appropriate page (e.g., `app/page.tsx`)
3. Update navigation if needed

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

This project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is private and for personal use.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Icons from [Lucide React](https://lucide.dev/)
- Animations with [Framer Motion](https://www.framer.com/motion/)
