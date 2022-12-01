require('dotenv').config();
const express = require('express');
const router = require('./routes');


const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(router);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running in port ${process.env.PORT}`);
});