let express = require('express')
let cors = require('cors')
let mongoose = require('mongoose')
let database = require('./database')
let bodyParser = require('body-parser')

// Connect to MongoDB
mongoose.Promise = global.Promise
mongoose.connect(database.db, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database is connected');
}, error => {
    console.log('Can not connect to the database' + error);
})

const userAPI = require('./routes/user.route')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// API
app.use('/api', userAPI)

// Create Port
const port = process.env.PORT || 4000
const server = app.listen(port, function(){
    console.log('Connected to port ' + port)
})

// 404 Handler
app.use(function(req, res, next){
    res.status(404).send('404 Not Found')
})

// Error Handler
app.use(function(err, req, res, next){
    console.error(err.stack)
    res.status(500).send('500 Sever Error')
});
