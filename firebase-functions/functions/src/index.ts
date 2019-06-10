import * as functions from 'firebase-functions';
const fetch = require('node-fetch');

export const hello = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', '*');
  response.set('Content-Type', 'text/json');
  response.send({
    "hello":  "world",
  });
});

export const proxy = functions.https.onRequest(async (req, res) => {
  let contentType: string|null = 'image/jpeg';
  const imageUrl: string ='https://media.giphy.com/media/Lam1vPSI8R3DG/giphy.gif';

  return await fetch(imageUrl, {})
    .then((r: Response) => {
      contentType = r.headers.get('content-type');

      return r.arrayBuffer();
    })
    .then((buffer: ArrayBuffer) => {
      res.set('Access-Control-Allow-Origin', '*');
      if (contentType != null) {
        res.writeHead(200, {'Content-Type': contentType });
      }
      res.end(Buffer.from(buffer), 'binary');
    });
});


