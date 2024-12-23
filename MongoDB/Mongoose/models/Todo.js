import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema({
    name:String,
    desc: String,
    isDone: Boolean,
    days:Number
});//through this schema we are defining what all fields our ToDo collection should have within its documents and what are the constraints for those fields

export const Todo = mongoose.model('ToDo', TodoSchema) //mongoose will look for this collection in mongodb