import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import userRoutes from './routes/user'
import choreRoutes from './routes/chore'

const app = express()
const port = process.env.PORT || 3001

// allow both localhost:3000 and 192.168.0.2:3000 origins
const allowedOrigins = [
  'http://localhost:3000',
  'http://192.168.0.2:3000'   // ← your PC’s LAN IP
]

app.use(cors({
  origin: (origin, callback) => {
    // allow requests with no origin (mobile apps, curl, postman)
    if (!origin) return callback(null, true)
    if (allowedOrigins.includes(origin)) return callback(null, true)
    callback(new Error(`CORS policy blocked: ${origin}`))
  }
}))

app.use(express.json())
app.use('/api/user', userRoutes)
app.use('/api/chore', choreRoutes)

app.listen(port, () => {
  console.log(`HomeIQ backend running on http://localhost:${port}`)
})
