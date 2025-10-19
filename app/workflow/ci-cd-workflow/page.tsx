import Image from 'next/image'

export default function CICDorkflow() {
  return (
    <div>
      <div className="card">
        <h1>CI/CD Workflow</h1>
        <p>
          Explains how Prometheus gathers metrics from various services and triggers alerts 
          through Alertmanager when thresholds are breached.
        </p>

        <h2>Architecture Overview</h2>
        <div className="image-section">
          <Image 
            src="/images/architecture/jenkins-workflow.png" 
            alt="Jenkins Architecture Diagram"
            width={1100}
            height={700}
            className="architecture-image"
          />
        </div>

        <h2>Workflow Description</h2>
        <p>
          The monitoring workflow in this project integrates Prometheus, Grafana, and Alertmanager to collect, 
          visualize, and respond to metrics across all layers of the system. Node Exporter (deployed as a DaemonSet) 
          gathers node-level data such as CPU and memory usage, while kube-state-metrics provides cluster-level 
          information about pods, nodes, and deployments. The web application exposes its own application-level 
          metrics, including HTTP requests and error rates.
        </p>
        <p>
          Each of these sources is exposed through Kubernetes Services and discovered by ServiceMonitors, which 
          the Prometheus Operator uses to automatically configure Prometheus scraping. Prometheus then stores and 
          evaluates the collected metrics, forwarding alerts to Alertmanager, which routes notifications to email 
          and Slack channels. Finally, Grafana connects to Prometheus as a data source, providing interactive 
          dashboards that visualize real-time performance, availability, and resource utilization across the entire 
          4-node Kubernetes cluster.
        </p>

       
      </div>
    </div>
  )
}