pipeline {
    agent any
    
    // Le decimos a Jenkins que use la herramienta que configuramos en la Fase 2
    tools {
        nodejs 'node26'
    }

    stages {
        stage('Descargar Código') {
            steps {
                echo 'Descargando desde GitHub...'
                // Al conectarlo via SCM, Jenkins hace el git clone automáticamente.
            }
        }

        stage('Instalar Dependencias') {
            steps {
                echo 'Instalando librerías necesarias (npm install)...'
                // 'sh' sirve para ejecutar comandos reales en la terminal de Linux
                sh 'npm install'
            }
        }

        stage('Ejecutar Pruebas (Tests)') {
            steps {
                echo 'Corriendo pruebas automáticas...'
                sh 'npm test'
            }
        }

        stage('Empaquetar') {
            steps {
                echo 'Comprimiendo la aplicación para enviarla al servidor...'
                // Creamos un archivo zip/tar con nuestro código
                sh 'tar -cvf aplicacion.tar math.js package.json'
            }
        }
    }

    // El bloque POST se ejecuta SIEMPRE al final, pase lo que pase
    post {
        success {
            echo '✅ ¡ÉXITO! El código pasó las pruebas y está empaquetado.'
        }
        failure {
            echo '❌ ¡ALERTA ROJA! Las pruebas fallaron. El empaquetado se ha cancelado.'
        }
    }
}
