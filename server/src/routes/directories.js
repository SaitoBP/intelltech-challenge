const express = require('express')

const Directory = require('../models/Directory.js')

const routes = express.Router()

/* Get all directories */
routes.get('/', async (req, res) => {
  const directories = await Directory.findAll()

  res.json(directories)
})

/* Create new directory */
routes.post('/', async (req, res) => {
  const directory = await Directory.create(req.body)

  res.status(201).json(directory)
})

module.exports = routes
