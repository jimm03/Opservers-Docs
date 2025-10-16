import Image from 'next/image'

export default function JenkinsSetup() {
  return (
    <div>
      <div className="card">
        <h1>Jenkins Setup</h1>
        <p>
          Complete guide to set up and configure Jenkins for continuous integration and deployment in Kubernetes.
        </p>

        <h2>Prerequisites</h2>
        <ul className="bullet-list">
          <li>K8s infrastructure where workloads will run</li>
          <li>Cloning our github repository: https://github.com/opswerks-academy/i9c-observability.git</li>
        </ul>

        {/* Section 1: Setting Up Jenkins */}
        <section>
          <h2>Setting Up Jenkins</h2>
          <hr />
          <p>This section provides a step-by-step guide to deploying a Jenkins instance that serves as the automation server for building, and deploying projects.</p>
        
          <h3>1. Deploy Jenkins Persistent Volume Claim</h3>
          <div className="code-block">
            {`kubectl apply -f ~/i9c-observability/k8s/infra/linode-storage/jenkins-pvc.yml`}
          </div>

          <h3>2. Deploy Jenkins — Namespace, Deployment, Service</h3>
          <pre className="code-block">
            {`kubectl apply -f ~/i9c-observability/k8s/infra/jenkins/jenkins-namespace.yml
kubectl apply -f ~/i9c-observability/k8s/infra/jenkins/jenkins-deployment.yml
kubectl apply -f ~/i9c-observability/k8s/infra/jenkins/jenkins-service.yml`}
          </pre>
        </section>

        {/* Section 2: Access Jenkins UI */}
        <section>
          <h2>Access Jenkins UI</h2>
          <hr />
          <p>This section provides a step-by-step guide to accessing the Jenkins UI through a web browser to configure jobs, pipelines, and manage the automation server.</p>
          <p><em>— Visit using a web browser: <code>http://&lt;external-ip&gt;:&lt;port&gt;</code></em></p>

          <h3>1. List the services in the jenkins namespace</h3>
          <pre className="code-block">
            {`kubectl get svc -n jenkins

# e.g. output
NAME           TYPE           CLUSTER-IP       EXTERNAL-IP     PORT(S)          AGE
jenkins-http   LoadBalancer   10.128.134.213   172.104.38.24   8080:31994/TCP   3s`}
          </pre>

          <h3>2. Identify the jenkins-http service from the output, then visit it in a web browser</h3>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-http-service.png" 
              alt="Jenkins HTTP Service"
              width={1000}
              height={200}
              className="image-placeholder"
            />
          </div>
        </section>

        {/* Section 3: Setting Up Jenkins Administrator Account */}
        <section>
          <h2>Setting Up Jenkins Administrator Account</h2>
          <hr />
          <p>This section provides a step-by-step guide to setting up the Jenkins administrator account using the initial admin credentials to unlock Jenkins and create a new administrator user.</p>

          <h3>1. Retrieve the Initial Admin Password</h3>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-unlock.png" 
              alt="Jenkins Unlock Screen"
              width={1000}
              height={500}
              className="image-placeholder"
            />
          </div>

          <h4>List the pods in the jenkins namespace</h4>
          <pre className="code-block">
            {`kubectl get pods -n jenkins

# e.g output
NAME                              READY   STATUS    RESTARTS   AGE
jenkins-deploy-6c5d8fb7b8-vbx5q   1/1     Running   0          16m`}
          </pre>

          <h4>Identify the jenkins pod name from the output, then fetch its logs</h4>
          <pre className="code-block">
            {`kubectl logs <jenkins-deploy-pod-name> -n jenkins

# e.g output
kubectl logs jenkins-deploy-6c5d8fb7b8-vbx5q -n jenkins

*************************************************************
*************************************************************
*************************************************************

Jenkins initial setup is required. An admin user has been created and a password generated.
Please use the following password to proceed to installation:

8843b3b299ca47f68b4c4bad371ad2ad

This may also be found at: /var/jenkins_home/secrets/initialAdminPassword

*************************************************************
*************************************************************
*************************************************************`}
          </pre>

          <h4>Copy and Paste the Initial Admin Password in the Jenkins UI, then click Continue</h4>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-initial-password.png" 
              alt="Jenkins Initial Password Screen"
              width={1000}
              height={800}
              className="image-placeholder"
            />
          </div>

          <h3>2. Click Installed Suggested Plugins</h3>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-suggested-plugins.png" 
              alt="Jenkins Suggested Plugins"
              width={1000}
              height={800}
              className="image-placeholder"
            />
          </div>

          <h3>3. Create First Admin User</h3>
          <p>Enter the Username, Password, Confirm Password, Full Name and Email Address, then click Save and Continue.</p>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-create-admin.png" 
              alt="Jenkins Create Admin User"
              width={1000}
              height={800}
              className="image-placeholder"
            />
          </div>

          <h3>4. Instance Configuration</h3>
          <p>Leave as it is the Instance Configuration, then click Save and Finish.</p>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-instance-configuration.png" 
              alt="Jenkins Instance Configuration"
              width={1000}
              height={800}
              className="image-placeholder"
            />
          </div>

          <h3>5. Enable Proxy Compatibility</h3>
          <p>Click Manage Jenkins → Security. Under CSRF Protection click Enable proxy compatibility.</p>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-proxy-compatibility.png" 
              alt="Jenkins Proxy Compatibility"
              width={1000}
              height={200}
              className="image-placeholder"
            />
          </div>
        </section>

        {/* Section 4: Setting Up Jenkins CI/CD */}
        <section>
          <h2>Setting Up Jenkins CI/CD</h2>
          <hr />
          <p>This section provides a step-by-step guide to implementing a CI/CD pipeline in Jenkins that automatically builds the project whenever a merge is made to the main branch.</p>
         
          <h3>1. Add Credentials</h3>
          <p>Click Manage Jenkins → Credentials. Under Stores scoped to Jenkins, click (global) → + Add Credentials:</p>

          <h4>Add New Credentials for GitHub Account, click Create</h4>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-github-cred.png" 
              alt="Jenkins GitHub Credentials"
              width={1000}
              height={600}
              className="image-placeholder"
            />
          </div>

          <h4>Add New Credentials for DockerHub Account, click Create</h4>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-dockerhub-cred.png" 
              alt="Jenkins DockerHub Credentials"
              width={1000}
              height={600}
              className="image-placeholder"
            />
          </div>

          <h4>Add New Credentials for Kubernetes Credentials, click Create</h4>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-k8s-cred.png" 
              alt="Jenkins Kubernetes Credentials"
             width={1000}
              height={600}
              className="image-placeholder"
            />
          </div>

          <h3>2. Create New Item</h3>
          <p>In the Dashboard, click +New Item.</p>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-new-item.png" 
              alt="Jenkins New Item"
              width={1000}
              height={200}
              className="image-placeholder"
            />
          </div>

          <h3>3. Configure Pipeline Item</h3>
          <p>Enter an item name and select item type pipeline, then click OK.</p>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-pipeline-item.png" 
              alt="Jenkins Pipeline Item"
              width={1000}
              height={800}
              className="image-placeholder"
            />
          </div>

          <h3>4. Enable GitHub Hook Trigger</h3>
          <p>Click Triggers Menu, then enable Github hook trigger for GITScm polling. This allows Jenkins to automatically poll the repository whenever a change is pushed to GitHub, triggering the pipeline without manual intervention.</p>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-github-trigger.png" 
              alt="Jenkins GitHub Trigger"
              width={1000}
              height={400}
              className="image-placeholder"
            />
          </div>

          <h3>5. Configure Pipeline</h3>
          <p>Click Pipeline Menu:</p>

          <h4>In the Definition dropdown menu, select Pipeline script from SCM</h4>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-pipeline-scm.png" 
              alt="Jenkins Pipeline SCM"
              width={1000}
              height={300}
              className="image-placeholder"
            />
          </div>

          <h4>In the SCM dropdown menu, select Git</h4>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-pipeline-git.png" 
              alt="Jenkins Pipeline Git"
              width={1000}
              height={300}
              className="image-placeholder"
            />
          </div>

          <h4>Enter the Repository Web URL from GitHub, and in the Credentials dropdown menu, select the GitHub Credentials created in Step 1</h4>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-pipeline-repo.png" 
              alt="Jenkins Pipeline Repository"
              width={1000}
              height={400}
              className="image-placeholder"
            />
          </div>

          <h4>In Branches to build → Branch Specifier, change */master into */main, then click Apply and Save</h4>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-pipeline-branch.png" 
              alt="Jenkins Pipeline Branch"
              width={1000}
              height={300}
              className="image-placeholder"
            />
          </div>

          <h3>6. Install Kubernetes CLI Plugin</h3>
          <p>Click Manage Jenkins → Plugins, install Kubernetes CLI Plugin.</p>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-kubernetes-cli-plugin.png" 
              alt="Jenkins Kubernetes CLI Plugin"
              width={1000}
              height={300}
              className="image-placeholder"
            />
          </div>
        </section>

        {/* Section 5: GitHub Repository Setup */}
        <section>
          <h2>GitHub Repository</h2>
          <hr />
          <p>This section provides a step-by-step guide to setting up a webhook in the GitHub repository so Jenkins can receive push notifications, enabling the GitHub hook trigger for GITScm polling to work.</p>

          <h3>1. Navigate to Settings</h3>
          <p>In the GitHub Repository, navigate to Settings menu.</p>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-github-setting.png" 
              alt="GitHub Settings"
              width={1000}
              height={250}
              className="image-placeholder"
            />
          </div>

          <h3>2. Add Webhook</h3>
          <p>In the Settings menu, click the Webhooks menu, then click Add webhook.</p>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-github-webhooks.png" 
              alt="GitHub Webhooks"
              width={1000}
              height={550}
              className="image-placeholder"
            />
          </div>

          <h3>3. Configure Webhook</h3>
          <p>In the Webhooks/Add webhook, enter your <code>&lt;jenkins-url&gt;/github-webhooks/</code>, then click Add webhook.</p>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-github-webhook-url.png" 
              alt="GitHub Webhook URL"
              width={1000}
              height={550}
              className="image-placeholder"
            />
          </div>
        </section>

        {/* Section 6: Setting Up Jenkins Agent */}
        <section>
          <h2>Setting Up Jenkins Agent</h2>
          <hr />
          <p>This section provides a step-by-step guide to adding a cloud configuration in Jenkins, enabling the automatic provisioning of build agents from a Kubernetes Cloud Environment.</p>

          <h3>1. Create Jenkins Cloud Instance</h3>
          <p>Click Manage Jenkins → Clouds, click +New cloud.</p>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-new-cloud.png" 
              alt="Jenkins New Cloud"
              width={1000}
              height={200}
              className="image-placeholder"
            />
          </div>

          <h4>Enter Cloud Name and select Type: Kubernetes, then click Create</h4>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-kubernetes-cloud.png" 
              alt="Jenkins Kubernetes Cloud"
              width={1000}
              height={300}
              className="image-placeholder"
            />
          </div>

          <h4>In the Credentials dropdown menu, select the Kubernetes Credentials created in Setting Up Jenkins CI/CD → Step 1</h4>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-k8s-credentials.png" 
              alt="Jenkins Kubernetes Credentials"
              width={1000}
              height={260}
              className="image-placeholder"
            />
          </div>

          <h4>Click Test Connection to verify that Jenkins can successfully connect to the Kubernetes cluster</h4>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-test-connection.png" 
              alt="Jenkins Test Connection"
              width={1000}
              height={200}
              className="image-placeholder"
            />
          </div>

          <h4>Enable WebSocket, then enter the Jenkins URL to establish communication between Jenkins and the Kubernetes agents</h4>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-websocke.png" 
              alt="Jenkins WebSocket"
              width={1000}
              height={210}
              className="image-placeholder"
            />
          </div>

          <h4>Click Save</h4>

          <h3>2. Jenkins Build Agent Pod Template</h3>
          <p>This section provides a step-by-step guide to creating a Jenkins pod template used to define how agent pods are provisioned within the Kubernetes cluster.</p>
          <p>— Refer to the <strong>Docker Hub image created for this setup.</strong></p>
          <div className="code-block">
            {`https://hub.docker.com/repository/docker/gdcabahug/jenkins-agent-podman-kubectl/general`}
          </div>

          <h4>In the Manage Jenkins → Clouds, click the created kubernetes cloud</h4>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-kubernetes-cloud-created.png" 
              alt="Jenkins Kubernetes Cloud Created"
              width={1000}
              height={300}
              className="image-placeholder"
            />
          </div>

          <h4>Click Pod Templates, then click +Add a pod template</h4>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-add-pod-template.png" 
              alt="Jenkins Add Pod Template"
              width={1000}
              height={250}
              className="image-placeholder"
            />
          </div>

          <h4>Enter the Jenkins agent pod name, the namespace where the pod will run, and the labels to associate with the agent</h4>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-pod-template-details.png" 
              alt="Jenkins Pod Template Details"
              width={1000}
              height={350}
              className="image-placeholder"
            />
          </div>

          <h4>Under Containers, click +Add Container</h4>
          <p>Enter the container name, specify the Docker image (<code>gdcabahug/jenkins-agent-podman-kubectl</code>) or refer to the link above, set the working directory, and enable Always pull image.</p>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-container-details.png" 
              alt="Jenkins Container Details"
              width={1000}
              height={400}
              className="image-placeholder"
            />
          </div>

          <p>Enable Allocate psuedo-TTY and Run in priveledge mode, then click Save.</p>
          <div className="image-section">
            <Image 
              src="/images/jenkins/jenkins-container-advanced.png" 
              alt="Jenkins Container Advanced"
              width={1000}
              height={400}
              className="image-placeholder"
            />
          </div>
        </section>
      </div>
    </div>
  )
}