import Link from 'next/link'
import Image from 'next/image'

export default function MonitoringAlerting() {
  return (
    <div>
      <div className="card">
        <h1>Monitoring and Alerting</h1>
        <p>
          Implements real-time monitoring across application-level, cluster-level, and node-level metrics 
          using Prometheus and Grafana to ensure comprehensive observability of the Kubernetes environment.
        </p>

        <h2>Comprehensive Monitoring</h2>
    
        <p>
          Dashboards visualize system performance, resource utilization, and health status of the entire 
          Kubernetes environment. From web app requests to pod activity and node CPU/memory usage.
        </p>

        <div className="dashboard-grid">
          <div className="dashboard-item">
            <Image 
              src="/images/monitoring/grafana-dashboard.png" 
              alt="Kubernetes Cluster Overview Dashboard"
              width={1100}
              height={500}
              className="dashboard-image"
            />
            <p className="image-caption">Kubernetes Cluster Overview and Resource Utilization Dashboard</p>
          </div>
          <div className="dashboard-item">
            <Image 
              src="/images/monitoring/grafana-dashboard2.png" 
              alt="Application Performance Dashboard"
              width={1100}
              height={500}
              className="dashboard-image"
            />
            <p className="image-caption">Pods Health and Application Metrics Dashboard</p>
          </div>
        </div>

        <h2>Proactive Alerting</h2>
        <p>
          Alerting is configured through Prometheus Alertmanager, which proactively sends notifications 
          to email and Slack channels when thresholds or anomalies are detected.
        </p>
        
        <div className="alert-grid">
          <div className="alert-item">
            <Image 
              src="/images/monitoring/prom-email-msg.png" 
              alt="Email Alert Notifications"
              width={1000}
              height={600}
              className="alert-image"
            />
            <p className="image-caption">Email Alert Notifications</p>
          </div>
          <div className="alert-item">
            <Image 
              src="/images/monitoring/prom-slack-msg.png" 
              alt="Slack Channel Alerts"
              width={1000}
              height={400}
              className="alert-image"
            />
            <p className="image-caption">Slack Channel Alerts</p>
          </div>
        </div>

        <div className="alert alert-info">
          <strong>Setup Guide:</strong> For detailed configuration instructions, check out the{' '}
          <Link href="/setup/prometheus-grafana" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '600' }}>
            Prometheus & Grafana Setup
          </Link>{' '}
          and{' '}
          <Link href="/setup/alertmanager" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '600' }}>
            Alertmanager Setup
          </Link>{' '}
          guides.
        </div>
      </div>
    </div>
  )
}