# InnerCircle - Your AI Wellness Companion

<div align="center">
<img width="1200" height="475" alt="InnerCircle Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

A modern, responsive landing page for InnerCircle, your AI-powered wellness companion. Built with cutting-edge web technologies to provide an exceptional user experience.

## ✨ Features

- **Modern Design**: Material Design 3 with custom color system
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Type-Safe**: Full TypeScript support for better development experience
- **Accessible**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Frontend**: React 19 with Vite
- **Styling**: Tailwind CSS with Material Design 3
- **Typography**: Google Fonts (Manrope)
- **Icons**: Material Symbols
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Build Tool**: Vite

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd wellness-3d
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run TypeScript type checking
- `npm run clean` - Clean the dist directory

## 🎨 Customization

The project uses a comprehensive Material Design 3 color system defined in `tailwind.config.js`. You can customize:

- Colors: Modify the color tokens in `tailwind.config.js`
- Fonts: Update font families in the configuration
- Layout: Adjust responsive breakpoints and spacing
- Components: Modify React components in the `src/` directory

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
├── assets/             # Static assets (images, icons)
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service like:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

### Environment Variables

Create a `.env.local` file for environment-specific configurations:

```env
# Add your environment variables here
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Support

For support or questions, please contact the development team.
