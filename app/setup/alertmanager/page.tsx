export default function AlertmanagerSetup() {
  return (
    <div>
      <div className="card">
        <h1>Alertmanager Setup</h1>
        <p>
          Configuration guide for Alertmanager to handle alert routing and notifications via email and Slack.
        </p>

        <h2>Prerequisites</h2>
        <ul className="bullet-list">
          <li>K8s infrastructure where workloads will run</li>
          <li>Cloning our github repository: https://github.com/opswerks-academy/i9c-observability.git</li>
        </ul>

        <h2>Step 1: Create Prometheus Rules if alerts are not created yet</h2>
        <p>Add Prometheus Rules for alerts by applying this <a href="https://github.com/opswerks-academy/i9c-observability/blob/main/k8s/infra/prometheus/prometheus-alerts.yaml" target="_blank" rel="noopener noreferrer"><code>values.yaml</code></a> </p>
         <p>Then apply it:</p>
        <div className="code-block">
          {`kubectl apply -f prometheus-alerts.yaml`}
        </div>

        <h2>Step 2: Create your Alertmanager config</h2>
        <p>Create a file called <a href="https://github.com/opswerks-academy/i9c-observability/blob/main/k8s/infra/alertmanager/alertmanager-config.yaml" target="_blank" rel="noopener noreferrer"><code>alertmanager-config.yaml</code></a>
          </p>
          <p>Then apply it:</p>
        <div className="code-block">
          {`kubectl apply -f alertmanager-config.yaml`}
        </div>

        <h2>Step 3: Create the Secret manifest</h2>
        <p>Create another file called <a href="https://github.com/opswerks-academy/i9c-observability/blob/main/k8s/infra/alertmanager/alertmanager-secret.yaml" target="_blank" rel="noopener noreferrer"><code>alertmanager-secret.yaml</code></a>

          </p>

        <p>Then apply it:</p>
        <div className="code-block">
          {`kubectl apply -f alertmanager-secret.yaml`}
        </div>

        <h3>How to generate Gmail App Password</h3>
        <div className="alert alert-warning">
          <strong>⚠️ Note:</strong> You need to do this, because Gmail won&apos;t allow your actual password to be used by apps like Alertmanager.
        </div>
        <ol className="bullet-list">
          <li>Go to https://myaccount.google.com/apppasswords</li>
          <li>Under&nbsp;<strong> &quot;Select app&quot;</strong>, choose&nbsp;<strong> Other (Custom name)</strong></li>
          <li>Type Name you want to generate and click&nbsp;<strong>Generate</strong></li>
          <li>Copy the 16-character password shown (like&nbsp;<code>abcd efgh ijkl mnop</code>)</li>
        </ol>
        <p>This is your <code>smtp_auth_password</code></p>

        <h3>How to Get Your Slack Webhook URL</h3>
        
        <h4>1. Go to the Slack App Directory</h4>
        <p>In your browser, visit: https://api.slack.com/apps</p>
        <p>Make sure you&apos;re <strong>logged in</strong> to your Slack workspace.</p>

        <h4>2. Click &quot;Create New App&quot;</h4>
        <ul className="bullet-list">
          <li>Choose <strong>&quot;From scratch&quot;</strong></li>
          <li>Give it a name (e.g. <code>Prometheus Alertmanager</code>)</li>
          <li>Choose the&nbsp;<strong>workspace</strong>&nbsp;you want to send alerts to</li>
          <li>Click&nbsp;<strong>Create App</strong></li>
        </ul>

        <h4>3. Enable Incoming Webhooks</h4>
        <ul className="bullet-list">
          <li>In the left sidebar, click&nbsp;<strong>&quot;Incoming Webhooks&quot;</strong></li>
          <li>Turn&nbsp;<strong>ON</strong>&nbsp;the toggle that says <strong>&nbsp;&quot;Activate Incoming Webhooks&quot;</strong></li>
        </ul>

        <h4>4. Add a Webhook to Your Workspace</h4>
        <p>Scroll down and click: <strong>&quot;Add New Webhook to Workspace&quot;</strong></p>
        <p>Then:</p>
        <ul className="bullet-list">
          <li>Choose which&nbsp;<strong>channel</strong>&nbsp;(e.g. <code>#all-opservers</code>) should receive the alerts</li>
          <li>Click&nbsp;<strong>Allow</strong></li>
        </ul>

        <h4>5. Copy the Webhook URL</h4>
        <p>After allowing it, you&apos;ll see a section like this:</p>
        <div className="code-block">
          {`Webhook URL
https://hooks.slack.com/services/T07ABCD12/B08XYZ34/abcd1234efgh5678ijkl91011`}
        </div>
        <p>That&apos;s your <strong>real Slack API URL</strong></p>
        <p>Use that in your Alertmanager config:</p>
        <div className="code-block">
          {`slack_api_url: "https://hooks.slack.com/services/T07ABCD12/B08XYZ34/abcd1234efgh5678ijkl91011"`}
        </div>

        <h2>Step 4: Tell Alertmanager to use this Secret</h2>
        <p>Now check if your Alertmanager (from Helm) already references a config Secret.</p>
        <p>Run:</p>
        <div className="code-block">
          {`kubectl get alertmanager -n monitoring`}
        </div>

        <p>If it shows something like:</p>
        <pre className="code-block">
          {`NAME                                 VERSION   REPLICAS   READY   RECONCILED   AVAILABLE 
kube-prometheus-stack-alertmanager   v0.28.1   1          1       True         True`}
        </pre>

        <p>then edit that Alertmanager CRD to point to your Secret:</p>
        <pre className="code-block">
          {`kubectl patch alertmanager kube-prometheus-stack-alertmanager \\
  -n monitoring \\
  --type='merge' \\
  -p '{"spec":{"configSecret":"alertmanager-config"}}'`}
        </pre>

        <h2>Step 5: Verify it&apos;s applied</h2>
        <p>Run:</p>
        <div className="code-block">
          {`kubectl get alertmanager -n monitoring -o yaml | grep configSecret`}
        </div>

        <p>You should see:</p>
        <div className="code-block">
          {`configSecret: alertmanager-config`}
        </div>
      </div>
    </div>
  )
}