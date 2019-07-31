const express = require('express');
const mongodb = require('mongodb');
const xsenv = require('@sap/xsenv');

var app = express();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://suhas:Saplabs123@cluster0-9vw2y.mongodb.net/sample?w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
// MongoClient.connect(uri, err => {
//   const collection = client.db("sample").collection("users");
//  // perform actions on the collection object
//   client.close();
// });

app.get("/users", function(req,res){
client.connect(err => {
  const collection = client.db("sample").collection("users");
  collection.find({}).toArray(function(err,docs){
    res.send(docs);
  })
  client.close();
});
});


var APP_PORT = process.env.PORT || 8080;
app.listen(APP_PORT, () => {
  console.log('Server listening on port: ', APP_PORT);
});
