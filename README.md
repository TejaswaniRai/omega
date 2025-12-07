# Spinny Car Details Page - Front-End Internship Assignment

This is a Next.js application built for the Front-End Internship assignment, featuring a car details page inspired by Spinny's website.

## Features Implemented

### ✅ Picture Scroll (Image Carousel)
- Implemented using Swiper.js library
- Smooth navigation with arrows and pagination dots
- Auto-play functionality
- Responsive design for mobile and desktop

### ✅ 360° View Button
- Interactive button on the carousel
- Opens a modal with drag-to-rotate functionality
- Works on both mouse and touch devices
- Shows current frame number and instructions

### ✅ EMI Calculator (Price Calculator)
- Form-based calculator matching the reference image
- Three adjustable parameters:
  1. Loan Amount (₹1,00,000 - ₹13,26,000)
  2. Down Payment (₹0 - ₹12,26,000)
  3. Duration of Loan (12-84 months)
- Real-time EMI calculation using standard formula
- Displays monthly EMI with proper Indian currency formatting
- Styled sliders with custom purple theme

### ✅ Car Overview Section
- Comprehensive car details display
- Key specifications in an organized grid layout
- Model, Year, Mileage, and Price prominently displayed
- Additional features and specifications
- Action buttons for Test Drive and Contact Seller

## Tech Stack

- **Framework:** Next.js 14 (React.js)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Carousel:** Swiper.js
- **Icons:** Lucide React

## Project Structure

```
omega/
├── components/
│   ├── ImageCarousel.tsx      # Image carousel with navigation
│   ├── View360Modal.tsx        # Interactive 360° view modal
│   ├── EMICalculator.tsx       # EMI calculator form
│   └── CarOverview.tsx         # Car details and specifications
├── pages/
│   ├── _app.tsx                # App wrapper
│   ├── _document.tsx           # Document structure
│   └── index.tsx               # Main page
├── styles/
│   └── globals.css             # Global styles and Tailwind
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your car images:**
   - Save the 8 Mahindra Thar images to `public/images/360/`
   - Name them: `thar-360-01.jpg` through `thar-360-08.jpg`
   - See `HOW-TO-ADD-IMAGES.md` for detailed instructions

3. **Optional - Add 3D Model:**
   - Download a .glb/.gltf 3D model of Mahindra Thar
   - Save to `public/images/360/mahindra-thar.glb`
   - The 3D viewer button will automatically appear!

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Features Breakdown

### Image Carousel
- Multiple car images with smooth transitions
- Navigation arrows and pagination dots
- Auto-play with 3-second intervals
- Responsive sizing for all devices

### 360° Interactive View
- Drag-to-rotate functionality
- Touch support for mobile devices
- Frame counter display
- Modal overlay with close button
- Smooth rotation animation

### EMI Calculator
- Matches the reference dashboard design
- Three range sliders with custom styling
- Real-time calculation on value change
- Formula: `EMI = [P × R × (1+R)^N] / [(1+R)^N-1]`
- Indian currency formatting (₹)
- Interest rate: 9.5% per annum (configurable)

### Car Overview
- Key specifications grid
- Feature list with checkmarks
- Mileage display badge
- Location and price information
- Registration and ownership details

## Design Decisions

1. **Next.js over Create React App:** Better performance, SSR capabilities, and routing
2. **TypeScript:** Type safety and better developer experience
3. **Tailwind CSS:** Rapid styling with utility classes
4. **Swiper.js:** Industry-standard carousel with excellent mobile support
5. **Lucide React:** Modern, lightweight icon library

## Responsive Design

- Mobile-first approach
- Breakpoints: `sm: 640px`, `md: 768px`, `lg: 1024px`
- Sticky calculator on desktop
- Hamburger menu for mobile (can be implemented)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

