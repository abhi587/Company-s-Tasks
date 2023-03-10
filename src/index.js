const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://abhishekprasad:abhiprasad@cluster0.ygncry8.mongodb.net/TailwebsAssigment2",
 { useNewUrlParser: false})

.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

//process.env.PORT = it also a server
app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});