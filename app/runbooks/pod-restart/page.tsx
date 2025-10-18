import Link from 'next/link'
import { FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa'

export default function PodRestartRunbook() {
  return (
    <div>
      <div className="card">
        <Link href="/runbooks" style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', color: 'var(--primary-color)', textDecoration: 'none' }}>
          <FaArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
          Back to Runbooks
        </Link>

        <h1>Pod Restart Runbook</h1>
        <p>
          Procedures for handling pods stuck in restart loops and CrashLoopBackOff states in Kubernetes.
        </p>

        <div className="alert alert-warning">
          <FaExclamationTriangle size={18} style={{ marginRight: '0.5rem' }} />
          <strong>Alert Name:</strong> PodRestartWarning | PodRestartCritical
        </div>

        <h2>Alert Context</h2>
        <div className="alert alert-info">
          <div>
            <strong>Description:</strong> Pod &lt;pod-name&gt; in namespace &lt;namespace&gt; has restarted more than 3 times in the last 5 minutes.<br/>
            <strong>Typical Cause:</strong> Application crashes, configuration errors, resource constraints, or dependency issues causing containers to exit unexpectedly.
          </div>
        </div>

        <h2>Investigation Steps</h2>

        <h3>1. Check Pods That Are Not Running</h3>
        <div className="code-block">
          {`kubectl get pods -A | grep -v Running`}
        </div>
        <p>Confirm that the affected pod (e.g., &lt;pod-name&gt;) is repeatedly restarting or in <code>CrashLoopBackOff</code>.</p>

        <h3>2. Inspect the Failing Pod</h3>
        <div className="code-block">
          {`kubectl describe pod <pod-name> -n <namespace>`}
        </div>
        <p>Check for:</p>
        <ul className="bullet-list">
          <li>Events showing repeated restarts</li>
          <li>Exit codes indicating failure (e.g., <code>Exit Code: 1</code>)</li>
          <li>Any reference under <strong>&nbsp;Controlled By&nbsp;</strong> (to see if the pod is part of a Deployment, ReplicaSet, or Job)</li>
        </ul>

        <h3>3. View Logs of the Crashing Container</h3>
        <div className="code-block">
          {`kubectl logs <pod-name> -n <namespace> --previous`}
        </div>
        <p>Look for errors or crash messages in the logs.</p>

        <h3>4. Determine if the Pod Belongs to a Deployment</h3>
        <p>Check the pod description output from step 2 for the <code>Controlled By</code> field to identify the parent resource.</p>

        <h2>Resolution Procedures</h2>

        <h3>If the Pod is Part of a Deployment</h3>
        <p>Edit the Deployment directly to correct the problem (for example, fix the image, command, or configuration):</p>
        <div className="code-block">
          {`kubectl edit deploy <deployment-name> -n <namespace>`}
        </div>
        <p>Check for and fix:</p>
        <ul className="bullet-list">
          <li>Wrong command or arguments</li>
          <li>Exit codes indicating failure (e.g., <code>exit code 1;</code>) and remove that line</li>
          <li>Incorrect environment variables</li>
          <li>Wrong image tags or repository paths</li>
          <li>Missing configuration files or volumes</li>
        </ul>
        <p>After saving, the Deployment will automatically recreate the pod with the updated configuration.</p>
        <h2>Verification</h2>
        <div className="code-block">
          {`kubectl get pods -n <namespace> -w`}
        </div>
        <p>Wait for the new pod to reach <code>Running</code> state and confirm that the restart count stops increasing.</p>

        <h3>Successful Recovery Indicators</h3>
        <ul className="bullet-list">
          <li>Pod status shows <code>Running</code></li>
          <li>Restart count remains stable</li>
          <li>Application logs show normal operation</li>
          <li>Readiness and liveness probes pass</li>
          <li>No new crash events in pod description</li>
        </ul>
        
        <h2>Related Runbooks</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
          <Link href="/runbooks/cluster-availability" className="tag-link">Cluster Availability</Link>
          <Link href="/runbooks/pod-oom-killed" className="tag-link">Pod OOM Killed</Link>
       
        </div>
      </div>
    </div>
  )
}