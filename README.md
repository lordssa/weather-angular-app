# Weather in my city app

Web app developed with Angular which allow the users search for the current weather conditions in a determined city.

### Prerequisites

* [Angular CLI](https://github.com/angular/angular-cli) - Standard Tooling for Angular Development.
* [Docker](https://www.docker.com) - Container to package up code and all its dependencies
* [Git](https://git-scm.com/downloads) - Open source distributed version control system
* [NodeJS](https://nodejs.org) - JavaScript runtime built on Chrome's V8 JavaScript engine
* [VSCode](https://code.visualstudio.com) - Lightweight source code editor for client-side (Not mandatory)

### Installing

Checkout the code from Github repository inside Eclipse Workspace 
```
$ git clone https://github.com/lordssa/weather-angular-app.git
```
If you will not use docker image, install the dependencies manually running the command.
```
$ npm install 
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Build Docker Image
Run `docker build --rm -f "Dockerfile" -t weatherangularapp:v1 "."` to build a docker image.

## Run Docker Image
Run `docker run --rm -d -p 4200:4200 weatherangularapp:v1`

## Built With

* [Angular](https://angular.io/) - Angular 9.1.0
* [NodeJS](https://nodejs.org) - Node 10
* [Docker](https://www.docker.com) - Docker v18.09
* [Open Weather API](https://openweathermap.org/) - API that provide numerous of geolocation and weather collections.