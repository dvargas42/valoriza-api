<h1 align="center">
  <img alt="Logo" src="https://res.cloudinary.com/dvargas42/image/upload/v1624849560/valoriza/valoriza_z4gn20.png" width="400px">

<h3 align="center">
  An API made in NodeJS for Valoriza Project.
</h3>

<p align="center">The best way to send a message to those you admire!</p>

<p align="center">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/dvargas42/valoriza-api?color=red">

  <a href="https://www.linkedin.com/in/daniel-santos-040983ab/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Daniel%20Vargas-red">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/dvargas42/valoriza-api?color=red">

  <a href="https://github.com/dvargas42/valoriza-api/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/dvargas42/valoriza-api?color=red">
  </a>

  <a href="https://github.com/dvargas42/valoriza-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/dvargas42/valoriza-api?color=red">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/dvargas42/valoriza-api?color=red">
</p>



<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;|&nbsp;
  <a href="#-screnshots">Screenshots</a>&nbsp;|&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;|&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;|&nbsp;
  <a href="#-route-structure">Route structure</a>&nbsp;|&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;|&nbsp;
  <a href="#-license">License</a>
</p>

&nbsp;

## 💇🏼 About the project

This app was part of a challenge to test the ability to implement features in an API built with NodeJS. Among the applied knowledge are: creation of routes, creation of middlewares, creation of global error objects, creation of authentication routes using JWT, creation of business rules that were divided into services, among others.

&nbsp;

## 📸 Sreenshots

Images of the application in operation.

<p align="center">
<img alt="ScreenShot01" src="https://res.cloudinary.com/dvargas42/image/upload/v1624849852/valoriza/valoriza-api9_hg1ct4.png" width="400px">
<img alt="ScreenShot02" src="https://res.cloudinary.com/dvargas42/image/upload/v1624849851/valoriza/valoriza-api8_wtzmoj.png" width="400px">
</p>
<p align="center">
<img alt="ScreenShot03" src="https://res.cloudinary.com/dvargas42/image/upload/v1624849852/valoriza/valoriza-api10_prxk27.png" width="400px">
<img alt="ScreenShot04" src="https://res.cloudinary.com/dvargas42/image/upload/v1624849849/valoriza/valoriza-api_gynpm1.png" width="400px">
</p>
<p align="center">
<img alt="ScreenShot03" src="https://res.cloudinary.com/dvargas42/image/upload/v1624849851/valoriza/valoriza-api5_wmqwwb.png" width="400px">
<img alt="ScreenShot04" src="https://res.cloudinary.com/dvargas42/image/upload/v1624849850/valoriza/valoriza-api7_auqrej.png" width="400px">
</p>

&nbsp;

## 🚀 Technologies

Technologies that I used to develop this web application


- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Type ORM](https://typeorm.io/#/)
- [BcryptJS](https://www.npmjs.com/package/bcryptjs)
- [JSON Web Token](https://jwt.io/)
- [Express Async Errors](https://www.npmjs.com/package/express-async-errors)
- [PostgreSQL](https://www.postgresql.org/)
- [Date FNS](https://date-fns.org/)
- [Class Transformer](https://github.com/typestack/class-transformer) 

&nbsp;

## 💻 Getting started

To run this application you will need to have Docker installed on your PC. However, no need to worry, at the root of this project we have a Dockerfile script that will create the DBMS with the necessary database. After that, just run the migrations and the tables will be created automatically. Below I leave a step-by-step to prepare your environment.

Attention, even after all this the database will be empty. If you want, you can download our front-end from this site or use a tool like Insomnia or Postmann to manipulate the routes.



- [valoriza-frontend](https://github.com/dvargas42/valoriza-frontend) (Under construction)



### Requirements

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)


**Clone the project and access the folder**

```bash
$ git clone https://github.com/dvargas42/valoriza-api.git
```

**Follow the steps below**

It will be necessary to create a database so that our api can persist the data

Make sure the Docker is installed with the following command:

```bash
$ docker version
```
If not, just install it using the links below.

For Windows and Mac:

- [Docker Windows / Mac](https://docs.docker.com/desktop/)

For Linux:

- [Docker Linux](https://docs.docker.com/engine/install/)


Now run enter command that will create a postgres Docker image already with nlw database.

```bash
$ docker run --name nlw06 \
-e POSTGRES_PASSWORD=postgres \
-e POSTGRES_USER=postgres \
-e POSTGRES_DB=nlw \
-p 5432:5432 -d postgres
```

Make sure the Docker image is running with the command below

```bash
$ docker ps
```

If not, just type the command below to upload the container

```bash
$ docker start nlw06
```


**In another terminal tab or terminal window**

```bash
# Install the dependencies
$ yarn

# Finally to create the tables, just run the migrations
$ yarn typeorm migration:run

# To finish, run the app 
$ yarn dev:server

```
&nbsp;

## 🛰 Routes structure

```bash

├── /users
│     │
│     ├── / -> (POST method) Create User
│     │
│     └── / -> (GET method) List User Data
│
├── /tags
│     │
│     ├── / -> (POST method) Create Tag
│     │
│     └── / -> (GET method) List User Tags
│
├── /compliments
│     │
│     ├── / -> (POST method) Create Compliments
│     │  
│     ├── /send -> (GET method) List Sended Compliments
│     │
│     └── /receive -> (GET method) List Received Compliments
│
└── /sessions
      │
      └── / -> (POST method) Create Session

```
&nbsp;

### **Route Users (./users)**

*(/ ) POST Method - Create user*

Input:
```bash
{ name, email, admin?, password }
```
Return:
```bash
{ name, email, admin, password } #passwordHash
```

*(/ ) GET Method - List users*

Input:
```bash
{ } # Just the JWT
```
Return: 
```bash
# user: { id, name, email, admin, created_at, updated-at }

user[] 
```
&nbsp;

### **Route Tags (./tags)**

*(/ ) POST Method - Create tag*

Input:
```bash
{ name }
```
Return:
```bash
{ id, name, nameCustom, created_at, updated-at }
```

*(/ ) GET Method - List tags*

Input:
```bash
{ } # Just the JWT
```
Return:
```bash
# tag: { id, name, nameCustom, created_at, updated-at }

tag[] 
```
&nbsp;

### **Route Compliments (./compliments)**

*(/ ) POST Method - Create compliment*

Input:
```bash
{  tag_id, user_receiver, message }
```
Return:
```bash
{ id, user_sender, user_receiver, tag_id, message, created_at  }
```
*(/send) GET Method - List sended compliments*

Input:
```bash
{ } # Just the JWT
```
Return: 
```bash
# compliment: { id, user_sender, user_receiver, tag_id, message, created_at }

compliment[] 
```
*(/receive) GET Method - List received compliments*

Input:
```bash
{ } # Just the JWT
```
Return: 
```bash
# compliment: { id, user_sender, user_receiver, tag_id, message, created_at }

compliment[] 
```

### **Route Sessions (./sessions)**

*(/ ) POST Method - Create session*

Input:
```bash
{ email, password }
```
Return:
```bash
{ token: JWT }
```

<p align="center">
<a href="https://insomnia.rest/run/?label=Valoriza%20API&uri=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1cSDiDbzCSxhzDGWSO2cEVyEpiVQQNlr9%2Fview%3Fusp%3Dsharing" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

&nbsp;

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork dvargas42/valoriza-api

```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd valoriza-api

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m "My new feature"

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

&nbsp;

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 &nbsp;by Daniel Vargas 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/daniel-santos-040983ab/)