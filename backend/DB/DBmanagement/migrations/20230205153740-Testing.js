'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Testings', { 
	    id : {
	        type : Sequelize.INTEGER,
		allowNull : false,
		primaryKey : true
	    },
	    pw : {
		type : Sequelize.STRING(20),
		allowNull : false
	    }
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("Testings");
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
