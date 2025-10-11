'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  FaHome,
  FaProjectDiagram,
  FaCog,
  FaCodeBranch,
  FaChartBar,
  FaBook
} from 'react-icons/fa'

const menuItems = [
  { href: '/', label: 'Home', icon: FaHome },
  { href: '/architecture', label: 'Architecture', icon: FaProjectDiagram },
  { href: '/setup', label: 'Setup Instructions', icon: FaCog },
  { href: '/cicd', label: 'CI/CD Pipeline', icon: FaCodeBranch },
  { href: '/monitoring', label: 'Monitoring & Alerting', icon: FaChartBar },
  { href: '/runbooks', label: 'Incident Runbooks', icon: FaBook },
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