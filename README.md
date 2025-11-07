A small, clean currency converter I built while learning front-end development.  
It’s a simple single-page app that converts between popular currencies using live exchange rates (no API key required). I focused on making the UI pleasant and responsive — there are soft gradients, flag icons, and subtle micro-interactions to improve the feel.
## What it does
- Convert amounts between two currencies.
- Swap the "From" and "To" currencies with one click.
- Fetches live conversion rates from `exchangerate.host` (free, no key).
- Shows flags next to each currency for quick visual identification.
- Responsive layout for mobile and desktop.

## UI / Visual effects used
I spent extra time on the look-and-feel — here’s what I added:
- Gradient background and soft card shadow for depth.
- Flag thumbnails beside each select so it's faster to identify currencies.
- Smooth focus states on inputs and select elements.
- Animated swap button and small hover/press micro-interactions.
- A small right-hand panel that highlights the converted result for emphasis.
- Lightweight responsive layout so it looks good on phones and wider screens.

## Why I made it
I built this while exploring CSS layout, accessibility-friendly forms, and fetching data from a public API. It was a fun project to practice making UI feel “alive” with small animations and tidy spacing.

## Files
- `index.html` — single-file UI (or entry file)
- `style.css` — styling and layout
- `app.js` — logic: populates currency lists, handles swap/convert, fetches API
- (optional) `codes.js` — any utility functions (if present in your repo)

## How to run locally
If this is a static project (just HTML/CSS/JS):

