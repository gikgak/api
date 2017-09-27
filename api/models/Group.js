/**
 * Group.js
 *
 * @description :: Should be created before lovers
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  schema : true,

  attributes: {

    lovers: {
      collection: 'lover',
      via: 'group',
    },

  },

};

