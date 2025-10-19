import Image from 'next/image'

export default function LoggingWorkflow() {
  return (
    <div>
      <div className="card">
        <h1>Logging Workflow</h1>
        <p>
          Describes how application logs are collected and transmitted to Splunk through the HTTP Event Collector (HEC), 
  where they are indexed, analyzed, and visualized for real-time monitoring, troubleshooting, and alerting.
        </p>

        <h2>Architecture Overview</h2>
        <div className="image-section">
          <Image 
            src="/images/architecture/splunk-workflow.png" 
            alt="Monitoring Architecture Diagram"
            width={1100}
            height={280}
            className="architecture-image"
          />
        </div>

        <h2>Workflow Description</h2>
        <p>
          The flow starts from the web application (app.py), which generates structured logs whenever users interact with the system or errors occur. These logs are sent to Splunk HEC (HTTP Event Collector) via an HTTP POST request using the application’s HEC token and HEC URL. The HEC receives the log data securely and forwards it into Splunk’s indexing pipeline. Splunk then parses, stores, and indexes the logs, making them searchable and ready for visualizations or dashboards in the Splunk Web UI. This end-to-end process enables logs from the application to appear in Splunk in real time and be used for monitoring, troubleshooting, and reporting.
        </p>
       

       
      </div>
    </div>
  )
}