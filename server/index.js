const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const session = require('express-session');



const app = express();
app.use(cookieParser);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

const port = 3000;

app.get('/', (req, res) => res.send('hello world'));

app.listen(port, () => console.log(`app listening on port ${port}`))


// user 
app.get('/signup', (req, res) => {

});

app.post('/login', (req, res) => {

});

app.post('/logout', (req, res) => {

});