import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

const FAKE_DIRECTORIES = [{ id: 1, name: 'Diretorio Fake 1' }]

const FAKE_SHAPES = [
  {
    id: 1,
    directoryId: 1,
    name: 'Quadrado 1',
    type: '1-Quadrado',
    color: '#3dfff5',
    size: '300',
  },
]

app.get('/api/directories', (req, res) => res.json(FAKE_DIRECTORIES))

app.post('/api/directories', (req, res) => {
  let newId = FAKE_DIRECTORIES[FAKE_DIRECTORIES.length - 1]

  newId = parseInt(newId.id) + 1

  FAKE_DIRECTORIES.push({ id: newId, name: req.body.name })

  res.json(FAKE_DIRECTORIES)
})

app.get('/api/shapes', (req, res) => res.json(FAKE_SHAPES))

app.post('/api/shapes', (req, res) => {
  let newId = FAKE_SHAPES[FAKE_SHAPES.length - 1]

  newId = parseInt(newId.id) + 1

  FAKE_SHAPES.push({ id: newId, ...req.body })

  res.json(FAKE_SHAPES)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
