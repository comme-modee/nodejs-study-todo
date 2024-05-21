const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');

const app = express();

app.use(bodyParser.json());
app.use('/api', indexRouter) //api라는 주소로 입장하면 indexRouter를 사용할것이라는 뜻.

const mongoURI = `mongodb://localhost:27017/nodejs-study-todo`; //몽구스에 만들어질 폴더이름

mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(() => {
        console.log('mongoose connected')
    })
    .catch((err) => {
        console.log('DB connection fail', err)
    });

app.listen(5000, () => {
    console.log('server on 5000')
})