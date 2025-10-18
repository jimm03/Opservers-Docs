import Link from 'next/link'
import { FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa'

export default function NodeHighMemoryRunbook() {
  return (
    <div>
      <div className="card">
        <Link href="/runbooks" style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', color: 'var(--primary-color)', textDecoration: 'none' }}>
          <FaArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
          Back to Runbooks
        </Link>

        <h1>Node High Memory Runbook</h1>
        <p>
          Procedures for handling high memory usage and memory pressure at the node level.
        </p>

        <div className="alert alert-warning">
          <FaExclamationTriangle size={18} style={{ marginRight: '0.5rem' }} />
          <strong>Alert Name:</strong> NodeHighMemoryWarning | NodeHighMemoryCritical
        </div>

        <h2>Alert Context</h2>
        <div className="alert alert-info">
          <div>
            <strong>Description:</strong> Memory usage on node has exceeded threshold.<br/>
            <strong>Typical Cause:</strong> Memory-intensive workloads, memory leaks, or insufficient node resources.
          </div>
        </div>

        {/* Content will be added here */}
        
        <h2>Related Runbooks</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
          <Link href="/runbooks/node-high-cpu" className="tag-link">Node High CPU</Link>
          <Link href="/runbooks/pod-high-memory" className="tag-link">Pod High Memory</Link>
          <Link href="/runbooks/pod-oom-killed" className="tag-link">Pod OOM Killed</Link>
        </div>
      </div>
    </div>
  )
}