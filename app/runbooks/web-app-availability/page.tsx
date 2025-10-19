import Link from 'next/link'
import { FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa'

export default function WebAppAvailabilityRunbook() {
  return (
    <div>
      <div className="card">
        <Link href="/runbooks" style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', color: 'var(--primary-color)', textDecoration: 'none' }}>
          <FaArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
          Back to Runbooks
        </Link>

        <h1>Web App Availability Runbook</h1>
        <p>
          Procedures for handling web application availability issues and service endpoint failures in Kubernetes.
        </p>

        <div className="alert alert-warning">
          <FaExclamationTriangle size={18} style={{ marginRight: '0.5rem' }} />
          <strong>Alert Name:</strong> WebAppAvailabilityWarning | WebAppAvailabilityCritical
        </div>

        <h2>Alert Context</h2>
        <div className="alert alert-info">
          <div>
            <strong>Description:</strong> Web application instances are unavailable or experiencing degraded availability.<br/>
            <strong>Typical Cause:</strong> Pod crashes, service endpoint issues, network problems, or Prometheus scraping failures.
          </div>
        </div>

        <h2>What These Alerts Mean</h2>
        <p>Prometheus scrapes your web app metrics via the web-service target. When these alerts trigger:</p>
        <ul className="bullet-list">
          <li><strong>Warning</strong> → at least half of your pods are unreachable</li>
          <li><strong>Critical</strong> → none of your pods respond to Prometheus</li>
        </ul>

        <p>These conditions usually mean:</p>
        <ul className="bullet-list">
          <li>Pods are crashed, not ready, or evicted</li>
          <li>The service has no endpoints</li>
          <li>A network, DNS, or port issue prevents scraping</li>
          <li>Prometheus ServiceMonitor misconfiguration or app not exposing /metrics</li>
        </ul>

        <h2>Investigation Steps</h2>

        <h3>1. Check Pod Status</h3>
        <div className="code-block">
          {`kubectl get pods -l app=<deployment-name> -n <namespace> -o wide`}
        </div>
        <p><strong>Expected:</strong> All pods Running and READY: 1/1.</p>
        <p><strong>If pods are missing, pending, or crashing:</strong></p>
        <div className="code-block">
          {`kubectl describe pod <pod-name> -n <namespace>
kubectl logs <pod-name> -n <namespace> --previous`}
        </div>
        <p><strong>Common causes:</strong></p>
        <ul className="bullet-list">
          <li><code>CrashLoopBackOff</code> → app crash or OOM</li>
          <li><code>ImagePullBackOff</code> → wrong image</li>
          <li><code>Evicted</code> → node resource pressure</li>
          <li><code>Readiness probe failed</code> → health endpoint failure</li>
        </ul>

        <h3>2. Check Service and Endpoints</h3>
        <p>Verify that your service exposes correct targets:</p>
        <div className="code-block">
          {`kubectl get svc -n <namespace>
kubectl describe svc <service-name> -n <namespace>
kubectl get endpoints <service-name> -n <namespace>`}
        </div>
        <p><strong>Expected:</strong> ENDPOINTS list pod IPs.</p>
        <p><strong>If endpoints are empty:</strong></p>
        <p>Check selector labels:</p>
        <div className="code-block">
          {`kubectl get pods --show-labels -n <namespace>
kubectl describe svc <service-name> -n <namespace>`}
        </div>
        <p>Make sure service <code>.spec.selector</code> matches pod labels.</p>

        <h3>3. Check if Prometheus Sees the Targets</h3>
        <p>In Prometheus UI → Status → Targets, filter by:</p>
        <div className="code-block">
          {`job="web-service"`}
        </div>
        <p><strong>Expected:</strong> All targets &quot;up&quot;.</p>
        <p><strong>If targets are &quot;down&quot;, hover to see why</strong> (e.g., connection refused, timeout, no route to host).</p>

        <h3>4. Validate Metrics Endpoint</h3>
        <p>Try hitting the /metrics endpoint directly:</p>
        <div className="code-block">
          {`kubectl port-forward svc/<service-name> -n <namespace> 8080:80
curl http://localhost:8080/metrics`}
        </div>
        <p><strong>Expected:</strong> Returns metrics text output.</p>
        <p><strong>If not reachable:</strong></p>
        <ul className="bullet-list">
          <li>App isn&apos;t exposing metrics</li>
          <li>Wrong port</li>
          <li>ServiceMonitor points to incorrect path</li>
        </ul>

        <h3>5. Verify Deployment Health</h3>
        <div className="code-block">
          {`kubectl rollout status deployment/<deployment-name> -n <namespace>`}
        </div>
        <p>If rollout is stuck or failed:</p>
        <div className="code-block">
          {`kubectl describe deployment <deployment-name> -n <namespace>`}
        </div>

        <h2>Related Runbooks</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
          <Link href="/runbooks/cluster-availability" className="tag-link">Cluster Availability</Link>
          <Link href="/runbooks/web-app-latency" className="tag-link">Web App Latency</Link>
          <Link href="/runbooks/http-errors" className="tag-link">HTTP Errors</Link>
        </div>
      </div>
    </div>
  )
}