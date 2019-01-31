# Politico 
Politico is a web app which enables citizens give their mandate to politicians running for different government offices
while building trust in the process through transparency.

NOTE: all endpoints are tested with POSTMAN.

# Getting Started
- To run this app, create  a folder and clone the repo, after repo has been cloned, pull files into folder. this creates a replica of this gitHub repo. Ensure the the following are installed on the system: node.js, express.js, eslint, mocha ...
- When this is done, a list of endpoints will be visible. To run endpoints type in command `npm start`
- This shows a log `loading port 3000.....`
- After, run specified api - links and send on postman to view results

## Prerequistes
- node.js
- express.js                   `$ npm install express --save`
- eslint: Airbnb               `$ npm install eslint --save`
- mocha                        `$ npm install mocha --save`
- Babel                        `$ npm install babel --save`

## Installation
- Test Node. To see if Node is installed, open the Windows Command Prompt, Powershell or a similar command line tool, and type node -v . ...
- Test NPM. ...
- Create a test file and run it.

- Then install express `npm install express`,
- Install all dependencies on pc by running the command `npm install`

- run app with command `npm start`. this runs the server file of the app and its functions starts

# Running Tests
The test file is written with mocha and this can be run by the command `npm run test`. This runs test on all the endpoints connected to the server.js file

To run test on individual file, cd into the file directory and run command `mocha <file-name>`

# Deployment
Heroku link
This app is deployed using heroku
https://politico-api.herokuapp.com/

GITHUB page of UI
This deploys the UI using github hosting page
https://captainprime.github.io/Politico/UI/frontPage.html

- To run endpoints type in command `npm start`
- This shows a log `loading port 3000.....`
- After, run specified api - links and send on postman to view results

#Built With
`Node.js`
`@babel/cli: "^7.2.3",
@babel/core: "^7.2.2",
@babel/node: "^7.2.2",
@babel/preset-env: "^7.2.3",
babel-cli: "^6.26.0",
babel-preset-es2015: "^6.24.1",
babel-preset-stage-2: "^6.24.1",
babel-register: "^6.26.0",
chai: "^    4.2.0",
chai-http: "^4.2.1",
coveralls: "^3.0.2",
eslint: "^5.11.1",
eslint-config-airbnb-base: "^13.1.0",
eslint-plugin-import: "^2.14.0",
istanbul: "^0.4.5",
mocha: "^5.2.0",
mocha-lcov-reporter: "^1.3.0",
nodemon: "^1.18.9",
nyc: "^13.1.0"`

# Contributing
I will gladly accept your pull request if it:
     - it has tests
     - looks reasonable

 # Features
- Users can sign up.
- Users can login.
- Admin (electoral body) can create political parties.
- Admin (electoral body) can delete a political party.
- Admin (electoral body) can create different political offices.
- Users can vote for only one politician per political office.
- Users can see the results of election.

#Versioning


# Author(s)
>- [Taiwo Oyindamola Ezekiel](https://github.com/captainPrime)

# Acknowledgement
- Andela-bootcamp-41
- Samule Afoloranmi(LFA)

#Licence
This project is licenced by Andela-bootcamp
politico. &copy; 2019

# Core Technology Stacks
>- Front-end (UI) : HTML, CSS, (Vanilla) Javascript
>- Back-end: Nodejs/Express
>- Database: PostgreSQL
>- Testing: Mocha and Chai
>- Transpiler: Babel

# Story Board
Link to project management tool (Pivotal Tracker) 
> https://www.pivotaltracker.com/n/projects/2239423

# Template
User Interface for Politico app is hosted on  
> (https://captainprime.github.io/Politico/UI/)


