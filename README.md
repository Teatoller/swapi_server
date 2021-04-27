# Apollo GraphQL API Server

- This a server application that fetches data from the "Star Wars API.

- The application may be view at [Swapi-App](https://yeuxx.csb.app/)

[![Build Status](https://travis-ci.org/Teatoller/swapi_server.svg?branch=develop)](https://travis-ci.org/Teatoller/swapi_server)

<p align="center">
<a href="https://codeclimate.com/github/Teatoller/swapi_server/maintainability"><img src="https://api.codeclimate.com/v1/badges/1febb137158335774a5b/maintainability" /></a>
<a href="https://codeclimate.com/github/Teatoller/swapi_server/test_coverage"><img src="https://api.codeclimate.com/v1/badges/1febb137158335774a5b/test_coverage" /></a>
</p>

## Application can be view on codesandbox

1. [Pivotal Tracker board](https://www.pivotaltracker.com/projects/2496277)
2. [CodeSandbox frontend](https://codesandbox.io/s/swapi-frontstevenennis-yeuxx)
3. [CodeSanbox server](https://codesandbox.io/s/swapi-serverstevenennis-zll44)

## Prerequisites

-Before we begin, make sure you have the following installed:

- node.js v8.x or later
- npm v6.x or later
- git v2.14.1 or later

## How to test the application

### Server

1. Create a folder on your machine `mkdir myproject`
2. `cd myproject`
3. Run `git clone https://github.com/Teatoller/swapi_server.git`
4. `cd swapi_server`
5. open **swapi_server** in your chosen editor. For **vscode** enter `code .` on terminal and press enter.
6. Run on the terminal `git checkout develop`
7. On the terminal run `npm install`
8. To start the server on the terminal run `npm run start-server`
9. Alternatively run on the terminal `node server/index.js`

This runs the app in the development mode.<br />
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

### Client side

1. Open a new terminal tab at the `swapi_server` folder.
2. Follow the **Steps 1-5** _as in server side_ **ONLY** if you have not already done so.
3. Run on the terminal `git checkout develop/client`
4. On the terminal run `npm install`
5. To start the server on the terminal run `npm start`

This runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
