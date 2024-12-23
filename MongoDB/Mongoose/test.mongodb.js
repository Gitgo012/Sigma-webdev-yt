/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use("sigma");

// Insert a few documents into the sales collection.
db.getCollection("courses").insertMany([
  [
    {
      _id: {
        $oid: "670ec52b4a21124d5bf86fe5",
      },
      name: "yash",
      age: 19,
      city: "vadodara",
    },
    {
      _id: {
        $oid: "670ec52b4a21124d5bf86ff1",
      },
      name: "aditya",
      age: 21,
      city: "mumbai",
    },
    {
      _id: {
        $oid: "670ec52b4a21124d5bf87002",
      },
      name: "nisha",
      age: 23,
      city: "delhi",
    },
    {
      _id: {
        $oid: "670ec52b4a21124d5bf87003",
      },
      name: "ravi",
      age: 22,
      city: "chennai",
    },
    {
      _id: {
        $oid: "670ec52b4a21124d5bf87004",
      },
      name: "tanvi",
      age: 20,
      city: "pune",
    },
    {
      _id: {
        $oid: "670ec52b4a21124d5bf87005",
      },
      name: "meera",
      age: 24,
      city: "bangalore",
    },
    {
      _id: {
        $oid: "670ec52b4a21124d5bf87006",
      },
      name: "manoj",
      age: 25,
      city: "hyderabad",
    },
    {
      _id: {
        $oid: "670ec52b4a21124d5bf87007",
      },
      name: "rohan",
      age: 26,
      city: "kolkata",
    },
    {
      _id: {
        $oid: "670ec52b4a21124d5bf87008",
      },
      name: "pratik",
      age: 28,
      city: "noida",
    },
    {
      _id: {
        $oid: "670ec52b4a21124d5bf87009",
      },
      name: "smriti",
      age: 27,
      city: "jaipur",
    },
    {
      _id: {
        $oid: "670ec52b4a21124d5bf87010",
      },
      name: "sakshi",
      age: 22,
      city: "gurgaon",
    },
  ],
]);

// Run a find command to view items sold on April 4th, 2014.
const salesOnApril4th = db
  .getCollection("sales")
  .find({
    date: { $gte: new Date("2014-04-04"), $lt: new Date("2014-04-05") },
  })
  .count();

// Print a message to the output window.
console.log(`${salesOnApril4th} sales occurred in 2014.`);

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
db.getCollection("sales").aggregate([
  // Find all of the sales that occurred in 2014.
  {
    $match: {
      date: { $gte: new Date("2014-01-01"), $lt: new Date("2015-01-01") },
    },
  },
  // Group the total sales for each product.
  {
    $group: {
      _id: "$item",
      totalSaleAmount: { $sum: { $multiply: ["$price", "$quantity"] } },
    },
  },
]);
