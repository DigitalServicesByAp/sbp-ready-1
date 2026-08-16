export type Bank = {
  name: string
  short: string
  category: 'Local' | 'Islamic' | 'Foreign' | 'Digital'
  color: string
  logo?: string
  logoBackground?: string
  cardImage?: string
  popular?: boolean
}

// Educational dataset of banks licensed to operate in the UAE.
// Banks without a stored logo fall back to a branded monogram tile.
export const banks: Bank[] = [
  { name: 'HSBC Bank Middle East Limited', short: 'HS', category: 'Foreign', color: '#1b3a6b', logo: '/logos/hsbc-middle-east.png', logoBackground: '#ffffff' },
  {
    name: 'Standard Chartered Bank',
    short: 'SC',
    category: 'Foreign',
    color: '#0875d1',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ms1Aa7WoNUaXWtxYVrJgUQq7WpbieD.png',
    logoBackground: '#ffffff',
  },
  {
    name: 'Emirates NBD Bank P.J.S.C',
    short: 'ENBD',
    category: 'Local',
    color: '#0b3d82',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EfKiGa1gDijAZw2R5aplII23Thrsys.png',
    logoBackground: '#0b3d82',
  },
  {
    name: 'CitiBank N.A.',
    short: 'CITI',
    category: 'Foreign',
    color: '#005baa',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IpGXkylcqTgDKBXcGWdhdvuQnrShhg.png',
    logoBackground: '#eef0f7',
  },
  { name: 'Mashreq Bank P.S.C.', short: 'MQ', category: 'Local', color: '#0f4c8c', logo: '/logos/mashreq.png', logoBackground: '#ffffff' },
  {
    name: 'Habib Bank Ltd.',
    short: 'HBL',
    category: 'Foreign',
    color: '#008c75',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-08-16%20104202-5EUnGZyz5XekdHvR4msMWSJZh80jP9.png',
    logoBackground: '#008c75',
  },
  {
    name: 'United Bank Ltd.',
    short: 'UBL',
    category: 'Foreign',
    color: '#087eae',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-08-16%20104242-nGtkomUtjxZID6jGh9XU956tNQy62Z.png',
    logoBackground: '#ffffff',
  },
  { name: 'First Abu Dhabi Bank P.J.S.C', short: 'FA', category: 'Local', color: '#0f4c8c', logo: '/logos/first-abu-dhabi-bank.png', logoBackground: '#ffffff' },
  {
    name: 'Bank Saderat Iran',
    short: 'BSI',
    category: 'Foreign',
    color: '#2d1a70',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-08-16%20104323-G9XTGs1LyQF3E0czQSJh8hyK9SFQaD.png',
    logoBackground: '#ffffff',
  },
  { name: 'Commercial Bank of Dubai P.J.S.C', short: 'CD', category: 'Local', color: '#0f4c8c', logo: '/logos/commercial-bank-of-dubai.png', logoBackground: '#ffffff' },
  {
    name: 'Al Ahli Bank of Kuwait',
    short: 'ABK',
    category: 'Foreign',
    color: '#1557d6',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-08-16%20104358-5V4ulYwFFNt6QRHO32KZ7Hf8J3m079.png',
    logoBackground: '#ffffff',
  },
  {
    name: 'Bank Melli Iran',
    short: 'BMI',
    category: 'Foreign',
    color: '#d9232e',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uZYpPKQbLEErIARV1H7jL2dfh3G1V6.png',
    logoBackground: '#ffffff',
  },
  {
    name: 'Arab African International Bank',
    short: 'AAIB',
    category: 'Foreign',
    color: '#1557d6',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NxTehCyVdLJmU1MuwPGrrKnUOiDdXF.png',
    logoBackground: '#ffffff',
  },
  {
    name: 'Banque Misr',
    short: 'BM',
    category: 'Foreign',
    color: '#c9a227',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jLlY3IU8g2xUAj8g2Ve1LYHRxwYjlV.png',
    logoBackground: '#ffffff',
  },
  {
    name: 'Bank of Sharjah P.J.S.C',
    short: 'BOS',
    category: 'Local',
    color: '#0f4c8c',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-y2C4ur0Xc7wyiNyx16CFb2FjKiPIWF.png',
    logoBackground: '#ffffff',
  },
  { name: 'Arab Bank PLC', short: 'AR', category: 'Foreign', color: '#1b3a6b' },
  {
    name: 'BNP Paribas',
    short: 'BNP',
    category: 'Foreign',
    color: '#008c61',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lV435LfUU5quG5TzxXHhrYeLxDXJoO.png',
    logoBackground: '#ffffff',
  },
  {
    name: 'Al Khaliji (France) S. A.',
    short: 'AKF',
    category: 'Foreign',
    color: '#f28c18',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-brgoGhJFfxDFHtNr21Pj6XGPvXuj51.png',
    logoBackground: '#ffffff',
  },
  {
    name: 'Rafidain Bank',
    short: 'RB',
    category: 'Foreign',
    color: '#187a45',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-i33eqcHZcmhdo8H1GifZjPowXwsDwU.png',
    logoBackground: '#ffffff',
  },
  { name: 'Bank of Baroda', short: 'BB', category: 'Foreign', color: '#1b3a6b', logo: '/logos/bank-of-baroda.png', logoBackground: '#ffffff' },
  {
    name: 'Janata Bank PLC',
    short: 'JB',
    category: 'Foreign',
    color: '#12b5d0',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-F8V28pgRm6H0MLvc4YpQJ5sR7NcYZG.png',
    logoBackground: '#ffffff',
  },
  { name: 'Habib Bank A.G Zurich', short: 'HB', category: 'Foreign', color: '#1b3a6b', logo: '/logos/habib-bank-ag-zurich.png', logoBackground: '#ffffff' },
  {
    name: 'Banque Banorient France',
    short: 'BF',
    category: 'Foreign',
    color: '#075493',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CNNgNCW8QbJzEHZggak6M67nMn3H6U.png',
    logoBackground: '#ffffff',
  },
  { name: 'Dubai Islamic Bank (DIB)', short: 'DI', category: 'Islamic', color: '#0e7a4a', logo: '/logos/dubai-islamic-bank.png', logoBackground: '#ffffff' },
  {
    name: 'Sharjah Islamic Bank P.J.S.C.',
    short: 'SIB',
    category: 'Islamic',
    color: '#152b74',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-c6LzEN2UaGClLQJa8vNzpV20HuSP5q.png',
    logoBackground: '#ffffff',
  },
  { name: 'United Arab Bank P.J.S.C', short: 'UA', category: 'Local', color: '#0f4c8c', logo: '/logos/united-arab-bank.png', logoBackground: '#ffffff' },
  {
    name: 'InvestBank P.J.S.C',
    short: 'IB',
    category: 'Local',
    color: '#ad914c',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uZK7DVc75pPp5Y0FR3Meru6cKqCTmb.png',
    logoBackground: '#ffffff',
  },
  {
    name: 'Credit Agricole- Corporate and Investment Bank',
    short: 'CA',
    category: 'Foreign',
    color: '#007a53',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-D58AulZGWwpVhjkYMXf4OtKgiMzT2P.png',
    logoBackground: '#ffffff',
  },
  {
    name: 'Arab Bank for Inv.& Foreign Trade',
    short: 'AF',
    category: 'Foreign',
    color: '#122b67',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-slWugBPfzqph7WaqUU3hSoTfY0cto0.png',
    logoBackground: '#ffffff',
  },
  {
    name: 'Emirates Islamic Bank P.J.S.C.',
    short: 'EI',
    category: 'Islamic',
    color: '#492056',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-08-15%20224412-d1aF6TYIe6N6ZmxALz7BwCuEXTeKQH.png',
    logoBackground: '#492056',
  },
  {
    name: 'National Bank of R.A.K P.J.S.C',
    short: 'RAK',
    category: 'Local',
    color: '#e30613',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-b7FvaO5dW7BpjpWOKQR2Q83Q2os2A9.png',
    logoBackground: '#ffffff',
  },
  {
    name: 'Emirates Investment Bank (PJSC)',
    short: 'EIB',
    category: 'Foreign',
    color: '#b20d45',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Vukjg87zF1RO4UI5SIfsgNvQ26JLQB.png',
    logoBackground: '#ffffff',
  },
  {
    name: 'El Nilein Bank',
    short: 'EN',
    category: 'Foreign',
    color: '#28237a',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Y1zCHnLFWV7OscVbtJ2FmlAwyGqe7i.png',
    logoBackground: '#ffffff',
  },
  {
    name: 'National Bank of Oman S.A.O.G.',
    short: 'NBO',
    category: 'Local',
    color: '#005baa',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pe3jtKQP6bHTkdnnIOs9Rh22vfXSsf.png',
    logoBackground: '#ffffff',
  },
  {
    name: 'National Bank of U.A.Q PSC',
    short: 'NBOQ',
    category: 'Local',
    color: '#0068a9',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qAKow8DIhbVsGfPwBbbNi62os1MKg7.png',
    logoBackground: '#ffffff',
  },
  { name: 'National Bank of Bahrain', short: 'NA', category: 'Local', color: '#0f4c8c', logo: '/logos/national-bank-of-bahrain.png', logoBackground: '#ffffff' },
  { name: 'National Bank of Fujairah PSC', short: 'NF', category: 'Local', color: '#0f4c8c', logo: '/logos/nbf.png', logoBackground: '#ffffff' },
  {
    name: 'Abu Dhabi Commercial Bank P.J.S.C',
    short: 'ADCB',
    category: 'Local',
    color: '#173447',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MSpReG6kEm14hNeBDNwFuXJyYjzXQL.png',
    logoBackground: '#ffffff',
  },
  {
    name: 'Commercial Bank International P.J.S.C',
    short: 'CBI',
    category: 'Foreign',
    color: '#092669',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dxFHwOKjgr7LI1PkaM0b9lImQvbAjR.png',
    logoBackground: '#ffffff',
  },
  {
    name: 'Abu Dhabi Islamic Bank P.J.S.C',
    short: 'ADIB',
    category: 'Islamic',
    color: '#005baa',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8NczZvvl9bhBInbddR5QqIPLBarGYN.png',
    logoBackground: '#ffffff',
  },
  {
    name: 'Al Hilal Bank P.J.S.C',
    short: 'AHB',
    category: 'Foreign',
    color: '#291443',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Qgrzl9b3Ukd3BOnB9TSc99bLpUSioY.png',
    logoBackground: '#ffffff',
  },
  { name: 'Doha Bank', short: 'DB', category: 'Foreign', color: '#1b3a6b', logo: '/logos/doha-bank.png', logoBackground: '#ffffff' },
  {
    name: 'The Saudi National Bank',
    short: 'SNB',
    category: 'Foreign',
    color: '#006b57',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fbn7HyBUqRsdFrKLqAmOIxsvs4qASv.png',
    logoBackground: '#ffffff',
  },
  {
    name: 'Ajman Bank P.J.S.C',
    short: 'AJB',
    category: 'Local',
    color: '#e8751a',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Pu9PFab81obk3r1qK4VZh4Xx653RiB.png',
    logoBackground: '#ffffff',
  },
  {
    name: 'National Bank of Kuwait',
    short: 'NBK',
    category: 'Local',
    color: '#004b93',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-08-16%20103308-S5cDFUJhvdxQNVmeJ8wyDLssUrvl1o.png',
    logoBackground: '#ffffff',
  },
  {
    name: 'Industrial & Commercial Bank of China',
    short: 'ICBC',
    category: 'Foreign',
    color: '#c8102e',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rTQkSKJGOfvp6rwMTfbCp0dvCNulyf.png',
    logoBackground: '#ffffff',
  },
  { name: 'Deutsche Bank AG', short: 'DE', category: 'Foreign', color: '#1b3a6b' },
  { name: 'KEB Hana Bank', short: 'KH', category: 'Foreign', color: '#1b3a6b' },
  { name: 'Barclays Bank PLC', short: 'BA', category: 'Foreign', color: '#1b3a6b' },
  { name: 'Bank of China Limited', short: 'BC', category: 'Foreign', color: '#1b3a6b', logo: '/logos/bank-of-china.png', logoBackground: '#ffffff' },
  { name: 'Gulf International Bank B.S.C', short: 'GI', category: 'Foreign', color: '#1b3a6b' },
  { name: 'MCB Bank Limited', short: 'MC', category: 'Foreign', color: '#1b3a6b' },
  { name: 'Intesa Sanpaolo S.P.A', short: 'IS', category: 'Foreign', color: '#1b3a6b', logo: '/logos/intesa-sanpaolo.png', logoBackground: '#ffffff' },
  { name: 'Agricultural Bank of China Ltd.', short: 'AC', category: 'Foreign', color: '#1b3a6b' },
  { name: 'Bank Al Falah Limited', short: 'BF', category: 'Foreign', color: '#1b3a6b' },
  { name: 'BOK International Bank', short: 'BI', category: 'Foreign', color: '#1b3a6b' },
  { name: 'Al Maryah Community Bank L.L.C.', short: 'AM', category: 'Local', color: '#0f4c8c', logo: '/logos/al-maryah-community-bank.png', logoBackground: '#ffffff' },
  { name: 'WIO Bank P.J.S.C', short: 'WI', category: 'Digital', color: '#4a16df' },
  { name: 'Zand Bank P.J.S.C', short: 'ZB', category: 'Digital', color: '#4a16df' },
  { name: 'International Development Bank for Investment & Finance', short: 'ID', category: 'Foreign', color: '#1b3a6b' },
  { name: 'Ruya Community Islamic Bank L.L.C', short: 'RU', category: 'Islamic', color: '#0e7a4a' },
]

export const popularBanks = banks.filter((b) => b.popular)

// Convert a bank name into a URL-safe slug, e.g. "ADCB" -> "adcb".
export function bankSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[()]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function getBankBySlug(slug: string) {
  return banks.find((b) => bankSlug(b.name) === slug)
}

export type Category = Bank['category']

export const categories: Category[] = ['Local', 'Islamic', 'Foreign', 'Digital']

// Tailwind utility classes per category for consistent color-coded badges.
export const categoryStyles: Record<Category, string> = {
  Local: 'bg-primary/10 text-primary ring-1 ring-inset ring-primary/20',
  Islamic:
    'bg-emerald-500/10 text-emerald-600 ring-1 ring-inset ring-emerald-500/20 dark:text-emerald-400',
  Foreign:
    'bg-purple-500/10 text-purple-600 ring-1 ring-inset ring-purple-500/20 dark:text-purple-400',
  Digital:
    'bg-accent/20 text-accent-foreground ring-1 ring-inset ring-accent/30 dark:text-accent',
}

export function countByCategory(category: Category) {
  return banks.filter((b) => b.category === category).length
}
