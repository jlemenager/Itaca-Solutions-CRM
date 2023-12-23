const db = require('./db')
const express = require('express')
const cors = require('cors')
const app = express()
const appRouter = require('./routes/appRouter')

const PORT = 3001
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

db.on('error', console.error.bind(console, 'MongoDB not connecting'))

app.listen(PORT, ()=>console.log(`Server running on PORT ${PORT}`))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })

app.use('/api', appRouter)