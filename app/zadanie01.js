//Twój kod
const express = require('express');
const app = express();

app.get('/:numOne/:numTwo', (req,res)=>{
  const numOne = req.params.numOne;
  const numTwo = req.params.numTwo;
  const Result = parseInt(numOne)+parseInt(numTwo);
  res.send(`${numOne} + ${numTwo} = ${Result}`);
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
