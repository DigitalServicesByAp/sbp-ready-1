import { ShieldCheck } from 'lucide-react'

export function SecurityNote() {
  return (
    <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border bg-secondary/60 px-4 py-4">
      <ShieldCheck className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
      <p className="text-xs leading-relaxed text-muted-foreground">
        This is an educational demo. Never enter real banking credentials,
        card details, PINs, passwords, balances, or one-time codes.
      </p>
    </div>
  )
}
