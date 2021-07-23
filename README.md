<p align="center">    
    <h3 align="center">MEAN Stack with Ionic</h3>
    <p align="center">       
        <br />       
        <a href="https://github.com/IvanPenyaHuguet/pulpo-angular-nodeissues">Report Bug</a>
        <br />
        <a href="https://github.com/IvanPenyaHuguet/pulpo-angular-nodeissues">Request Feature</a>
    </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

This project is a sample application for pulpo, it is a monorepo with nx with two packages client with angular and backend with nodejs and mongodb database (MEAN Stack). Monorepo is good for scalability, because it separates front and back code, while keeps all the programmers working on the same repository.
Because both packages are in JS node_modules and some parts of code are reusable.

### Built With

- [Angular](https://angular.io)
- [Ionic](https://ionicframework.com)
- [Nx](https://nx.dev)
- [Node](https://nodejs.org/es/)
- [Express](https://expressjs.com/es/)
- [MongoDB](https://www.mongodb.com/es)

Top innovative technologies of the MEAN stack with ionic for mobile applications.

<!-- GETTING STARTED -->

## Getting Started

0. Requisites: You need npm, docker, and libraries from cypress if you want the e2e testing.
1. Clone the repo
2. Initialize the docker container of db. But first if you are in windows modify
   the docker-compose.yml file, deleting the volume or changing it.
   If you are in linux do the same or execute.
   ```sh
   mkdir /tmp/mongo
   ```
   ```sh
   sudo chown -R 1001 /tmp/mongo
   ```
   Start docker container:
   ```sh
   docker-compose up -d
   ```
3. Now install dependencies with:
   ```sh
   npm install
   ```
4. Start dev mode with:
   ```sh
   npx nx run-many --target=serve --projects=pulpoapp,pulposerver --parallel
   ```
   If it fails because the dabatase has been not created (sometimes docker fails), then you can create it manually with command or mongo-express, the db name is: pulpodb
5. Cypress (not tests implemented yet) can be launch with, you might need to install if it throws an error.
   ```sh
   npx nx e2e
   ```

<!-- CONTACT -->

## Contact

Iván Peña Huguet - ivanpenyahuguet@gmail.com

Project Link: [LINK](https://github.com/IvanPenyaHuguet/pulpo-angular-node)
