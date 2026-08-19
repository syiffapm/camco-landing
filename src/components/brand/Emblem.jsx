/**
 * Stylized seal for CamCO — a double ring around Angkor Wat's silhouette
 * (the temple on Cambodia's flag), standing in for an official emblem.
 * Not a reproduction of the Kingdom's state seal.
 */
export default function Emblem({ className = 'h-6 w-6', tone = 'currentColor' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="14.5" stroke={tone} strokeWidth="1.1" opacity="0.55" />
      <circle cx="16" cy="16" r="12" stroke={tone} strokeWidth="1.4" />
      {/* Angkor Wat towers */}
      <path
        d="M16 8.5l1.6 2.6h-.9v1.6h1.8l1.9 3.1h-1.1v1.4h2l1.7 2.8H8l1.7-2.8h2v-1.4h-1.1l1.9-3.1h1.8v-1.6h-.9L16 8.5z"
        fill={tone}
      />
      <rect x="9.5" y="19.6" width="13" height="1.7" rx="0.4" fill={tone} />
      <path d="M9 21.3h14l1 2.2H8l1-2.2z" fill={tone} />
    </svg>
  )
}
