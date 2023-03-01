const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use(express.static('public/'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Roberto Iskandarani',
    titulo: 'Curso de Node',
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Roberto Iskandarani',
    titulo: 'Curso de Node',
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Roberto Iskandarani',
    titulo: 'Curso de Node',
  });
});

// app.get('/hola-mundo', (req, res) => {
//   res.send('Hola Mundo en su respectiva ruta');
// });

// app.get('*', (req, res) => {
//   res.sendFile(__dirname + '/public/404.html');
// });

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
