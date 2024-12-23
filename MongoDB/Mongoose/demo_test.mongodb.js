use("test_db")
db.createCollection("monthlybudget")
db.monthlyBudget.insertMany( [
    {category : "food", budget : 400, spent : 450 },
    {category : "drinks", budget : 100, spent : 150 },
    {category : "clothes", budget : 100, spent : 50 },
    { category : "misc", budget : 500, spent : 300 },
    {category : "travel", budget : 200, spent : 650 }
 ] )
let a=db.monthlyBudget.find({budget:{$eq:500}})
let b=db.monthlyBudget.find({$and:[{$expr:{$gt:["spent","budget"]}},{spent:{$gte:500}}]})
let c=db.monthlyBudget.find({budget:{$in:[400,500,600]}})
console.log(c)
// db.test.insertOne({name:"testing", age:19})

// let a= db.test.find({name:"testing2"})
// console.log(a.toArray())
// console.log("total count is", a.count())
// db.test.updateMany({age:19}, {$set:{name:"yash"}})
// let b= db.test.find({age:{$in:[19,21,22]}})
// let c=db.test.find({ }, { field1: 1, field2: 1 })
// console.log(c)
// console.log(b.toArray())
// db.test.deleteMany({age:19})