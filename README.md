# Care4uNext

Een moderne healthcare platform gebouwd met Next.js, TypeScript en Tailwind CSS.

## 🚀 Features

- Modern React met Next.js 14
- TypeScript voor type veiligheid
- Tailwind CSS voor styling
- Internationalisatie ondersteuning (i18n)
- Storyblok CMS integratie
- Google Cloud integratie voor logging en error reporting
- Progress bar voor betere gebruikerservaring
- Datum verwerking met date-fns en Luxon
- Responsive design

## ⚙️ Systeem Vereisten

- Node.js 18.17 of hoger
- npm 9.0.0 of hoger

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Programmeertaal:** TypeScript
- **Styling:** Tailwind CSS
- **CMS:** Storyblok
- **State Management:** React Hooks
- **Datum Verwerking:** date-fns, Luxon
- **Cloud Services:** Google Cloud (Logging & Error Reporting)
- **Development Tools:** ESLint, Prettier, TypeScript

## 📦 Installatie

1. Clone de repository:
```bash
git clone [repository-url]
```

2. Installeer dependencies:
```bash
npm install
```

3. Maak een `.env.local` bestand aan in de root directory en voeg je environment variables toe:
```env
# Storyblok tokens
STORYBLOK_API_TOKEN=your_preview_token
NEXT_PUBLIC_STORYBLOK_API_TOKEN=your_public_token


## 🚀 Development

Om de development server te starten:

```bash
npm run dev
```

De applicatie zal beschikbaar zijn op `https://localhost:3000`

### Belangrijke Notities
* `npm run dev` geeft je een lokale SSL certificaat voor localhost - sta dit alstublieft toe. Dit is nodig voor Storyblok's visual live editor om te werken.
* Er is geen `.env.local` of `.env` in deze repository omdat ze in .gitignore staan. Je moet ze zelf aanmaken en het access token toevoegen:
  - Gebruik de preview token voor `.env.local`
  - Gebruik de public token voor `.env` bij deployment

## 📝 Beschikbare Scripts

- `npm run dev` - Start development server
- `npm run build` - Build voor productie
- `npm run start` - Start productie server
- `npm run lint` - Run ESLint
- `npm run ts-compile` - TypeScript type checking
- `npm run analyze` - Analyseer bundle grootte

## 🏗️ Project Structuur
├── app/ # Next.js app directory
├── components/ # Herbruikbare React components
├── public/ # Statische assets
├── utils/ # Utility functies
├── app-state/ # Applicatie state management
└── certificates/ # SSL certificaten


## 🔧 Configuratie

Het project gebruikt verschillende configuratie bestanden:

- `next.config.js` - Next.js configuratie
- `tailwind.config.js` - Tailwind CSS configuratie
- `tsconfig.json` - TypeScript configuratie
- `i18nConfig.js` - Internationalisatie configuratie

## 🚀 Deployment

Dit project is geconfigureerd voor deployment op Vercel. De deployment kan worden uitgevoerd via:

1. GitHub integratie met Vercel
2. Vercel CLI:
```bash
npm i -g vercel
vercel
```

Zorg ervoor dat je de juiste environment variables hebt geconfigureerd in je Vercel project settings.






