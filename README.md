# Vibe Coding Game Jam 2025 Landing Page

A neobrutalist multi-page website for the 2025 Vibe Coding Game Jam.

## Features

- Responsive design that works on all devices
- Neobrutalist design with high contrast, thick borders, and flat colors
- Interactive elements including accordions and hover effects
- Simple vanilla HTML, CSS, and JavaScript implementation
- Multi-page layout with navigation
- Mobile-friendly hamburger menu

## Pages

- **Home** - Main landing page with call-to-action
- **How to Enter** - Instructions and deadlines
- **Jury** - Information about the judges
- **Sponsors** - Current sponsors and sponsorship opportunities
- **Prizes** - Details about the prizes
- **FAQ** - Frequently asked questions

## How to Run Locally

This is a static website with no build step required. You can run it in any of the following ways:

### Option 1: Open Directly in Browser

Simply open the `index.html` file in your web browser.

### Option 2: Use a Local Server

For a more production-like environment, you can use a simple HTTP server:

**With Python:**
```
# Python 3
python3 -m http.server

# Python 2
python -m SimpleHTTPServer
```

**With Node.js:**
```
# Install http-server globally if you don't have it
npm install -g http-server

# Run the server
http-server
```

Then open your browser and navigate to `http://localhost:8000` (or the port shown in your terminal).

## Deployment to GitHub Pages

### GitHub Actions Deployment

This repository is set up with GitHub Actions to automatically deploy to GitHub Pages whenever changes are pushed to the main branch.

1. Create a GitHub repository (if you haven't already)
2. Push your code to the repository
3. Go to Settings > Pages
4. Set Source to "GitHub Actions"
5. GitHub Actions will automatically build and deploy your site
6. Your site will be available at `https://yourusername.github.io/repository-name/`

### Alternative: Branch Deployment

You can also deploy this website to GitHub Pages using the branch deployment method:

1. Create a GitHub repository (if you haven't already)
2. Push your code to the repository
3. Go to Settings > Pages
4. Set Source to "Deploy from a branch"
5. Select your branch (main or master) and folder (root)
6. Click "Save"
7. Your site will be deployed and available at `https://yourusername.github.io/repository-name/`

## Structure

- `index.html` - Home page
- `how-to-enter.html` - How to Enter page
- `jury.html` - Jury page
- `sponsors.html` - Sponsors page
- `prizes.html` - Prizes page
- `faq.html` - FAQ page
- `style.css` - Neobrutalist styling
- `main.js` - Interactive features
- `.github/workflows/deploy.yml` - GitHub Actions workflow for automatic deployment

## Design Notes

This landing page follows the neobrutalist design principles:
- Big fonts
- High contrast buttons
- Thick borders
- Flat colors
- No shadows

## License

MIT License © 2024 Vibe Coding Game Jam 