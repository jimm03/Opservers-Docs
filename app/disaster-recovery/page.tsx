export default function DisasterRecovery() {
  return (
    <div>
      <div className="card">
        <h1>Disaster Recovery Plan</h1>
        <p>
          Comprehensive disaster recovery plan to ensure business continuity and data protection 
          in the event of major system failures or catastrophic events.
        </p>

        <h2>Recovery Objectives</h2>
        <ul className="bullet-list">
          <li><strong>RTO (Recovery Time Objective):</strong> 4 hours for critical systems</li>
          <li><strong>RPO (Recovery Point Objective):</strong> 15 minutes for critical data</li>
          <li><strong>Availability Target:</strong> 99.9% for all production systems</li>
        </ul>

        <h2>Recovery Procedures</h2>
        
        <h3>1. Data Center Failure</h3>
        <div className="code-block">
          {`• Activate disaster recovery site
• Restore from latest backups
• Update DNS records
• Validate system functionality
• Communicate status to stakeholders`}
        </div>

        <h3>2. Database Corruption</h3>
        <div className="code-block">
          {`• Isolate affected database
• Restore from point-in-time backup
• Replay transaction logs
• Validate data integrity
• Resume normal operations`}
        </div>

        <h3>3. Security Breach</h3>
        <div className="code-block">
          {`• Isolate compromised systems
• Preserve evidence for investigation
• Restore clean systems from backups
• Rotate all credentials and certificates
• Conduct security assessment`}
        </div>

        <h2>Backup Strategy</h2>
        <ul className="bullet-list">
          <li><strong>Database Backups:</strong> Hourly incremental, daily full backups</li>
          <li><strong>Configuration Backups:</strong> Real-time configuration versioning</li>
          <li><strong>Application Backups:</strong> Daily application state backups</li>
          <li><strong>Cross-Region Replication:</strong> Real-time data replication to DR site</li>
        </ul>

        <h2>Testing Schedule</h2>
        <ul className="bullet-list">
          <li><strong>Monthly:</strong> Backup restoration tests</li>
          <li><strong>Quarterly:</strong> Full DR drill</li>
          <li><strong>Annually:</strong> Comprehensive DR exercise</li>
        </ul>

        <div className="alert alert-warning">
          <strong>Critical:</strong> This plan must be reviewed and updated quarterly to ensure 
          it remains effective and aligned with business requirements.
        </div>
      </div>
    </div>
  )
}