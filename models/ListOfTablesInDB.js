var pgConnection = require('./../server-db.js');

var tables = {};
var client = pgConnection.createClientConnection();

tables.getTablesInfo = function (connection, req, res) {
    var dbArray = [];
    var jsonResponse = {
        "children": []
    };
    connection.query('SELECT * FROM "employe_details"', function (err, rows, fields) {
        res.json(rows.rows);
    });

},

    tables.setTablesInfo = function (connection, req, res) {
        console.log("entered into post method");
        var usernamesss = req.body.username,
        email = req.body.email,
        userid = 'DEFAULT';
        connection.query("INSERT into employe_details (username,userid,email) VALUES ('" + usernamesss + "'," + userid + ",'" + email + "')", function (err, rows, fields) {
            if (err) {
                console.log("err in Employe_Details", err);

            } else {
                return res.json({ success: true, message: 'Successfully employe_details is created!' });
            }

        });

    },
    
    tables.updateTablesInfo = function (connection, req, res) {
       console.log("entered into put method");
           connection.query("UPDATE employe_details SET username = '" + req.body.username + "',userid = " + req.body.oldId + ",email = '" + req.body.email + "' WHERE userid = '" + req.body.oldId + "'", function(err) {
               if(err) {
                   console.log("err in update", err);
               }
               else {
                connection.query('SELECT * FROM "employe_details"', function (err, rows, fields) {
                   return res.json({
                        success: true, 
                        message: 'Successfully employe_details is created!',
                        response : rows.rows
                    });
                });
                   
               }
           })
    },
    tables.deleteTablesInfo = function (connection, req, res) {
        console.log("entered into delete method");
        console.log("DELETE from employe_details WHERE userid = '" + req.body.userid + "'");
            connection.query("DELETE from employe_details WHERE userid = '" + req.body.userid + "'", function(err) {
                if(err) {
                    console.log("err in update", err);
                }
                else {
                 connection.query('SELECT * FROM "employe_details"', function (err, rows, fields) {
                    return res.json({
                         success: true, 
                         message: 'Successfully employe_details is created!',
                         response : req.body.userid
                     });
                 });
                    
                }
            })
     },
    module.exports = tables;




