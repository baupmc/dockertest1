node {
    stage ("docker-build"){
        echo "reached3"
        sh ("docker --version")
        echo "reached2"
        docker.build ("helloNode:v1", '.')
    }    
}
