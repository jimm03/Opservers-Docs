export default function LoggingWorkflow() {
  return (
    <div>
      <div className="card">
        <h1>Logging Workflow</h1>
        <p>
          Shows how application logs are collected, processed, and analyzed through our centralized 
          logging infrastructure using Splunk.
        </p>

        <h2>Log Flow</h2>
        <div className="code-block">
          {`Application Logs → Filebeat/Splunk Forwarder → Splunk Indexers → Splunk Search Heads → Dashboards & Alerts`}
        </div>

        <h2>Components</h2>
        <ul className="bullet-list">
          <li><strong>Application Logs:</strong> Structured JSON logs from microservices</li>
          <li><strong>Splunk Forwarders:</strong> Lightweight agents that collect and forward logs</li>
          <li><strong>Splunk Indexers:</strong> Parse and index log data for searching</li>
          <li><strong>Search Heads:</strong> Provide search and reporting capabilities</li>
        </ul>

        <h2>Processing Steps</h2>
        <ul className="bullet-list">
          <li>Log collection from application containers and hosts</li>
          <li>Parsing and enrichment of log events</li>
          <li>Indexing for fast search and analysis</li>
          <li>Correlation with metrics and traces</li>
          <li>Alerting on log patterns and errors</li>
        </ul>

        <h2>Use Cases</h2>
        <ul className="bullet-list">
          <li>Debugging application issues</li>
          <li>Security incident investigation</li>
          <li>Performance analysis</li>
          <li>Compliance reporting</li>
          <li>Business intelligence</li>
        </ul>
      </div>
    </div>
  )
}