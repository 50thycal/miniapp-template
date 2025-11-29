# Farcaster Mini App Template

A clean, production-ready starter template for building Farcaster Mini Apps with Next.js 15 and QuickAuth sign-in.

## What's Included

This template provides the foundational plumbing needed for every Farcaster Mini App:

- ✅ **QuickAuth Sign-In Flow** - Complete authentication with Farcaster
- ✅ **fc:miniapp Metadata** - Proper frame and mini app configuration
- ✅ **Next.js 15 App Router** - Modern React with server components
- ✅ **Neynar Integration** - API client for Farcaster data
- ✅ **TypeScript** - Full type safety
- ✅ **Vercel Ready** - Optimized for deployment

## Quick Start

### 1. Clone and Install

```bash
git clone <your-repo-url> my-miniapp
cd my-miniapp
pnpm install
```

### 2. Configure Environment

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Update the variables:

```env
NEYNAR_API_KEY=your_neynar_api_key_here
APP_BACKEND_URL=http://localhost:3000
```

Get your Neynar API key from [neynar.com](https://neynar.com).

### 3. Update Configuration

Edit `app/config.ts` with your app details:

```typescript
export const APP_CONFIG = {
  title: 'My Mini App',
  description: 'Your app description here',
  miniAppButtonTitle: 'Open App',
  domain: 'YOUR-DOMAIN.vercel.app', // Update after deployment
  appVersion: '0.1.0',
}
```

### 4. Run Locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
miniapp-template/
├── app/
│   ├── api/
│   │   ├── health/          # Health check endpoint
│   │   └── neynar/          # Neynar API integration
│   ├── config.ts            # App configuration (UPDATE THIS!)
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main app UI (customize this)
├── components/
│   └── AuthCard.tsx         # Farcaster sign-in component
├── hooks/
│   └── useAuthSession.ts    # Authentication hook
├── lib/
│   ├── neynar.ts            # Neynar helpers
│   ├── neynarClient.ts      # Neynar SDK client
│   └── text.ts              # Text utilities
├── public/
│   ├── embed-preview.png    # (Add your preview image)
│   └── .well-known/         # Farcaster domain manifest
├── .env.example             # Environment variables template
└── README.md                # This file
```

## Customization Guide

### 1. Update Branding

- Edit `app/config.ts` with your app name and description
- Add your preview image to `public/embed-preview.png` (1200x630px recommended)
- Add app icon to `public/icon.png`

### 2. Build Your Features

Replace the placeholder content in `app/page.tsx`:

```tsx
// Current placeholder:
<section>
  <h2>App Content Area</h2>
  <p>Replace this block with your actual mini app features.</p>
</section>

// Replace with your custom UI:
<section>
  {/* Your mini app features here */}
</section>
```

### 3. Add API Routes

Create new routes in `app/api/` for your app's functionality:

```typescript
// Example: app/api/my-feature/route.ts
export async function POST(request: Request) {
  const data = await request.json()
  // Your logic here
  return Response.json({ success: true })
}
```

### 4. Style Your App

This template uses inline styles for simplicity. You can:
- Keep using inline styles
- Add Tailwind CSS
- Use CSS modules
- Add any styling solution you prefer

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `NEYNAR_API_KEY`
   - `APP_BACKEND_URL` (set to your production URL)
4. Deploy!

### After Deployment

1. Update `app/config.ts` with your production domain:
   ```typescript
   domain: 'your-app.vercel.app'
   ```
2. Redeploy to apply the changes
3. Test your mini app in Warpcast

## Testing Your Mini App

### In Warpcast Mobile

1. Deploy your app to production
2. Create a cast with your mini app URL
3. Test the mini app directly in Warpcast
4. Verify sign-in flow works correctly

### Localhost Testing

For local development, you can:
- Test the UI and basic functionality
- Sign-in may require special setup or tunneling (ngrok/localtunnel)
- Most features can be developed and tested locally

## Key Files to Modify

| File | Purpose | Action Needed |
|------|---------|---------------|
| `app/config.ts` | App configuration | ✅ **Update with your details** |
| `app/page.tsx` | Main UI | ✅ **Build your features here** |
| `public/embed-preview.png` | Social preview image | ✅ **Add your image** |
| `.env.local` | Environment variables | ✅ **Add your API keys** |

## Common Tasks

### Add a New Component

```bash
# Create a new component file
touch components/MyComponent.tsx
```

```tsx
// components/MyComponent.tsx
export function MyComponent() {
  return <div>My Component</div>
}
```

### Add a New API Route

```bash
# Create a new API route
mkdir -p app/api/my-route
touch app/api/my-route/route.ts
```

```tsx
// app/api/my-route/route.ts
export async function GET() {
  return Response.json({ message: 'Hello' })
}
```

### Use the Signed-In User

```tsx
import { useAuthSession } from '@/hooks/useAuthSession'

export default function MyPage() {
  const { user, status, isInMiniApp } = useAuthSession()

  if (status === 'signedIn' && user) {
    // User is signed in
    console.log('User FID:', user.fid)
    console.log('Username:', user.username)
  }
}
```

## Troubleshooting

### Sign-in not working
- Ensure you're testing in a Farcaster client (Warpcast)
- Verify `NEYNAR_API_KEY` is set correctly
- Check browser console for errors

### Preview image not showing
- Ensure image is at `public/embed-preview.png`
- Verify `domain` in `app/config.ts` is correct
- Check image size (recommended: 1200x630px)

### API routes returning 404
- Verify route file structure matches Next.js conventions
- Check that files are named `route.ts` (not `index.ts`)
- Restart dev server after adding new routes

## Resources

- [Farcaster Documentation](https://docs.farcaster.xyz/)
- [Mini App SDK](https://github.com/farcasterxyz/miniapp-sdk)
- [Neynar API Docs](https://docs.neynar.com/)
- [Next.js Documentation](https://nextjs.org/docs)

## Support

For issues or questions:
1. Check the [troubleshooting section](#troubleshooting)
2. Review Farcaster documentation
3. Search existing GitHub issues
4. Create a new issue with details

## License

MIT
