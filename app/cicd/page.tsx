import { AlertTriangle } from 'lucide-react'

export default function CICD() {
  return (
    <div>
      <div className="card">
        <h1>CI/CD Pipeline Configuration</h1>
        <p>
          Our continuous integration and deployment pipeline ensures code quality, 
          security, and automated deployments across all environments.
        </p>

        <h2>Pipeline Stages</h2>
        
        <h3>1. Code Quality & Testing</h3>
        <p>Automated linting, type checking, and testing on every pull request.</p>
        <div className="code-block">
          {`name: Code Quality
on: [pull_request]
jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm test
      - run: npm run build`}
        </div>

        <h3>2. Security Scanning</h3>
        <p>Automated security vulnerability and dependency scanning.</p>
        <div className="code-block">
          {`- name: Security Scan
  run: |
    npm audit
    npx snyk test
    npx semgrep --config=auto .`}
        </div>

        <h3>3. Container Build & Scan</h3>
        <p>Docker image build and security scanning.</p>
        <div className="code-block">
          {`- name: Build and Scan
  run: |
    docker build -t opservers-app:latest .
    docker scan opservers-app:latest`}
        </div>

        <h3>4. Deployment</h3>
        <p>Automated deployment to staging and production environments.</p>
        <div className="code-block">
          {`- name: Deploy to Staging
  if: github.ref == 'refs/heads/develop'
  run: |
    kubectl set image deployment/opservers-app \\
      app=opservers-app:latest -n staging

- name: Deploy to Production
  if: github.ref == 'refs/heads/main'
  run: |
    kubectl set image deployment/opservers-app \\
      app=opservers-app:latest -n production`}
        </div>

        <h2>Environment Configuration</h2>
        <div className="code-block">
          {`Required Secrets:
• VERCEL_ORG_ID
• VERCEL_PROJECT_ID  
• KUBECONFIG_B64
• DATABASE_URL
• REDIS_URL
• JWT_SECRET
• AWS_ACCESS_KEY_ID
• AWS_SECRET_ACCESS_KEY`}
        </div>

        <h2>Branch Strategy</h2>
        <ul className="bullet-list">
          <li><strong>main:</strong> Production releases</li>
          <li><strong>develop:</strong> Staging environment</li>
          <li><strong>feature/*:</strong> Feature development</li>
          <li><strong>hotfix/*:</strong> Critical production fixes</li>
        </ul>

        <div className="alert alert-warning">
          <AlertTriangle size={18} style={{ marginRight: '0.5rem' }} />
          <strong>Important:</strong> All deployments to production require successful 
          completion of all pipeline stages and at least one code review approval.
        </div>
      </div>
    </div>
  )
}