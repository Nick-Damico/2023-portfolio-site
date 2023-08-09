## Overview

6 Years later it's time to refresh my portofolio site.

This is an excuse to also play around with some of the new stuff. I'm planning to build with Next.js, TypeScript, Tailwind, and Docker.

# Getting Started

## Install

`npm install`

## Start Development environment

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Start Development environment with Docker

```bash
# Start Docker
systemctl --user docker desktop

# Start Docker container with compose
docker compose -f docker-compose.dev.yml up --build

# Stop Docker container and clean up
docker compose -f docker-compose.dev.yml down --rmi all
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Public Folder

**Optional**
The `/public` folder to store static assets such as images, fonts, etc.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy

Planning to deploy to Dreamhost which is my current provider... I might also explore deploy to Vercel or Netlify since I'm unemployeed and needing to save some cash... life.

## TODOs

- [ ] Add Resume page or Link to Resume
- [ ] Add Blog
- [ ] Skills Section
- [ ] Timeline Section
- [ ] Portfolio Section
