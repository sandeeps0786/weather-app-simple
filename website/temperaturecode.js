const request=require('request')


const temperaturecode=(long,lat,callback)=>{
  
       const url='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=1d9a0df3450006c01cadc06bd19fe812&units=metric&exclude=hourly'
       
       request({url:url,json:true},(error,response)=>{
             if(error){
                callback('something is going wrong',undefined)
            }
                else if(response.body.error){
                  callback('location error',undefined)
                }
                else
                {
                    callback(undefined,
                             {
                                temperature:response.body.main.temp,
                                humidity:response.body.main.humidity,
                                
                             }
                        )
                    
                }
                
             })    

                 

       }

       
  module.exports=temperaturecode;
       



