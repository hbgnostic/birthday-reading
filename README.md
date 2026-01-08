# Birthday Reading App

An elegant, password-protected web app for displaying a beautiful birthday reading. Features a minimal splash page with password protection and a typographically refined reading page.

## Features

- Clean, sophisticated splash page with password input
- Password: `jordansmith`
- Beautiful typography using Cormorant (serif) and Inter (sans-serif) fonts
- Responsive design optimized for mobile and desktop
- Markdown rendering with elegant styling
- Configured for GitHub Pages deployment

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to the URL shown in the terminal (usually http://localhost:5173)

## Deployment to GitHub Pages

### Step 1: Update Configuration

Before deploying, you need to update two files with your repository information:

1. **Update `package.json`:**
   - Replace `YOUR_GITHUB_USERNAME` with your GitHub username
   - Replace `YOUR_REPO_NAME` with your repository name

   ```json
   "homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/"
   ```

2. **Update `vite.config.js`:**
   - Replace `YOUR_REPO_NAME` with your repository name

   ```javascript
   base: '/YOUR_REPO_NAME/'
   ```

### Step 2: Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit"
```

### Step 3: Create GitHub Repository

1. Go to GitHub and create a new repository
2. Do NOT initialize it with a README, .gitignore, or license
3. Copy the repository URL

### Step 4: Connect and Push to GitHub

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 5: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
- Build your app for production
- Create a `gh-pages` branch
- Deploy the built files to GitHub Pages

### Step 6: Enable GitHub Pages (if needed)

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select the `gh-pages` branch
5. Click "Save"

Your app will be available at: `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/`

## Making Updates

After making changes to your app:

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```

2. Deploy the updates:
   ```bash
   npm run deploy
   ```

## Customization

### Changing the Password

Edit the password in `src/components/SplashPage.jsx`:

```javascript
if (password === 'jordansmith') {
  // Change 'jordansmith' to your desired password
  onPasswordCorrect();
}
```

### Updating the Reading Content

Replace the content in `public/birthdayreading.md` with your own markdown content.

### Adjusting Colors

The color palette is defined in `src/index.css`:

```css
:root {
  --color-cream: #faf8f5;
  --color-warm-gray: #8b8680;
  --color-dark-gray: #4a4742;
  --color-navy: #3d4f5c;
  --color-forest: #4a5d4f;
}
```

## Design Philosophy

The app follows a sophisticated, editorial design aesthetic:

- **Typography**: Elegant serif headings (Cormorant) with clean sans-serif body text (Inter)
- **Color Palette**: Warm, muted tones with soft navy and forest green accents
- **Layout**: Generous white space and margins for optimal readability
- **Interaction**: Subtle animations and transitions without gimmicks
- **Mobile-First**: Fully responsive design that works beautifully on all devices

## Project Structure

```
birthday-app/
├── public/
│   └── birthdayreading.md      # The markdown content to display
├── src/
│   ├── components/
│   │   ├── SplashPage.jsx      # Password-protected splash screen
│   │   ├── SplashPage.css
│   │   ├── ReadingPage.jsx     # Main reading display
│   │   └── ReadingPage.css
│   ├── App.jsx                 # Main app component
│   ├── App.css
│   ├── index.css               # Global styles and typography
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- React 19
- Vite (build tool)
- react-markdown (for rendering markdown)
- remark-gfm (GitHub Flavored Markdown support)
- gh-pages (deployment)

## License

This is a personal project. Use as you wish.
