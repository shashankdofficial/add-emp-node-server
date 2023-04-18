const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const port = process.env.PORT||3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.set('view engine','ejs');

app.use('/static', express.static(path.join(__dirname, 'public')));

//Home route
app.get('/', (req, res)=>{
    console.log("Inside Home page");
    res.render('index',{title:"Login System"});
})

//Home route
app.get('/index', (req, res)=>{
    console.log("Inside Home page");
    res.render('index',{title:"Login System"});
})

//Form route
app.get('/form', (req, res)=>{
    console.log("Inside Form page");
    res.render('form',{title:"FIll The Form"});
})

//Submit route
app.post('/submit', (req, res)=>{
    console.log(req.body);
    const data = JSON.stringify(req.body)
    fs.exists('input.json', (exists) => {
        if (exists) {
          fs.appendFile("input.json", ','+data, (err) => {
            if (err) {
              console.log(err);
              return res.status(404).send("error")
            }
            else {
              // Get the file contents after the append operation
              console.log("File is already exixsts\nSo Data appended succefully.");
              return res.status(200).send("Data appended succefully")
            }
          });
        }
        else {
          fs.writeFile('input.json', data, function (err) {
            if (err){
                console.log(err);
                return res.status(404).send("error");
            };
            console.log('No such file found,\nSo new file is created successfully.\nAnd written the data into it.');
            return res.status(200).send("File is created successfully.\nAnd written the data into it.");
          });
        }
      })
})

//Not Found route
app.get('*', (req, res)=>{
    console.log("Inside Home page");
    res.end("<h1>404 Not found!</h1>");
})

app.listen(port, () => {
    console.log("Listening to the server on http://localhost:3000")
})