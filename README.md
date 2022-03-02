# DrivenCracy

Backend code for a poll creation website

## About

This is the backend code thst has the following functions:

 - Create and post a new poll to the database
 - Get all polls from the database
 - Post new vote options for a created poll 
 - Get the options for a poll
 - Post your vote
 - Get the most voted option with the amount of votes

## Technologies

![node js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![mongodb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

## How to run localy

1. Clone this repository
2. Open it in your preferred coding platform
3. Run the npm i command to install dependencies
4. Create a .env file and paste the fllowing variables there "MONGO_URI=mongodb://localhost:27017 node src/app.js" and "PORT=5000"
5. Run de mongodb command "mongod --dbpath ~/.mongo" in a separate terminal
6. Run node app.js to start the server locally
7. Use thunderclient or similar to try out the paths
8. Enjoy 🙂
