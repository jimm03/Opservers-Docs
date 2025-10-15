export default function SplunkSetup() {
  return (
    <div>
      <div className="card">
        <h1>Splunk Setup</h1>
        <p>
          Configuration guide for Splunk Enterprise for centralized logging and analysis.
        </p>

        <h2>Installation</h2>
        <div className="code-block">
          {`# Download Splunk Enterprise
wget -O splunk.tgz https://download.splunk.com/products/splunk/releases/9.0.4/linux/splunk-9.0.4-de405f4a7979-Linux-x86_64.tgz
tar -xzf splunk.tgz
cd splunk/bin
./splunk start --accept-license`}
        </div>

        <h2>Configuration</h2>
        <ul className="bullet-list">
          <li>Configure data inputs for log collection</li>
          <li>Set up forwarders for application logs</li>
          <li>Configure indexes and retention policies</li>
          <li>Set up user authentication</li>
          <li>Create dashboards and alerts</li>
        </ul>

        <h2>Forwarder Configuration</h2>
        <div className="code-block">
          {`[monitor:///var/log/application/*.log]
sourcetype = access_combined
index = main`}
        </div>
      </div>
    </div>
  )
}