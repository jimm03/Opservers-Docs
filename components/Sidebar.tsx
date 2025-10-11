'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/architecture', label: 'Architecture' },
  { href: '/setup', label: 'Setup Instructions' },
  { href: '/cicd', label: 'CI/CD Pipeline' },
  { href: '/monitoring', label: 'Monitoring & Alerting' },
  { href: '/runbooks', label: 'Incident Runbooks' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="sidebar">

      <nav>
        <ul className="sidebar-nav">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            
            return (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={isActive ? 'active' : ''}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}