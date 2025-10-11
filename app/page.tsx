import Link from 'next/link'
import { ArrowRight, Server, Settings, GitBranch, BarChart3, BookOpen } from 'lucide-react'

export default function Home() {
  const features = [
    {
      href: '/architecture',
      icon: Server,
      title: 'Architecture',
      description: 'System architecture diagrams and component overview'
    },
    {
      href: '/setup',
      icon: Settings,
      title: 'Setup Instructions',
      description: 'Complete installation and configuration guide'
    },
    {
      href: '/cicd',
      icon: GitBranch,
      title: 'CI/CD Pipeline',
      description: 'Continuous integration and deployment configuration'
    },
    {
      href: '/monitoring',
      icon: BarChart3,
      title: 'Monitoring & Alerting',
      description: 'Logging, monitoring dashboards, and alerting setup'
    },
    {
      href: '/runbooks',
      icon: BookOpen,
      title: 'Incident Runbooks',
      description: 'Standard procedures for handling common incidents'
    }
  ]

  return (
    <div>
      <div className="card">
        <h1>Welcome to OPServers Documentation</h1>
        <p>
          Comprehensive documentation for our infrastructure, deployment processes, 
          monitoring setup, and operational procedures. Everything you need to 
          understand, maintain, and scale our systems.
        </p>
        
        <div className="alert alert-info">
          <strong>Quick Start:</strong> New to the project? Start with the setup instructions 
          and architecture overview to get familiar with our systems.
        </div>

        <div className="features-grid">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Link key={feature.href} href={feature.href} className="feature-card">
                <Icon size={24} color="#009267" />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </Link>
            )
          })}
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/architecture" className="btn">
            Get Started
            <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
          </Link>
          <Link href="/setup" className="btn btn-accent">
            Setup Guide
          </Link>
        </div>
      </div>
    </div>
  )
}