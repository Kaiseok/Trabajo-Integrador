const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('trabajo_integrador', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
  });

  module.exports = { sequelize}