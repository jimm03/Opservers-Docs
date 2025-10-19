import Link from 'next/link'
import { FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa'

export default function HTTPErrorsRunbook() {
  return (
    <div>
      <div className="card">
        <Link href="/runbooks" style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', color: 'var(--primary-color)', textDecoration: 'none' }}>
          <FaArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
          Back to Runbooks
        </Link>

        <h1>HTTP 5xx & 4xx Errors Runbook</h1>
        <p>
          Procedures for handling increased rates of HTTP 5xx (server) and 4xx (client) errors in web applications.
        </p>

        <div className="alert alert-warning">
          <FaExclamationTriangle size={18} style={{ marginRight: '0.5rem' }} />
          <strong>Alert Names:</strong> EndpointHigh5xxErrorRateWarning | EndpointHigh5xxErrorRateCritical | EndpointHigh4xxErrorRateWarning | EndpointHigh4xxErrorRateCritical
        </div>

        <h2>Alert Context</h2>
        <div className="alert alert-info">
          <div>
            <strong>Description:</strong> Triggered when the percentage of HTTP errors in your web app exceeds the threshold.<br/>
            <strong>Typical Cause:</strong> 4xx → Client errors (bad requests, auth issues) | 5xx → Server errors (crashes, timeouts, bugs)
          </div>
        </div>

        <h2>Investigation Steps</h2>

        <h3>1. Check Application Logs</h3>
        <div className="code-block">
          {`kubectl logs <pod-name> -n <namespace> | grep -i "error"`}
        </div>
        <p>Look for stack traces, exception messages, or specific error patterns.</p>

        <h3>2. Check Pod and Deployment Health</h3>
        <pre className="code-block">
          {`kubectl get pods -l app=<deployment-name> -n <namespace>
kubectl describe pod <pod-name> -n <namespace>`}
        </pre>
        <p>Look for resource issues, restarts, or configuration problems.</p>

        <h3>3. Analyze Recent Changes</h3>
        <p>If the pod is part of a deployment, inspect it for recent changes:</p>
        <div className="code-block">
          {`kubectl edit deploy <deployment-name> -n <namespace>`}
        </div>
        <p>Check for:</p>
        <ul className="bullet-list">
          <li>Image version changes</li>
          <li>Environment variables or configuration errors</li>
          <li>Resource limit changes</li>
          <li>Command or argument modifications</li>
        </ul>

        <h2>Remediation Steps</h2>

        <h3>Immediate Rollback (If Recent Deployment)</h3>
        <div className="code-block">
          {`kubectl rollout undo deploy/<deployment-name> -n <namespace>`}
        </div>

        <h3>Restart and Monitor</h3>
        <pre className="code-block">
          {`# Restart the deployment
kubectl rollout restart deploy/<deployment-name> -n <namespace>

# Monitor rollout status
kubectl rollout status deploy/<deployment-name> -n <namespace>`}
        </pre>

        <h3>Scale Deployment (If Resource Issues)</h3>
        <pre className="code-block">
          {`# Scale up to handle load
kubectl scale deploy/<deployment-name> --replicas=3 -n <namespace>`}
        </pre>

        <h2>Verification</h2>
        <ul className="bullet-list">
          <li>Error rates drop below threshold in Prometheus</li>
          <li>Application logs show reduced error frequency</li>
          <li>All pods are Running and Ready</li>
          <li>HTTP status code distribution returns to normal</li>
          <li>Alert resolves in Alertmanager</li>
        </ul>

        <h2>Related Runbooks</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
          <Link href="/runbooks/web-app-availability" className="tag-link">Web App Availability</Link>
          <Link href="/runbooks/web-app-latency" className="tag-link">Web App Latency</Link>
        </div>
      </div>
    </div>
  )
}