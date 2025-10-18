import Link from 'next/link'
import { FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa'

export default function PodHighMemoryRunbook() {
  return (
    <div>
      <div className="card">
        <Link href="/runbooks" style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', color: 'var(--primary-color)', textDecoration: 'none' }}>
          <FaArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
          Back to Runbooks
        </Link>

        <h1>Pod High Memory Runbook</h1>
        <p>
          Procedures for handling high memory usage at the pod/container level.
        </p>

        <div className="alert alert-warning">
          <FaExclamationTriangle size={18} style={{ marginRight: '0.5rem' }} />
          <strong>Alert Name:</strong> PodHighMemoryWarning | PodHighMemoryCritical
        </div>

        <h2>Alert Context</h2>
        <div className="alert alert-info">
          <div>
            <strong>Description:</strong> Memory usage for pod has exceeded threshold.<br/>
            <strong>Typical Cause:</strong> Memory leaks, large data processing, or insufficient memory limits.
          </div>
        </div>

        {/* Content will be added here */}
        
        <h2>Related Runbooks</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
          <Link href="/runbooks/pod-high-cpu" className="tag-link">Pod High CPU</Link>
          <Link href="/runbooks/node-high-memory" className="tag-link">Node High Memory</Link>
          <Link href="/runbooks/pod-oom-killed" className="tag-link">Pod OOM Killed</Link>
        </div>
      </div>
    </div>
  )
}