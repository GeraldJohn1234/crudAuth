'use strict';
var Handlers = require('./handlers'), internals = {};

internals.endpoints = [

    {
        method: ['GET'],
        path: '/',
        handler: Handlers.log_in,
        config: {
            auth: false
        }
    },

    {
        method: ['POST'],
        path: '/authenticate',
        handler: Handlers.authenticate,
        config: {
            auth: false
        }
    },

    {
        method: ['GET'],
        path: '/sign-up',
        handler: Handlers.sign_up,
        config: {
            auth: false
        }
    },

    {
        method: ['POST'],
        path: '/save-user',
        handler: Handlers.save_user,
        config: {
            auth: false
        }
    },
      {
    method: 'GET',
    path: '/logout',
    handler: Handlers.logout,
    config: {
      description: 'Logout',
      tags: ['api']
    }
  },
    


];

module.exports = internals;