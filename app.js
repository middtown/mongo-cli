var mongo = require('mongodb').MongoClient;
var prompt = require('prompt-sync')();
var url = ('mongodb://localhost:27017/restaurant_db');

// mongo.connect(url, function(err, db){
//   var collection = db.collection('restaurants');
//   var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
//   if(allChoice == "all"){
//     collection.find().toArray(function(err, doc){
//       console.log(doc);
//     });
//   } else {
//     console.log("Aw, you don't want to see the restaurants?");
//   }
// });

//FIND
// mongo.connect(url, function(err, db){
//   var collection = db.collection('restaurants');
//   var selection = prompt("Select your restaurants. ");
//   collection.find({name: selection).toArray(function(err,doc){
//   	if(err) console.log('There has been an error.',err);
//   	if(doc[0]) console.log(doc);
//   	else console.log("Could not find any restaurants by that name.");
//   });
//  });

// INSERT
// mongo.connect(url, function(err, db){
//   var collection = db.collection('restaurants');
//   var myRestaurant = prompt("What resturaunt are you adding? ");
//   var myAddress = prompt("What's the address? ");
//   var zip = prompt("What's the zip code? ");
//   var yelp = prompt("Do the have a yelp website? ");
//   collection.insert({
//   	name:myRestaurant, 
//   	address:{
//   		street: myAddress, 
//   		zipcode: zip
//   		}, 
//   	yelp: yelp},
// 	function(err, res){
// 		if(err) console.log('There has been an error.', err);
// 		else console.log(res);
// 	});

// 	});

// UPDATE
// mongo.connect(url,function(err,db ){
// 	var collection = db.collection('restaurants');
// 	var selection = prompt("Which restaurant would you like to update? ");
// 	collection.find({name: selection}).toArray(function(err,doc){
// 		if(err) console.log("There has been an error", err);
// 		else if(doc[0]){
// 			console.log("Updating", doc[0]);
// 			var updatePrompt = prompt("What would you like to update? Name, Address, Zip for zipcode, Yelp for yelp address").toUpperCase();
// 			if(updatePrompt === 'Name') doc[0].name = prompt("What would you like the name to be? ");
// 			else if(updatePrompt === 'Address') doc[0].address.street = prompt("What's the new street address? ");
// 			else if(updatePrompt === 'Zip') doc[0].address.zipcode = prompt("What's the new Zip code? ");
// 			else if(updatePrompt === 'Yelp') doc[0].yelp = prompt("What's the new yelp page? ");
// 			else console.log("Error:  Invalid Entry");
// 			collection.update({name: selection},doc[0], function(err, res){
// 				if(err) console.log('There has been an error updating.',err);
// 				else console.log('Successfully updated!',res);
// 			});

// 		}
// 	});
// });


// REMOVE
mongo.connect(url,function(err,db){
	var collection = db.collection('restaurants');
	var selection = prompt("Which restaurant would you like to delete? ");
	collection.remove({name: selection},function(err,res){
		if(err) console.log("There has been an error in deleting your restaurant.",err);
		else console.log("Congratulations! The Restaurant has been deleted");
	});
});
// comment out each one




						// ------------- GRAVEYARD -------------------- //

// db.restaurants.find().forEach( function(myDoc) { print( "user: " + myDoc.name ); } );

// db.restaurants.find({name: "Cookies Corner"});


//use restaurant_db
// db.restaurants.remove({});
// db.restaurants.insert([
//   {
//     "name": "Cookies Corner",
//     "address": {
//       "street" : "1970 2nd St NW",
//       "zipcode" : 20001
//     },
//     "yelp": "http://www.yelp.com/biz/cookies-corner-washington"
//   },
//   {
//     "name": "The Blind Dog Cafe",
//     "address": {
//       "street": "944 Florida Ave",
//       "zipcode": 20001
//     },
//     "yelp": "http://www.yelp.com/biz/the-blind-dog-cafe-washington-2?osq=cookies"
//   },
//   {
//     "name": "Birch & Barley",
//     "address": {
//       "street": "1337 14th St NW",
//       "zipcode": 20005
//     },
//     "yelp": "http://www.yelp.com/biz/birch-and-barley-washington?osq=Restaurants+cookies"
//   },
//   {
//     "name": "Captain Cookie and the Milk Man",
//     "address": {
//       "street": "Dupont Circle",
//       "zipcode": 20036
//     },
//     "yelp": "http://www.yelp.com/biz/captain-cookie-and-the-milk-man-washington-5"
//   },
//   {
//     "name": "J's Cookies",
//     "address": {
//       "street": "1700 N Moore St",
//       "zipcode": 22209
//     },
//     "yelp": "http://www.yelp.com/biz/js-cookies-arlington" }
// ]);

