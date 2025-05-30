# 🦍 HAM - The Ape Who Made The Moon Possible

A modern, animated Next.js website for the HAM memecoin - honoring the first hominid in space.

## 🚀 About HAM

Ham was a chimpanzee who flew to space on January 31, 1961, aboard Mercury-Redstone 2. His successful 16-minute flight proved that living beings could survive in space, paving the way for human astronauts like Alan Shepard, John Glenn, and eventually Neil Armstrong's moon landing.

This website is a tribute to Ham's legacy and serves as the home for the $HAM memecoin - a 97% community-owned token that honors the ape who made the moon possible.

## ✨ Features

- **Modern Design**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Fast loading with modern web technologies
- **SEO Friendly**: Proper meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any modern hosting platform

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ham-memecoin
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── StoryImages.tsx
    ├── WhyHam.tsx
    ├── Tokenomics.tsx
    ├── Mission.tsx
    ├── Footer.tsx
    └── Toast.tsx
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.ts`:
- Primary colors (orange gradient)
- Secondary colors (red accents)
- Custom animations and effects

### Content
All content is easily editable in the respective component files:
- Hero section: `src/components/Hero.tsx`
- Story content: `src/components/About.tsx`
- Tokenomics: `src/components/Tokenomics.tsx`

## 🌙 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
The project is compatible with:
- Netlify
- Railway
- DigitalOcean App Platform
- Any platform supporting Node.js

## 📊 Tokenomics

- **Total Supply**: 1,961,000,000 $HAM (in honor of 1961)
- **Community Owned**: 100%
- **Liquidity Pool**: 100% (Burned Forever)
- **No VCs, No Team Allocation**

## 🤝 Contributing

This is a community project! Feel free to:
- Report bugs
- Suggest improvements
- Submit pull requests
- Share ideas

## 📜 License

This project is open source and available under the MIT License.

## 🙏 Tribute

In memory of Ham (1957-1983) - the brave chimpanzee who proved that space travel was possible for living beings. Without Ham's courage and sacrifice, humanity might never have reached the moon.

---

**Ham didn't go to the moon, but he made it possible for us to go. Now it's time to take $HAM to the moon! 🚀🌙**

# HAM Memecoin Website

## Prosjektoversikt
Dette er en Next.js 14.0.4 applikasjon for HAM memecoin - den første sjimpansen i rommet (31. januar 1961).

**Live nettside:** https://hamtoken.com

## Hvordan koble til serveren igjen

### 1. Naviger til prosjektmappen
```powershell
cd "C:\Users\Admin B\Documents\ham"
```

### 2. Sett opp PATH for Node.js og Git (viktig!)
Dette må gjøres hver gang du åpner en ny PowerShell terminal:
```powershell
$env:PATH = $env:PATH + ";C:\Program Files\nodejs"
$env:PATH = $env:PATH + ";C:\Program Files\Git\bin"
```

### 3. Start utviklingsserveren
```powershell
npm run dev
```

Serveren vil automatisk finne en ledig port:
- Prøver først `http://localhost:3000`
- Hvis opptatt, prøver `http://localhost:3001`, `3002`, `3003`, osv.

### 4. Stoppe alle lokale servere
Hvis det er mange servere som kjører på forskjellige porter:
```powershell
taskkill /f /im node.exe
```

## Git-kommandoer

### Sjekke status
```powershell
git status
```

### Legge til endringer og committe
```powershell
git add .
git commit -m "Din commit-melding her"
git push
```

### Sjekke commit-historikk
```powershell
git log --oneline
```

## Viktig prosjektinformasjon

### Kontraktadresse
```
3HTQRg7J1AcbRBtz5LwdRvfKWSNZuiyqWpPEiAMMpump
```

### Sosiale medier status
- **X (Twitter):** TBA
- **Telegram:** TBA  
- **Pump.fun:** TBA
- **Dexscreener:** TBA

### Pump.fun link
```
https://pump.fun/coin/3HTQRg7J1AcbRBtz5LwdRvfKWSNZuiyqWpPEiAMMpump?include-nsfw=true
```

## Prosjektstruktur

### Viktige filer
- `src/app/page.tsx` - Hovedside
- `src/components/Hero.tsx` - Hero-seksjon med kontraktadresse og sosiale lenker
- `src/components/About.tsx` - Om HAM-seksjonen
- `src/components/StoryImages.tsx` - Historiske øyeblikk
- `src/components/Tokenomics.tsx` - Tokenomics-informasjon
- `src/components/Footer.tsx` - Footer

### Bilder
Alle bilder ligger i `/public/`:
- `/hovedbilde.png` - Hovedbilde av HAM
- `/med-hjelmen.png` - HAM med hjelm
- `/raketten.png` - Mercury-raketten
- `/avis-bilde.png` - Avisutklipp

## Deployment

### GitHub Repository
```
https://github.com/hammeme1961/ham-memecoin.git
```

### Vercel Deployment
- Prosjekt: `ham-memecoin`
- Automatisk deployment fra main branch
- Custom domain: `hamtoken.com` og `www.hamtoken.com`

## Vanlige problemer og løsninger

### Problem: "npm is not recognized"
**Løsning:** Kjør PATH-kommandoen for Node.js:
```powershell
$env:PATH = $env:PATH + ";C:\Program Files\nodejs"
```

### Problem: "git is not recognized"  
**Løsning:** Kjør PATH-kommandoen for Git:
```powershell
$env:PATH = $env:PATH + ";C:\Program Files\Git\bin"
```

### Problem: Port er i bruk
**Løsning:** Next.js finner automatisk en ledig port, eller stopp alle Node.js prosesser:
```powershell
taskkill /f /im node.exe
```

### Problem: Endringer ikke synlige på live site
**Løsning:** Sjekk at endringene er committed og pushet til GitHub:
```powershell
git status
git add .
git commit -m "Beskrivelse av endringer"
git push
```

## Kontaktinformasjon
- **Domene:** hamtoken.com (med WHOIS privacy protection)
- **GitHub:** hammeme1961
- **Vercel:** ham-memecoin prosjekt

## Viktige notater
- Alle sosiale lenker er satt til "TBA" status
- Kontraktadressen er oppdatert til den ekte Solana-adressen
- Nettsiden har responsive design og fungerer på mobile enheter
- Bruker moderne glassmorphism-effekter og animasjoner 