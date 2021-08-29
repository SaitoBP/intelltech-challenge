const express = require('express')

const Shape = require('../models/Shape')

const routes = express.Router()

/* Get all shapes */
routes.get('/shapes', async (req, res) => {
  const shapes = await Shape.findAll({
    include: { association: 'directories' },
    attributes: {
      exclude: ['directoryId'],
    },
  })

  return res.json(shapes)
})

/* Get shape by id*/
routes.get('/shapes/:shapeId', async (req, res) => {
  const shape = await Shape.findByPk(req.params.shapeId, {
    include: { association: 'directories' },
    attributes: {
      exclude: ['directoryId'],
    },
  })

  if (shape === null) {
    res.status(404).json({ message: 'Not Found!' })
  }

  res.json(shape)
})

/* Create new shape */
routes.post('/shapes', async (req, res) => {
  const shape = await Shape.create(req.body)

  res.status(201).json(shape)
})

module.exports = routes
