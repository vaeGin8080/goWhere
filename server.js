const path = require("path")
const express = require("express")
const choose = require("./src/assets/mocks/choose")
const plane = require("./src/assets/mocks/plane")
const app = express();

app.use("/api/choose",(req,res)=>{ //接口
  res.header("Access-Control-Allow-Origin", "*");  //允许跨域
  res.json(choose)
})
app.use("/api/plane",(req,res)=>{ //接口
  res.header("Access-Control-Allow-Origin", "*");  //允许跨域
  let id = req.query.id;
  let ids = req.query.ids;
  if(ids){
    for(let i=0;i<plane.planeTime.planeInt.length;i++){
      if( id == plane.planeTime.planeInt[i].id){

        res.json(plane.planeTime.planeInt[i].piao[ids])

      }
    }
  }else if(id){
    for(let i=0;i<plane.planeTime.planeInt.length;i++){
      if( id == plane.planeTime.planeInt[i].id){
        res.json(plane.planeTime.planeInt[i])

      }
    }
  } else{
    res.json(plane)
  }

})


app.listen(3000,()=>{
    console.log("server is ready on port 3000")
})


