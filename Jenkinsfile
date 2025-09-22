pipeline {
  agent any

  parameters {
    choice(
      name: 'TEST_SUITE',
      choices: [
        'ci-tests',
        'contact-us-tests-headed',
        'contact-us-tests-headless', 
        'login-tests-headed',
        'login-and-smoke-pack',
        'smoke-pack-headed',
        'regression-pack-headed'
      ],
      description: 'Test suite to execute'
    )
  }

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
        sh "npm run ${params.TEST_SUITE}"
      }
    }

    stage('Archive reports') {
      steps {
        archiveArtifacts artifacts: 'cypress/reports/**/*', allowEmptyArchive: true
        
        publishHTML([
          allowMissing: false,
          alwaysLinkToLastBuild: true,
          keepAll: true,
          reportDir: 'cypress/reports/html-multi-report',
          reportFiles: 'index.html',
          reportName: 'Cypress Test Report',
          reportTitles: "Test Results - ${params.TEST_SUITE}"
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