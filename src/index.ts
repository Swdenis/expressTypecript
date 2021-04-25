import express from 'express'
import { router } from './routes/loginRoutes'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'

const PORT = 3000

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieSession({ name: 'session', keys: ['nndioas'] }))
app.use(router)

app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`)})