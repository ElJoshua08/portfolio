# Little GSAP Docs so i can keep track

The start animation of the landing page is in ["page.tsx"](/src/app/page.tsx).

This first uses _two_ useGSAP(), one takes care of the enter animations. and the second one takes care of the out animations `onScroll`

# Hero

First we animate the borders and then everything else explodes.

Goes top-left to bottom-right, with a little bit of delay, creating
a _diagonal_ animation

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

- right-border <div></div>

## Right Column (Terminal)

Ids:

- terminal-header (TerminalHeader component parent div) <div></div>
- terminal-header-title (The name of the terminal) <span></span>
- terminal-header-bottom-border (The border below the terminal header)

- terminal-prompt (The prompt span) <span></span>

Classes:

- terminal-header-action (Each action button on the top-right) <span></span>
- terminal-line (Each terminal line) <div></div>
- terminal-line-body-section (Each section in body) <span></span>
- terminal-line-prompt-section (Each section in prompt) <span></span>
- terminal-line-misc-section (Each section in misc) <span></span>
