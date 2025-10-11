export default function Setup() {
  return (
    <div>
      <div className="card">
        <h1>Setup Instructions</h1>
        <p>
          Complete guide to set up the development environment, configure services, 
          and deploy the application across different environments.
        </p>

        <h2>Prerequisites</h2>
        <ul className="checklist">
          <li>Node.js 18+ installed on your system</li>
          <li>PostgreSQL 14+ database server</li>
          <li>Redis 6+ server for caching</li>
          <li>Git for version control</li>
          <li>Docker and Docker Compose (optional)</li>
        </ul>

        <h2>Local Development Setup</h2>
        
        <h3>1. Clone Repository</h3>
        <div className="code-block">
          git clone https://github.com/opservers/application.git<br/>
          cd application
        </div>

        <h3>2. Install Dependencies</h3>
        <div className="code-block">
          npm install
        </div>

        <h3>3. Environment Configuration</h3>
        <div className="code-block">
          {`# Copy environment file
cp .env.example .env.local

# Update with your local configuration
DATABASE_URL="postgresql://username:password@localhost:5432/opservers"
REDIS_URL="redis://localhost:6379"
JWT_SECRET="your-jwt-secret-here"
API_BASE_URL="http://localhost:3000"`}
        </div>

        <h3>4. Database Setup</h3>
        <div className="code-block">
          {`# Run database migrations
npx prisma migrate dev

# Seed initial data
npx prisma db seed

# Generate Prisma client
npx prisma generate`}
        </div>

        <h3>5. Start Development Server</h3>
        <div className="code-block">
          npm run dev
        </div>

        <h2>Production Deployment</h2>
        
        <h3>Docker Deployment</h3>
        <div className="code-block">
          {`# Build Docker image
docker build -t opservers-app .

# Run with Docker Compose
docker-compose up -d

# Check container status
docker-compose ps`}
        </div>

        <h3>Kubernetes Deployment</h3>
        <div className="code-block">
          {`# Apply Kubernetes manifests
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

# Check deployment status
kubectl get pods -n opservers`}
        </div>

        <div className="alert alert-info">
          <strong>Pro Tip:</strong> Use our provided Docker Compose file for quick local 
          development with all dependencies included.
        </div>
      </div>
    </div>
  )
}