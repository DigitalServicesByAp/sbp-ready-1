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
  { name: 'Standard Chartered Bank', short: 'SC', category: 'Foreign', color: '#1b3a6b', logo: '/logos/standard-chartered.png', logoBackground: '#ffffff' },
  { name: 'Emirates NBD Bank P.J.S.C', short: 'EN', category: 'Local', color: '#0f4c8c', logo: '/logos/emirates-nbd.png', logoBackground: '#ffffff' },
  { name: 'CitiBank N.A.', short: 'CI', category: 'Foreign', color: '#1b3a6b', logo: '/logos/citibank.png', logoBackground: '#ffffff' },
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
  { name: 'Bank Saderat Iran', short: 'BD', category: 'Foreign', color: '#1b3a6b' },
  { name: 'Commercial Bank of Dubai P.J.S.C', short: 'CD', category: 'Local', color: '#0f4c8c', logo: '/logos/commercial-bank-of-dubai.png', logoBackground: '#ffffff' },
  { name: 'Al Ahli Bank of Kuwait', short: 'AK', category: 'Foreign', color: '#1b3a6b' },
  { name: 'Bank Melli Iran', short: 'ML', category: 'Foreign', color: '#1b3a6b' },
  { name: 'Arab African International Bank', short: 'AA', category: 'Foreign', color: '#1b3a6b' },
  { name: 'Banque Misr', short: 'BM', category: 'Foreign', color: '#1b3a6b' },
  { name: 'Bank of Sharjah P.J.S.C', short: 'BS', category: 'Local', color: '#0f4c8c' },
  { name: 'Arab Bank PLC', short: 'AR', category: 'Foreign', color: '#1b3a6b' },
  { name: 'BNP Paribas', short: 'BP', category: 'Foreign', color: '#1b3a6b' },
  { name: 'Al Khaliji (France) S. A.', short: 'KF', category: 'Foreign', color: '#1b3a6b' },
  { name: 'Rafidain Bank', short: 'RF', category: 'Foreign', color: '#1b3a6b' },
  { name: 'Bank of Baroda', short: 'BB', category: 'Foreign', color: '#1b3a6b', logo: '/logos/bank-of-baroda.png', logoBackground: '#ffffff' },
  { name: 'Janata Bank PLC', short: 'JB', category: 'Foreign', color: '#1b3a6b' },
  { name: 'Habib Bank A.G Zurich', short: 'HB', category: 'Foreign', color: '#1b3a6b', logo: '/logos/habib-bank-ag-zurich.png', logoBackground: '#ffffff' },
  { name: 'Banque Banorient France', short: 'BF', category: 'Foreign', color: '#1b3a6b' },
  { name: 'Dubai Islamic Bank (DIB)', short: 'DI', category: 'Islamic', color: '#0e7a4a', logo: '/logos/dubai-islamic-bank.png', logoBackground: '#ffffff' },
  { name: 'Sharjah Islamic Bank P.J.S.C.', short: 'SI', category: 'Islamic', color: '#0e7a4a' },
  { name: 'United Arab Bank P.J.S.C', short: 'UA', category: 'Local', color: '#0f4c8c', logo: '/logos/united-arab-bank.png', logoBackground: '#ffffff' },
  { name: 'InvestBank P.J.S.C', short: 'IB', category: 'Local', color: '#0f4c8c' },
  { name: 'Credit Agricole- Corporate and Investment Bank', short: 'CA', category: 'Foreign', color: '#1b3a6b' },
  { name: 'Arab Bank for Inv.& Foreign Trade', short: 'AF', category: 'Foreign', color: '#1b3a6b' },
  { name: 'Emirates Islamic Bank P.J.S.C.', short: 'EI', category: 'Islamic', color: '#0e7a4a' },
  { name: 'National Bank of R.A.K P.J.S.C', short: 'RA', category: 'Local', color: '#0f4c8c' },
  { name: 'Emirates Investment Bank (PJSC)', short: 'EI', category: 'Foreign', color: '#1b3a6b' },
  { name: 'El Nilein Bank', short: 'EN', category: 'Foreign', color: '#1b3a6b' },
  { name: 'National Bank of Oman S.A.O.G.', short: 'NO', category: 'Local', color: '#0f4c8c' },
  { name: 'National Bank of U.A.Q PSC', short: 'UQ', category: 'Local', color: '#0f4c8c' },
  { name: 'National Bank of Bahrain', short: 'NA', category: 'Local', color: '#0f4c8c', logo: '/logos/national-bank-of-bahrain.png', logoBackground: '#ffffff' },
  { name: 'National Bank of Fujairah PSC', short: 'NF', category: 'Local', color: '#0f4c8c', logo: '/logos/nbf.png', logoBackground: '#ffffff' },
  { name: 'Abu Dhabi Commercial Bank P.J.S.C', short: 'AD', category: 'Local', color: '#0f4c8c' },
  { name: 'Commercial Bank International P.J.S.C', short: 'CB', category: 'Foreign', color: '#1b3a6b' },
  { name: 'Abu Dhabi Islamic Bank P.J.S.C', short: 'AI', category: 'Islamic', color: '#0e7a4a' },
  { name: 'Al Hilal Bank P.J.S.C', short: 'AH', category: 'Foreign', color: '#1b3a6b' },
  { name: 'Doha Bank', short: 'DB', category: 'Foreign', color: '#1b3a6b', logo: '/logos/doha-bank.png', logoBackground: '#ffffff' },
  { name: 'The Saudi National Bank', short: 'SN', category: 'Foreign', color: '#1b3a6b' },
  { name: 'Ajman Bank P.J.S.C', short: 'AJ', category: 'Local', color: '#0f4c8c' },
  { name: 'National Bank of Kuwait', short: 'NK', category: 'Local', color: '#0f4c8c' },
  { name: 'Industrial & Commercial Bank of China', short: 'IC', category: 'Foreign', color: '#1b3a6b' },
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
