import * as functions from 'firebase-functions';

export const hello = functions.https.onRequest((request, response) => {
 response.send("hello there.");
});

export const proxy = functions.https.onRequest((request, response) => {
  console.log('request.params', JSON.stringify(request.params));

  response.send("hello there.");
});


