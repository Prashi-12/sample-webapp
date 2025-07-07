pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = 'Docker_credentials'
        IMAGE_NAME = 'prashanth120398/sample-webapp'
    }

    stages {
        stage('Clone from GitHub') {
            steps {
                git 'https://github.com/Prashi-12/sample-webapp.git'
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
                script {
                    sh "echo $DOCKER_HUB_CREDENTIALS_PSW | docker login -u $DOCKER_HUB_CREDENTIALS_USR --password-stdin"
                    sh "docker push $IMAGE_NAME"
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    sh "docker run -d -p 8080:8080 $IMAGE_NAME"
                }
            }
        }
    }
}
