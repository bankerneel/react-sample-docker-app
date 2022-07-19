# A Sample React App using Docker

A Sample [React.js](https://reactjs.org/) Application Boilerplate with [Docker](https://www.docker.com/) created using [create-react-app](https://create-react-app.dev/).

---

## Pre-Requirements for the project

For development, you will need `Docker`, `Node.js`, a node global package like `npm`, `pnpm` or `yarn`, installed in your environment.

## Requirements Installations

### Docker

- #### [docker](https://docker.com) Installation

  You can download and install Docker on multiple platforms from [docs.docker.com](https://docs.docker.com).

  [Windows](https://docs.docker.com/desktop/install/windows-install/),
  [Mac](https://docs.docker.com/desktop/install/mac-install/) and
  [Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

- #### [docker-compose](https://docs.docker.com/compose/) Installation

  You can download and install docker-compose on multiple platforms from docs for [Windows, Mac & Ubuntu](https://docs.docker.com/compose/install/compose-desktop/)

### Node Installation

Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      sudo apt install nodejs
      sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/), [official NPM website](https://npmjs.org/), [official PNPM website](https://pnpm.io/installation) and [official YARN website](https://yarnpkg.com/getting-started).

If the installation was successful, you should be able to run the following command.

    node --version
    v14.18.1

    npm --version
    6.14.15

    pnpm --version
    7.5.1

    yarn --version
    1.22.10

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    npm install npm -g

###

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Installing the project dependencies

    git clone https://github.com/bankerneel/react-sample-docker-app
    cd react-sample-docker-app

- ### With NPM

        npm install

- ### With PNPM

        pnpm install

- ### With YARN

        yarn install

- ### Running the project in dev-mode

        npm start

- ### Simple build for production

        npm run build
        npm install -g serve
        serve -s build

<p align="right">(<a href="#top">back to top</a>)</p>

## Creating Docker build

- ### Dev Mode

        docker build -f Dockerfile.dev -t $CONTAINER_NAME .

- ### Production Mode

        docker build -f Dockerfile.prod -t $CONTAINER_NAME .

## Running the Docker image

- ### Dev Mode

        docker run -p 3000:3000 $CONTAINER_NAME

- ### Production Mode

        docker run -p 80:80 -d $CONTAINER_NAME

<p align="right">(<a href="#top">back to top</a>)</p>

## Docker build using [docker-compose](https://docs.docker.com/compose/)

- ### Dev Mode

        docker-compose -f docker-compose.dev.yaml up -d --build

- ### Production Mode

        docker-compose -f docker-compose.prod.yaml up -d --build

- ### Running the App
  - GO to http://localhost:3000 for dev mode
  - GO to http://localhost:80 for production mode
  <p align="right">(<a href="#top">back to top</a>)</p>

#

<!-- CONTRIBUTING -->

## Contributing

- Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

- If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag `"enhancement"`.
Don't forget to give the project a star! Thanks again!

    1. Fork the Project
    2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
    3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
    4. Push to the Branch (`git push origin feature/AmazingFeature`)
    5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

---
