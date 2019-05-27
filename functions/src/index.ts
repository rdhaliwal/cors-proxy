import * as functions from 'firebase-functions';

export const hello = functions.https.onRequest((request, response) => {
 response.send("hello there.");
});

export const proxy = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', '*');

  if (request.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    response.set('Access-Control-Allow-Methods', 'GET');
    response.set('Access-Control-Allow-Headers', 'Content-Type');
    response.set('Access-Control-Max-Age', '3600');
    response.status(204).send('');
  } else {
    response.send(`You want to proxy a request to ${request.params[0]}`);
  }
});


