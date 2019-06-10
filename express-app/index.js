const fetch = require('node-fetch');

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'text/json');
  res.send({
    "hello":  "world",
  });
});

app.get('/json', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'text/json');
  res.send({
    "hello":  "world",
  });
});


const imageProxy = async (req, res) => {
  let contentType;
  const imageUrl = req.query.url;

  return await fetch(imageUrl, {})
    .then((r) => {
      contentType = r.headers.get('content-type');

      return r.arrayBuffer();
    })
    .then((buffer) => {
      res.set('Access-Control-Allow-Origin', '*');
      res.set('Cache-Control', 'max-age=86400');

      if (contentType != null) {
        res.writeHead(200, { 'Content-Type': contentType });
      }
      res.end(Buffer.from(buffer), 'binary');
    });
};


app.get('/image', imageProxy);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



