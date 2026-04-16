# Bookkeeper360.com - Behaviors & Interactions

## Scroll Behaviors

### Navbar
- **Position:** fixed, z-index 20, sits below top banner (top: 47px)
- **Top Banner:** fixed, z-index 10, blue gradient strip
- **Scroll behavior:** Both banner + nav stay fixed. No shrink/shadow change observed on scroll.
- **Implementation:** `position: fixed` with appropriate top offsets

### Page Scroll
- No smooth scroll library (no Lenis, Locomotive Scroll)
- No scroll-snap on any container
- No scroll-driven animations (no AOS, GSAP, Framer Motion)
- Standard browser scroll behavior

## Animations

### Hero Typewriter Effect
- **Mechanism:** Stimulus.js controller `data-controller="typing"` with typed.js-like behavior
- **Rotating strings:** "Growing Businesses.", "Small Businesses.", "Service Companies.", "Technology Companies.", "eCommerce Businesses.", "Real Estate Companies.", "Entrepreneurs."
- **Element:** `<span class="text-orange-500">` inside H1
- **Cursor:** Blinking pipe `|` character via `.typed-cursor`
- **Implementation:** Use `typed.js` npm package or custom typewriter effect

### No Other Animations
- No entrance animations on scroll
- No parallax effects
- No auto-playing carousels
- No hover-triggered animations beyond standard link/button hover

## Hover States

### CTA Buttons (Orange)
- **Transition:** `transition: 0.2s`
- **Shadow:** `rgba(50, 50, 93, 0.26) 0px 5px 10px -2px, rgba(0, 0, 0, 0.3) 0px 3px 6px -3px`
- **Expected hover:** Slight lift/darker shadow (standard button hover)

### Navigation Links
- **Base:** Montserrat 600, 14px, #3C416E
- **Hover:** Likely color change or underline (standard nav hover)

### Dropdown Menus
- **Services, Industries, Company:** Have dropdown submenus
- **Trigger:** Hover-based dropdown (not click)
- **Content:** Service icons + labels in a dropdown panel

## Interactive Elements

### Services Dropdown
- Opens on hover over "Services" nav item
- Contains: Our App, Bookkeeping, CFO Advisory, Payroll & HR, Tax (with sub-link R&D Tax Credit), Back-Office
- Each item has a circle icon + label

### Industries Dropdown
- eCommerce, SaaS, Service, Healthcare, Real Estate, Nonprofit

### Company Dropdown
- About, Meet the Team, Meet Our CEO, Blog, News & Media, Careers, Community

## Responsive Behavior

### Desktop (1440px)
- Max-width container: 1280px with 80px margin
- 2-column layouts for content sections
- Navbar: full horizontal nav with all items visible

### Mobile (390px)
- Single column stack
- Hamburger menu (nav items hidden)
- Testimonials stack vertically
- App integration logos wrap into rows
- Content sections stack (image above/below text)
- Footer columns stack

### Breakpoint
- Primary breakpoint appears to be around ~768px (tablet)
