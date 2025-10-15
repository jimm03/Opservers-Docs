export default function MonitoringAlerting() {
  return (
    <div>
      <div className="card">
        <h1>Monitoring & Alerting</h1>
        <p>
          Comprehensive monitoring of system metrics, application performance, and business KPIs 
          with intelligent alerting to ensure quick incident response.
        </p>

        <h2>Monitoring Capabilities</h2>
        <ul className="bullet-list">
          <li><strong>Infrastructure Monitoring:</strong> CPU, memory, disk, network metrics</li>
          <li><strong>Application Performance:</strong> Response times, error rates, throughput</li>
          <li><strong>Business Metrics:</strong> User activity, conversion rates, revenue</li>
          <li><strong>Synthetic Monitoring:</strong> Uptime checks from multiple locations</li>
          <li><strong>Real User Monitoring:</strong> Actual user experience metrics</li>
        </ul>

        <h2>Alerting Features</h2>
        <ul className="bullet-list">
          <li>Multi-level alert severity (Critical, Warning, Info)</li>
          <li>Intelligent alert grouping and deduplication</li>
          <li>Flexible notification channels (Slack, Email, PagerDuty)</li>
          <li>Alert dependencies and correlation</li>
          <li>Automated escalation policies</li>
        </ul>

        <h2>Tools & Technologies</h2>
        <div className="code-block">
          {`Primary Stack:
• Prometheus - Metrics collection and storage
• Grafana - Visualization and dashboards
• Alertmanager - Alert routing and management
• Blackbox Exporter - Uptime monitoring
• Node Exporter - System metrics`}
        </div>
      </div>
    </div>
  )
}