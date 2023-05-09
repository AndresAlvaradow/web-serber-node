require('dotenv').config();
const express = require('express')
const hbs = require('hbs');
const app = express()
const port = process.env.PORT;

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/parcial', function (err) {});

// servicios estaticos 
app.use( express.static('public'));

/*app.get('/', (req, res) => {
  res.send('Pagina de inicio')
});*/

app.get('/', (req, res) =>{
  res.render('home',{
    nombre: 'Andres',
    apellido: 'Alvarado',
    namePage : 'Node Leandro'
  });
});

app.get('/generic', (req, res)=> {
  res.render('generic',{
    nombre: 'Andres',
    apellido: 'Alvarado',
    namePage : 'Node generic'
  });
});
app.get('/elements', (req, res)=> {
  res.render('elements',{
    nombre: 'Andres',
    apellido: 'Alvarado',
    namePage : 'Node elements'
  });
});


/*app.get('/saludo', (req, res) =>{
  res.send('Hola como estan')
});

app.get('/generic', (req, res)=> {
  res.sendFile(__dirname + '/public/generic.html');
});
app.get('/elements', (req, res)=> {
  res.sendFile(__dirname + '/public/elements.html');
});*/

app.get('*', (req, res)=> {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
