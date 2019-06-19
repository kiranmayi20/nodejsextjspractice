var express         = require('express'),
listOfTablesInDB= require('./models/ListOfTablesInDB.js')
pgConnection = require('./server-db.js');
     router = express.Router();
//tableData       = require('./models/TableData.js');
//listOfTablesInDB= require('./models/ListOfTablesInDB.js'),
//pgConnection = require('./server-db.js');

var app   = express();
var pool = pgConnection.createConnection();
//app.use(bodyParser.json({limit: '50mb'}));
//app.use(bodyParser.urlencoded({limit: '50mb',
 //   extended: true
//}));
app.use(express.static(__dirname));

app.get('/getTables', function (req, res) {
    listOfTablesInDB.getTablesInfo(pool,req, res);

});


app.get('/', function (req, res) {
    res.sendFile(__dirname+"\\index.html");
    })
var server = app.listen(3001, function () {

var host = server.address().address
var port = server.address().port

console.log('Example app listening at http://%s:%s', host, port)

})