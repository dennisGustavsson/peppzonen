# Peppzonen - Stöd för Jobbsökare

En upplyftande och stödjande webbplats på svenska designad för att hjälpa jobbsökare att hålla humöret uppe efter avslag och behålla en positiv inställning under jobbsökningen.

## Features

### 🏠 Startsida (/)

- Slumpmässiga upplyftande citat specifikt för jobbsökare (på svenska)
- Färgglad design med gradientbakgrunder och anpassad färgpalett
- Interaktiv citatgenerator med animationer
- Enkel navigation via flytande navbar

### 💚 Stödsida (/support)

- Svenska resurser för mental hälsa och kris-stöd
- Kontaktinformation för vårdcentral, psykolog och jourhavande medmänniska
- Strukturerade tips för att bryta negativa spiraler
- Akut hjälp-sektion med 112 och 1177
- Lucide-ikoner för professionell visuell framtoning

### 🎯 Aktivitetssida (/actions)

- Interaktiva humörhöjande aktiviteter organiserade efter kategori:
  - Fysisk aktivitet
  - Kreativt uttryck
  - Social kontakt
  - Mindfulness & avslappning
  - Lärande & utveckling
  - Egenvård
- 5-minuters peppboost med slumpmässiga förslag
- Spårning av genomförda aktiviteter
- Animerade övergångar med Framer Motion
- Lucide-ikoner för varje kategori

### 🎭 Personlighetstest (/personality-test)

- Satiriskt och absurt PAKE-koncept personlighetstest på svenska
- 6 humoristiska frågor om jobbsökarbeteenden
- 4 absurda personlighetstyper:
  - Den Kvant-Dynamiska Trapesoiden
  - Den Strategiska Ugglan
  - Den Holistiska Våfflan
  - Den Proaktiva Kometen
- "Skitsnack-analys" som kritiserar testens pseudovetenskap
- Uppmuntrande råd trots det satiriska tonläget

## Teknologier

- **Next.js 16.0.1** med App Router och Turbopack
- **TypeScript** för typsäkerhet
- **Tailwind CSS 4** för responsiv styling med anpassad färgpalett
- **SCSS/Sass** för custom styling och CSS-variabler
- **Framer Motion** för animationer och övergångar
- **Lucide React** för vektorikoner (ersätter emojis)
- **React Hooks** för state management

## Kom igång

### Förutsättningar

- Node.js 18+
- npm eller yarn

### Installation

1. Klona repositoryt:

```bash
git clone https://github.com/dennisGustavsson/peppzonen.git
cd website
```

2. Installera beroenden:

```bash
npm install
```

3. Starta utvecklingsservern:

```bash
npm run dev
```

4. Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare.

### Tillgängliga kommandon

- `npm run dev` - Starta utvecklingsservern
- `npm run build` - Bygg applikationen för produktion
- `npm run start` - Starta produktionsservern
- `npm run lint` - Kör ESLint för att kontrollera koden

## Projektstruktur

```
src/
├── app/
│   ├── actions/          # Aktivitetssida med humörhöjande övningar
│   ├── personality-test/ # Satiriskt PAKE-personlighetstest
│   ├── support/          # Stödresurser och kontaktinformation
│   ├── globals.css       # Globala stilar, CSS-variabler för färgpalett
│   ├── layout.tsx        # Root layout-komponent
│   └── page.tsx          # Startsida med motiverande citat
├── components/
│   ├── AppLayout.tsx     # Layout-wrapper med bakgrund
│   ├── Navbar.tsx        # Flytande pill-formad navbar
│   └── PageContainer.tsx # Container med fade-in animation
└── ...
```

## Designfilosofi

Webbplatsen följer en **"pepp-först"** designstrategi:

- **Anpassad färgpalett** med varma toner:
  - Baltic Blue (#4A7C8C)
  - Frosted Mint (#7FB5A5)
  - Tan (#D3B588) - ersatte Tangerine Dream
  - Wine Plum (#8B5A7D)
  - Pitch Black för kontrast
- **CSS-variabler** för konsekvent färganvändning
- **Uppmuntrande språk** genom allt innehåll (på svenska)
- **Positivt omformulering** av jobbsökarutmaningar
- **Konkreta råd** över abstrakta koncept
- **Humor och lätthet** med satiriska inslag (t.ex. personlighetstestet)
- **Mobile-responsive** design med Tailwind
- **Lucide-ikoner** för professionell och skalbar visuell framtoning
- **Framer Motion-animationer** för användarvänlighet

## Bidra

Vi välkomnar bidrag som överensstämmer med vårt uppdrag att stödja jobbsökare! Se till att allt innehåll behåller en positiv, stödjande ton på svenska.

## Ansvarsfriskrivning för stödresurser

Denna webbplats ger allmänt stöd och uppmuntran. För allvarliga problem med mental hälsa, vänligen kontakta:

- **112** vid livsfara eller akut psykisk kris
- **1177** för rådgivning om vård och närmsta psykiatriska akutmottagning
- Din vårdcentral eller psykolog för professionell hjälp

## Licens

Detta projekt är skapat för att hjälpa jobbsökare att behålla positivitet under sin sökning. Använd och anpassa gärna för liknande stödjande syften.

---

**Kom ihåg: Varje motgång är en uppställning för en comeback! 💪**
