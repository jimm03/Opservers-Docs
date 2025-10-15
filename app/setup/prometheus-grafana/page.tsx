export default function PrometheusGrafanaSetup() {
  return (
    <div>
      <div className="card">
        <h1>Prometheus & Grafana Setup</h1>
        <p>
          Complete setup for metrics collection, monitoring, and visualization with Prometheus and Grafana using Helm charts in Kubernetes.
        </p>

        <h2>Prerequisites</h2>
        <ul className="bullet-list">
          <li>K8s infrastructure where workloads will run</li>
          <li>Cloning our github repository: https://github.com/opswerks-academy/i9c-observability.git</li>
        </ul>

        <h2>1. Prometheus Community Helm Charts</h2>
        <p>To deploy this, the best method is to use the Prometheus community helm charts which you can find <a href="https://github.com/prometheus-community/helm-charts" target="_blank" rel="noopener noreferrer">here</a></p>
        
        <div className="code-block">
          {`helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm search repo prometheus-community --versions`}
        </div>

        <p>Check the possible configuration options:</p>
        <div className="code-block">
          {`helm show values prometheus-community/kube-prometheus-stack > prometheus-values.yaml`}
        </div>

        <h2>2. Configuration</h2>
        <p>We can take anything from the values file or create our own <a href="https://github.com/opswerks-academy/i9c-observability/blob/main/k8s/infra/prometheus/values.yaml" target="_blank" rel="noopener noreferrer"><code>values.yaml</code></a> file to configure anything we want.</p>

        <h2>3. Installation</h2>
        <p>Firstly let&apos;s list the available chart versions:</p>
        <div className="code-block">
          {`helm search repo prometheus-community --versions > versions.log`}
        </div>

        <p>Let&apos;s proceed with installation:</p>
        <pre className="code-block">
{`CHART_VERSION=75.4.0
helm install kube-prometheus-stack prometheus-community/kube-prometheus-stack \\
  --version \${CHART_VERSION} \\
  --namespace monitoring \\
  --create-namespace \\
  --values values.yaml`}
</pre>

        <h2>4. Check Ports and Pods</h2>
        <p><strong>Check Monitoring</strong></p>
        <div className="code-block">
          {`kubectl get pods -n monitoring`}
        </div>

        <p>To see how Prometheus is configured on what to scrape, we list service monitors:</p>
        <pre className="code-block">
          {`kubectl get servicemonitors -n monitoring`}
        </pre>

        <h2>5. Create a Service Monitor for the webapp service</h2>
        
        <p>Refer to this <a href="https://github.com/opswerks-academy/i9c-observability/blob/main/k8s/app/web-servicemonitor.yml" target="_blank" rel="noopener noreferrer"><code>web-servicemonitor.yml</code></a> file.</p>

        <h3>Step 1. Make sure your Service has a named port</h3>
        <p>Right now your service probably looks like this:</p>
        <div className="code-block">
          {`kubectl get svc web-service -n opswerks -o yaml`}
        </div>

        <p>You&apos;ll likely see:</p>
        <pre className="code-block">
          {`ports:
- port: 5000
  targetPort: 5000
  nodePort: 30007`}
        </pre>

        <p><strong>Add a name to that port</strong> (Prometheus ServiceMonitor needs a named port).</p>
        <p>Edit it like this:</p>
        <div className="code-block">
          {`kubectl edit svc web-service -n opswerks`}
        </div>

        <p>Change from:</p>
        <pre className="code-block">
          {`ports:
- port: 5000
  targetPort: 5000
  nodePort: 30007`}
        </pre>

        <p>to:</p>
        <pre className="code-block">
          {`ports:
- name: web
  port: 5000
  targetPort: 5000
  nodePort: 30007`}
        </pre>

        <h3>Step 2. Apply the ServiceMonitor</h3>
        <p>Now apply:</p>
        <div className="code-block">
          {`kubectl apply -f web-servicemonitor.yml`}
        </div>

        <h2>Accessing Tools</h2>
        <p>Since we&apos;ve already created a nodeport service for every tool in our values.yaml above. This is how we can access each tool.</p>

        <h3>To Access Grafana</h3>
        <p>Check Grafana on</p>
        <div className="code-block">
          {`http://<any-node-ip>:30904/`}
        </div>
        <p><em>Grafana was deployed and automatically configured (via Helm) to connect to our Prometheus instance as a data source.</em></p>

        <h3>To Access Prometheus</h3>
        <div className="code-block">
          {`kubectl -n monitoring port-forward svc/prometheus-operated 9090`}
        </div>
        <p>Check Prometheus on</p>
        <div className="code-block">
          {`http://<any-node-ip>:30905/`}
        </div>

        <h3>To Access AlertManager</h3>
        <p>Port-forward to the Alertmanager service:</p>
        <p>Check AlertManager on</p>
        <div className="code-block">
          {`http://<any-node-ip>:30903/`}
        </div>

        <h2>6. Add Prometheus Rules for alerts</h2>
        <p>Refer to this <a href="https://github.com/opswerks-academy/i9c-observability/blob/main/k8s/infra/prometheus/prometheus-alerts.yaml" target="_blank" rel="noopener noreferrer"><code>prometheus-alerts.yaml</code></a> file.</p>
        <p>Then apply the file to create the alerts.</p>
        <div className="code-block">
          {`kubectl apply -f prometheus-alerts.yaml`}
        </div>
      </div>
    </div>
  )
}