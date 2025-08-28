# WTWR (What to Wear) - React Frontend

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Backend Repository 

You can download the Express + MongoDB backend here:
[se__project_express](https://github.com/E2Funny14/se_project_express)

## Live URLs

### Development
- **Frontend**: http://localhost:3000 (run with `npm run dev`)
- **Backend**: http://localhost:3001 (requires separate backend setup)

### Production Deployment Options

This application can be deployed on various platforms. The following deployment URLs are available once configured:

#### GitHub Pages
- **URL**: https://e2funny14.github.io/se_project_react/
- **Status**: Configure GitHub Pages in repository settings to enable
- **Deployment**: Automatic via GitHub Actions on push to main branch

#### Netlify
- **URL**: https://[your-app-name].netlify.app/
- **Status**: Deploy by connecting your GitHub repository to Netlify
- **Configuration**: Uses `netlify.toml` in the repository root

#### Vercel
- **URL**: https://[your-app-name].vercel.app/
- **Status**: Deploy by connecting your GitHub repository to Vercel  
- **Configuration**: Uses `vercel.json` in the repository root

## Setup Instructions

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/E2Funny14/se_project_react.git
   cd se_project_react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment configuration:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open http://localhost:3000 in your browser

### Production Deployment

#### Environment Configuration
Update the `VITE_API_BASE_URL` environment variable to point to your production backend:

- For Netlify: Set in site settings or `netlify.toml`
- For Vercel: Set in project settings or `vercel.json`
- For GitHub Pages: Update in `.github/workflows/deploy.yml`

#### Backend Requirements
Ensure your backend API is deployed and accessible. Update the API URL in your deployment configuration to match your backend deployment.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint