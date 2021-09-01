<h1>Scrape data from etsy</h1>


## Technologies
- Docker,Vue.js
- Nodejs,mongoDB,Javascript
## Requirements 

|Technology|Version|
|:--:|:--:|
|**Node**|**14.x**|
|**docker**|**latest version**|


## Quick Start

```bash
# Run in Docker
docker-compose up
# use -d flag to run in background
# Tear down
docker-compose down
# To be able to edit files, add volume to compose file
volumes: ['./:/usr/src/app']
# To re-build
docker-compose build
------------------------
> **⚠ WARNING: If you want to run without docker.**  
change this -> const MONGO_URI = "mongodb://mongo:27017/products"
to this ->const MONGO_URI = "mongodb://localhost:27017/products"

run->npm install
client-> npm run serve
server->npm start

```
### Containers and logs
<hr />

![img](https://user-images.githubusercontent.com/62605922/131634802-77625974-582e-42cc-83fa-af136896f88f.png)

<hr />

![etsy](https://user-images.githubusercontent.com/62605922/131634809-71331b2e-4cf6-4380-9d3f-d0a6772e9063.gif)
