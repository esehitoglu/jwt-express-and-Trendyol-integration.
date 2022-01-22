// app.js

// Create Express app
const express = require('express')
const app = express()


const endpoint = require('./routes/api')

// jwt ve error handler
const jwt = require('./helpers/jwt')
const errorHandler = require('./helpers/error-handler')

// A sample route


// Initializing routes
app.use(express.json())
app.use(jwt())
app.use('/api',endpoint)
app.use(errorHandler)

// Start the server on port 3000
app.listen(3000,(req,res)=>{
    console.log("servis running...")
}) 
// Require and create our server packages