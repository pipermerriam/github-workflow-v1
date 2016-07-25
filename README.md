# Github Workflow

This project is designed to help students learn the basics of the Github
workflow.

# Initialization Instructions

1. Create a new public github repository and copy this directory (including
   hidden files) into the new repository.
2. Enable Travis-CI on the repository.
3. Commit all of the files into the repository and push.
4. Optionally create tickets/issues for all of the features that are not yet
   implemented.


# Setup Instructions

Install Dependencies

```shell
$ npm install
```


# Testing

Testing is done with `jasmine-node`.

```shell
$ jasmine-node spec/
```

Alternatively you can run the tests with `npm`


```shell
$ npm test -s
```


# Code Linting

Linting is done using `jslint`.

```shell
$ jslint index.js src/
```

Alternatively you can run the tests with `npm`

```shell
$ npm run lint -s
```
