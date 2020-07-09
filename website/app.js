const express=require('express')
const geocode=require('../website/geocode')
const temperature=require('../website/temperaturecode')
const app=express()
const path=require('path')
const { response } = require('express')
const temperaturecode = require('../website/temperaturecode')
const port=process.env.PORT || 4000

const p= path.join(__dirname,'../holu/main')
app.set('view engine','hbs')
app.set('views',p)

app.get('',(req,res)=>{
    res.render('main',{
      
    })
})

app.get('/weather',(req,res)=>{
   
    if(!req.query.address)
      {
          return res.send('please fill the location before proceeding or correct location!')
      }
      const address=req.query.address
      geocode(address,(error,{latitude,longitude,location})=>{
          if(error)
          {
              return res.send({error})
          }
          temperaturecode(latitude,longitude,(error,{temperature,humidity})=>{
              if(error)
              {
                   return res.send({error})
              }
            res.send({
                location,temperature,humidity,latitude,longitude
            })
          })
      })
         
    

})

app.listen(port,()=>{
    console.log('setup is ready')
})