import express from 'express'
import cors from 'cors'

import userRoutes from './routes/user'
import choreRoutes from './routes/chore'

const app = express()
const port = process.env.PORT || 3001

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json())

app.get('/api/hello', (_, res) => {
  res.json({ message: 'Hello from HomeIQ backend!' })
})

app.use('/api/user', userRoutes)
app.use('/api/chore', choreRoutes)

app.listen(port, () => {
  console.log(`HomeIQ backend running on http://localhost:${port}`)
})
