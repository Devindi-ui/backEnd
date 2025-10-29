const express = require('express');
require('dotenv').config();

const app = express();

const studentRouter = require('./router/studentRouter');

app.use(express.json());
app.use('/api/v1/students', studentRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});