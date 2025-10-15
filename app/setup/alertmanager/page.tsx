export default function AlertmanagerSetup() {
  return (
    <div>
      <div className="card">
        <h1>Alertmanager Setup</h1>
        <p>
          Configuration guide for Alertmanager to handle alert routing and notifications.
        </p>

        <h2>Installation</h2>
        <div className="code-block">
          {`# Download Alertmanager
wget https://github.com/prometheus/alertmanager/releases/download/v0.25.0/alertmanager-0.25.0.linux-amd64.tar.gz
tar xvfz alertmanager-0.25.0.linux-amd64.tar.gz
cd alertmanager-0.25.0.linux-amd64
./alertmanager --config.file=alertmanager.yml`}
        </div>

        <h2>Configuration</h2>
        <div className="code-block">
          {`global:
  smtp_smarthost: 'localhost:25'
  smtp_from: 'alertmanager@example.com'

route:
  group_by: ['alertname']
  group_wait: 10s
  group_interval: 10s
  repeat_interval: 1h
  receiver: 'web.hook'

receivers:
  - name: 'web.hook'
    webhook_configs:
      - url: 'http://127.0.0.1:5001/'`}
        </div>

        <h2>Integration</h2>
        <ul className="bullet-list">
          <li>Configure Prometheus to use Alertmanager</li>
          <li>Set up notification channels (Slack, Email, PagerDuty)</li>
          <li>Create routing rules for different teams</li>
          <li>Configure silencing and inhibition rules</li>
        </ul>
      </div>
    </div>
  )
}