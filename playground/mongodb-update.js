//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID(); // luodaan oma id.


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//mongodb update operators
  db.collection('Todos').findOneAndUpdate({
    _id : new ObjectID('5b713b1d20b3e858a8534b39')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOrigibal: false
  }).then((result) => {
    console.log(result);
  })

  //db.close();
});
