import Link from 'next/link'
import { FaArrowLeft, FaExclamationTriangle, FaMemory } from 'react-icons/fa'

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
        <p>This helps identify pods that have "OOM" in their name or show frequent restarts.</p>

        <h3>2. Inspect the Pod's Events and Termination Reason</h3>
        <div className="code-block">
          {`kubectl describe pod <pod-name> -n <namespace>`}
        </div>
        <p>Look under:</p>
        <ul className="bullet-list">
          <li><strong>Last State → Terminated:</strong> reason should show <code>OOMKilled</code></li>
          <li><strong>Exit Code:</strong> usually <code>137</code></li>
          <li><strong>Events:</strong> confirm a message about "Exceeded memory limit"</li>
        </ul>

        <h3>3. Check the Container Logs Before It Was Killed</h3>
        <div className="code-block">
          {`kubectl logs <pod-name> -n <namespace> --previous`}
        </div>
        <p>The <code>--previous</code> flag lets you see logs from the last container instance before it was OOMKilled.</p>

        <h3>4. Identify Memory Usage Patterns</h3>
        <div className="code-block">
          {`kubectl top pod <pod-name> -n <namespace>`}
        </div>
        <p>Check current memory usage if the pod is running, or use Prometheus/Grafana for historical data.</p>

        <h3>5. Identify if the Pod is Part of a Deployment</h3>
        <p>Check the pod description output for the <code>Controlled By</code> field to identify the parent resource.</p>

        <h2>Resolution Procedures</h2>

        <h3>🛠️ Fix the Memory Limits</h3>

        <h4>✅ If the Pod is Part of a Deployment</h4>
        <p>Edit the deployment directly:</p>
        <div className="code-block">
          {`kubectl edit deploy <deployment-name> -n <namespace>`}
        </div>
        <p>Then adjust the container's memory resources, for example:</p>
        <div className="code-block">
          {`resources:
  limits:
    memory: "64Mi"     # Increase limit
  requests:
    memory: "32Mi"`}
        </div>
        <div className="alert alert-info">
          <strong>💡 Tip:</strong> Start small (e.g., 2–4× the previous limit) and monitor memory usage afterward.
        </div>

        <h4>Alternative: Patch the Deployment</h4>
        <div className="code-block">
          {`kubectl patch deployment <deployment-name> -n <namespace> -p '{"spec":{"template":{"spec":{"containers":[{"name":"<container-name>","resources":{"limits":{"memory":"128Mi"},"requests":{"memory":"64Mi"}}}]}}}}}'`}
        </div>

        <h3>🔄 Alternative Approaches</h3>
        <ul className="bullet-list">
          <li><strong>Optimize Application:</strong> Reduce memory usage through code optimization</li>
          <li><strong>Add Horizontal Pod Autoscaling:</strong> Scale based on memory usage</li>
          <li><strong>Implement Memory Profiling:</strong> Identify memory leaks in the application</li>
          <li><strong>Adjust Garbage Collection:</strong> For JVM-based applications, tune GC settings</li>
        </ul>

        <h2>Memory Sizing Guidelines</h2>
        <div className="code-block">
          {`Memory Unit Conversion:
1 Gi = 1024 Mi
1 Mi = 1024 Ki

Common Memory Ranges:
• Small service:   64Mi - 128Mi
• Medium service:  128Mi - 512Mi
• Large service:   512Mi - 2Gi
• Database/cache:  1Gi - 8Gi+`}
        </div>

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

        <h3>Monitor Memory Usage</h3>
        <div className="code-block">
          {`# Continuous monitoring
kubectl top pods -n <namespace> --watch

# Check resource usage
kubectl describe pod <pod-name> -n <namespace> | grep -A 5 "Limits"`}
        </div>

        <h2>Prevention</h2>
        <ul className="bullet-list">
          <li>Set appropriate memory requests and limits based on application profiling</li>
          <li>Implement memory usage monitoring and alerts</li>
          <li>Use resource quotas at namespace level</li>
          <li>Test applications under load to establish baseline memory requirements</li>
          <li>Implement horizontal pod autoscaling with memory metrics</li>
        </ul>

        <h2>Related Runbooks</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
          <Link href="/runbooks/pod-restart" className="tag-link">Pod Restart</Link>
          <Link href="/runbooks/pod-high-memory" className="tag-link">Pod High Memory</Link>
          <Link href="/runbooks/node-high-memory" className="tag-link">Node High Memory</Link>
          <Link href="/runbooks/cluster-availability" className="tag-link">Cluster Availability</Link>
        </div>
      </div>
    </div>
  )
}