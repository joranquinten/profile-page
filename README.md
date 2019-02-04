# Profile page

## Introduction

This is an example profile page. Feel free to modify to suit your own needs. For text updates, modify the `data/nl.js` file. Otherwise you'd have to modify the code.

The repo has been built with [ReactJS](https://reactjs.org/) and uses [NextJS](https://nextjs.org/), [Styled Components 💅](https://www.styled-components.com/) & [Ant Design](https://ant.design/) under the hood.

Testing is done by [Jest](https://jestjs.io/) with [AirBnB's Enzyme](https://airbnb.io/enzyme/) for validation snapshots.

The idea is that you can use NextJS to generate a static website, while leveraging JavaScript for repetetive tasks and interactivity.

## Getting started

Clone or fork [this repo](https://github.com/joranquinten/profile-page) to your local machine and run `npm i` to install the dependencies. This repo roughly follows guidelines by NextJS, so the tasks should look pretty nominal.

### Tasks

Tasks are listed under `package.json`'s scripts. In order of a normal flow:

- `npm run dev`: Runs a dev server on your localhost:3000 address. For developing purposes
- `npm run lint`: Manual linting of the code (Pro tip: prettier adheres to the `.eslintrc` and can format your code on save!)
- `npm run test`: Runs Jests unit tests on the code
- `npm run test:coverage`: Runs the unit tests and provides a coverage report
- `npm run prebuild`: A combination of the unit tests and linting
- `npm run build`: Uses NextJS to create an export
- `npm run production`: Triggers the build but sets the NODE_ENV to production

The output of the build tasks is placed in the `./out` folder and is ready to be served!

## And finally...

This repos is completely Open Source in the way that if you fork the code, you are free to do whatever you please with the code, structure and styling.

Enjoy ✌️
