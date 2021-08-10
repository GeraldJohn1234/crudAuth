module.exports = {
    env:{
      dev: process.env._pm2_version ? false : true,
    },
    mongodb: {
      ip: '127.0.0.1',
      port: '27017',
      app: 'crud',
      username: 'qwertyuiopasdfghjklzxcvbnm1234567890',
      password: 'qwertyuiopasdfghjklzxcvbnm1234567890'
    },
    crypto: {
      privateKey: 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIrFz9cO7eQalWBORMTAku+QImdK+ldApGj',
      tokenExpiry: 1 * 30 * 1000 * 60 //1 hour
    }
  };