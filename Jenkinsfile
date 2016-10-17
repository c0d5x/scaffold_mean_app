
node() {

    stage 'Checkout and Install'
        checkout scm
        env.NODE_ENV = 'test'
        sh 'rm -rf node_modules'
        sh 'source ~/.nvm/nvm.sh && nvm install 4.4.6'
        sh 'install --no-optional'

    stage 'Test'
        env.NODE_ENV = 'test'
        sh 'source ~/.nvm/nvm.sh && nvm install 4.4.6'
        sh 'npm test'
}
