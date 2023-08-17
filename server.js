let express = require('express');
let app = express();

let port = process.env.port || 3000;
require('./dbConnection');
//let collection;
let router = require('./routers/router');

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/cat,',router);

// app.get('/', function (req,res) {
//     res.render('index.html');
// });

app.listen(port, ()=>{
    console.log('express server started');
   
});


