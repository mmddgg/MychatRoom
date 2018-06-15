var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:5699/db';

mongoClient.connect(url,function(err,db){
    if(err){
        throw err;
    }
})