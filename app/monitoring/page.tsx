import Link from 'next/link'
import { BarChart3, AlertTriangle } from 'lucide-react'

export default function Monitoring() {
  return (
    <div>
      <div className="card">
        <h1>Monitoring & Alerting</h1>
        <p>
          Comprehensive monitoring setup to ensure system reliability, performance, 
          and quick incident response.
        </p>

        <h2>Dashboard Overview</h2>
        <p>
          Our monitoring dashboard provides real-time insights into system performance, 
          application metrics, and business KPIs.
        </p>

        <h3>Application Metrics Dashboard</h3>
        <p>Real-time application performance and health metrics:</p>
        
        <div className="image-placeholder">
          <BarChart3 size={48} color="#009267" />
          <h3>Application Metrics Dashboard</h3>
          <p>Replace with your Grafana/Prometheus dashboard screenshot</p>
          <p style={{ fontSize: '0.875rem' }}>
            Shows: Request rate, error rate, response times, resource utilization
          </p>
        </div>

        <h3>Infrastructure Monitoring</h3>
        <p>Server and infrastructure health monitoring:</p>
        
        <div className="image-placeholder">
          <BarChart3 size={48} color="#009267" />
          <h3>Infrastructure Dashboard</h3>
          <p>Replace with your infrastructure monitoring screenshot</p>
          <p style={{ fontSize: '0.875rem' }}>
            Shows: CPU, memory, disk, network, and service status
          </p>
        </div>

        <h3>Business Metrics</h3>
        <p>Key business and user activity metrics:</p>
        
        <div className="image-placeholder">
          <BarChart3 size={48} color="#009267" />
          <h3>Business Metrics Dashboard</h3>
          <p>Replace with your business metrics dashboard screenshot</p>
          <p style={{ fontSize: '0.875rem' }}>
            Shows: User activity, conversion rates, revenue metrics
          </p>
        </div>

        <h2>Alerting Rules</h2>
        <div className="code-block">
          {`Critical Alerts:
• Error rate > 5% for 5 minutes
• P95 response time > 2 seconds  
• Service downtime detected
• CPU utilization > 90% for 5 minutes
• Memory usage > 90% for 5 minutes
• Disk usage > 90%

Warning Alerts:
• Error rate > 2% for 10 minutes
• P95 response time > 1 second
• CPU utilization > 80% for 10 minutes
• Memory usage > 85% for 10 minutes`}
        </div>

        <h2>Monitoring Tools</h2>
        <ul className="bullet-list">
          <li><strong>Prometheus:</strong> Metrics collection and storage</li>
          <li><strong>Grafana:</strong> Dashboard visualization</li>
          <li><strong>Alertmanager:</strong> Alert routing and management</li>
          <li><strong>Loki:</strong> Log aggregation</li>
          <li><strong>Tempo:</strong> Distributed tracing</li>
          <li><strong>Blackbox exporter:</strong> Uptime monitoring</li>
        </ul>

        <h2>Incident Response</h2>
        <p>
          When alerts trigger, follow the corresponding runbook in the{' '}
          <Link href="/runbooks" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>
            Runbooks
          </Link>{' '}
          section for step-by-step resolution procedures.
        </p>

        <div className="alert alert-info">
          <strong>Pro Tip:</strong> Regular review of monitoring dashboards helps identify 
          potential issues before they become critical incidents.
        </div>
      </div>
    </div>
  )
}