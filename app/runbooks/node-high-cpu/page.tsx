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
          <strong>Alert Names:</strong> NodeHighCPUUsageWarning | NodeHighCPUUsageCritical
        </div>

        <h2>Alert Context</h2>
        <div className="alert alert-info">
          <div>
            <strong>Description:</strong> Node CPU usage exceeds threshold for extended period.<br/>
            <strong>When it triggers:</strong> Node CPU usage exceeds 50% (warning) or 60% (critical) for 3 minutes.
          </div>
        </div>

        <h2>Investigation & Mitigation Steps</h2>

        <h3>1. Identify if the Stress Deployment is Causing It</h3>
        <div className="code-block">
          {`kubectl get pods -l app=stress-cpu -o wide -n default`}
        </div>

        <h3>2. Scale the Stress Deployment Down to Reduce CPU Load</h3>
        <div className="code-block">
          {`kubectl scale deploy stress-cpu --replicas=0 -n default`}
        </div>

        <h3>3. Optionally, Delete Pods Causing Excessive Load</h3>
        <div className="code-block">
          {`kubectl delete pod <pod-name> -n default`}
        </div>

        <h2>Verification</h2>
        <ul className="bullet-list">
          <li>CPU usage drops below 50% threshold</li>
          <li>No critical alerts firing in Alertmanager</li>

        </ul>

        <h2>Related Runbooks</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
          <Link href="/runbooks/node-high-memory" className="tag-link">Node High Memory</Link>
          <Link href="/runbooks/cluster-availability" className="tag-link">Cluster Availability</Link>
        </div>
      </div>
    </div>
  )
}