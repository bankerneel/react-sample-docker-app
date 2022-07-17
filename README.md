# A Sample React App using Docker

A Sample [React.js](https://reactjs.org/) Application Boilerplate with [Docker](https://www.docker.com/) created using [create-react-app](https://create-react-app.dev/).

---

## Pre-Requirements for the project

For development, you will need `Docker`, `Node.js`, a node global package like `npm`, `pnpm` or `yarn`, installed in your environment.

## Requirements Installations

### Docker

- #### Docker Installation

  You can download and install Docker on multiple platforms from [docs.docker.com](https://docs.docker.com).

  [Windows](https://docs.docker.com/desktop/install/windows-install/),
  [Mac](https://docs.docker.com/desktop/install/mac-install/) and
  [Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

### Node Installation

Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/), [official NPM website](https://npmjs.org/),[official PNPM website](https://pnpm.io/installation) and [official YARN website](https://yarnpkg.com/getting-started).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.18.1

    $ npm --version
    6.14.15

    $ pnpm --version
    7.5.1

    $ yarn --version
    1.22.10

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

---

## Installing the project dependencies

    $ git clone https://github.com/bankerneel/react-sample-docker-app
    $ cd react-sample-docker-app

## With NPM

    $ npm install

## With PNPM

    $ pnpm install

## With YARN

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
