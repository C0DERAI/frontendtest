# Izza Pizza | Frontend Development Test

A responsive restaurant landing page developed using React, TypeScript, Vite, and SCSS.

The aim of this project was to recreate the provided design as closely as possible while ensuring the website is responsive, accessible, and easy to maintain.

I have followed the original design throughout the development process, with a few adjustments to improve the user experience, particularly on mobile devices.

## Getting Started

**Requirements**

- Node.js and npm

**Installation**

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <repository-directory>
npm install
```

Start the development server:

```bash
npm run dev
```

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Technology Stack

- **React** - Used to build reusable components and manage interactive elements.
- **TypeScript** - Provides type checking and helps maintain consistency across components.
- **Vite** - Used for the development environment and production build.
- **SCSS** - Used for styling, reusable variables, mixins, and responsive layouts.
- **CSS Grid and Flexbox** - Used to create the page layout and adapt it across screen sizes.

I chose to just stick with SCSS instead of Bootstrap or Tailwind CSS because the design required relatively specific styling. This gave me more control over the layout without introducing additional styling dependencies.

## Project Structure

The project is organised into separate components, with each section responsible for its own layout and functionality.

```
src/
├── assets/
├── components/
│   ├── Header/
│   ├── Hero/
│   ├── Menu/
│   ├── Story/
│   ├── Promotion/
│   ├── Location/
│   │   ├── Location.tsx
│   │   ├── Location.scss
│   │   ├── MapDialog.tsx
│   │   └── MapDialog.scss
│   └── Footer/
├── data/
├── styles/
├── App.tsx
└── main.tsx
```

Global styling, including typography, colours, spacing, and reusable mixins, is managed separately from component-specific styles.

This structure was chosen to keep the code organised and make future changes easier to manage.

## Design and Development Decisions

### Header and Mobile Navigation

The header has been implemented with sticky positioning so that navigation remains accessible while scrolling.

On desktop, the navigation follows the layout provided in the reference design.

For mobile devices, I decided to use a full-width dropdown menu instead of a narrow navigation panel. The menu includes a dark background, subtle separators between navigation items, and a hamburger icon that changes into a close icon when expanded.

This was intended to make the navigation easier to read and interact with on smaller screens.

The menu also supports keyboard navigation and can be closed using the Escape key.

### Hero Section

The hero section uses the supplied pizza image with a dark overlay to maintain contrast between the background and the heading.

I also introduced a subtle entrance animation to make the initial page experience feel less static.

The animation uses CSS transforms and opacity, keeping the implementation lightweight without requiring an additional animation library.

Reduced-motion preferences are respected so that users can view the content without unnecessary movement.

### Menu Section

The menu section follows the original design, using a turquoise background, category filters, and reusable menu cards.

I added an **All** filter alongside Pizza, Calzone, Dessert, and Drinks.

The All option is selected by default and displays every available menu item. Selecting another category filters the items accordingly.

I considered adding animations when switching between categories but decided against it. The menu already contains strong imagery, and keeping the filtering immediate provides a simpler and more consistent browsing experience.

The menu cards are generated from structured data rather than hardcoded individually, making it easier to add or update items.

### Our Story Section

The Our Story section uses a two-column layout on desktop, with the restaurant information on one side and the supplied photograph on the other.

For mobile, I decided to adjust the content order so that the image appears above the text.

This provides a more natural visual introduction to the section on smaller screens while retaining the original desktop layout.

The layout is handled through CSS Grid and responsive styling.

### Promotional Section

The promotional section follows the split layout shown in the reference, with the turquoise content panel and pizza image positioned side by side.

On smaller screens, the layout adapts to a single column to prevent the content from becoming too narrow.

I kept the styling minimal and consistent with the rest of the website, rather than introducing additional effects that could distract from the content.

### Location and Map Modal

The Location section follows a similar layout to Our Story, with responsive adjustments for smaller screens.

I grouped the Location and MapDialog components together because they belong to the same feature, while keeping their responsibilities separate.

The Location component manages the View Map interaction, and the MapDialog component handles the map overlay.

The map uses the Google Maps embed supplied in the project brief.

I also made a few usability improvements:

- The map opens in a centred overlay with a darkened background.
- The overlay can be closed using the Close button, Escape key, or by clicking outside the map.
- The map resizes to fit smaller screens.
- Focus is returned to the View Map button when the dialog closes.

The modal uses the native HTML dialog element to support accessible keyboard interaction.

### Footer

The footer follows the three-column desktop layout shown in the reference, with the Izza branding, contact information, and social links.

I downloaded free SVG social icons and used it in the project to match the design more closely.

The icons are displayed in white against the black footer, with accessible labels for screen-reader users.

On mobile, the footer sections stack vertically to improve readability.

## Responsive Design

The website has been developed using responsive layouts rather than fixed dimensions.

CSS Grid, Flexbox, media queries, and fluid sizing have been used to adapt the content across mobile, tablet, and desktop screens.

Some content arrangements have been adjusted on smaller screens where I felt the original desktop layout would not provide the best user experience.

These changes were kept consistent with the overall design rather than introducing a different visual style.

## Accessibility and Performance

Accessibility and performance have been considered throughout development.

The implementation includes:

- Semantic HTML elements and appropriate heading structures.
- Keyboard-accessible navigation and interactive controls.
- Visible focus states.
- Alternative text for meaningful images.
- Reduced-motion support for animations.
- Deferred loading of the Google Maps embed until it is required.
- Responsive image sizing and layouts.
- Minimal external dependencies.

The project also uses reusable components and a central SCSS styling structure to keep the code maintainable.

## Git Workflow

I was unable to clone the original test repository due to an issue on my device, so I created a separate Git repository and set up the project from scratch using the provided assets.

I used Git branches to organise development into individual features, including the header, hero, menu, story, promotion, location, and footer sections.

This allowed me to develop and review each part separately before integrating the changes.

## Additional Notes

The supplied design and assets have been used for this assessment. Where assets were not provided, I sourced and edited the required assets myself.

The project has been structured with future maintenance in mind, while keeping the implementation appropriate for the scope of the assignment.
