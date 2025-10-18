'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  FaHome,
  FaProjectDiagram,
  FaCog,
  FaCodeBranch,
  FaChartBar,
  FaBook,
  FaShieldAlt,
  FaChevronDown,
  FaChevronRight
} from 'react-icons/fa'
import { useState } from 'react'

// Define TypeScript interfaces for menu items
interface MenuItemChild {
  href: string
  label: string
}

interface MenuItem {
  href?: string
  label: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  children?: MenuItemChild[]
}

const menuItems: MenuItem[] = [
  { href: '/', label: 'Home', icon: FaHome },
  { href: '/architecture', label: 'Architecture', icon: FaProjectDiagram },
  { 
    label: 'Setup Instructions', 
    icon: FaCog,
    children: [
      { href: '/setup', label: 'Overview' },
      { href: '/setup/jenkins', label: 'Jenkins' },
      { href: '/setup/splunk', label: 'Splunk' },
      { href: '/setup/prometheus-grafana', label: 'Prometheus & Grafana' },
      { href: '/setup/alertmanager', label: 'Alertmanager' }
    ]
  },
  { 
    label: 'Workflow', 
    icon: FaCodeBranch,
    children: [
      { href: '/workflow', label: 'Overview' },
      { href: '/workflow/ci-cd-workflow', label: 'CI/CD Workflow' },
      { href: '/workflow/monitoring-workflow', label: 'Monitoring Workflow' },
      { href: '/workflow/logging-workflow', label: 'Logging Workflow' },
    ]
  },
  { 
    label: 'Features', 
    icon: FaChartBar,
    children: [
      { href: '/features', label: 'Overview' },
      { href: '/features/monitoring-alerting', label: 'Monitoring & Alerting' },
      { href: '/features/centralized-logging', label: 'Logging & Alerting' }
    ]
  },
  { 
    label: 'Runbooks', 
    icon: FaBook,
    children: [
      { href: '/runbooks', label: 'Overview' },
      { href: '/runbooks/cluster-availability', label: 'Cluster Availability' },
      { href: '/runbooks/pod-restart', label: 'Pod Restart' },
      { href: '/runbooks/pod-oom-killed', label: 'Pod OOM Killed' },
      { href: '/runbooks/node-high-cpu', label: 'Node High CPU' },
      { href: '/runbooks/node-high-memory', label: 'Node High Memory' },
      { href: '/runbooks/pod-high-cpu', label: 'Pod High CPU' },
      { href: '/runbooks/pod-high-memory', label: 'Pod High Memory' },
      { href: '/runbooks/web-app-availability', label: 'Web App Availability' },
      { href: '/runbooks/web-app-latency', label: 'Web App Latency' },
      { href: '/runbooks/http-errors', label: 'HTTP Errors' }
    ]
  },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>(['Setup Instructions', 'Workflow', 'Features', 'Runbooks'])

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    )
  }

  const isItemActive = (item: MenuItem): boolean => {
    if (item.href) {
      return pathname === item.href
    }
    // Use optional chaining and nullish coalescing to handle potentially undefined children
    return item.children?.some((child: MenuItemChild) => pathname === child.href) ?? false
  }

  return (
    <aside className="sidebar">
      <nav>
        <ul className="sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = isItemActive(item)
            const isExpanded = expandedItems.includes(item.label)
            const hasChildren = item.children && item.children.length > 0
            
            return (
              <li key={item.href || item.label} className="sidebar-item">
                {item.href ? (
                  // Regular link item
                  <Link 
                    href={item.href} 
                    className={`sidebar-link ${isActive ? 'active' : ''}`}
                  >
                    <Icon size={18} className="sidebar-icon" />
                    <span className="sidebar-label">{item.label}</span>
                  </Link>
                ) : (
                  // Expandable item with children
                  <div className="sidebar-expandable">
                    <button 
                      className={`sidebar-link ${isActive ? 'active' : ''}`}
                      onClick={() => toggleExpanded(item.label)}
                    >
                      <Icon size={18} className="sidebar-icon" />
                      <span className="sidebar-label">{item.label}</span>
                      {hasChildren && (
                        <span className="sidebar-chevron">
                          {isExpanded ? <FaChevronDown size={12} /> : <FaChevronRight size={12} />}
                        </span>
                      )}
                    </button>
                    
                    {/* Children items */}
                    {hasChildren && isExpanded && (
                      <ul className="sidebar-subnav">
                        {item.children?.map((child) => {
                          const isChildActive = pathname === child.href
                          return (
                            <li key={child.href}>
                              <Link 
                                href={child.href} 
                                className={`sidebar-sublink ${isChildActive ? 'active' : ''}`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}