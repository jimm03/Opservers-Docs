'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaEye, FaChevronDown, FaChevronUp } from 'react-icons/fa'

export default function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/architecture', label: 'Architecture' },
    { 
      label: 'Setup', 
      children: [
        { href: '/setup/jenkins', label: 'Jenkins' },
        { href: '/setup/splunk', label: 'Splunk' },
        { href: '/setup/prometheus-grafana', label: 'Prometheus & Grafana' },
        { href: '/setup/alertmanager', label: 'Alertmanager' }
      ]
    },
    { 
      label: 'Workflow', 
      children: [
        { href: '/workflow/ci-cd-workflow', label: 'CI/CD Workflow' },
        { href: '/workflow/monitoring-workflow', label: 'Monitoring Workflow' },
        { href: '/workflow/logging-workflow', label: 'Logging Workflow' },
      ]
    },
    { 
      label: 'Features', 
      children: [
        { href: '/features/monitoring-alerting', label: 'Monitoring & Alerting' },
        { href: '/features/centralized-logging', label: 'Centralized Logging' }
      ]
    },
    { href: '/runbooks', label: 'Runbooks' },
    { href: '/disaster-recovery', label: 'Disaster Recovery' },
  ]

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-content">
          <Link href="/" className="logo">
            <FaEye size={24} />
            <span><span className="logo-ops">OPS</span><span className="logo-accent">ervers</span> Docs</span>
          </Link>
          <ul className="nav-links">
            {menuItems.map((item) => (
              <li key={item.href || item.label} className="nav-item">
                {item.href ? (
                  // Regular link
                  <Link href={item.href} className="nav-link">
                    {item.label}
                  </Link>
                ) : (
                  // Dropdown
                  <div className="nav-dropdown">
                    <button 
                      className="nav-link dropdown-toggle"
                      onClick={() => toggleDropdown(item.label)}
                    >
                      {item.label}
                      {openDropdown === item.label ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                    </button>
                    {openDropdown === item.label && (
                      <div className="dropdown-menu">
                        {item.children?.map((child) => (
                          <Link 
                            key={child.href} 
                            href={child.href}
                            className="dropdown-item"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}