import Link from 'next/link'
import { FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa'

export default function WebAppLatencyRunbook() {
  return (
    <div>
      <div className="card">
        <Link href="/runbooks" style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', color: 'var(--primary-color)', textDecoration: 'none' }}>
          <FaArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
          Back to Runbooks
        </Link>

        <h1>Web App Latency Runbook</h1>
        <p>
          Procedures for handling increased response times and latency issues in web applications.
        </p>

        <div className="alert alert-warning">
          <FaExclamationTriangle size={18} style={{ marginRight: '0.5rem' }} />
          <strong>Alert Name:</strong> WebAppLatencyWarning | WebAppLatencyCritical
        </div>

        <h2>Alert Context</h2>
        <div className="alert alert-info">
          <div>
            <strong>Description:</strong> Response times for web application have exceeded threshold.<br/>
            <strong>Typical Cause:</strong> High load, database performance issues, network latency, or inefficient code.
          </div>
        </div>

        {/* Content will be added here */}
        
        <h2>Related Runbooks</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
          <Link href="/runbooks/web-app-availability" className="tag-link">Web App Availability</Link>
          <Link href="/runbooks/http-errors" className="tag-link">HTTP Errors</Link>
          <Link href="/runbooks/pod-high-cpu" className="tag-link">Pod High CPU</Link>
        </div>
      </div>
    </div>
  )
}