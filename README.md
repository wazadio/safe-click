<h1>Simple node Express Backend</h1>
This app is a task by SafeClick for internship selection process.
<hr>
A simple REST API service that will record client's system infromation such as operating system.
<h2>Endpoint</h2>
<li><bold>POST</bold> /data</li>
will create client's system record in database
<br><br>
<li><bold>GET</bold> /data</li>
will return all recorde data in database
```bash
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
<br>
Client for post request testing provided in
```bash
test/client.html
```
<br><br>
<h2>Tech stack</h2>
<ul>
    <li>NodeJS</li>
    <li>MongoDB</li>
    <li>ExpressJS</li>
    <li>Mongoose</li>
    <li>Docker</li>
</ul>