require('dotenv').config()
const express = require('express')
const { join } = require('path')

const app = express()
// middleware- express.static gives our server a folder of static files to serve up from our server to our front end and serve to our browser
const port = process.env.PORT || 3001
app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// ** commented out routes and config require statements since they have not yet been established.
// app.use(require('./routes'))
require('./config')
    .then(() => app.listen(3001))
    .catch(e => console.error(e))
// app.listen(port, () => {
//     console.log(`Server is now listning on port ${port}`)
// })