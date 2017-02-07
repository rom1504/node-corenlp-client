const rq=require('request-promise');

class StanfordCoreNLPClient {
  constructor(host="http://localhost:9000",annotators="tokenize,ssplit,pos") {
    this.host=host;
    this.annotators=annotators;
  }

  annotate(text) {
    return rq({
      method:'POST',
      uri: this.host+'/?properties={"annotators": "'+this.annotators+'", "outputFormat": "json"}',
      body:text
    })
      .then(data => JSON.parse(data));

  }
}

module.exports=StanfordCoreNLPClient;
