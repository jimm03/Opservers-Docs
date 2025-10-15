export default function IncidentResponseWorkflow() {
  return (
    <div>
      <div className="card">
        <h1>Incident Response Workflow</h1>
        <p>
          Detailed process flow showing what happens when alerts are triggered, from initial detection 
          through resolution and post-mortem analysis.
        </p>

        <h2>Incident Lifecycle</h2>
        <div className="code-block">
          {`Alert Triggered → Triage & Acknowledge → Investigation → Mitigation → Resolution → Post-Mortem → Process Improvement`}
        </div>

        <h2>Response Stages</h2>
        
        <h3>1. Detection & Triage</h3>
        <ul className="bullet-list">
          <li>Alert triggered from monitoring system</li>
          <li>On-call engineer acknowledges incident</li>
          <li>Initial assessment of severity and impact</li>
          <li>Communication to stakeholders initiated</li>
        </ul>

        <h3>2. Investigation & Diagnosis</h3>
        <ul className="bullet-list">
          <li>Gather logs, metrics, and traces</li>
          <li>Identify root cause and scope</li>
          <li>Engage subject matter experts if needed</li>
          <li>Update stakeholders on progress</li>
        </ul>

        <h3>3. Mitigation & Resolution</h3>
        <ul className="bullet-list">
          <li>Implement short-term fixes to restore service</li>
          <li>Apply long-term solutions</li>
          <li>Verify resolution through monitoring</li>
          <li>Communicate resolution to stakeholders</li>
        </ul>

        <h3>4. Post-Incident Process</h3>
        <ul className="bullet-list">
          <li>Conduct post-mortem analysis</li>
          <li>Document lessons learned</li>
          <li>Update runbooks and procedures</li>
          <li>Implement preventive measures</li>
        </ul>

        <div className="alert alert-warning">
          <strong>Important:</strong> All incidents must be documented in our incident management 
          system with full timeline and root cause analysis.
        </div>
      </div>
    </div>
  )
}