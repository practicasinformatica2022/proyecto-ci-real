pipeline {
    agent any
    
    tools {
        nodejs 'node18'
    }

    stages {
        stage('Descargar Código') {
            steps {
                echo 'Descargando desde GitHub...'
            }
        }

        stage('Instalar Dependencias') {
            steps {
                sh 'npm install'
            }
        }

        stage('Ejecutar Pruebas') {
            steps {
                sh 'npm test'
            }
        }

        // --- ¡AQUÍ EMPIEZA LO NUEVO (CD)! ---
        stage('Despliegue a Producción (GitHub Pages)') {
            steps {
                echo 'Preparando el despliegue a la web...'
                
                // Extraemos el secreto de la bóveda de Jenkins
                withCredentials([string(credentialsId: 'token-github', variable: 'GITHUB_TOKEN')]) {
                    // Empujamos el código a una rama especial de GitHub llamada "gh-pages"
                    sh '''
                        # Cambia TU_USUARIO por tu usuario real de GitHub (ej. practicasinformatica2022)
                        git push https://${GITHUB_TOKEN}@github.com/practicasinformatica2022/proyecto-ci-real.git HEAD:refs/heads/gh-pages --force
                    '''
                }
            }
        }
    }
}

