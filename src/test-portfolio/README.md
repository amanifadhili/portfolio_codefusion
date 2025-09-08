# 21st.dev Test Portfolio

This is a completely separate test portfolio that uses 100% 21st.dev components to demonstrate their capabilities and test integration before replacing the main portfolio components.

## Features

- **100% 21st.dev Components**: All components are sourced from 21st.dev
- **Separate from Main Portfolio**: Completely isolated test environment
- **Easy Toggle**: Switch between main and test portfolio with Ctrl+Shift+2
- **Modern Animations**: Advanced Framer Motion animations
- **Responsive Design**: Mobile-first responsive design

## Components Used

### 1. BackgroundPaths
- Animated floating paths background
- Letter-by-letter text animation
- Gradient text effects

### 2. CodeHero
- Code typing animation background
- Multi-language code snippets
- Floating elements animation
- Dynamic title rotation

### 3. NavBar (Tubelight)
- Animated tubelight navigation
- Mobile-responsive design
- Smooth transitions

### 4. TestimonialsVariant
- Animated card stack
- Scroll-triggered animations
- Star ratings
- Avatar integration

### 5. AwardsVariant
- Recognition cards
- Color-coded achievements
- Scroll animations

### 6. ImagesVariant
- Image gallery with animations
- Dark theme styling
- Scroll-triggered effects

### 7. Footer
- Modern footer design
- Social links
- Animated containers
- Responsive layout

### 8. Button
- Enhanced button component
- Multiple variants
- Smooth hover effects

## How to Access

1. **Development Mode**: Press `Ctrl+Shift+2` to toggle between main and test portfolio
2. **Direct Access**: The test portfolio is available as a separate build target
3. **URL**: Access via the purple button in development mode

## File Structure

```
src/test-portfolio/
├── App21st.tsx                 # Main test app component
├── main21st.tsx               # Entry point for test portfolio
├── index21st.html             # HTML template for test portfolio
├── components/21st/           # 21st.dev components
│   ├── BackgroundPaths.tsx
│   ├── Button.tsx
│   ├── Footer.tsx
│   ├── Testimonials.tsx
│   ├── AnimatedCardsStack.tsx
│   ├── Avatar.tsx
│   ├── CodeHero.tsx
│   └── NavBar.tsx
└── README.md                  # This file
```

## Development

The test portfolio is fully integrated with the main project and shares the same:
- Theme context
- Utility functions
- Styling system
- Build process

## Next Steps

1. Test all components thoroughly
2. Compare with main portfolio
3. Identify which components to integrate
4. Plan migration strategy
5. Replace main portfolio components gradually

## Notes

- All 21st.dev components are self-contained
- No external dependencies beyond what's already in the project
- Components are fully customizable
- Ready for production use
