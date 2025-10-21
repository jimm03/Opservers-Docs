import Link from 'next/link'
import { FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa'

export default function PodOOMKilledRunbook() {
  return (
    <div>
      <div className="card">
        <Link href="/runbooks" style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', color: 'var(--primary-color)', textDecoration: 'none' }}>
          <FaArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
          Back to Runbooks
        </Link>

        <h1>Pod OOM Killed Runbook</h1>
        <p>
          Procedures for handling pods or containers terminated due to exceeding memory limits in Kubernetes.
        </p>

        <div className="alert alert-warning">
          <FaExclamationTriangle size={18} style={{ marginRight: '0.5rem' }} />
          <strong>Alert Name:</strong> PodOOMKilled
        </div>

        <h2>Alert Context</h2>
        <div className="alert alert-info">
          <div>
            <strong>Description:</strong> One or more containers in pod &lt;pod-name&gt; (namespace: &lt;namespace&gt;) were terminated because they exceeded their memory limit.<br/>
            <strong>Typical Cause:</strong> The container tried to use more memory than its assigned limit.
          </div>
        </div>

        <h2>Investigation Steps</h2>

        <h3>1. Check Pods That May Have Been OOMKilled</h3>
        <div className="code-block">
          {`kubectl get pods -A | grep -i oom`}
        </div>
        <p>This helps identify pods that have &quot;OOM&quot; in their name or show frequent restarts.</p>

        <h3>2. Inspect the Pod&apos;s Events and Termination Reason</h3>
        <div className="code-block">
          {`kubectl describe pod <pod-name> -n <namespace>`}
        </div>
        <p>Look under:</p>
        <ul className="bullet-list">
          <li><strong>Last State → Terminated:</strong> reason should show <code>OOMKilled</code></li>
          <li><strong>Exit Code:</strong> usually <code>137</code></li>
          <li><strong>Events:</strong> confirm a message about &quot;Exceeded memory limit&quot;</li>
        </ul>

        <h3>3. Check the Container Logs Before It Was Killed</h3>
        <div className="code-block">
          {`kubectl logs <pod-name> -n <namespace> --previous`}
        </div>
        <p>The <code>--previous</code> flag lets you see logs from the last container instance before it was OOMKilled.</p>

        <h3>4. Identify if the Pod is Part of a Deployment</h3>
        <p>Check the pod description output for the <code>Controlled By</code> field to identify the parent resource.</p>

        <h2>Resolution Procedures</h2>

        <h3>Fix the Memory Limits</h3>

        <h4>If the Pod is Part of a Deployment</h4>
        <p>Edit the deployment directly:</p>
        <div className="code-block">
          {`kubectl edit deploy <deployment-name> -n <namespace>`}
        </div>
        <p>Then adjust the container&apos;s memory resources, for example:</p>
        <pre className="code-block">
          {`resources:
  limits:
    memory: "64Mi"     # Increase limit
  requests:
    memory: "32Mi"`}
        </pre>

        <h2>Verification</h2>
        <div className="code-block">
          {`kubectl get pods -n <namespace> -w`}
        </div>
        <p>Wait for the new pod to reach <code>Running</code> state and monitor memory usage.</p>

        <h3>Successful Recovery Indicators</h3>
        <ul className="bullet-list">
          <li>Pod status shows <code>Running</code> without restarts</li>
          <li>No <code>OOMKilled</code> events in pod description</li>
          <li>Memory usage stays within new limits</li>
          <li>Application functions normally</li>
          <li>No memory-related alerts firing</li>
        </ul>

        <h2>Related Runbooks</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
          <Link href="/runbooks/pod-restart" className="tag-link">Pod Restart</Link>
          <Link href="/runbooks/cluster-availability" className="tag-link">Cluster Availability</Link>
        </div>
      </div>
    </div>
  )
}