'use client'

import { useMemo, useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronRight, Info } from 'lucide-react'

const TOTAL_STEPS = 5

// Format a raw digit string into grouped thousands, e.g. "125000" -> "125,000".
function formatBalance(raw: string) {
  if (!raw) return ''
  return Number(raw).toLocaleString('en-US')
}

export function BalanceForm({ slug, bankName }: { slug: string; bankName: string }) {
  const router = useRouter()
  const [raw, setRaw] = useState('')

  const isValid = useMemo(() => raw.length > 0 && Number(raw) > 0, [raw])
  const display = formatBalance(raw)

  function handleChange(value: string) {
    // Keep digits only; strip leading zeros so the placeholder "0" stays visible.
    const digits = value.replace(/\D/g, '').replace(/^0+/, '')
    setRaw(digits)
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isValid) return
    // Continue to the final verification (re-confirm OTP) step.
    router.push(`/bank/${slug}/verify`)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <h2 className="text-2xl font-extrabold tracking-tight">Account Balance</h2>
      <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
        Enter your current {bankName} account balance in PKR.
      </p>

      {/* Balance input card */}
      <div className="mt-5 rounded-3xl border border-border bg-[color-mix(in_srgb,var(--bank-theme)_8%,var(--background))] p-5 shadow-sm">
        <label
          htmlFor="balance"
          className="block text-xs font-bold uppercase tracking-wider text-muted-foreground"
        >
          Current Balance
        </label>
        <div className="bank-themed-input mt-3 flex items-center gap-3 rounded-2xl border px-4 py-3">
          <span className="shrink-0 text-sm font-bold text-foreground">PKR</span>
          <span className="h-6 w-px shrink-0 bg-border" aria-hidden="true" />
          <input
            id="balance"
            inputMode="numeric"
            autoComplete="off"
            placeholder="0"
            value={display}
            onChange={(e) => handleChange(e.target.value)}
            className="w-full bg-transparent text-lg font-semibold text-foreground outline-none placeholder:text-muted-foreground/60"
          />
        </div>
      </div>

      {/* Info box */}
      <div className="mt-4 flex items-start gap-2 rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
        <p className="text-sm leading-relaxed text-primary">
          This field is simulated for demonstration only. Nothing is sent to a bank,
          stored, or transmitted to any server.
        </p>
      </div>

      {/* Step indicator (step 5 of 5) */}
      <div
        className="flex items-center justify-center gap-2 py-5"
        role="status"
        aria-label="Step 5 of 5"
      >
        {Array.from({ length: TOTAL_STEPS }, (_, i) => (
          <span
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === TOTAL_STEPS - 1 ? 'w-6 bg-primary' : 'w-2 bg-border'
            }`}
          />
        ))}
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className="bank-themed-button flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-base font-bold shadow-md transition-all duration-100 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.98] active:brightness-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100"
      >
        Next
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      <p className="pt-3 text-center text-xs text-muted-foreground">
        Demo directory for a college project. No account data is stored or sent.
      </p>
    </form>
  )
}
