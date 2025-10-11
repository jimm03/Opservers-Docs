import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-content">
          <Link href="/" className="logo">
            <span style={{ fontSize: '1.25rem', marginRight: '0.5rem' }}>👁️</span>
            <span><span className="logo-ops">OPS</span><span className="logo-accent">ervers</span> Docs</span>
          </Link>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/architecture">Architecture</Link></li>
            <li><Link href="/setup">Setup</Link></li>
            <li><Link href="/cicd">CI/CD</Link></li>
            <li><Link href="/monitoring">Monitoring</Link></li>
            <li><Link href="/runbooks">Runbooks</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}