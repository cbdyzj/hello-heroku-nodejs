module.exports = {
  apps: [{
    name: 'heroku.jianzhao.org',
    script: 'server.js',
    env: {
      COMMON_VARIABLE: 'true'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
}
