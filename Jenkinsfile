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
        sh 'npm run full-regression-headless-chrome'
      }
    }

    stage('Archive reports') {
      when {
        expression { fileExists('cypress/reports') }
      }
      steps {
        archiveArtifacts artifacts: 'cypress/reports/**/*', allowEmptyArchive: true
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