import Link from 'next/link'

export default function MonitoringWorkflow() {
  return (
    <div>
      <div className="card">
        <h1>Monitoring Workflow</h1>
        <p>
          Explains how Prometheus gathers metrics from various services and triggers alerts 
          through Alertmanager when thresholds are breached.
        </p>

        <h2>Data Flow</h2>
        <div className="code-block">
          {`Application Metrics → Prometheus Scraping → Rule Evaluation → Alert Generation → Alertmanager → Notification Channels`}
        </div>

        <h2>Metrics Collection</h2>
        <ul className="bullet-list">
          <li><strong>Prometheus Server:</strong> Scrapes metrics from instrumented jobs</li>
          <li><strong>Exporters:</strong> Bridge for third-party system metrics</li>
          <li><strong>Service Discovery:</strong> Automatically finds targets to monitor</li>
          <li><strong>Time Series Database:</strong> Stores collected metrics</li>
        </ul>

        <h2>Alert Processing</h2>
        <ul className="bullet-list">
          <li>Prometheus evaluates alerting rules continuously</li>
          <li>Firing alerts are sent to Alertmanager</li>
          <li>Alertmanager handles deduplication, grouping, and routing</li>
          <li>Notifications are sent to appropriate channels (Slack, Email, PagerDuty)</li>
        </ul>

        <div className="alert alert-info">
          <strong>Next Step:</strong> When alerts trigger, follow the{' '}
          <Link href="/workflow/incident-response-workflow" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '600' }}>
            Incident Response Workflow
          </Link>{' '}
          for resolution procedures.
        </div>
      </div>
    </div>
  )
}