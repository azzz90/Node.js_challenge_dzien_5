//Twój kod
const express = require('express');
const app = express();

app.use(express.static('./public/zadanieDnia/'));

let yesVotes = 0;
let noVotes = 0;
let maybeVotes = 0;

app.get('/vote/:yourVote', (req, res) => {
  const vote = req.params.yourVote;
  if (vote === 'yes'){
    yesVotes++
    res.send('Dziękujemy za głos.')
  } else if (vote === 'no'){
    noVotes++
    res.send('Dziękujemy za głos.')
  } else {
    maybeVotes++
    res.send('Dziękujemy za głos.')
  }

});

app.get('/votes/check', (req, res) => {
  res.send(`Głosów na tak: ${yesVotes}, głosów na nie: ${noVotes}, niezdecydowanych: ${maybeVotes}.`)
});

app.listen(3000, ()=> {
  console.log('Serwer działa na porcie 3000');
})
