import { useState } from 'react'

/**
 * Accessible accordion item — proper button + aria-expanded + region,
 * operable by keyboard, state announced to screen readers (spec 5.1 "Buka
 * akordeon" and 9 "Akordeon & tab").
 */
export function AccordionItem({ id, question, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-border-soft last:border-b-0">
      <h3>
        <button
          type="button"
          id={`acc-btn-${id}`}
          aria-expanded={open}
          aria-controls={`acc-panel-${id}`}
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between gap-4 py-4 text-left text-[16px] font-semibold text-navy-deep hover:text-navy focus-visible:outline-none"
        >
          <span>{question}</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className={`h-5 w-5 flex-none text-gold transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </h3>
      <div
        id={`acc-panel-${id}`}
        role="region"
        aria-labelledby={`acc-btn-${id}`}
        hidden={!open}
        className="pb-4 text-[15px] leading-relaxed text-ink-soft"
      >
        {children}
      </div>
    </div>
  )
}

export default function Accordion({ children }) {
  return <div className="divide-y divide-border-soft rounded-2xl border border-border-soft bg-surface px-5">{children}</div>
}
