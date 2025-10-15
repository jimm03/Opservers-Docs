import Link from 'next/link'
import { FaChartBar, FaArrowRight } from 'react-icons/fa'

export default function Features() {
  const featureItems = [
    {
      href: '/features/monitoring-alerting',
      title: 'Monitoring & Alerting',
      description: 'Real-time system monitoring and intelligent alerting capabilities'
    },
    {
      href: '/features/centralized-logging',
      title: 'Centralized Logging & Analysis',
      description: 'Unified log collection, analysis, and visualization'
    }
  ]

  return (
    <div>
      <div className="card">
        <h1>Features</h1>
        <p>
          Explore the powerful features of our monitoring and observability platform that 
          provide comprehensive visibility into system health and performance.
        </p>

        <div className="features-grid">
          {featureItems.map((item) => (
            <Link key={item.href} href={item.href} className="feature-card">
              <FaChartBar size={24} color="#009267" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--primary-color)' }}>Explore Feature</span>
                <FaArrowRight size={14} style={{ marginLeft: '0.5rem', color: 'var(--primary-color)' }} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}