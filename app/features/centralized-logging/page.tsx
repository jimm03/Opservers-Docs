import Link from 'next/link'
import Image from 'next/image'

export default function CentralizedLogging() {
  return (
    <div>
      <div className="card">
        <h1>Centralized Logging & Analysis</h1>
        <p>
          Log collection, processing, and analysis platform that provides deep insights 
          into application behavior.
        </p>

        <h2>Comprehensive Log Management</h2>
        <p>
          Splunk Enterprise provides log collection from the applicatio enabling real-time search, analysis, and visualization of log data.
        </p>

        <h3>Application Monitoring Dashboards</h3>
        
        <div className="dashboard-grid-4">
          <div className="dashboard-item">
            <Image 
              src="/images/logging/splunk-app-availability.png" 
              alt="Application Availability Dashboard"
              width={1100}
              height={500}
              className="dashboard-image"
            />
            <p className="image-caption"><strong>App Availability:</strong> Monitors overall app availability and HTTP status distribution to ensure the application stays reliably accessible.</p>
          </div>
          <div className="dashboard-item">
            <Image 
              src="/images/logging/splunk-app-performance.png" 
              alt="Application Performance Dashboard"
              width={1100}
              height={500}
              className="dashboard-image"
            />
            <p className="image-caption"><strong>App Performance:</strong> Measures request latency to assess and maintain optimal application performance.</p>
          </div>
          <div className="dashboard-item">
            <Image 
              src="/images/logging/splunk-app-traffic.png" 
              alt="Application Traffic Dashboard"
              width={1100}
              height={500}
              className="dashboard-image"
            />
            <p className="image-caption"><strong>App Traffic:</strong> Analyze traffic patterns, request volumes, to understand application usage.</p>
          </div>
          <div className="dashboard-item">
            <Image 
              src="/images/logging/splunk-app-errors.png" 
              alt="Application Errors Dashboard"
              width={1100}
              height={500}
              className="dashboard-image"
            />
            <p className="image-caption"><strong>App Errors:</strong> Tracks the frequency and types of errors to quickly detect spikes or patterns affecting system stability.</p>
          </div>
        </div>

        <h2>Proactive Log-Based Alerting</h2>
        <p>
          Splunk alerting monitors log patterns in real-time and proactively sends notifications 
          when specific error patterns, security events, or performance issues are detected.
        </p>

        <div className="alert-grid">
          <div className="alert-item">
            <Image 
              src="/images/logging/splunk-email-alert.png" 
              alt="Splunk Email Alert Notifications"
              width={1100}
              height={550}
              className="alert-image"
            />
            <p className="image-caption"><strong>Email Alerts:</strong> Detailed email notifications with comprehensive error context, timestamps, and direct links to relevant dashboards for immediate investigation.</p>
          </div>
          <div className="alert-item">
            <Image 
              src="/images/logging/splunk-slack-alert.png" 
              alt="Splunk Slack Channel Alerts"
              width={1100}
              height={550}
              className="alert-image"
            />
            <p className="image-caption"><strong>Slack Alerts:</strong> Real-time Slack notifications with severity indicators, quick action buttons, and formatted error details for team collaboration.</p>
          </div>
        </div>

        <div className="alert alert-info">
          <strong>Setup Guide:</strong> For detailed configuration instructions, check out the{' '}
          <Link href="/setup/splunk" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '600' }}>
            Splunk Setup
          </Link>{' '}
          guide.
        </div>
      </div>
    </div>
  )
}