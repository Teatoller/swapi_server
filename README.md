# Swapi_Server

- This is an Apollo GraphQL server application that fetches and renders data from a "Star Wars API.

- The application may be viewed at the url link [Swapi-App](https://yeuxx.csb.app/)

[![Build Status](https://travis-ci.org/Teatoller/swapi_server.svg?branch=develop)](https://travis-ci.org/Teatoller/swapi_server)
[![Coverage Status](https://coveralls.io/repos/github/Teatoller/swapi_server/badge.svg?branch=ch-add-coveralls-178196275)](https://coveralls.io/github/Teatoller/swapi_server?branch=ch-add-coveralls-178196275)
<a href="https://codeclimate.com/github/Teatoller/swapi_server/maintainability"><img src="https://api.codeclimate.com/v1/badges/1febb137158335774a5b/maintainability" /></a> [![Codacy Badge](https://app.codacy.com/project/badge/Grade/e45fb95388ef4f6ea3f7432b771d45f6)](https://www.codacy.com/gh/Teatoller/swapi_server/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Teatoller/swapi_server&amp;utm_campaign=Badge_Grade)
<a href="https://codeclimate.com/github/Teatoller/swapi_server/test_coverage"><img src="https://api.codeclimate.com/v1/badges/1febb137158335774a5b/test_coverage" /> </a>[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

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
6. On the terminal run `npm install`
7. To start the server on the terminal run `npm start` or `npm run start-server`
8. Alternatively run on the terminal `node server/index.js`

This runs the app in the development mode.<br />
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

### Client side

1. Open a new terminal tab at the `swapi_server` folder.
2. Follow the **Steps 1-5** _as in server side_ **ONLY** if you have not already done so.
3. Run on the terminal `cd client`
4. On the terminal run `npm install`
5. To start the server on the terminal run `npm start`

This runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

6. On the terminal run `npm test`
