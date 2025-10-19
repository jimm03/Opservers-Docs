import Image from 'next/image'

export default function CICDorkflow() {
  return (
    <div>
      <div className="card">
        <h1>CI/CD Workflow</h1>
        <p>
          Explains how the CI/CD pipeline automates the build and deployment process, ensuring that every code change is reviewed, built, and deployed efficiently through Jenkins and Kubernetes.
        </p>

        <h2>Architecture Overview</h2>
        <div className="image-section">
          <Image 
            src="/images/architecture/jenkins-workflow.png" 
            alt="Jenkins Architecture Diagram"
            width={1100}
            height={700}
            className="architecture-image"
          />
        </div>

        <h2>Workflow Description</h2>
        <p>
          The CI/CD pipeline is designed to automate the build and deployment process using Jenkins. When changes are pushed to a feature branch and a pull request (PR) is created, the code is reviewed and then merged into the main branch of the GitHub repository.
        </p>
        <p>
          Once the changes are merged, Jenkins automatically triggers the pipeline. The pipeline deploys an agent pod to build the Docker image from the project’s Dockerfile, then pushes the image to Docker Hub. After the image is successfully pushed, Jenkins updates the Kubernetes web app deployment by setting the container image to the newly built (latest) version, ensuring the cluster runs the most recent application build.
        </p>

       
      </div>
    </div>
  )
}