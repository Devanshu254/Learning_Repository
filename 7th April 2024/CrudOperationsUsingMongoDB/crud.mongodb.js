use("CrudDb")

// Below is the way that we create a collection of database.
db.createCollection("courses") // This code will run courses database.  

// Below is the way we insert data into database.
db.courses.insertOne({
    name: "Harrys web dev",
    price: 0,
    assignments: 12,
    projects: 45
})

// Below is a way we insert data within database.
// db.courses.insertOne({
//     name: "Harrys web dev free course",
//     price: 0,
//     assignments: 12,
//     projects: 45
// })

// db.courses.insertMany([
//     {
//       "name": "Python Masterclass",
//       "price": 0,
//       "assignments": 10,
//       "projects": 30
//     },
//     {
//       "name": "JavaScript Basics",
//       "price": 0,
//       "assignments": 8,
//       "projects": 20
//     },
//     {
//       "name": "C# for Beginners",
//       "price": 0,
//       "assignments": 15,
//       "projects": 40
//     },
//     {
//       "name": "Web Development Fundamentals",
//       "price": 0,
//       "assignments": 12,
//       "projects": 35
//     },
//     {
//       "name": "Java Programming Essentials",
//       "price": 0,
//       "assignments": 14,
//       "projects": 38
//     },
//     {
//       "name": "ReactJS Crash Course",
//       "price": 0,
//       "assignments": 10,
//       "projects": 25
//     },
//     {
//       "name": "SQL Simplified",
//       "price": 0,
//       "assignments": 12,
//       "projects": 30
//     },
//     {
//       "name": "Responsive Web Design",
//       "price": 0,
//       "assignments": 10,
//       "projects": 28
//     },
//     {
//       "name": "Node.js for Beginners",
//       "price": 0,
//       "assignments": 13,
//       "projects": 36
//     },
//     {
//       "name": "Frontend Development with Vue.js",
//       "price": 0,
//       "assignments": 11,
//       "projects": 32
//     }
//   ]
//   )

// let a = db.courses.find({price: 0})
// console.log(a.count())

// Below is a way we read the database.
// let b = db.courses.findOne({price: 0})
// console.log(b)

// Now we will look at update and delete operations which we will perform within database.

// Update price from 0 to 100.
db.courses.updateOne({price:0}, {$set:{price:100}})

// Delete.
db.courses.deleteOne({price:100})

db.courses.deleteMany({price:100})

// MongoDB Query and Projection Operators.
