/**
 * Wish.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  
  //Permet d'obliger les attributs de la methode d'etre = attributes
  schema : true,
  
  attributes: {
    title : 'string',
    isChecked : 'boolean',

  },

};

