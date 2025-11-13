# 🚀 Deploy to GitHub Pages

Follow these steps to deploy your cyberpunk portfolio to GitHub Pages:

## 📋 Prerequisites

- A GitHub account
- Git installed on your computer

## 🔧 Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Name your repository (e.g., `cyber-portfolio`)
4. Set it to **Public**
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **"Create repository"**

## 📦 Step 2: Push Your Code to GitHub

Run these commands in the Replit Shell:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Cyberpunk Portfolio"

# Add your GitHub repository as remote (replace USERNAME and REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace** `USERNAME` with your GitHub username and `REPO_NAME` with your repository name.

## ⚙️ Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top menu)
3. Click **"Pages"** in the left sidebar
4. Under **"Build and deployment"**:
   - Source: Select **"GitHub Actions"**
5. Click **"Save"**

## ✨ Step 4: Deploy

The deployment will happen automatically! The GitHub Actions workflow will:
- Build your portfolio
- Deploy it to GitHub Pages
- Make it available at: `https://USERNAME.github.io/REPO_NAME/`

To check the deployment status:
1. Go to the **"Actions"** tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 1-2 minutes)
4. Once complete, visit your site at `https://USERNAME.github.io/REPO_NAME/`

## 🔄 Updating Your Portfolio

Whenever you make changes:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Actions will automatically rebuild and redeploy your site!

## 🎨 Using a Custom Domain (Optional)

1. Buy a domain from a domain registrar
2. In your GitHub repository → **Settings** → **Pages**
3. Enter your custom domain under **"Custom domain"**
4. Add DNS records at your domain registrar:
   - Type: `CNAME`
   - Name: `www` (or `@` for root domain)
   - Value: `USERNAME.github.io`

## 🐛 Troubleshooting

**Pages not showing?**
- Check the Actions tab for build errors
- Ensure GitHub Pages is enabled in Settings → Pages
- Wait a few minutes after the first deployment

**CSS/Images not loading?**
- The workflow automatically handles base paths
- Clear your browser cache

**Build failing?**
- Check the Actions tab for error details
- Ensure all dependencies are committed

## 📝 Notes

- Your portfolio is a static site (frontend only)
- The contact form logs to console (you can integrate with form services like Formspree)
- The site will be available at `https://USERNAME.github.io/REPO_NAME/`

---

Need help? Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
