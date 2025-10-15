export default function CICDWorkflow() {
  return (
    <div>
      <div className="card">
        <h1>CI/CD Workflow</h1>
        <p>
          Illustrates our automated deployment pipeline using Jenkins for continuous integration and deployment.
        </p>

        <h2>Pipeline Stages</h2>
        <div className="code-block">
          {`1. Code Commit → 2. Automated Testing → 3. Build → 4. Security Scan → 5. Deploy to Staging → 6. Integration Tests → 7. Deploy to Production`}
        </div>

        <h2>Key Components</h2>
        <ul className="bullet-list">
          <li><strong>Jenkins Pipeline:</strong> Orchestrates the entire deployment process</li>
          <li><strong>Git Integration:</strong> Triggers builds on code commits</li>
          <li><strong>Docker:</strong> Containerizes applications for consistent deployment</li>
          <li><strong>Kubernetes:</strong> Manages container orchestration</li>
          <li><strong>Artifact Repository:</strong> Stores build artifacts</li>
        </ul>

        <h2>Automation Features</h2>
        <ul className="bullet-list">
          <li>Automatic rollback on deployment failures</li>
          <li>Blue-green deployment strategy</li>
          <li>Canary releases for high-risk changes</li>
          <li>Automated database migrations</li>
          <li>Integration with monitoring for deployment validation</li>
        </ul>
      </div>
    </div>
  )
}