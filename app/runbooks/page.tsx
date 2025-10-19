import Link from 'next/link'
import { FaBook, FaArrowRight, FaExclamationTriangle } from 'react-icons/fa'

export default function Runbooks() {
  const runbookItems = [
    {
      href: '/runbooks/cluster-availability',
      title: 'Cluster Availability / Pod Status',
      description: 'Procedures for cluster-wide availability issues and pod status monitoring'
    },
    {
      href: '/runbooks/pod-restart',
      title: 'Pod Restart',
      description: 'Handling frequent pod restarts and container lifecycle issues'
    },
    {
      href: '/runbooks/pod-oom-killed',
      title: 'Pod OOM Killed',
      description: 'Memory pressure and out-of-memory killed container procedures'
    },
    {
      href: '/runbooks/node-high-cpu',
      title: 'Node High CPU Usage',
      description: 'Node-level CPU saturation and resource contention resolution'
    },
    {
      href: '/runbooks/node-high-memory',
      title: 'Node High Memory Usage',
      description: 'Node memory exhaustion and swap usage incidents'
    },
    {
      href: '/runbooks/pod-high-cpu',
      title: 'Pod High CPU Usage',
      description: 'Application-level CPU spikes and performance degradation'
    },
    {
      href: '/runbooks/pod-high-memory',
      title: 'Pod High Memory Usage',
      description: 'Application memory leaks and high memory consumption'
    },
    {
      href: '/runbooks/web-app-availability',
      title: 'Web App Availability',
      description: 'Web application downtime and service unavailability'
    },
    {
      href: '/runbooks/web-app-latency',
      title: 'Web App Latency',
      description: 'High response times and application performance issues'
    },
    {
      href: '/runbooks/http-errors',
      title: '5xx and 4xx Errors',
      description: 'Server and client error rate spikes and resolution'
    }
  ]

  return (
    <div>
      <div className="card">
        <h1>Incident Runbooks</h1>
        <p>
          Standard operating procedures for handling common incidents and emergencies. 
          Follow these steps systematically to resolve issues quickly and effectively.
        </p>

        <div className="features-grid">
          {runbookItems.map((item) => (
            <Link key={item.href} href={item.href} className="feature-card">
              <FaBook size={24} color="#009267" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--primary-color)' }}>View Runbook</span>
                <FaArrowRight size={14} style={{ marginLeft: '0.5rem', color: 'var(--primary-color)' }} />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}