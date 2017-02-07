const StanfordCoreNLPClient=require('./');

if(process.argv.length !=3) {
  console.log("Usage : node example.js <http://host:port>");
  process.exit(1);
}

const host=process.argv[2];

const client=new StanfordCoreNLPClient(host,"tokenize,ssplit,pos,parse");

client.annotate("the quick brown fox jumped over the lazy dog")
  .then(result => console.log(JSON.stringify(result,null,2)));

