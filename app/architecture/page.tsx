import { FaExclamationTriangle } from 'react-icons/fa'

export default function Architecture() {
  return (
    <div>
      <div className="card">
        <h1>System Architecture</h1>
        <p>
          This section provides a comprehensive overview of our system architecture, 
          including component interactions, data flow, and infrastructure design.
        </p>
        
        <div className="code-block">
          {`Architecture Components:
• Frontend: Next.js application with TypeScript
• API Gateway: RESTful API layer with rate limiting
• Database: PostgreSQL with connection pooling
• Cache: Redis for session storage and caching
• Message Queue: RabbitMQ for asynchronous processing
• Monitoring: Prometheus + Grafana for observability
• Storage: S3-compatible object storage
• CDN: Global content delivery network`}
        </div>

        <h2>Architecture Diagram</h2>
        <p>Below is the current system architecture diagram:</p>
        
        {/* Simple image that displays at its natural size */}
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <img 
            src="/images/Architecture.png"
            alt="OPServers System Architecture Diagram"
            style={{
              maxWidth: '100%',
              height: 'auto',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              boxShadow: 'var(--shadow-md)'
            }}
          />
          <p style={{ 
            marginTop: '1rem', 
            color: 'var(--text-light)', 
            fontSize: '0.875rem',
            fontStyle: 'italic'
          }}>
            Complete system architecture showing all components and data flow
          </p>
        </div>

        <h2>Key Components</h2>
        
        <h3>Application Layer</h3>
        <ul className="bullet-list">
          <li>Next.js frontend with server-side rendering</li>
          <li>Node.js API services with Express.js</li>
          <li>Authentication service with JWT tokens</li>
          <li>File processing service</li>
        </ul>

        <h3>Data Layer</h3>
        <ul className="bullet-list">
          <li>PostgreSQL for relational data</li>
          <li>Redis for caching and sessions</li>
          <li>MongoDB for document storage (if applicable)</li>
          <li>Elasticsearch for search and analytics</li>
        </ul>

        <h3>Infrastructure</h3>
        <ul className="bullet-list">
          <li>Docker containerization</li>
          <li>Kubernetes orchestration</li>
          <li>Load balancers with health checks</li>
          <li>CDN for static assets</li>
          <li>Backup and disaster recovery systems</li>
        </ul>

        <div className="alert alert-warning">
          <FaExclamationTriangle size={18} style={{ marginRight: '0.5rem' }} />
          <strong>Note:</strong> Always refer to this architecture diagram when making changes 
          to ensure system integrity and compatibility.
        </div>
      </div>
    </div>
  )
}