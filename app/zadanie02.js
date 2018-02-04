//Twój kod
const express = require('express');
const app = express();

let name = ''

app.get('/name/set/:imie', (req, res)=> {
    name = req.params.imie;
    res.send(`Twoje imię to: ${name}` );

});

app.get('/name/show', (req, res)=> {
    res.send(`Sprawdzam czy Twoje imię to: ${name}` );

});

app.get('/name/check', (req, res)=> {
    if (name.lenght !== 0) {
    res.send(`Jakieś imię zostało wcześniej zapisane w programie` );
  } else {
    res.send('Nic nie zostało zapisane');
  }

});

app.listen(3000, ()=> {
  console.log('Serwer działa na porcie 3000');
})
