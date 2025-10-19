import Link from 'next/link'
import { 
  FaProjectDiagram,
  FaCog,
  FaCodeBranch,
  FaChartBar,
  FaBook,
  FaArrowRight,
  FaEye
} from 'react-icons/fa'

export default function Home() {
  const features = [
    {
      href: '/architecture',
      icon: FaProjectDiagram,
      title: 'Architecture',
      description: 'System architecture diagram and tools overview'
    },
    {
      href: '/setup',
      icon: FaCog,
      title: 'Setup Instructions',
      description: 'Complete installation guides for Jenkins, Splunk, Prometheus, and more'
    },
    {
      href: '/workflow',
      icon: FaCodeBranch,
      title: 'Workflow',
      description: 'CI/CD, monitoring, logging, and incident response workflows'
    },
    {
      href: '/features',
      icon: FaChartBar,
      title: 'Features',
      description: 'Monitoring, alerting, and centralized logging capabilities'
    },
    {
      href: '/runbooks',
      icon: FaBook,
      title: 'Runbooks',
      description: 'Standard procedures for handling common incidents'
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="card" style={{ 
        background: 'linear-gradient(135deg, var(--background) 0%, var(--background-alt) 100%)',
        border: 'none',
        textAlign: 'center'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          marginBottom: '1.5rem'
        }}>
          <FaEye size={48} color="var(--primary-color)" style={{ marginRight: '1rem' }} />
          <h1 style={{ 
            fontSize: '2.75rem', 
            background: 'linear-gradient(135deg, var(--primary-dark), var(--primary-color))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            margin: 0
          }}>
            OPServers Documentation
          </h1>
        </div>
        
        <p style={{ 
          fontSize: '1.25rem',
          color: 'var(--text-secondary)',
          maxWidth: '800px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Comprehensive documentation for our real-time monitoring, visualization, and logging solution 
          built on Kubernetes with Jenkins, Splunk, Prometheus, and Grafana.
        </p>

        <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/architecture" className="btn" style={{
            background: 'linear-gradient(135deg, var(--primary-color), var(--primary-light))',
            padding: '1rem 2rem',
            fontSize: '1.1rem'
          }}>
            Explore Architecture
            <FaArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
          </Link>
          <Link href="/setup" className="btn btn-accent" style={{
            padding: '1rem 2rem',
            fontSize: '1.1rem'
          }}>
            Quick Setup
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="card">
        <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Documentation Sections</h2>
        <p style={{ 
          textAlign: 'center', 
          color: 'var(--text-light)',
          marginBottom: '2rem',
          fontSize: '1.1rem'
        }}>
          Everything you need to deploy, monitor, and maintain our infrastructure
        </p>

        <div className="features-grid">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Link key={feature.href} href={feature.href} className="feature-card" style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                textDecoration: 'none',
                color: 'inherit'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '1rem' 
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, var(--primary-light), var(--primary-color))',
                    borderRadius: '12px',
                    padding: '0.75rem',
                    marginRight: '1rem'
                  }}>
                    <Icon size={24} color="white" />
                  </div>
                  <h3 style={{ 
                    color: 'var(--primary-dark)',
                    margin: 0,
                    fontSize: '1.25rem'
                  }}>
                    {feature.title}
                  </h3>
                </div>
                <p style={{ 
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  flex: 1,
                  margin: 0
                }}>
                  {feature.description}
                </p>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginTop: '1rem',
                  color: 'var(--primary-color)',
                  fontWeight: '600',
                  fontSize: '0.9rem'
                }}>
                  Explore section
                  <FaArrowRight size={14} style={{ marginLeft: '0.5rem' }} />
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="card">
        <h2>Getting Started</h2>
        <p>
          Follow these steps to quickly set up and understand our project:
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem',
          margin: '2rem 0'
        }}>
          <div style={{ 
            background: 'var(--background-alt)',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{
                background: 'var(--primary-color)',
                color: 'white',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '600',
                marginRight: '1rem'
              }}>1</div>
              <h4 style={{ margin: 0 }}>Review Architecture</h4>
            </div>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>
              Understand the system components and how they interact before setup.
            </p>
          </div>

          <div style={{ 
            background: 'var(--background-alt)',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{
                background: 'var(--primary-color)',
                color: 'white',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '600',
                marginRight: '1rem'
              }}>2</div>
              <h4 style={{ margin: 0 }}>Setup Tools</h4>
            </div>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>
              Install and configure Jenkins, Splunk, Prometheus, and Alertmanager.
            </p>
          </div>

          <div style={{ 
            background: 'var(--background-alt)',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{
                background: 'var(--primary-color)',
                color: 'white',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '600',
                marginRight: '1rem'
              }}>3</div>
              <h4 style={{ margin: 0 }}>Understand Workflows</h4>
            </div>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>
              Learn how CI/CD, monitoring, and incident response processes work.
            </p>
          </div>
        </div>

      
      </div>
    </div>
  )
}