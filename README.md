# Corenlp-client

Simple corenlp client to the corenlp http server using request-promise

## Installation

`npm install corenlp-client`

## Example

```js
const StanfordCoreNLPClient=require('corenlp-client');

const client=new StanfordCoreNLPClient("http://localhost:9000","tokenize,ssplit,pos,parse");

client.annotate("the quick brown fox jumped over the lazy dog")
  .then(result => console.log(JSON.stringify(result,null,2)));

```

