'use strict';

const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
const userRouter = require('./routes/userRouter');

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('homePage');
});

app.use(cors());
app.use(userRouter);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`server works at port ${port}`);
    });
  },
};
