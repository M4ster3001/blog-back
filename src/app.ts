import express from 'express'
import 'dotenv/config'
import cors from 'cors'

import { corsConfig } from './config/cors'
import { router } from './routes'

// express initialization
const app = express()

// PORT
app.use(express.json())
app.use(cors(corsConfig))
app.use(router)

export { app }
