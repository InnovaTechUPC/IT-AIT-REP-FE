pipeline {
    agent any

    parameters {
        string(defaultValue: 'N', description: 'Reinstall npm', name: 'clear_cache')
    }

    environment {
        PROJECT_VERSION = sh(script: 'node -pe "require(\'./package.json\').version"', returnStdout: true).trim()
        DOCKER_IMAGE_NAME = "rickcbs/asit-web-service:${PROJECT_VERSION}"
        DOCKER_CREDENTIALS = 'rkz-docker-hub'
    }

    stages {

        stage('Reinstall npm') {
            when {
                expression { params.clear_cache == 'Y' }
            }
            steps {
                sh 'node --version'
                sh 'rm -rf ./node_modules'
                sh 'npm cache clean --force'
                sh 'npm install'
            }
        }

        stage('Debug') {
            steps {
                echo "DOCKER_IMAGE_NAME: ${DOCKER_IMAGE_NAME}"
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'npm run build'
                script {
                    app = docker.build("${DOCKER_IMAGE_NAME}")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', DOCKER_CREDENTIALS ) {
                      app.push()
                    }
                }
            }
        }
    }
}

