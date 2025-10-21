import Image from 'next/image'
export default function Architecture() {
  const tools = [
    { tool: "Github", purpose: "Platform for version control and store source code" },
    { tool: "Kubernetes", purpose: "Platform to deploy and manage the web application and monitoring stack" },
    { tool: "Web Application (Flask)", purpose: "Simulated workload generating structured logs and metrics" },
    { tool: "Prometheus", purpose: "Collects time-series metrics from the web app and Kubernetes cluster" },
    { tool: "Alertmanager", purpose: "Handles alert notifications based on Prometheus rules" },
    { tool: "Grafana", purpose: "Visualizes metrics through real-time dashboards" },
    { tool: "Splunk Enterprise", purpose: "Collects and analyzes structured logs from the app and cluster" },
    { tool: "Jenkins", purpose: "Automates build and deployment of the web app to the cluster" }
  ]

  return (
    <div>
      <div className="card">
        <h1>Project Architecture</h1>
        <p>
          This project implements a real-time monitoring, visualization, and logging solution for a simulated production web application running in a Kubernetes cluster.
        </p>
        
        <h2>Architecture Diagram</h2>
        <p>Below is the current system architecture diagram:</p>
        
        {/* Updated with Next.js Image component */}
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <div style={{
            display: 'inline-block',
            maxWidth: '100%',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            boxShadow: 'var(--shadow-md)',
            overflow: 'hidden'
          }}>
            <Image
              src="/images/Architecture.png"
              alt="OPServers System Architecture Diagram"
              width={800}
              height={600}
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '800px'
              }}
            />
          </div>
          <p style={{ 
            marginTop: '1rem', 
            color: 'var(--text-light)', 
            fontSize: '0.875rem',
            fontStyle: 'italic'
          }}>
            Complete system architecture showing all components
          </p>
        </div>

        <h2>Tools and Technologies Used</h2>
        <p>
          Our monitoring stack leverages industry-standard tools to provide comprehensive observability, 
          automated deployment, and centralized logging capabilities.
        </p>

        {/* Simple Tools Table */}
        <div style={{ 
          overflowX: 'auto',
          margin: '2rem 0',
          border: '1px solid var(--border)',
          borderRadius: '8px'
        }}>
          <table style={{ 
            width: '100%',
            borderCollapse: 'collapse',
            background: 'var(--background)'
          }}>
            <thead>
              <tr style={{ 
                background: 'var(--background-alt)'
              }}>
                <th style={{ 
                  padding: '1rem 1.5rem',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: 'var(--primary-dark)',
                  borderBottom: '2px solid var(--primary-color)'
                }}>
                  Tool
                </th>
                <th style={{ 
                  padding: '1rem 1.5rem',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: 'var(--primary-dark)',
                  borderBottom: '2px solid var(--primary-color)'
                }}>
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              {tools.map((item, index) => (
                <tr 
                  key={index}
                  style={{ 
                    borderBottom: '1px solid var(--border)'
                  }}
                >
                  <td style={{ 
                    padding: '1rem 1.5rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)'
                  }}>
                    {item.tool}
                  </td>
                  <td style={{ 
                    padding: '1rem 1.5rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.5'
                  }}>
                    {item.purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}