var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  
  var dbo = db.db("mydb");
  dbo.createCollection("users", function(err,res){
  	if(err) throw err;
  	console.log("the users collection created!");
  });


  var myobj = {"name":"odinus", "age":39};
  dbo.collection("users").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    //db.close();
  });

  dbo.collection("users").find().limit(3).toArray(
  		function(err,result) {
  			if(err) throw err;
  			console.log(result);
  			db.close();
  		}
  	);
});


