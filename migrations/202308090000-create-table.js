'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', {
      user: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false
      },
      chute: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    await queryInterface.createTable('BufferBarcodes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      barcode1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        barcode2: Sequelize.STRING,
        allowNull: false,
      },
      chute: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      quadrante: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      rg_status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },  
    down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuarios');
    await queryInterface.dropTable('BufferBarcodes');

  }
};
