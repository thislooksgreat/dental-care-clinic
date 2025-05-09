# Deployment Guide for Dental Clinic Website

This guide provides step-by-step instructions for deploying the Dental Clinic website using GitHub and Vercel.

## Prerequisites

- GitHub account
- Vercel account (can sign up with your GitHub account)
- Git installed on your local machine
- Node.js and npm installed

## Step 1: Move the Project to Final Location

1. Run the provided PowerShell script to move the project from the temporary directory to the final location:

```powershell
.\move-to-final.ps1
```

2. Navigate to the final project directory:

```bash
cd C:\websites\dentist
```

## Step 2: Initialize Git Repository

1. Initialize a new Git repository:

```bash
git init
```

2. Add all files to the repository:

```bash
git add .
```

3. Commit the files:

```bash
git commit -m "Initial commit"
```

## Step 3: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in to your account
2. Click on the "+" icon in the top-right corner and select "New repository"
3. Name your repository (e.g., "dental-clinic-website")
4. Choose whether to make it public or private
5. Click "Create repository"
6. Follow the instructions on GitHub to push your existing repository

## Step 4: Connect to Vercel

1. Go to [Vercel](https://vercel.com) and log in (or sign up with your GitHub account)
2. Click "Add New..." and select "Project"
3. Import your GitHub repository
4. Configure project settings:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: (leave as default)
   - Output Directory: (leave as default)

5. Environment Variables:
   - Add the following environment variables:
     - `RESEND_API_KEY`: Your Resend API key (get one at [resend.com](https://resend.com))
     - `FROM_EMAIL`: Email address to send from (e.g., `delivered@resend.dev`)
     - `TO_EMAIL`: Email address to receive appointment requests (e.g., `contact@thislooksgreat.net`)
     - `FROM_NAME`: Display name for sender (e.g., `Dental Care Clinic`)
   - In Vercel, you can add these as plain text or as secrets by prefixing with `@`

6. Click "Deploy"

## Step 5: Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" > "Domains"
2. Add your custom domain and follow the instructions to configure DNS settings

## Continuous Deployment

- The project is set up for continuous deployment
- Any changes pushed to the main branch will automatically trigger a new deployment
- GitHub Actions will run tests and linting checks before deployment

## Troubleshooting

If you encounter any issues during deployment:

1. Check the build logs in Vercel for specific errors
2. Ensure all environment variables are correctly set
3. Verify that your GitHub repository has the latest code
4. Check that the Node.js version on Vercel matches your local version
