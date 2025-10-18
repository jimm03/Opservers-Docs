import Link from 'next/link'
import { FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa'

export default function NodeHighCPURunbook() {
  return (
    <div>
      <div className="card">
        <Link href="/runbooks" style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', color: 'var(--primary-color)', textDecoration: 'none' }}>
          <FaArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
          Back to Runbooks
        </Link>

        <h1>Node High CPU Runbook</h1>
        <p>
          Procedures for handling high CPU usage at the node level in Kubernetes clusters.
        </p>

        <div className="alert alert-warning">
          <FaExclamationTriangle size={18} style={{ marginRight: '0.5rem' }} />
          <strong>Alert Name:</strong> NodeHighCPUWarning | NodeHighCPUCritical
        </div>

        <h2>Alert Context</h2>
        <div className="alert alert-info">
          <div>
            <strong>Description:</strong> CPU usage on node has exceeded threshold.<br/>
            <strong>Typical Cause:</strong> High resource demand from workloads, resource contention, or inefficient applications.
          </div>
        </div>

        {/* Content will be added here */}
        
        <h2>Related Runbooks</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
          <Link href="/runbooks/node-high-memory" className="tag-link">Node High Memory</Link>
          <Link href="/runbooks/pod-high-cpu" className="tag-link">Pod High CPU</Link>
          <Link href="/runbooks/cluster-availability" className="tag-link">Cluster Availability</Link>
        </div>
      </div>
    </div>
  )
}