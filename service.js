const express = require('express')
const	app     = express()
const	port    = 8081
const mysql   = require('mysql');
app.set('port', port)

const connection = mysql.createConnection({
  host     : 'mysql-container',
  user     : 'root',
  password : 'root',
  database : 'reddit-exam'
});
connection.connect();

app.get('/task2', (req, res) => {
  connection.query(
    'SELECT NAME, STREET_ADDRESS, POSTAL_CODE, COUNTRY FROM Customers JOIN Customer_Addresses ON Customers.ID = Customer_Addresses.CUSTOMER_ID WHERE STREET_ADDRESS IS NOT NULL', 
    (error, results, fields) => {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
    });
})

app.post('/create', (req, res) => {
  connection.query('INSERT INTO ..', (error, results, fields) => {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
})

// start listening for incoming connections
app.listen(app.get('port'), function() {
  console.log(`server running on ${app.get('port')}`)
})
