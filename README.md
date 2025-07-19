# Gurunity - Professional Network Platform

A static frontend website built with Next.js, TypeScript, and plain CSS that replicates LinkedIn's design with a custom purple and white theme.

## 🚀 Features

- **LinkedIn-like Layout**: Complete replica of LinkedIn's interface including header, sidebar, main feed, and right sidebar
- **Purple Theme**: Custom purple and white color scheme instead of LinkedIn's blue theme
- **Modular Components**: Clean, reusable React components built with TypeScript
- **Responsive Design**: Optimized for desktop viewing with mobile-friendly elements
- **Static Data**: No backend required - all data is static and predefined
- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and plain CSS

## 🏗️ Project Structure

```
gurunity/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and CSS variables
│   │   ├── layout.tsx           # Root layout component
│   │   ├── page.tsx             # Main homepage
│   │   └── page.css             # Homepage styles
│   └── components/
│       ├── Header/
│       │   ├── Header.tsx       # Navigation header with logo and menu
│       │   └── Header.css
│       ├── Sidebar/
│       │   ├── Sidebar.tsx      # Left sidebar with profile info
│       │   └── Sidebar.css
│       ├── PostCreator/
│       │   ├── PostCreator.tsx  # Post creation interface
│       │   └── PostCreator.css
│       ├── PostCard/
│       │   ├── PostCard.tsx     # Individual post display
│       │   └── PostCard.css
│       ├── PostList/
│       │   ├── PostList.tsx     # List of posts with static data
│       │   └── PostList.css
│       ├── RightSidebar/
│       │   ├── RightSidebar.tsx # Right sidebar with news and suggestions
│       │   └── RightSidebar.css
│       └── Layout/
│           ├── MainLayout.tsx   # Main layout wrapper
│           └── MainLayout.css
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
└── README.md                   # This file
```

## 🎨 Components Overview

### Header Component
- **Gurunity logo** placeholder in the top-left corner
- **Search bar** with purple-themed styling
- **Navigation icons** for Home, My Network, Jobs, Messaging, Notifications
- **Profile dropdown** with user avatar

### Sidebar Component
- **Profile card** with cover image, avatar, and user information
- **Profile statistics** (profile viewers, post impressions)
- **Premium promotion** section
- **Recent activity** with topics and groups
- **Events section** with upcoming events

### Post Components
- **PostCreator**: Interface for creating new posts with media options
- **PostCard**: Individual post display with author info, content, and engagement
- **PostList**: Container for multiple posts with static sample data

### RightSidebar Component
- **Gurunity News** section with trending topics
- **People you may know** with connection suggestions
- **Promoted content** and premium features
- **Today's most viewed courses**
- **Footer** with links and copyright

### Layout Component
- **MainLayout**: Grid-based layout system similar to LinkedIn
- **Responsive design** that adapts to different screen sizes
- **Fixed header** with sticky sidebars

## 🎯 Design Features

### Purple Theme
- **Primary Purple**: `#7c3aed` (main brand color)
- **Purple Dark**: `#5b21b6` (hover states)
- **Purple Light**: `#a855f7` (accents)
- **Secondary Purple**: `#e9d5ff` (backgrounds)

### Typography
- **System fonts** for optimal performance
- **Consistent sizing** and weight hierarchy
- **Readable line heights** and spacing

### Interactive Elements
- **Hover effects** on buttons and links
- **Smooth transitions** for better user experience
- **Purple-themed** buttons and interactive elements

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone or download** the project files
2. **Navigate** to the project directory:
   ```bash
   cd gurunity
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```
5. **Open your browser** and visit `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The application is optimized for desktop viewing but includes responsive elements:

- **Desktop (1200px+)**: Full three-column layout
- **Tablet (768px-1024px)**: Adjusted column widths
- **Mobile (< 768px)**: Single column layout with stacked components

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `src/app/globals.css`:
```css
:root {
  --primary-purple: #7c3aed;
  --primary-purple-dark: #5b21b6;
  --primary-purple-light: #a855f7;
  /* ... other variables */
}
```

### Adding New Posts
Edit the `staticPosts` array in `src/components/PostList/PostList.tsx`:
```typescript
const staticPosts = [
  {
    id: 1,
    author: {
      name: 'Your Name',
      title: 'Your Title',
      avatar: '/path/to/avatar',
    },
    content: {
      text: 'Your post content...',
    },
    // ... other properties
  },
];
```

### Modifying Layout
Adjust the grid layout in `src/components/Layout/MainLayout.css`:
```css
.content-grid {
  grid-template-columns: 240px 1fr 300px; /* sidebar, main, right-sidebar */
}
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify

## 📝 Technical Details

- **Framework**: Next.js 15.4.2 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Plain CSS with CSS variables
- **Icons**: Custom SVG icons
- **Images**: Placeholder images for demonstration
- **No External Dependencies**: Pure CSS without frameworks like Tailwind

## 🎯 Key Features Implemented

✅ **Complete LinkedIn-like layout**  
✅ **Purple and white theme**  
✅ **Modular React components**  
✅ **TypeScript integration**  
✅ **Plain CSS styling**  
✅ **Static data implementation**  
✅ **Responsive design elements**  
✅ **Interactive UI components**  
✅ **Professional styling**  
✅ **Clean code structure**  

## 📄 License

This project is for educational and demonstration purposes. The design is inspired by LinkedIn but is not affiliated with or endorsed by LinkedIn Corporation.

## 🤝 Contributing

This is a demonstration project. Feel free to fork and modify for your own use cases.

---

**Built with ❤️ using Next.js, TypeScript, and CSS**

