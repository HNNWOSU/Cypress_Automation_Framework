pipeline {
  agent any

  environment {
    CYPRESS_CACHE_FOLDER = "${WORKSPACE}/.cache/Cypress"
    npm_config_cache = "${WORKSPACE}/.cache/npm"
  }

  options {
    timestamps()
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm ci'
        sh 'npx cypress install'
        sh 'npx cypress verify'
      }
    }

    stage('Clean previous reports') {
      steps {
        sh 'npm run clean:reports || true'
      }
    }

    stage('Run Cypress suite') {
      steps {
        sh 'npm run full-regression-headed-electron'
      }
    }

    stage('Archive reports') {
      steps {
        // Archive all reports as artifacts
        archiveArtifacts artifacts: 'cypress/reports/**/*', allowEmptyArchive: true
        
        // Publish HTML reports (requires HTML Publisher plugin)
        publishHTML([
          allowMissing: false,
          alwaysLinkToLastBuild: true,
          keepAll: true,
          reportDir: 'cypress/reports/html-multi-report',
          reportFiles: 'index.html',
          reportName: 'Cypress Test Report',
          reportTitles: 'Cypress Cucumber Test Results'
        ])
      }
    }
  }

  post {
    always {
      script {
        if (env.WORKSPACE) {
          cleanWs()
        }
      }
    }
  }
}