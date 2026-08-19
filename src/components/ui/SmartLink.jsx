import { Link } from 'react-router-dom'

/**
 * Renders an external <a> when `external`/`href` is set, otherwise an
 * internal React Router <Link to>. Keeps CTA-rendering code from having to
 * branch on every callsite.
 */
export default function SmartLink({ to, href, external, className, children, onClick }) {
  if (external || href) {
    return (
      <a href={href || to} className={className} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}
