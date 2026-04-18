# Limitless Babies 🌟

A Doman-method inspired early learning app for babies and toddlers. Reading flashcards, scattered-dot math up to 100, and encyclopedic knowledge — all in a clean white/red interface.

## 🚀 Deploy to Vercel in 30 Minutes

You'll need:
- A computer (Mac/Windows/Linux)
- A free GitHub account: https://github.com/signup
- A free Vercel account: https://vercel.com/signup (sign up with your GitHub account)

### Step 1 · Upload to GitHub (10 min)

1. Go to https://github.com and sign in
2. Click the **+** in the top-right → **New repository**
3. Name it `limitless-babies` → make it **Public** → click **Create repository**
4. On the empty repo page, click **"uploading an existing file"** (small blue link)
5. Drag **every file and folder** from inside this folder (including the `src` and `public` folders) onto the page
   - Important: drag the *contents*, not the outer folder itself
6. Scroll down → click **Commit changes**

### Step 2 · Deploy to Vercel (5 min)

1. Go to https://vercel.com and sign in with GitHub
2. Click **Add New…** → **Project**
3. Find `limitless-babies` in the list → click **Import**
4. Leave everything at default settings → click **Deploy**
5. Wait ~2 minutes. You'll see confetti when it's live.
6. Vercel gives you a URL like `limitless-babies-abc123.vercel.app`

### Step 3 · Install on Your iPhone (2 min)

1. Open the Vercel URL in **Safari** on your iPhone (not Chrome)
2. Tap the **Share** button (square with up-arrow)
3. Scroll down → tap **Add to Home Screen**
4. Name it "Limitless" → tap **Add**
5. The app icon (your twins' logo) now lives on your home screen and opens full-screen like a real app

---

## 💻 Running Locally (Optional)

If you want to preview or edit before deploying:

```bash
npm install
npm run dev
```

Then open http://localhost:5173

To build for production:
```bash
npm run build
```

---

## 🎨 Customizing

- **Word list & translations**: edit `CORE_TRANSLATIONS` near the top of `src/App.jsx`
- **Knowledge cards**: edit `KNOWLEDGE_POOL` in `src/App.jsx`
- **Colors**: search for `RED = "#E8192C"` in `src/App.jsx` and change it
- **Logo**: replace the `LOGO_SRC` data URI (or swap in a new PNG)
- **App icons**: replace files in `public/` (icon-192.png, icon-512.png, apple-touch-icon.png)

---

## 🔒 What's Offline-Safe

Everything runs in the browser — no backend, no API keys, no tracking:
- ✅ Translations (30+ languages, embedded dictionary)
- ✅ Daily word & knowledge rotation (seeded by date)
- ✅ Scattered dots, equations, all math stages
- ✅ Settings saved to localStorage
- ✅ Installable as a real app (PWA)

Photo loading requires internet (LoremFlickr / Unsplash). Service worker caches photos once viewed.

---

Built with ❤️ for babies everywhere.
