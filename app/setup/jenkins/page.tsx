export default function JenkinsSetup() {
  return (
    <div>
      <div className="card">
        <h1>Jenkins Setup</h1>
        <p>
          Complete guide to set up and configure Jenkins for continuous integration and deployment.
        </p>

        <h2>Installation</h2>
        <div className="code-block">
          {`# Download and run Jenkins
wget -O jenkins.war http://mirrors.jenkins.io/war-stable/latest/jenkins.war
java -jar jenkins.war --httpPort=8080`}
        </div>

        <h2>Configuration</h2>
        <ul className="bullet-list">
          <li>Set up admin user and credentials</li>
          <li>Configure security settings</li>
          <li>Install required plugins</li>
          <li>Set up build agents</li>
          <li>Configure pipeline templates</li>
        </ul>

        <h2>Pipeline Setup</h2>
        <div className="code-block">
          {`pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'mvn clean compile'
            }
        }
        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'mvn deploy'
            }
        }
    }
}`}
        </div>
      </div>
    </div>
  )
}