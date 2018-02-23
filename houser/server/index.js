const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session')
const port = 3000
//Import controller components and assign to appropriate endpoints.
const auth_controller = require('./controllers/auth_controller')
const house_controller= require('./controllers/house_controller')

require('dotenv').config()
//Connect middleware component using "require". Step(1 of 2)
const checkForSession = require('./middlewares/checkForSession')


//CREATE A EXPRESS APP
const app = express()
//ADD MIDDLEWARE TO APP
app.use( bodyParser.json() )//This listens for req.on('data') and constructs req.body from the chunks of data it gets.
app.use( session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: true
}))
//Add middleware component through app.use Step (2 of 2)
app.use( checkForSession )
app.use ( express.static(`${__dirname}/build`))
//ENDPOINTS GO HERE (Create, Read, Update, Delete)
//Way to access the method by dot notation located on object of the file listed.
app.post('api/auth/login', auth_controller.login)
app.post('/api/register', auth_controller.register)
//app.post('/api/logout', auth_controller.logout)


//app.post('/api/properties', house_controller.add)
//app.get('/api/properties', house_controller.search)
//app.delete('/api/properties/:id', house_controller.delete)

//Make sure to have port assigned and setup app.listen to listen on said port using the assigned variable "port"
app.listen(port, () => {
    console.log(`Server listneing on port ${port}.`)
})