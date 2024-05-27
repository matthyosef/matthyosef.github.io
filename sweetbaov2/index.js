const express =  require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;

const db = require('./config/dbConnect');
const cookie = require('cookie-parser');
const cookieParser = require('cookie-parser');

const authRouter = require('./routes/authRoute');

/*
app.use('/', (req, res) =>{
    res.send('hello from server side');
});
*/
app.use('/css', express.static(__dirname + './public/styles'));
app.use('/js', express.static(__dirname + './public/scripts'));
app.use('/img', express.static(__dirname + './public/images'));
app.use('/plugin', express.static(__dirname + './public/plugins'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(cookie());
app.use(express.json());



app.use('/api/user', authRouter);

db.connect;
/*
db.connect((err)=>{
    if(err) throw err;
    console.log('database connection successful');
})*/

app.listen(PORT, ()=>{
    console.log(`server running at PORT ${PORT}`);
});