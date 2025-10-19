import Link from 'next/link'
import { FaCodeBranch, FaArrowRight } from 'react-icons/fa'

export default function Workflow() {
  const workflowItems = [
    {
      href: '/workflow/ci-cd-workflow',
      title: 'CI/CD Workflow',
      description: 'Automated deployment pipeline with Jenkins'
    },
    {
      href: '/workflow/monitoring-workflow',
      title: 'Monitoring Workflow',
      description: 'How Prometheus gathers metrics and triggers alerts'
    },
    {
      href: '/workflow/logging-workflow',
      title: 'Logging Workflow',
      description: 'Log flow from applications to Splunk'
    },
  ]

  return (
    <div>
      <div className="card">
        <h1>Workflow</h1>
        <p>
          Detailed workflow diagrams and explanations for our CI/CD, monitoring, and logging processes.
        </p>

        <div className="features-grid">
          {workflowItems.map((item) => (
            <Link key={item.href} href={item.href} className="feature-card">
              <FaCodeBranch size={24} color="#009267" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--primary-color)' }}>View Workflow</span>
                <FaArrowRight size={14} style={{ marginLeft: '0.5rem', color: 'var(--primary-color)' }} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}