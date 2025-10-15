export default function SplunkSetup() {
  return (
    <div>
      <div className="card">
        <h1>Splunk Setup</h1>
        <p>
          Complete setup for Splunk Enterprise using the Splunk Operator in Kubernetes Cluster.
        </p>

        <h2>Prerequisites</h2>
        <ul className="bullet-list">
          <li>K8s infrastructure where workloads will run</li>
          <li>Cloning our github repository: https://github.com/opswerks-academy/i9c-observability.git</li>
        </ul>

        <h2>1. Installing the Splunk Operator</h2>
        <p>Install and start the Splunk Operator for specific namespace by running:</p>
        <div className="code-block">
          {`kubectl apply -f https://github.com/splunk/splunk-operator/releases/download/3.0.0/splunk-operator-namespace.yaml --server-side`}
        </div>

        <p>After the Splunk Operator starts, you&apos;ll see a single pod running within your current namespace:</p>
        <pre className="code-block">
          {`$ kubectl get pods -n splunk-operator
NAME                               READY   STATUS    RESTARTS   AGE
splunk-operator-75f5d4d85b-8pshn   1/1     Running   0          5s`}
        </pre>

        <p><strong>Edit the deployment using <code>kubectl edit</code>:</strong></p>
        <div className="code-block">
          {`kubectl edit deployment splunk-operator-controller-manager -n splunk-operator`}
        </div>

        <h2>2. Configure Splunk Operator to Accept the Splunk General Terms</h2>
        <p>By default, the SPLUNK_GENERAL_TERMS environment variable will be set to an empty string. You must either manually update it to have the required additional value&nbsp;<code>--accept-sgt-current-at-splunk-com</code>&nbsp;in the splunk-operator-controller-manager deployment. </p>
        
        <pre className="code-block">
{`...
        - name: SPLUNK_GENERAL_TERMS
          value: "--accept-sgt-current-at-splunk-com"
...`}
        </pre>

        <h2>3. Creating a Splunk Enterprise deployment</h2>
        <p>The&nbsp;<code>Standalone</code>&nbsp;custom resource is used to create a single instance deployment of Splunk Enterprise.</p>
        
        <p><strong>Run the command to create a deployment named &quot;s1&quot;:</strong></p>
        <pre className="code-block">
{`cat <<EOF | kubectl apply -n splunk-operator -f -
apiVersion: enterprise.splunk.com/v4
kind: Standalone
metadata:
  name: s1
  finalizers:
  - enterprise.splunk.com/delete-pvc
EOF`}
        </pre>

        <p><strong>The&nbsp;<code>enterprise.splunk.com/delete-pvc</code>&nbsp;finalizer is optional, and tells the Splunk Operator to remove any Kubernetes&nbsp;<a href="https://kubernetes.io/docs/concepts/storage/persistent-volumes/" target="_blank" rel="noopener noreferrer">Persistent Volumes</a>&nbsp;associated with the instance if you delete the custom resource(CR).</strong></p>

        <div className="alert alert-warning">
          <strong>WAIT FOR A COUPLE OF MINUTES! BEFORE PROCEEDING TO THE NEXT STEP.</strong>
        </div>

        <p>Within a few minutes, you&apos;ll see new pods running in your namespace:</p>
        <pre className="code-block">
          {`$ kubectl get pods -n splunk-operator
NAME                                   READY   STATUS    RESTARTS   AGE
splunk-operator-7c5599546c-wt4xl        1/1    Running   0          11h
splunk-s1-standalone-0                  1/1    Running   0          45s`}
        </pre>

        <h2>4. Get Standalone Splunk instance password</h2>
        <p><strong>username: admin</strong></p>
        
        <p>For the password, after running standalone, run this command:</p>
        <div className="code-block">
          {`kubectl get secret splunk-s1-standalone-secret-v1 -n splunk-operator -o go-template=' {{range $k,$v := .data}}{{printf "%s: " $k}}{{if not $v}}{{$v}}{{else}}{{$v| base64decode}}{{end}}{{"\\n"}}{{end}}'`}
        </div>

        <h2>5. Create a Nodeport service</h2>
        <p>Create a Nodeport service to expose <code>splunk-s1-standalone-0</code> to port 30906.</p>
        
        <p>Create a file called <a href="https://github.com/opswerks-academy/i9c-observability/blob/main/k8s/infra/splunk/splunk-web-service.yml" target="_blank" rel="noopener noreferrer"><code>splunk-web-service.yml</code></a>:</p>

        <p>Then apply and check your splunk enterprise:</p>
        <div className="code-block">
          {`kubectl apply -f splunk-web-service.yml`}
        </div>

        <h2>Accessing Splunk</h2>
        <p>Access Splunk Enterprise at:</p>
        <div className="code-block">
          {`http://<any-node-ip>:30906/`}
        </div>
        <p><strong>Username:</strong> admin</p>
        <p><strong>Password:</strong> Use the password obtained from the secret command above</p>
      </div>
    </div>
  )
}