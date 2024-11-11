const express = require('express')
const cors = require("cors")
const app = express()
const port = 3000
require('./db/index')
app.use(express.json())
app.use(cors())


app.use("/user",require("./route/user"))


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))