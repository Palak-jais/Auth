const Users=require('../models/UserModel')
const bcrypt=require('bcrypt')


const registerUser=async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        const user=await Users.findOne({email});
        if(user) return res.status(400).json({msg:"email already exists"})
        if(password.length<8) return res.status(400).json({msg:"password must be of eight character long"}) 

        //encryption
        const hashPassword=await bcrypt.hash(password,10)
        const newUser=new Users({
            name,email,password:hashPassword
        })
        await newUser.save();
        //create jwt tokens
        /*const accesstoken=createAccessToken({id:newUser._id})
        const refreshtoken=createRefreshToken({id:newUser._id})
        res.cookie('refreshtoken',refreshtoken,{
            httpOnly:true,
            path:'/user/refresh_token',
            maxAge:7*24*60*60*1000
        });
        res.json({accesstoken})
        */
        res.json({msg:"sucessfully registered"})
       


        
    }
    catch(err){
        console.log(err);
    }
}

const loginUser=async(req,res)=>{
    try{
        const{email,password}=req.body;
        const user=await Users.findOne({email});
        if(!user)return res.status(400).json({msg:"user not exists."})
        
        const isMatch=()=> bcrypt.compare(password,user.password)
        
        if(!isMatch) return res.status(400).json({msg:"incorrect password"});

        
        /*
        const accesstoken=createAccessToken({id:user._id});
        const refreshtoken=createRefreshToken({id:user._id});
        res.cookie('refreshtoken',refreshtoken,{
            httpOnly:true,
            path:'/user/refresh_token',
            maxAge:7*24*60*60*1000
        })
         res.json({accesstoken})
         */

        res.json({msg:"login sucess"});
       

    }
    catch(err){
        console.log(err);
    }
    
}
/*const createAccessToken=(user)=>{
    return jwt.sign(user,process.env.ACCESS_SECRET,{expiresIn:'1d'})
}
const createRefreshToken=(user)=>{
    return jwt.sign(user,process.env.REFRESH_SECRET,{expiresIn:'7d'})
}
*/

module.exports={loginUser,registerUser}