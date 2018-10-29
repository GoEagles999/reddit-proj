const express = require('express')
const	app     = express()
const	port    = 8081
const mysql   = require('mysql');
app.set('port', port)

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
connection.connect();

// runs the specified SQL query and returns result
app.get('/sql', (req, res) => {
  connection.query('SELECT * FROM Customers', (error, results, fields) => {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
})

// start listening for incoming connections
app.listen(app.get('port'), function() {
  console.log(`server running on ${app.get('port')}`)
})
