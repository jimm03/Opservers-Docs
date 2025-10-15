export default function CentralizedLogging() {
  return (
    <div>
      <div className="card">
        <h1>Centralized Logging & Analysis</h1>
        <p>
          Unified log collection, processing, and analysis platform that provides deep insights 
          into application behavior and system performance.
        </p>

        <h2>Log Management Features</h2>
        <ul className="bullet-list">
          <li><strong>Centralized Collection:</strong> Logs from all applications and infrastructure</li>
          <li><strong>Real-time Processing:</strong> Immediate log ingestion and parsing</li>
          <li><strong>Powerful Search:</strong> Fast, flexible search across all log data</li>
          <li><strong>Visual Analysis:</strong> Dashboards and visualizations for log patterns</li>
          <li><strong>Alerting:</strong> Proactive alerts based on log patterns</li>
        </ul>

        <h2>Use Cases</h2>
        <ul className="bullet-list">
          <li><strong>Debugging:</strong> Quickly identify and resolve application issues</li>
          <li><strong>Security:</strong> Detect and investigate security incidents</li>
          <li><strong>Performance:</strong> Analyze system performance and bottlenecks</li>
          <li><strong>Compliance:</strong> Meet regulatory and audit requirements</li>
          <li><strong>Business Intelligence:</strong> Gain insights from application usage</li>
        </ul>

        <h2>Technology Stack</h2>
        <div className="code-block">
          {`Logging Infrastructure:
• Splunk Enterprise - Log collection and analysis
• Splunk Forwarders - Lightweight log collection agents
• Custom Parsing - Structured log processing
• Dashboards - Real-time log visualization`}
        </div>
      </div>
    </div>
  )
}