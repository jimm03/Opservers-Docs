import Link from 'next/link'
import { Eye } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-content">
          <Link href="/" className="logo">
            <Eye size={24} />
            <span>OPS<span className="logo-accent">ervers</span> Docs</span>
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