//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID(); // luodaan oma id.


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //find() palauttaa listan pointtereista dokkareihin.
  //db.collection('Todos').find().toArray().then((docs) => {
  // haku ehdolla
  //db.collection('Todos').find({completed:false}).toArray().then((docs) => {
  // haku id:llä
  // db.collection('Todos').find({
  //   _id: new ObjectID('5b713b1d20b3e858a8534b39')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  //count
  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  //db.close();
});
