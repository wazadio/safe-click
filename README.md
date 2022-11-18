#  Simple node Express Backend
This app is a task by SafeClick for internship selection process.
A simple REST API service that will record client's system infromation such as operating system.

# Endpoint
+ **POST** /data
will create client's system record in database.                

+ **GET** /data
will return all recorde data in database

```json
[
    {
        "_id": "6376678dcffa6698850feb9e",
        "cpuname": "",
        "type": "GNU/Linux",
        "platform": "x64",
        "release": "",
        "remainingRam": 0,
        "totalRam": 0
    },
    {
        "_id": "637667adcffa6698850feba0",
        "cpuname": "",
        "type": "GNU/Linux",
        "platform": "x64",
        "release": "",
        "remainingRam": 1,
        "totalRam": 1
    }
]
```    
   
Client for post request testing provided in
```
test/client.html
```  
  
# Tech stack
+ NodeJS
+ MongoDB
+ ExpressJS
+ Mongoose
+ Docker