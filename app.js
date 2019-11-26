// To run this project, you need command 'npm run dev' and open it at port 4000
let mysql = require('mysql');
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hw6'
});

con.connect();

app.get('/tasks', (req, res) => {
   con.query('SELECT * FROM tasks', (err, rows) => {
      if (!err) {
          res.send(rows);
      } else {
          console.log(err);
      }
   });
});

app.get('/tasks/:id', (req, res) => {
   con.query('SELECT * FROM tasks WHERE id = ?', [res.params.id], (err, rows) => {
      if (!err) {
          res.send(rows);
      } else {
          console.log(err);
      }
   });
});

app.delete('/tasks/:id', (req, res) => {
    con.query('DELETE FROM tasks WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    });
});

app.put('/tasks', (req, res) => {
    let insertQuery = 'INSERT INTO ??(??) VALUES(?)';
    let query = mysql.format(insertQuery, ['books', 'title', req.body.title]);
    con.query(query, (err, rows) => {
        if (!err) {
            console.log('rows added successfully', rows);
        } else {
            console.log(err)
        }
    });
});

app.listen(4000);
console.log('Your project running at port 4000...');
