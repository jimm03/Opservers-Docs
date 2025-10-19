import Link from 'next/link'
import { FaArrowLeft, FaExclamationTriangle, FaClock, FaSearch, FaSync } from 'react-icons/fa'

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
          <strong>Alert Names:</strong> WebAppLatencyWarning | HighWebAppLatency
        </div>

        <h2>Alert Context</h2>
        <div className="alert alert-info">
          <div>
            <strong>Description:</strong> The web application is responding slower than expected.<br/>
            <strong>Metric:</strong> <code>flask_http_request_duration_seconds_bucket</code><br/>
            <strong>Thresholds:</strong> p99 latency &gt; 1s (Warning) or &gt; 1.5s (Critical) for 3 minutes
          </div>
        </div>

        <h2>Step-by-Step Investigation</h2>

        <h3>1. Identify Affected Instances</h3>
        <p>Check which pods are serving traffic for your web app:</p>
        <div className="code-block">
          {`kubectl get pods -n <namespace> -l app=<your-webapp-label> -o wide`}
        </div>
        <p>This helps locate the pods behind the service being monitored.</p>

        <h3>2. Inspect Pod Logs for Slow Endpoints or Timeouts</h3>
        <div className="code-block">
          {`kubectl logs <pod-name> -n <namespace> --tail=100`}
        </div>
        <p>Look for:</p>
        <ul className="bullet-list">
          <li>Slow database queries</li>
          <li>Timeout errors</li>
          <li>External API delays</li>
          <li>Long-running requests</li>
        </ul>
        <p>If logs show repeated delays in specific endpoints, note them.</p>

        <h3>3. Check Deployment Status</h3>
        <p>Confirm all replicas are running and ready:</p>
        <div className="code-block">
          {`kubectl get deployment <webapp-deployment> -n <namespace>`}
        </div>
        <p>If some pods are stuck in <code>CrashLoopBackOff</code> or <code>Pending</code>, investigate those.</p>

        <h2>Mitigation Steps</h2>

        <h3>Restart the Deployment</h3>
        <p>Refresh pods to clear temporary issues:</p>
        <div className="code-block">
          {`kubectl rollout restart deployment <webapp-deployment> -n <namespace>`}
        </div>

        <h3>Increase Replicas Temporarily</h3>
        <p>Distribute load by scaling up:</p>
        <div className="code-block">
          {`kubectl scale deployment <webapp-deployment> --replicas=3 -n <namespace>`}
        </div>

        <h2>Related Runbooks</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
          <Link href="/runbooks/web-app-availability" className="tag-link">Web App Availability</Link>
          <Link href="/runbooks/http-errors" className="tag-link">HTTP Errors</Link>
          <Link href="/runbooks/pod-restart" className="tag-link">Pod Restart</Link>
        </div>
      </div>
    </div>
  )
}