pipeline {
    agent any

    environment {
        IMAGE_NAME = 'prashanth120398/sample-webapp'
    }

    stages {
        stage('Clone from GitHub') {
            steps {
                git branch: 'main', url: 'https://github.com/Prashi-12/sample-webapp.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t $IMAGE_NAME .'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'Docker_credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh "echo \$DOCKER_PASSWORD | docker login -u \$DOCKER_USERNAME --password-stdin"
                    sh "docker push $IMAGE_NAME"
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    // Changed host port from 8080 to 8081 to avoid conflict with Jenkins
                    sh "docker run -d -p 8081:8080 $IMAGE_NAME"
                }
            }
        }
    }
}
