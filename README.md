# Phi Kappa Tau Chapter Website

[ ![Codeship Status for zakkl13/PKT](https://codeship.com/projects/5a383150-303c-0134-d38e-7603af744759/status?branch=master)](https://codeship.com/projects/164142)

### Technology Overview
**Infrastructure & Workflow**

Amazon Web Services (AWS) provides the infrastructure for a scalable cloud application. CodeShip.io provides continuous integration into the AWS Elastic Beanstalk service, this
CI/CD (continuous integration - continuous deployment) pipeline allows for the latest version of code to be automatically tested and pushed into production in real time.
Today, code is pushed into a development environment to be manually tested and verified and then deployed to the production environment in Elastic Beanstalk.

![workflow_diagram](http://i.imgur.com/iqzI38i.png)

**Software**

This project is powered by the Mongo, Express, Angular, NodeJS (MEAN) stack along with the typescript language. The Express server framework serves the Angular front-end client
interface which then interacts with the REST API layer provided by Express to store and retrieve data. In the back-end, Express connects directly
to the database layer provided by Mongo DB. Lastly, NodeJS provides provides the runtime environment for Express to run on.

![software_diagram](http://i.imgur.com/uJkIBmE.png)

**Deployment**
To deploy the application, run the following commands:
```
npm install
gulp build:prod
node tools/builder.js
gulp deploy_prep
```

### Roadmap
* Unit Tests!
* Central Logging
* Interface for modifying rush events
* Interface for modifying leaders
* Authentication for above interfaces
* Transition project to next fraternity webmaster


### Marketing
* Include URL on A-Frames around campus
* Include URL on handouts
* Have URL in email signatures
* Use site for philanthropy purposes to drive traffic

### Credits
Thanks to:
* https://github.com/vladotesanovic/angular2-express-starter
* https://github.com/excellalabs/minimal-mean
