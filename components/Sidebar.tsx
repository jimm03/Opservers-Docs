'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, 
  Layers, 
  Settings, 
  GitBranch, 
  BarChart3, 
  BookOpen,
  Server
} from 'lucide-react'

const menuItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/architecture', label: 'Architecture', icon: Layers },
  { href: '/setup', label: 'Setup Instructions', icon: Settings },
  { href: '/cicd', label: 'CI/CD Pipeline', icon: GitBranch },
  { href: '/monitoring', label: 'Monitoring & Alerting', icon: BarChart3 },
  { href: '/runbooks', label: 'Incident Runbooks', icon: BookOpen },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="sidebar">
      <nav>
        <ul className="sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={isActive ? 'active' : ''}
                >
                  <Icon size={18} style={{ marginRight: '0.75rem' }} />
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