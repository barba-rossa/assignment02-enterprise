pipeline {
  agent any
  
  tools {
    nodejs 'node18'
  }
  
  environment {
    NETLIFY_SITE_ID = 'c5fbac5f-cb4f-49ad-afca-ee2c829c7278'
    NETLIFY_AUTH_TOKEN = credentials('netlify-auth-token')
  }
  
  stages {
    stage('Build') {
      steps {
        sh 'npm ci'
        sh 'npm run build'
      }
    }
    
    stage('Test') {
      steps {
        sh 'npm test -- --watchAll=false'
      }
    }
    
    stage('Deploy to Netlify') {
      steps {
        sh '''
          netlify deploy --prod --dir=build --auth=$NETLIFY_AUTH_TOKEN --site=$NETLIFY_SITE_ID
        '''
      }
    }
  }
}