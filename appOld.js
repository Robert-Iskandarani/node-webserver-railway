const http = require('http');

http
  .createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'application/json' });

    // const persona = {
    //   id: 1,
    //   nombre: 'Robert',
    // };

    // res.write(JSON.stringify(persona));

    // res.setHeader('content-disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv' });

    // res.write('id, nombre\n');
    // res.write('1, Robert\n');
    // res.write('2, Fernando\n');
    // res.write('3, Ivana\n');
    // res.write('4, Juan\n');
    res.write('Hola Mundo!');
    res.end();
  })
  .listen(8080);

console.log('Escuchando el puerto', 8080);
