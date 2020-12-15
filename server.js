const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const cors=require('cors');
const bodyParser = require('body-parser');
const https =require('https');

const routerURL=require('./route');
//var server=https.createServer(app);

dotenv.config();
const port= 5000;

mongoose.connect(process.env.DATABASE_ACESS,{ useNewUrlParser: true,useCreateIndex:true,useUnifiedTopology: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

app.get('/hello',(req,res)=>{
	res.send('hello nodejs heroku')
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use('/app',routerURL);

app.listen(port,()=>console.log(`server is runing...${port}`));

/*server.listen(9000, 'localhost');
server.on('listening', function() {
    console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});*/