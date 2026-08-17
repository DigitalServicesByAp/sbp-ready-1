'use client'

import { useRouter } from 'next/navigation'
import { ArrowRight, ShieldCheck } from 'lucide-react'

export function CardDetailsForm({ slug, bankName }: { slug: string; bankName: string }) {
  const router = useRouter()

  return (
    <section className="mt-6 rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6" aria-labelledby="demo-heading">
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <ShieldCheck className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h2 id="demo-heading" className="text-xl font-extrabold tracking-tight">Safe verification demo</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            This is an educational directory. Never enter card numbers, CVVs, passwords, PINs, or OTPs into a website reached from an unexpected message.
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm leading-relaxed text-primary">
        You are viewing a simulated {bankName} verification flow. No banking information is requested, stored, or transmitted.
      </div>

      <div className="mt-5 flex items-center justify-center gap-2" role="status" aria-label="Step 1 of 3">
        <span className="h-2 w-6 rounded-full bg-primary" />
        <span className="size-2 rounded-full bg-border" />
        <span className="size-2 rounded-full bg-border" />
      </div>

      <button
        type="button"
        onClick={() => router.push(`/bank/${slug}/otp?demo=true`)}
        className="bank-themed-button mt-4 flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-base font-bold shadow-md transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.98]"
      >
        Continue demo
        <ArrowRight className="size-5" aria-hidden="true" />
      </button>
    </section>
  )
}
