
node() {

    stage 'Checkout and Install'
        checkout scm
        env.NODE_ENV = 'test'
        sh 'rm -rf node_modules'
        sh 'npm install --no-optional'

    stage 'Test'
        env.NODE_ENV = 'test'
        sh 'npm test'

    stage 'Build'
        sh './node_modules/.bin/gulp build'
}
