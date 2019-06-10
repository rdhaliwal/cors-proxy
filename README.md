## CORS Proxy

Simple express app to help with any CORS issues I have when trying to use Codepen with other sites.

## Prequisities/Setup

 - `npm install` (npm >= 6)
 - `node index.js` (node >= 10)

## Endpoints

 - `/image?url=${your image url here}` for any images you want without CORS
 - `/json?url=${your json endpoint here}` for any endpoints that return JSON that you want without CORS

## Deploying/Usage

This isn't served/deployed anywhere yet; I mostly just use this in conjuction with [ngrok](https://ngrok.com).

TODO: Get this deployed and hosted somewhere
