/**
 * Lover.js
 *
 * @description :: Must be associated with an already existing group
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  schema : true,

  attributes: {

    nickname: {
      type: 'string',
      required: true,
    },

    group: {
      model: 'group',
      required: true,
    },
	
	feelings: {
      collection: 'feelings',
      via: 'lover',
    },
  },

};

