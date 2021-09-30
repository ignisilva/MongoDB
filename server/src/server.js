const express = require('express');
const mongoose = require('mongoose');

const { User } = require('./models/user');

const app = express();

const users = [];

const server = async () => {
  try {
    const { MONGO_URL } = process.env;
    if(!MONGO_URL) throw new Error("MONGO_URL is required!!");

    await mongoose.connect(MONGO_URL);

    app.use(express.json());

    app.get('/', (req, res) => {
      return res.send('hello world');
    });

    app.get('/user', (req, res) => {
      return res.send({ users });
    });

    app.post('/user', (req, res) => {
      users.push({ name: req.body.name , age: req.body.age })
      return res.send({ ok: true })
    });

    app.listen(3000, () => {
      console.log('server listening on port 3000');
    })  
  } catch(err) {
    console.log(err);
  }
}

server();

