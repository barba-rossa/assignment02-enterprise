pipeline {
  agent any
  
  tools {
    nodejs 'node18'  
  }
  
  stages {
    stage('Build') {
      steps {
        sh 'npm ci'  
      }
    }
    stage('Test') {
      steps {
        sh 'npm test -- --watchAll=false'
      }
    }
  }
  

  post {
    always {
      cleanWs()
    }
  }
}