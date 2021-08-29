const { DataTypes } = require('sequelize')

const database = require('../config/database')

const Directory = require('./Directory')

const Shape = database.define(
  'Shape',
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

    type: {
      type: DataTypes.ENUM,
      values: ['1-Quadrado', '2-Triangulo'],
    },

    color: {
      type: DataTypes.STRING(7),
      allowNull: false,
    },

    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
)

Shape.belongsTo(Directory, { foreignKey: 'directoryId', as: 'directories' })
Directory.hasMany(Shape, { foreignKey: 'directoryId', as: 'shapes' })

Shape.sync()

module.exports = Shape
