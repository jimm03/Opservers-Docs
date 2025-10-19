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
          <strong>Alert Names:</strong> NodeHighMemoryUsageWarning | NodeHighMemoryUsageCritical
        </div>

        <h2>Alert Context</h2>
        <div className="alert alert-info">
          <div>
            <strong>Description:</strong> Node memory usage exceeds threshold for extended period.<br/>
            <strong>When it triggers:</strong> Node memory usage exceeds 80% (warning) or 85% (critical) for 3 minutes.
          </div>
        </div>

        <h2>Investigation & Mitigation Steps</h2>

        <h3>1. Check if Stress Deployment is Using Memory</h3>
        <div className="code-block">
          {`kubectl get pods -l app=stress-cpu -o wide -n default`}
        </div>

        <h3>2. Reduce Memory Pressure by Scaling Down or Deleting Pods</h3>
        <pre className="code-block">
          {`# Scale down stress deployment
kubectl scale deploy stress-cpu --replicas=0 -n default

# Or delete specific pods
kubectl delete pod <pod-name> -n default`}
        </pre>

        <h2>Verification</h2>
        <ul className="bullet-list">
          <li>Memory usage drops below 80% threshold</li>
          <li>No critical alerts firing in Alertmanager</li>
        </ul>

        <h2>Related Runbooks</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
          <Link href="/runbooks/node-high-cpu" className="tag-link">Node High CPU</Link>
          <Link href="/runbooks/pod-oom-killed" className="tag-link">Pod OOM Killed</Link>
        </div>
      </div>
    </div>
  )
}