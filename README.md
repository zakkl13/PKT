# Phi Kappa Tau Chapter Website

[ ![Codeship Status for zakkl13/PKT](https://codeship.com/projects/5a383150-303c-0134-d38e-7603af744759/status?branch=master)](https://codeship.com/projects/164142)

### Technology Overview
**Infrastructure & Workflow**

Amazon Web Services (AWS) provides the infrastructure for a scalable cloud application. Github and CodeShip.io provide continuous integration into the AWS Elastic Beanstalk service, this
CI/CD (continuous integration/continuous deployment) pipeline allows for the latest version of code to be automatically tested and pushed into production in real time.
Today, code is pushed into a development environment to be manually tested and verified and then deployed to the production environment in Elastic Beanstalk.

![workflow_diagram](http://i.imgur.com/iqzI38i.png)

**Software**

This project is powered by the Mongo, Express, Angular, NodeJS (MEAN) stack along with the typescript language. The Express server framework serves the Angular front-end client
interface which then interacts with the REST API layer provided by Express to store and retrieve data. In the back-end, Express connects directly
to the database layer provided by Mongo DB. Lastly, NodeJS provides provides the runtime environment for Express to run on.

![software_diagram](http://i.imgur.com/uJkIBmE.png)

**Deployment**

To deploy the application simply run the following:
```
npm install
gulp build:prod
```

and to run: `npm start`

Gulp is a tool which runs user defined tasks. I am using Gulp to take my development files and build up an application,
ready to be deployed to a physical server where it will be accesible to the internet. The task `gulp build:prod`
does the following:
* Compiles the Typescript files in the `server` directory to javascript files in the `built_server` directory
* Creates a `public` directory, compiles Typescript files in the `app` directory to javascript
and copies them to `public` along with all "static" files such as images, html files, and css files.
* Finally the task bundles all of the Angular libraries and dependencies into a single javascript file `bundle.min.js`
which serves the client-side application

**Development**

To setup your development environment you will need to do the following:
* Install [NodeJS](https://nodejs.org)
* Install the necessary tools: `npm install -g typescript gulp typings`
* Clone this repository to a folder, the following commands are run in the top level directory of this project
* Install npm packages `npm install`
* Install typescript packages `typings install`
* Setup a local [Mongo](https://www.mongodb.com/) instance at `localhost:27017`
* Add a Mongo database named pktDB, populate `events` and `leaders` collections with seed data

Sample Event Object
```javascript
{
    "day" : "Monday, September 5th",
    "title" : "Cookout at Oak Lane",
    "img" : "https://s3.amazonaws.com/pkt-images/campus.jpg",
    "body" : "Grilling at Phi Tau house. Bring your friends, your dog, and your parents! Come eat the free food.",
    "time_of_day" : "4-6pm",
    "active" : true,
    "location" : "Phi Kappa Tau House @ Oak Lane. 77B Oak Lane.",
    "priority" : 0
}
```

Sample Leader Object
```javascript
    "priority" : 2,
    "title" : "Treasurer",
    "firstname" : "Zakk",
    "lastname" : "Lefkowits",
    "email" : "zakkl13@vt.edu",
    "image" : "https://s3.amazonaws.com/pkt-images/zakk.jpg",
    "active" : true
```
Note: in the above examples, the `priority` property determines the order of the events (0 is first), and the active switch
can be used to toggle whether the object is returned by the API or not.

You are now ready to develop, make changes then run `gulp build:prod` (alternate build for development is being... developed) and run
`npm start` and you should see the application running at `localhost:3000`. While the app is running you may use convenience tasks
such as `gulp dev:frontend` which re-copies all .html, .css, and image files into the public folder without requiring a build or application restart.

### Core Roadmap
* Test Test Test
* Central logging
* JSON schemas and validation for REST API
* Use AWS API gateway for better control and safety with REST API
* Interfaces for modifying data and corresponding PUT routes (requires API authentication)
* Transition project to next fraternity webmaster

### Planned Features
* Leaders detail view
* Phitauberfest philanthropy information (and possibly more) page
* Alumni section - including alumni updated-contact-information collection, contact to current VP of Alumni Relations, donation collection
* VT PKT Alumni directory, - likely accesible to members only

### Marketing
* Include URL on A-Frames around campus
* Include URL on handouts
* Have URL in email signatures
* Use site for philanthropy purposes to drive traffic
* vtPKT.com stickers

### Credits
Thanks to:
* https://github.com/vladotesanovic/angular2-express-starter
* https://github.com/excellalabs/minimal-mean
