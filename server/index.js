import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

const FAKE_DIRECTORIES = [
  { id: 1, name: 'Diretorio Fake 1' },
  { id: 2, name: 'Diretorio Fake 2' },
  { id: 3, name: 'Diretorio Fake 3' },
  { id: 4, name: 'Diretorio Fake 4' },
  { id: 5, name: 'Diretorio Fake 5' },
  { id: 6, name: 'Diretorio Fake 6' },
  { id: 7, name: 'Diretorio Fake 7' },
  { id: 8, name: 'Diretorio Fake 8' },
  { id: 9, name: 'Diretorio Fake 9' },
]

app.get('/api/directories', (req, res) => res.json(FAKE_DIRECTORIES))

app.post('/api/directories', (req, res) => {
  console.log(req.body)

  let newId = FAKE_DIRECTORIES[FAKE_DIRECTORIES.length - 1]

  newId = parseInt(newId.id) + 1

  FAKE_DIRECTORIES.push({ id: newId, name: req.body.name })

  res.json(FAKE_DIRECTORIES)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
