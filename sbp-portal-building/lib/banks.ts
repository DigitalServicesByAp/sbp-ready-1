export type Bank = {
  name: string
  short: string
  category: 'Local' | 'Islamic' | 'Foreign' | 'Digital'
  color: string
  logo?: string
  cardImage?: string
  popular?: boolean
}

// Educational dataset of banks licensed to operate in the UAE.
// Banks without a stored logo fall back to a branded monogram tile.
export const banks: Bank[] = [
  {
    name: 'Emirates NBD',
    short: 'EN',
    category: 'Local',
    color: '#00263e',
    logo: '/logos/emirates-nbd.png',
    popular: true,
  },
  {
    name: 'First Abu Dhabi Bank',
    short: 'FA',
    category: 'Local',
    color: '#0f4c8c',
    logo: '/logos/first-abu-dhabi-bank.png',
    popular: true,
  },
  {
    name: 'ADCB',
    short: 'AD',
    category: 'Local',
    color: '#c8102e',
    logo: '/logos/adcb.png',
    popular: true,
  },
  { name: 'Dubai Islamic Bank', short: 'DI', category: 'Islamic', color: '#0e7a4a', popular: true },
  { name: 'Mashreq', short: 'MQ', category: 'Local', color: '#e07a1e', popular: true },
  { name: 'Abu Dhabi Islamic Bank', short: 'AI', category: 'Islamic', color: '#0f5fa8' },
  { name: 'Commercial Bank of Dubai', short: 'CD', category: 'Local', color: '#c9a227' },
  { name: 'RAKBANK', short: 'RB', category: 'Local', color: '#a8202c' },
  { name: 'National Bank of Fujairah', short: 'NF', category: 'Local', color: '#1b3a6b' },
  { name: 'United Arab Bank', short: 'UA', category: 'Local', color: '#0e6a6a' },
  { name: 'HSBC Middle East', short: 'HS', category: 'Foreign', color: '#b3202f' },
  { name: 'Standard Chartered', short: 'SC', category: 'Foreign', color: '#0a7d64' },
  { name: 'Citibank', short: 'CI', category: 'Foreign', color: '#003b70' },
  { name: 'Emirates Islamic', short: 'EI', category: 'Islamic', color: '#0e7a6b' },
  { name: 'Bank of Baroda', short: 'BB', category: 'Foreign', color: '#f36f21' },
  { name: 'Bank of India', short: 'BI', category: 'Foreign', color: '#7a1f3a' },
  { name: 'Emirates Development Bank', short: 'ED', category: 'Local', color: '#12703a' },
  { name: 'DIB (Emirates Islamic Bank)', short: 'DE', category: 'Islamic', color: '#0f5fa8' },
  { name: 'Wio Bank', short: 'WB', category: 'Digital', color: '#7c3aed' },
  { name: 'Zand Bank', short: 'ZB', category: 'Digital', color: '#0f766e' },
  { name: 'Liv Bank', short: 'LB', category: 'Digital', color: '#9333ea' },
  { name: 'YAP', short: 'YP', category: 'Digital', color: '#111827' },
  { name: 'Noor Bank', short: 'NB', category: 'Islamic', color: '#0e5c8a' },
  { name: 'Al Maryah Community Bank', short: 'AM', category: 'Local', color: '#0f7a3d' },
  { name: 'Mbank', short: 'MB', category: 'Digital', color: '#0369a1' },
  { name: 'Deem Finance', short: 'DF', category: 'Digital', color: '#0e7a6b' },
  { name: 'Arab Bank (PLC)', short: 'AR', category: 'Foreign', color: '#0f4c8c' },
  { name: 'Bank ABC', short: 'BA', category: 'Foreign', color: '#0a4f7a' },
  { name: 'BNP Paribas Middle East', short: 'BP', category: 'Foreign', color: '#00815a' },
  { name: 'Credit Agricole UAE', short: 'CA', category: 'Foreign', color: '#12703a' },
  { name: 'ING Bank N.V. Dubai', short: 'IN', category: 'Foreign', color: '#ff6200' },
  { name: 'J.P. Morgan Middle East', short: 'JP', category: 'Foreign', color: '#5a2d81' },
  { name: 'Mizuho Bank', short: 'MZ', category: 'Foreign', color: '#0f4c9c' },
  { name: 'MUFG Bank (AD)', short: 'MU', category: 'Foreign', color: '#a11d2b' },
  { name: 'Intesa Sanpaolo S.p.A. Dubai', short: 'IS', category: 'Foreign', color: '#0e6a3a' },
  { name: 'Bank of China', short: 'BC', category: 'Foreign', color: '#b3202f' },
  { name: 'Doha Bank', short: 'DB', category: 'Foreign', color: '#7a1f2b' },
  { name: 'Qatar National Bank', short: 'QN', category: 'Foreign', color: '#7a2f5a' },
  { name: 'Bank Audi', short: 'AU', category: 'Foreign', color: '#0e5c3a' },
  { name: 'Habib Bank AG Zurich', short: 'HB', category: 'Foreign', color: '#12447d' },
  { name: 'National Bank of Bahrain', short: 'NA', category: 'Foreign', color: '#c9a227' },
  { name: 'Habib Bank Limited', short: 'HL', category: 'Foreign', color: '#0e7a4a' },
  { name: 'National Bank of Kuwait', short: 'NK', category: 'Foreign', color: '#0e5c8a' },
  { name: 'Al Ahli Bank of Kuwait', short: 'AK', category: 'Foreign', color: '#0a7d64' },
  { name: 'Blom Bank France', short: 'BF', category: 'Foreign', color: '#0f5fa8' },
  { name: 'Banque Misr', short: 'BM', category: 'Foreign', color: '#c8102e' },
  { name: 'National Bank of Umm Al Qaiwain', short: 'UQ', category: 'Local', color: '#0e7a6b' },
  { name: 'Sharjah Islamic Bank', short: 'SI', category: 'Islamic', color: '#0d7a4f' },
  { name: 'Al Hilal Bank', short: 'AH', category: 'Islamic', color: '#146b3a' },
  { name: 'Dunia Finance', short: 'DU', category: 'Digital', color: '#d4762a' },
  { name: 'Bank Sepah Iran', short: 'BS', category: 'Foreign', color: '#0e6a3a' },
  { name: 'Bank Melli Iran', short: 'ML', category: 'Foreign', color: '#12559c' },
  { name: 'Rafidain Bank', short: 'RF', category: 'Foreign', color: '#7a2f2f' },
  { name: 'United Bank Limited', short: 'UB', category: 'Foreign', color: '#0057a8' },
  { name: 'Samba Financial Group', short: 'SF', category: 'Foreign', color: '#0e5c3a' },
  { name: 'Bank Saderat Iran', short: 'BD', category: 'Foreign', color: '#0f4c9c' },
  { name: 'Janata Bank', short: 'JB', category: 'Foreign', color: '#0e6a3a' },
  { name: 'State Bank of India', short: 'SB', category: 'Foreign', color: '#0e5fa8' },
  { name: 'IndusInd Bank', short: 'IN', category: 'Foreign', color: '#7a1f3a' },
  { name: 'Punjab National Bank', short: 'PN', category: 'Foreign', color: '#8a1f2b' },
  { name: 'Bank of Sharjah', short: 'BS', category: 'Local', color: '#1b3a6b' },
  { name: 'Invest Bank', short: 'IB', category: 'Local', color: '#0e7a4a' },
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
