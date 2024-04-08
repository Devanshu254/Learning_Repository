// https://www.npmjs.com/package/mongodb  -> We can also use this package in order to do work of mongoose but when we create big applications then mongooose gives us lot of built in things. Like validation, schemas.
import mongoose from "mongoose";
import express from "express";
import {Todo} from "./models/Todo.js";
let a = await mongoose.connect("mongodb://localhost:27017/todo") // We have copied connection string from mongodb by doing right click on it.
// const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({title: "Hey First todo", desc: "Description of this todo", isDone: false})
    todo.save()
  res.send('Hello World!')
})

app.get('/a', async (req, res) => {
  let todo = await Todo.findOne({})
  console.log(todo)
  res.json({title: todo.title, desc: todo.desc})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


