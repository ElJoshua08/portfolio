# Little GSAP Docs so i can keep track

The start animation of the landing page is in ["page.tsx"](/src/app/page.tsx).

This first uses _two_ useGSAP(), one takes care of the enter animations. and the second one takes care of the out animations `onScroll`

## Navbar

The navbar animates the logo (left side), the items (right side), and the bottom border as an ::after `element`

Ids:

- logo (Left logo) <Link></Link>
- bottom-border <div></div>

Classes:

- link-item (Right Items) <li></li>

## Left Column

This animates the hero heading (Josue Diaz), the about me, and the scroll down.

Ids:

- hero-complete-name (Entire h1) <h1></h1>
- hero-name (Just the name `Josué`) <span></span>
- hero-name-wrapper (Divs that wraps the hero name span) <div></div>
- hero-surname (Just the surname `Díaz`) <span></span>
- hero-scroll (The las pharagraph) <div></div>

- border-right <div></div>

## Right Column (Terminal)
