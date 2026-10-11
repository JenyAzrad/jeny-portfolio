# Jeny Azrad – Portfolio (React + Vite)

## הרצה מקומית ב-VS Code
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # בניית גרסת production לתיקיית dist
```

## העלאה ל-GitHub והפיכה ללינק (GitHub Pages)
1. צרי repository חדש ב-GitHub (למשל `portfolio`).
2. בטרמינל ב-VS Code:
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/JenyAzrad/portfolio.git
git push -u origin main
```
3. ב-GitHub: Settings → Pages → Source: **GitHub Actions**.
4. אחרי דקה-שתיים האתר יעלה בכתובת `https://jenyazrad.github.io/portfolio/`.

עריכת תוכן (פרויקטים, כישורים, לינקים): `src/data.js`. עיצוב: `src/styles.css`.
