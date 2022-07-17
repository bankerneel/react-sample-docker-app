# A Sample React App using Docker

An Backend API for the [Loxcoin](https://loxcoin.io) cryptocurrency's current circulating supply.

---

## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environment.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.18.1

    $ npm --version
    6.14.15

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

---

## Install

    $ git clone https://github.com/bankerneel/react-sample-docker-app
    $ cd react-sample-docker-app
    $ npm install
    OR
    $ yarn install

## Running the project in dev-mode

    $ npm start

## Simple build for production

    $ npm run buld
    $ npm install -g serve
    $ serve -s build

#

# Creating Docker build

## Dev Mode

    $ docker build -f Dockerfile.dev -t $CONTAINER_NAME .

## Production Mode

#

    $ docker build -f Dockerfile.prod -t $CONTAINER_NAME .

## Running the Docker image

#

    $ docker run -p 3000:3000 $CONTAINER_NAME

#### OR

#

    $ docker run -p 3000:3000 -d $CONTAINER_ID

---
