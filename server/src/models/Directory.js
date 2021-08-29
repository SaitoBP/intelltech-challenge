const { DataTypes } = require('sequelize')

const database = require('../config/database.js')

const Directory = database.define(
  'Directory',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
)

Directory.sync()

module.exports = Directory
