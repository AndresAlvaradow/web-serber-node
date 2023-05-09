const http = require('http');



http.createServer((req, res)=>{
    
    //res.writeHead(200, {'Content-Type': 'text/plain'});
    //res.writeHead(200, {'Content-Type': 'application/json'});
    //res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    //res.writeHead(200, {'Content-Type': 'application/csv'});
    /*const persona ={
        id: '1100',
        name: 'Andres'
    }*/

    //res.write(JSON.stringify(persona));
    //res.write('id, nombre\n');
    //res.write('1, Andres\n');
    res.write('Hola Mundo');

    res.end();
})
.listen(8080);

console.log("Escuchado del puerto", 8080)