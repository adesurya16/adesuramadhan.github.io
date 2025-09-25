## Ade Surya Ramadhani — Portfolio

This is the source for my portfolio site, built with React + Vite and deployed to GitHub Pages at `https://adesuramadhan.github.io`.

### Local development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

### Build

```bash
npm run build
npm run preview
```

### Deploy (GitHub Pages)

This repo uses GitHub Actions to build and deploy on every push to `main`.

Steps to set up once:

1. Create a GitHub repository named `adesuramadhan.github.io` under your account.
2. Push this project to that repository on the `main` branch.
3. In the repository settings, under Pages → Build and deployment, set Source to "GitHub Actions".

Workflow file: `.github/workflows/deploy.yml` builds with Node 20 and deploys the `dist` folder.

### Content

- Name: Ade Surya Ramadhani (Ade)
- Title: Software Engineer — Backend · Infra · 5+ years experience
- Current: Software Engineer at Traveloka
- Education: Bandung Institute of Technology — Computer Science
- Contact: WhatsApp, Email, Twitter, Instagram, LinkedIn

You can edit the UI in `src/App.jsx` and styles in `src/index.css`.

