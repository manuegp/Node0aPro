require('dotenv').config()
const express = require("express");
const hbs = require('hbs');


const app = express();
const port = process.env.PORT



//Servir contenido estatico
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static("public"));



app.get("/", (req, res) => {
  res.render('home', {
      nombre: "Fernando",
      titulo: "curso node"
  });
});
app.get("/generic", (req, res) => {
    res.render('generic', {
        nombre: "Fernando",
        titulo: "curso node"
    });
  });

  app.get("/elements", (req, res) => {
    res.render('elements', {
        nombre: "Fernando",
        titulo: "curso node"
    });
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
