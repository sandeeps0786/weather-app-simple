const request=require('request')


const geocode=(address,callback)=>{

const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?&access_token=pk.eyJ1Ijoic3NrNDIwMSIsImEiOiJja2MwOWxvcDcxaGY2MnJwNzk5aThra2RwIn0.1tKl4HGfdJuB4tub6F5c5A'


request({url:url,json:true},(error,response)=>{
     
       if(error){
           callback('something going wrong......',undefined)
       
       }
       else if(response.body.features.length === 0) {
               callback('location error',undefined)
               
       }
       else{
            callback(undefined,{
                  latitude:response.body.features[0].center[0],
                  longitude:response.body.features[0].center[1],
                  location: response.body.features[0].place_name
            })
       }
         
})

  

}



module.exports=geocode