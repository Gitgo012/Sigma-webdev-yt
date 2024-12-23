import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";
let a = await mongoose.connect("mongodb://localhost:27017/");

const app = express();
const port = 4000;

app.get("/", async (req, res) => {
  const todo = await new Todo({
    name: "2nd task",
    desc: "complete atleast 4 videos sigma web dev today",
    isDone: false,
    days: Math.floor(Math.random() * 366),
  });
  await Todo.deleteMany();
  todo.save();
  res.send("Hello World!");
});

app.get("/a", async (req, res) => {
  const todo = await new Todo({
    name: "2nd task",
    desc: "complete atleast 4 videos sigma web dev today",
    isDone: false,
    days: Math.floor(Math.random() * 366),
  });
  await Todo.deleteMany();
  await Todo.findOne({});
  res.json({ name: todo.name, desc: todo.desc, days: todo.days });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
