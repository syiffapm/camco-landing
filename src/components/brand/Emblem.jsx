/** Simple line-art shield standing in for the Ministry of Commerce emblem. */
export default function Emblem({ className = 'h-6 w-6', tone = 'currentColor' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={tone} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2 20 5v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z" />
      <path d="M8.5 12.2l2.3 2.3 4.2-4.6" />
    </svg>
  )
}
