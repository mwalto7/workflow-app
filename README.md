# Workflow

## Getting started:
1. Download [Postgres Database](https://postgresapp.com/)
2. Clone this repository. `cd path/to/workflow-app`, run `yarn && npm install`, and finally run
```sh
  (
    export PKG=eslint-config-airbnb;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
```
2. Open two terminals and run `yarn start` in one and `yarn run server` in the other.
3. These routes are available:
  * `http://localhost:3000/` [Home page]
  * `http://localhost:3000/register` [Registration form]
  * `http://localhost:3000/login` [Login form]
  * `http://localhost:8081/graphiql` [Graphiql endpoint]

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).