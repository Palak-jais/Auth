require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const route=require('./routes/userRouter');




const app=express();
app.use(cookieParser())
const url=process.env.URL;
const PORT=process.env.port||5000
app.use(express.json());
app.use(cors());


//routes

app.use('/user',route)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
mongoose.connect(url,{

    useNewUrlParser: true, 
    useUnifiedTopology: true    
     
}).then(()=>{
        
    console.log("connected")
    
}).catch((err)=>console.log(err));
    

app.listen(PORT,()=>{
    console.log(`server is listening to port ${PORT}`);
});