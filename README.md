Trip Planner
============

[![Build Status](https://travis-ci.org/benjaminhadfield/tripplanner.svg?branch=master)](https://travis-ci.org/benjaminhadfield/tripplanner)

Trip Planner is a platform for friends and family to organise trips together in one place! This is a personal project I'm developing whilst at uni. Pull Requests are more than welcome!

![TripPlanner Dashboard](/readme_assets/images/dashboard%204-12-16.png)

Technologies
------------
- [Django] (https://www.djangoproject.com/) as the server-side framework
  - [REST Framework] (http://www.django-rest-framework.org/) for API development
- [React] (https://facebook.github.io/react/) for front-end UI development
  - [Redux] (http://redux.js.org/) for application state management
  - [Flow] (https://flowtype.org/) for JS type checking
  - [Reselect] (https://github.com/reactjs/reselect) for accessing data from Redux store
- Authentication with [JSON Web Tokens] (https://jwt.io/) using [Auth0] (https://auth0.com/)  

Feature List
------------
**Core Features**
- [x] Map of trip  
- [x] Social login  
- [ ] Travel itinerary  
- [ ] Todo list  
- [ ] Bucket list  

**Optional Features**
- [ ] Blog / Photo log  
- [ ] Trip chat  
- [ ] Price manager / list  
