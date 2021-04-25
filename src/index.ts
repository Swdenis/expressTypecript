import express from 'express'
import { router } from './routes/loginRoutes'
import bodyParser from 'body-parser'

const PORT = 3000

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(router)

app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`)})