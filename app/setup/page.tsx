import Link from 'next/link'
import { FaCog, FaArrowRight } from 'react-icons/fa'

export default function Setup() {
  const setupItems = [
    {
      href: '/setup/jenkins',
      title: 'Jenkins',
      description: 'Continuous integration and deployment, setup and configuration'
    },
    {
      href: '/setup/splunk',
      title: 'Splunk',
      description: 'Logging and Analysis platform setup'
    },
    {
      href: '/setup/prometheus-grafana',
      title: 'Prometheus & Grafana',
      description: 'Metrics collection, monitoring, and visualization setup'
    },
    {
      href: '/setup/alertmanager',
      title: 'Alertmanager',
      description: 'Alerts and notification configuration'
    }
  ]

  return (
    <div>
      <div className="card">
        <h1>Setup Instructions</h1>
        <p>
          Comprehensive setup guides for all the tools and platforms in our infrastructure stack.
          Follow these instructions to configure each component correctly.
        </p>

        <div className="features-grid">
          {setupItems.map((item) => (
            <Link key={item.href} href={item.href} className="feature-card">
              <FaCog size={24} color="#009267" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--primary-color)' }}>View Guide</span>
                <FaArrowRight size={14} style={{ marginLeft: '0.5rem', color: 'var(--primary-color)' }} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}