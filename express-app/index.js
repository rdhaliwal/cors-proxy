const fetch = require('node-fetch');

const express = require('express');
const app = express();
const port = 3000;

const helloWorld = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'text/json');
  res.send({
    "hello":  "world",
  });
};

const jsonProxy = async (req, res) => {
  let contentType;
  const imageUrl = req.query.url;

  return await fetch(imageUrl, {})
    .then((r) => r.json())
    .then((data) => {
      res.set('Access-Control-Allow-Origin', '*');
      res.set('Cache-Control', 'max-age=86400');
      res.set('Content-Type', 'text/json');

      res.send(data);
    });
};

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

app.get(['/', '/hello'], helloWorld);
app.get('/json', jsonProxy);
app.get('/image', imageProxy);

app.listen(port, () => {
  console.log(`Started cors-proxy app on port ${port}!`);
});
