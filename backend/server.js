const express = require("express")
const cors = require("cors")

const actor = require('./routes/actor')
const crew = require('./routes/crewmember')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api/actor',actor)
app.use('/api/crewmember',crew)

app.listen(5000,() => {
    console.log('Server is listening on port 5000....')
})

