import Link from 'next/link'
import { FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa'

export default function ClusterAvailabilityRunbook() {
  return (
    <div>
      <div className="card">
        <Link href="/runbooks" style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', color: 'var(--primary-color)', textDecoration: 'none' }}>
          <FaArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
          Back to Runbooks
        </Link>

        <h1>Cluster Availability / Pod Status Runbook</h1>
        <p>
          Procedures for handling cluster-wide availability issues and monitoring pod status across the Kubernetes environment.
        </p>

        <div className="alert alert-warning">
          <FaExclamationTriangle size={18} style={{ marginRight: '0.5rem' }} />
          <strong>Alert Name:</strong> ClusterAvailabilityAlert | PodStatusWarning | PodStatusCritical
        </div>
         <h2>Alert Context</h2>
        <div className="alert alert-info">
          <div>
            <strong>Description:</strong> More than 1 pod is not in Running state.<br/>
            <strong>Typical Cause:</strong> The image failed to pull due to authentication or tag errors.
          </div>
        </div>

        <h2>Pod Status Recovery Procedures</h2>
        
        <h3>1. Check Pods That Are Not Running</h3>
        <div className="code-block">
          {`kubectl get pods -A | grep -v Running`}
        </div>

        <h3>2. Inspect Failing Pod</h3>
        <div className="code-block">
          {`kubectl describe pod <pod-name> -n <namespace>`}
        </div>

        <h3>3. View Pod Logs</h3>
        <div className="code-block">
          {`kubectl logs <pod-name> -n <namespace> --previous`}
        </div>

        <h3>4. Fix Image Pull Issues</h3>
        <p><strong>If the pod is part of a Deployment, fix the image directly:</strong></p>
        <p>Edit the Deployment and correct the image tag:</p>
        <div className="code-block">
          {`kubectl edit deployment <deployment-name> -n <namespace>`}
        </div>
        <p>In the editor, find the container spec:</p>
        <pre className="code-block">
          {`containers:
- name: imagepull
  image: busybox:latest  # <-- Correct image tag here`}
        </pre>
        <p>Save and exit. Kubernetes will automatically redeploy the updated pod.</p>

        <h4>Alternative: Set Image Directly from Command Line</h4>
        <div className="code-block">
          {`kubectl set image deployment/<deployment-name> <container-name>=busybox:latest -n <namespace>`}
        </div>

        <h3>5. Verify New Pods Are Running</h3>
        <div className="code-block">
          {`kubectl get pods -n <namespace> -w`}
        </div>
        <p>Wait until the new pod status changes to:</p>
        <pre className="code-block">
          {`STATUS   READY   RESTARTS   AGE
Running  1/1     0          1m`}
        </pre>

        <h2>Related Runbooks</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
          <Link href="/runbooks/pod-restart" className="tag-link">Pod Restart</Link>
          <Link href="/runbooks/pod-oom-killed" className="tag-link">Pod OOM Killed</Link>
        </div>
      </div>
    </div>
  )
}