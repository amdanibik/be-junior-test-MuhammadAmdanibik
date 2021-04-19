Movie Cast API
===============
This API provides data related to data movie, cast and the relation of both of it. 

Feature
-------------
* Authentication
* Query search
* Documentation

Tech Stack
-------------
1. ExpressJs => Rest API Library
2. PassportJs => Authentication Library (ApiKey Strategy)
3. Sequelize => ORM Library
4. Morgan => Request Logging Library
5. Docker & Docker Compose => Containerization
6. Swagger => OpenAPI(Documentation)
7. Dotenv => Environment variable Loader Library
8. Cors => Cross origin enabler Library

How to use it
----------
1. Make sure your port 3000 is not reserved because this app bind to that port
2. [Info] This app use docker version 20.10.6 & docker compose version 1.21.2
3. ```docker-compose up --build```
4. Open [http://localhost:3000/api-docs](http://localhost:3000/api-docs)
5. Put header apiKey: ```testingApiKeyCampaign```
6. Endpoint ready to hit