use("CrudDB");
console.log(db);

db.createCollection("courses");
db.courses.insertOne({
  name: "web dev free course",
  price: 0,
  assignments: 12,
  projects: 50,
});

db.courses.insertMany([
  {
    name: "web dev free course",
    price: 0,
    assignments: 12,
    projects: 50,
  },
  {
    name: "full stack developer bootcamp",
    price: 299,
    assignments: 20,
    projects: 75,
  },
  {
    name: "python for beginners",
    price: 49,
    assignments: 10,
    projects: 15,
  },
  {
    name: "data science with Python",
    price: 199,
    assignments: 25,
    projects: 40,
  },
  {
    name: "intro to machine learning",
    price: 149,
    assignments: 18,
    projects: 30,
  },
  {
    name: "javascript advanced concepts",
    price: 99,
    assignments: 14,
    projects: 20,
  },
  {
    name: "UI/UX design fundamentals",
    price: 79,
    assignments: 8,
    projects: 10,
  },
  {
    name: "digital marketing masterclass",
    price: 120,
    assignments: 16,
    projects: 25,
  },
  {
    name: "ethical hacking basics",
    price: 199,
    assignments: 12,
    projects: 22,
  },
  {
    name: "cloud computing essentials",
    price: 250,
    assignments: 30,
    projects: 50,
  },
]);

let a=db.courses.find({name: "cloud computing essentials"})
console.log(a.toArray())