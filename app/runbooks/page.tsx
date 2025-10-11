export default function Runbooks() {
  return (
    <div>
      <div className="card">
        <h1>Incident Runbooks</h1>
        <p>
          Standard operating procedures for handling common incidents and emergencies. 
          Follow these steps systematically to resolve issues quickly and effectively.
        </p>

        <h2>Critical Incident Procedures</h2>
        
        <h3>High Error Rate</h3>
        <div className="code-block">
          {`1. 🔍 INVESTIGATE
   • Check application logs for recent errors
   • Review error patterns and frequency
   • Identify affected services/components

2. 🛠️  MITIGATE
   • Check database connection pool status
   • Verify external API dependencies
   • Review recent deployments/changes

3. 🚨 ESCALATE
   • Notify team lead if unresolved in 15min
   • Consider rolling back recent changes
   • Scale application instances if needed

4. ✅ RESOLVE
   • Apply fix and verify resolution
   • Update monitoring if needed
   • Document incident and lessons learned`}
        </div>

        <h3>Database Performance Issues</h3>
        <div className="code-block">
          {`1. 🔍 INVESTIGATE
   • Check database connection count
   • Monitor slow query logs
   • Verify index usage and performance

2. 🛠️  MITIGATE
   • Kill long-running queries if safe
   • Add missing indexes
   • Clear connection pool if needed

3. 🚨 ESCALATE
   • Contact DBA if complex issues
   • Consider read replica promotion
   • Check storage capacity and I/O

4. ✅ RESOLVE
   • Optimize problematic queries
   • Update database configuration
   • Add monitoring for caught issues`}
        </div>

        <h3>Service Outage</h3>
        <div className="code-block">
          {`1. 🔍 INVESTIGATE
   • Verify load balancer health checks
   • Check application health endpoints
   • Review infrastructure metrics

2. 🛠️  MITIGATE
   • Restart unhealthy services
   • Check for regional outages
   • Verify DNS and network connectivity

3. 🚨 ESCALATE
   • Initiate failover procedures
   • Contact infrastructure team
   • Consider disaster recovery plan

4. ✅ RESOLVE
   • Restore service functionality
   • Conduct post-mortem analysis
   • Update runbooks with new learnings`}
        </div>

        <h2>Communication Protocol</h2>
        <ul className="bullet-list">
          <li><strong>Immediate:</strong> Acknowledge incident in #incidents channel</li>
          <li><strong>15 minutes:</strong> Provide initial assessment and ETA</li>
          <li><strong>30 minutes:</strong> Escalate to secondary on-call if needed</li>
          <li><strong>1 hour:</strong> Escalate to engineering manager</li>
          <li><strong>Post-resolution:</strong> Share incident summary and timeline</li>
        </ul>

        <h2>Emergency Contacts</h2>
        <div className="code-block">
          {`Primary On-call:    [Name] - @slack - +1-555-0100
Secondary:        [Name] - @slack - +1-555-0101  
Infrastructure:   #infra-team - +1-555-0102
Management:       [EM Name] - @slack - +1-555-0103

Slack Channels:
• #incidents      - Incident coordination
• #infra-alerts   - Infrastructure issues
• #devops         - General DevOps discussion`}
        </div>

        <div className="alert alert-warning">
          <strong>Important:</strong> Always document incidents in our incident management 
          system with full timeline, root cause analysis, and action items.
        </div>
      </div>
    </div>
  )
}