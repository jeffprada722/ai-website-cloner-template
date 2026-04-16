# Bookkeeper360.com Design Tokens

## Typography

### Font Families
- **Primary:** Montserrat (500, 600, 700, 800) - headings, body, navigation, buttons
- **Secondary:** Nunito (500, 800) - used sparingly
- **Monospace:** Roboto Mono - code/technical text
- **Source:** Google Fonts

### Type Scale
| Element | Family | Weight | Size | Line Height | Color |
|---------|--------|--------|------|-------------|-------|
| H1 | Montserrat | 800 | 42px | 50.4px (1.2) | #3C416E |
| H2 | Montserrat | 800 | 36px | 43.2px (1.2) | #3C416E |
| H3 | Montserrat | 800 | 24px | 28.8px (1.2) | #3C416E |
| H5 | Montserrat | 700 | 14px | 16.8px (1.2) | #3C416E |
| Body | Montserrat | 500 | 17px | 30.6px (1.8) | #767EAD |
| Subtitle | Montserrat | 400 | 18px | 28.8px (1.6) | #8178B0 |
| Nav link | Montserrat | 600 | 14px | 14px | #3C416E |
| Nav CTA | Montserrat | 600 | 14px | 14px | #FFFFFF |
| Hero CTA | Montserrat | 600 | 18px | 18px | #FFFFFF |
| Section CTA | Montserrat | 600 | 17px | 17px | #FFFFFF |
| Banner text | Montserrat | 400 | 16px | 19.2px | #FFFFFF |

## Colors

### Primary Palette
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Navy | #3C416E | rgb(60, 65, 110) | Headings, primary text, nav links |
| Orange | #FC6A03 | rgb(252, 106, 3) | CTA buttons, accent, typewriter text |
| Blue | #2697D4 | rgb(38, 151, 212) | Links, gradients, footer |
| Navy Dark | #2D5091 | rgb(45, 80, 145) | Gradient endpoints |

### Secondary Palette
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Green | #1BC58A | rgb(27, 197, 138) | Success, positive metrics |
| Purple | #4B4276 | rgb(75, 66, 118) | Dark purple accents |
| Purple Light | #8178B0 | rgb(129, 120, 176) | Subtitle text |
| Purple Muted | #767EAD | rgb(118, 126, 173) | Body text |
| Purple Soft | #655B95 | rgb(101, 91, 149) | Secondary text |

### Backgrounds
| Name | Hex/Value | Usage |
|------|-----------|-------|
| White | #FFFFFF | Main background |
| Off-white | #F7F9FF | rgb(247, 249, 255) - app integrations section |
| Lavender | #E7E7F4 | rgb(231, 231, 244) - borders, light sections |
| Lavender border | #AEAED6 | rgb(174, 174, 214) - border accents |
| White 90% | rgba(255,255,255,0.9) | Card overlays |
| White 50% | rgba(255,255,255,0.5) | Subtle overlays |

### Gradients
| Name | Value | Usage |
|------|-------|-------|
| Blue Banner | linear-gradient(to right, #2D5091, #2697D4, #2D5091) | Top promotional banner |
| Blue Footer | linear-gradient(#2697D4, #2D5091) | Footer background |
| Blue Glow | radial-gradient(circle, rgba(38,151,212,0.35), transparent 70%) | Hero glow effect |

## Spacing

### Container
- Max width: 1280px
- Horizontal margin: 80px (responsive)
- Vertical padding: 90px
- Horizontal padding: 40px

### Common Spacing
- Section gap: 90px vertical padding
- Heading to body: 18px margin-bottom
- Body to CTA: 25.5px margin-top
- H1 to subtitle: 18px margin-top

## Border Radius
- Buttons: 8px
- Cards: varies (8-16px)

## Shadows
- CTA buttons: `rgba(50,50,93,0.26) 0px 5px 10px -2px, rgba(0,0,0,0.3) 0px 3px 6px -3px`
- CTA hover: slightly elevated version

## Transitions
- Buttons: `transition: 0.2s`
- General: `transition: all` (most elements)
