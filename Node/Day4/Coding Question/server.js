const express = require("express");
const app = express();

app.use(express.json());

const requestCounts={};

const reteLimiter = (req,res,next)=>{

    const ip = req.ip;
    const currentTime = Date.now();

    const maxReq = 10;
    const timeWindow = 60*1000;

    if(requestCounts[ip])
    {
        const{count, lastReqTime} = requestCounts[ip];

        if(currentTime-lastReqTime<timeWindow)
        {
            if(count>maxReq)
                return res.send("Rate limit exceeded. Try again later.");
            
            requestCounts[ip].count++;
        }
        else{
            requestCounts[ip]={count:1, lastReqTime:currentTime};
        }
    }
    else{
        requestCounts[ip]={count:1,lastReqTime:currentTime};
    }

    next()
};

app.use(reteLimiter);

app.get("/",(req,res)=>{
    res.json({message:"Hello World"});
})

app.listen(3000,()=>{
    console.log("Server running on PORT 3000");
})