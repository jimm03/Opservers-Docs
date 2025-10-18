import Link from 'next/link'
import { FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa'

export default function PodHighCPURunbook() {
  return (
    <div>
      <div className="card">
        <Link href="/runbooks" style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', color: 'var(--primary-color)', textDecoration: 'none' }}>
          <FaArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
          Back to Runbooks
        </Link>

        <h1>Pod High CPU Runbook</h1>
        <p>
          Procedures for handling high CPU usage at the pod/container level.
        </p>

        <div className="alert alert-warning">
          <FaExclamationTriangle size={18} style={{ marginRight: '0.5rem' }} />
          <strong>Alert Name:</strong> PodHighCPUWarning | PodHighCPUCritical
        </div>

        <h2>Alert Context</h2>
        <div className="alert alert-info">
          <div>
            <strong>Description:</strong> CPU usage for pod has exceeded threshold.<br/>
            <strong>Typical Cause:</strong> High application load, inefficient code, or insufficient CPU limits.
          </div>
        </div>

        {/* Content will be added here */}
        
        <h2>Related Runbooks</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
          <Link href="/runbooks/pod-high-memory" className="tag-link">Pod High Memory</Link>
          <Link href="/runbooks/node-high-cpu" className="tag-link">Node High CPU</Link>
          <Link href="/runbooks/pod-restart" className="tag-link">Pod Restart</Link>
        </div>
      </div>
    </div>
  )
}