import Link from 'next/link'
import { banks, bankSlug } from '@/lib/banks'
import { BankTile } from '@/components/bank-tile'

const topTenNames = [
  'Emirates NBD Bank P.J.S.C',
  'First Abu Dhabi Bank P.J.S.C',
  'Abu Dhabi Commercial Bank P.J.S.C',
  'Dubai Islamic Bank (DIB)',
  'Mashreq Bank P.S.C.',
  'Abu Dhabi Islamic Bank P.J.S.C',
  'Commercial Bank of Dubai P.J.S.C',
  'Emirates Islamic Bank P.J.S.C.',
  'National Bank of R.A.K P.J.S.C',
  'Sharjah Islamic Bank P.J.S.C.',
] as const

const topTenBanks = topTenNames.flatMap((name) => {
  const bank = banks.find((candidate) => candidate.name === name)
  return bank ? [bank] : []
})

function BankLink({ bank }: { bank: (typeof topTenBanks)[number] }) {
  return (
    <li className="w-[4.75rem] shrink-0">
      <Link
        href={`/bank/${bankSlug(bank.name)}`}
        prefetch
        className="group block focus-visible:outline-none"
      >
        <BankTile bank={bank} />
      </Link>
    </li>
  )
}

export function PopularBanks() {
  return (
    <section aria-labelledby="popular-heading" className="mt-6">
      <div className="flex items-center justify-between">
        <h2 id="popular-heading" className="text-lg font-bold tracking-tight">
          Top 10 Banks
        </h2>
        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
          Top 10
        </span>
      </div>

      <div className="group/marquee -mx-4 mt-4 overflow-hidden px-4">
        <ul className="animate-marquee flex w-max gap-3 pb-1" aria-label="Top 10 banks">
          {[...topTenBanks, ...topTenBanks].map((bank, index) => (
            <BankLink key={`${bank.name}-${index}`} bank={bank} />
          ))}
        </ul>
      </div>
    </section>
  )
}
