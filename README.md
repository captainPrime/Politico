[![Build Status](https://travis-ci.org/captainPrime/Politico.svg?branch=ft-api-endpoints-createOffice-%23163388520)](https://travis-ci.org/captainPrime/Politico)

[![Coverage Status](https://coveralls.io/repos/github/captainPrime/Politico/badge.svg?branch=ft-api-endpoints-createOffice-%23163388520)](https://coveralls.io/github/captainPrime/Politico?branch=ft-api-endpoints-createOffice-%23163388520)

[![Code Climate](https://codeclimate.com/github/cloudfoundry/membrane.png)](https://codeclimate.com/github/cloudfoundry/membrane)

[![Test Coverage](https://api.codeclimate.com/v1/badges/b1161b997b36d04b615c/test_coverage)](https://codeclimate.com/github/captainPrime/Politico/test_coverage)

# Politico 
Politico is a web app which enables citizens give their mandate to politicians running for different government offices
while building trust in the process through transparency.
It is an online platform where citizens can cast their vote for a particular party and candidate and as well run as a candidate

NOTE: all endpoints are tested with POSTMAN.

# Getting Started
`step 1`
- To run this app, create  a folder and clone the repo
`git clone https://github.com/captainPrime/Politico.git`

- after repo has been cloned, pull files into folder. 
`git pull origin <Branch-name>` this creates a replica of this gitHub repo. Ensure the the following are installed on the system: node.js, express.js, eslint, mocha ...

`step 2`
- cd into the repo

`step 3`
- Run `npm install` to install dependencies listed in the package.json file

`step 4`
- To run endpoints type in command `npm start`
- This shows a log `loading port 3000.....`

`step 5`
- After, run specified api - links and send on **POSTMAN** to view results

`GET http://localhost:3000/api/v1/parties/`

`POST http://localhost:3000/api/v1/parties/`

`GET http://localhost:3000/api/v1/parties/<party-id>`         

`PATCH http://localhost:3000/api/v1/parties/<party-id>/name`

`DELETE http://localhost:3000/api/v1/parties/`

`GET http://localhost:3000/api/v1/offices/`

`GET http://localhost:3000/api/v1/offices/<office-id>`

`POST http://localhost:3000/api/v1/offices/`

## Prerequistes
**NOTE:** make sure you have npm installed
- node.js
- express.js                   `$ npm install express --save`
- eslint: Airbnb               `$ npm install eslint --save`
- mocha                        `$ npm install mocha --save`
- Babel                        `$ npm install babel --save`

## Installation
- Test Node. To see if Node is installed, open the Windows Command Prompt, Powershell or a similar command line tool, and type node -v ....

- Test NPM....

- Create a test file and run it.

- Then install express `npm install express`

- Install all dependencies on pc by running the command `npm install`

- Run app with command `npm start`. this runs the server file of the app and its functions starts

- Endpoints are run via Postman

- Run command `npm run test` to run test on each API ENDPOINTS

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

# Built With

**Core Technology Stacks**
>- Front-end (UI) : HTML, CSS, (Vanilla) Javascript
>- Back-end: Nodejs/Express
>- Database: PostgreSQL
>- Testing: Mocha and Chai
>- Transpiler: Babel


# Contributing
I will gladly accept your pull request if it:
     - it has tests and
     - looks reasonable

 # Features
- Users can sign up.
- Users can login.
- Admin (electoral body) can create political parties.
- Admin (electoral body) can delete a political party.
- Admin (electoral body) can edit a political party.
- Admin (electoral body) can create different political offices.
- Users can vote for only one politician per political office.
- Users can see the results of election.

# Versioning


# Author(s)
>- [Taiwo Oyindamola Ezekiel](https://github.com/captainPrime)

# Acknowledgement
- Andela-bootcamp-41
- Samule Afoloranmi(LFA)

# Licence
This project is licenced by Andela-bootcamp
politico. &copy; 2019

# Story Board
Link to project management tool (Pivotal Tracker) 
> https://www.pivotaltracker.com/n/projects/2239423

# Template
User Interface for Politico app is hosted on  
> (https://captainprime.github.io/Politico/UI/)
