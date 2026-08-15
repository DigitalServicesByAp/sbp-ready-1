import { Phone, Globe } from 'lucide-react'

const socialLinks = [
  {
    label: 'X',
    href: 'https://x.com',
    path: 'M18.9 2H21.6L15.6 8.8L22.7 18H17.2L12.9 12.4L8 18H5.2L11.6 10.7L4.8 2H10.4L14.3 7.1L18.9 2Z',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    path: 'M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9.75h4V21H3V9.75Zm7 0h3.84v1.54h.05c.53-1 1.85-2.06 3.8-2.06 4.07 0 4.81 2.68 4.81 6.16V21h-4v-4.9c0-1.17-.02-2.68-1.64-2.68-1.65 0-1.9 1.29-1.9 2.6V21h-4V9.75Z',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    path: 'M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.9 4 12 4 12 4h0s-3.9 0-6.7.2c-.4.1-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2.2 9 2.2 10.7v1.5C2.2 14 2.4 15.7 2.4 15.7s.2 1.5.8 2.1c.8.8 1.8.8 2.3.9 1.6.2 6.5.2 6.5.2s3.9 0 6.7-.2c.4-.1 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.4v-1.5c0-1.7-.2-3.4-.2-3.4ZM9.8 14.3V8.9l5.1 2.7-5.1 2.7Z',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    path: 'M12 2c2.7 0 3.1 0 4.1.1 1.1 0 1.8.2 2.5.5.7.3 1.2.6 1.7 1.1.5.5.9 1 1.1 1.7.3.7.4 1.4.5 2.5.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c0 1.1-.2 1.8-.5 2.5-.3.7-.6 1.2-1.1 1.7-.5.5-1 .9-1.7 1.1-.7.3-1.4.4-2.5.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1 0-1.8-.2-2.5-.5-.7-.3-1.2-.6-1.7-1.1-.5-.5-.9-1-1.1-1.7-.3-.7-.4-1.4-.5-2.5C2 15.1 2 14.7 2 12s0-3.1.1-4.1c0-1.1.2-1.8.5-2.5.3-.7.6-1.2 1.1-1.7.5-.5 1-.9 1.7-1.1.7-.3 1.4-.4 2.5-.5C8.9 2 9.3 2 12 2Zm0 1.8c-2.7 0-3 0-4 .1-.9 0-1.4.2-1.7.3-.4.2-.7.4-1 .7-.3.3-.5.6-.7 1-.1.3-.3.8-.3 1.7-.1 1-.1 1.3-.1 4s0 3 .1 4c0 .9.2 1.4.3 1.7.2.4.4.7.7 1 .3.3.6.5 1 .7.3.1.8.3 1.7.3 1 .1 1.3.1 4 .1s3 0 4-.1c.9 0 1.4-.2 1.7-.3.4-.2.7-.4 1-.7.3-.3.5-.6.7-1 .1-.3.3-.8.3-1.7.1-1 .1-1.3.1-4s0-3-.1-4c0-.9-.2-1.4-.3-1.7-.2-.4-.4-.7-.7-1-.3-.3-.6-.5-1-.7-.3-.1-.8-.3-1.7-.3-1-.1-1.3-.1-4-.1Zm0 3.5a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm5-3.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z',
  },
]

export function SiteFooter() {
  return (
    <footer
      className="mt-10 text-primary-foreground"
      style={{
        backgroundImage:
          'linear-gradient(160deg, var(--primary) 0%, var(--primary-dark) 100%)',
      }}
    >
      <div className="mx-auto max-w-5xl px-4 py-7">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-primary-foreground/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/cbuae.png"
                alt="Central Bank of the U.A.E. logo"
                className="h-full w-full object-contain p-0.5"
              />
            </span>
            <span className="text-base font-extrabold uppercase leading-tight tracking-wide">
              Central Bank
              <br />
              of the U.A.E.
            </span>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-primary-foreground/30 transition hover:bg-primary-foreground/10"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-primary-foreground"
                  aria-hidden="true"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="tel:600525524"
            className="flex items-center gap-3 text-sm font-medium text-primary-foreground/90 transition hover:text-primary-foreground"
          >
            <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
            Call Center: 600 525524
          </a>
          <a
            href="https://www.centralbank.ae"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm font-medium text-primary-foreground/90 transition hover:text-primary-foreground"
          >
            <Globe className="h-4 w-4 text-accent" aria-hidden="true" />
            www.centralbank.ae
          </a>
        </div>

        <p className="mt-6 border-t border-primary-foreground/15 pt-4 text-xs leading-relaxed text-primary-foreground/60">
          {'\u00A9'} 2025 Central Bank of the UAE. Informational reference
          only{' \u2014 '}not an official verification portal.
        </p>
      </div>
    </footer>
  )
}
