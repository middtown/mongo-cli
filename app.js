var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  // Find All Restaurants
  var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
  if(allChoice == "all"){
    collection.find().toArray(function(err, doc){
      console.log(doc);
    });
  } else {
    console.log("Aw, you don't want to see the restaurants?");
  }

// FIND
mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  var selection = prompt("Select your restaurants. ");
  collection.find({name: selection}).toArray(function(err,doc){
  	if(err) console.log('There has been an error.',err);
  	if(doc[0]) console.log(doc);
  	else console.log("Could not find any restaurants by that name.");
  });
 });

// INSERT
mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  var myRestaurant = prompt("What resturaunt are you adding? ");
  var myAddress = prompt("What's the address? ");
  var zip = prompt("What's the zip code? ");
  var yelp = prompt("Do the have a yelp website? ");
  collection.insert({
  	name:myRestaurant, 
  	address:{
  		street: myAddress, 
  		zipcode: zip
  		}, 
  	yelp: yelp},
	function(err, res){
		if(err) console.log('There has been an error.', err);
		else console.log(res);
	});

});

// REMOVE
mongo.connect(url,function(err,db){
	var collection = db.collection('restaurants');
	var selection = prompt("Which restaurant would you like to delete? ");
	collection.remove({name: selection},function(err,res){
		if(err) console.log("There has been an error in deleting your restaurant.",err);
		else console.log("Congratulations! The Restaurant has been deleted");
	});
});
});
