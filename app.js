const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/todo.route');
let app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
let dev_db_url = 'mongodb+srv://anamgajith:anuttan123@cluster0-jtaak.mongodb.net/test?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,{useNewUrlParser: true,useUnifiedTopology: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api',routes);
let port = process.env.PORT || 5500;

app.listen(port,()=>{
    console.log(`Server started listening at port ${port}`);
});

