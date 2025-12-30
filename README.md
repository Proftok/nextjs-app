# Next.js 15 + Strapi Application

This is a production-ready Next.js 15 application designed to work with Strapi CMS. It supports Docker deployment and includes robust error handling + TypeScript types.

## 🚀 Features

- **Next.js 15 (App Router)** with Server Components
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Strapi Integration** with standalone API client
- **Docker Ready** (Multi-stage build)
- **Health Check** endpoint at `/api/health`

## 🛠️ Prerequisites

- Node.js 18+ (for local development)
- Docker (for containerization)
- A running Strapi instance

## 📦 Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment**
   Copy `.env.local.example` to `.env.local` and update variables:
   ```bash
   cp .env.local.example .env.local
   ```
   
   Critical variables:
   - `STRAPI_API_URL`: Internal URL for server-side fetching (e.g., http://strapi:1337/api)
   - `NEXT_PUBLIC_STRAPI_API_URL`: Public URL for client-side usage (e.g., https://api.yoursite.com/api)

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000).

## 🐳 Docker Deployment

1. **Build Image**
   ```bash
   docker build -t nextjs-app .
   ```

2. **Run Container**
   ```bash
   docker run -p 3000:3000 \
     -e STRAPI_API_URL="http://your-strapi-host:1337/api" \
     -e NEXT_PUBLIC_STRAPI_API_URL="https://api.yoursite.com/api" \
     nextjs-app
   ```

## ☁️ Coolify Deployment

This repository is optimized for Coolify. 
1. Select **Dockerfile** as the build pack.
2. Add the Environment Variables in the project settings.
3. Expose port `3000`.

## 🩺 Health Check

The app includes a health check endpoint to verify Strapi connectivity:
- GET `/api/health`

Response:
```json
{
  "status": "healthy",
  "strapi": "connected",
  "timestamp": "2024-..."
}
```
