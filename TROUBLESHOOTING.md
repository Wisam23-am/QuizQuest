# 🔧 Troubleshooting Guide

## Common Errors & Solutions

### Error: "Error saving game result: {}"

**Cause:** Database schema not set up yet or RLS policies blocking access.

**Solution:**

1. Check if database schema is set up:
   - Visit `/diagnostic` page in your app
   - Check if all tables show ✅ OK
2. If tables missing:
   - Open `supabase-schema.sql`
   - Go to Supabase Dashboard → SQL Editor
   - Copy & paste entire schema
   - Run (Ctrl+Enter)
3. If RLS policy issue:
   - Make sure user is authenticated
   - Check auth status in `/diagnostic` page

---

### Error: "No questions available"

**Cause:** Questions table is empty or schema INSERT statements not run.

**Solution:**

1. Check question count in `/diagnostic` page
2. If count is 0:
   - Re-run the entire `supabase-schema.sql` file
   - Make sure you run the INSERT statements at the bottom
   - Verify with: `SELECT COUNT(*) FROM questions;`

---

### Error: "Failed to fetch questions"

**Cause:**

- Database not set up
- Network connection issue
- Wrong Supabase credentials

**Solution:**

1. Check `/diagnostic` page for database status
2. Verify `.env.local` has correct values:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
   ```
3. Restart dev server: `npm run dev`

---

### User not authenticated

**Cause:** User hasn't logged in or session expired.

**Solution:**

1. Go to `/login` and create account
2. Or enable dev mode:
   - Add to `.env.local`: `NEXT_PUBLIC_DEV_MODE=true`
   - Restart dev server
3. Check auth status in `/diagnostic` page

---

## Quick Diagnostics

### 1. Check Database Setup

Visit: **http://localhost:3000/diagnostic**

This page shows:

- ✅ Database tables status
- ✅ Question count
- ✅ Authentication status
- ✅ Error details

### 2. Check Console Logs

Open browser DevTools (F12) → Console

Look for:

- ✅ Green success messages
- ❌ Red error messages with details
- ⚠️ Yellow warnings

### 3. Check Supabase Dashboard

**Authentication:**

- Dashboard → Authentication → Users
- Should see registered users

**Database:**

- Dashboard → Table Editor
- Check `profiles`, `questions`, `game_results` tables

**SQL Editor:**

- Run: `SELECT COUNT(*) FROM questions WHERE verified = true;`
- Should return > 0

---

## Database Setup Checklist

- [ ] Supabase project created
- [ ] Environment variables set in `.env.local`
- [ ] `supabase-schema.sql` executed completely
- [ ] Tables created (profiles, questions, game_results)
- [ ] Sample questions inserted (10+)
- [ ] RLS policies enabled
- [ ] Triggers created
- [ ] User registered via `/register`

---

## Dev Mode

For testing without database:

```env
# .env.local
NEXT_PUBLIC_DEV_MODE=true
```

**What it does:**

- ✅ Skips authentication
- ✅ Uses mock user
- ⚠️ Game results NOT saved
- ⚠️ Questions still need database

**Note:** Still need to run database schema for questions!

---

## Getting Help

1. **Check Diagnostic Page:** `/diagnostic`
2. **Check Console:** Browser DevTools → Console
3. **Check Database:** Supabase Dashboard → Table Editor
4. **Read Docs:** `DATABASE_SETUP.md`

---

## Common Warning Messages

### "⚠️ No user logged in. Game result not saved."

- **Meaning:** Playing without authentication
- **Impact:** Results won't be saved to leaderboard
- **Fix:** Login via `/login` or enable dev mode

### "⚠️ Continuing without saving. Make sure database schema is set up."

- **Meaning:** Failed to save result but game continues
- **Impact:** This session won't count in leaderboard
- **Fix:** Run database schema, check `/diagnostic`

---

## Quick Fixes

### Reset Everything

```sql
-- Run in Supabase SQL Editor
DROP TABLE IF EXISTS game_results CASCADE;
DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS profiles CASCADE;
DROP MATERIALIZED VIEW IF EXISTS global_leaderboard CASCADE;

-- Then re-run supabase-schema.sql
```

### Clear Browser Data

1. F12 → Application → Storage
2. Clear Site Data
3. Refresh page

### Restart Dev Server

```bash
# Stop current server (Ctrl+C)
npm run dev
```

---

**Last Updated:** January 1, 2026
