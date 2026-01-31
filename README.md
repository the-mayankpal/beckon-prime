# Beckon Prime Website

## Deployment Guide

### 1. Create a Supabase Project (Free)

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Go to **SQL Editor** and run this to create the waitlist table:

```sql
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to insert" ON public.waitlist
FOR INSERT WITH CHECK (true);

CREATE POLICY "Only service role can view" ON public.waitlist
FOR SELECT USING (auth.role() = 'service_role');
```

### 2. Environment Variables

Set these environment variables in your hosting platform (Vercel, Netlify, etc.):

| Variable | Where to find it |
|----------|------------------|
| `VITE_SUPABASE_URL` | Supabase Dashboard → Settings → API → Project URL |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase Dashboard → Settings → API → anon/public key |

### 3. Deploy

**Option A: Vercel**
1. Push code to GitHub
2. Import repo in Vercel
3. Add environment variables
4. Deploy

**Option B: Netlify**
1. Push code to GitHub
2. Import repo in Netlify
3. Add environment variables in Site Settings → Environment
4. Deploy

### 4. Custom Domain

Add your domain in your hosting platform's settings.

---

## Local Development

```sh
npm install
npm run dev
```

## Tech Stack

- React + Vite + TypeScript
- Tailwind CSS + shadcn/ui
- Supabase (database)
