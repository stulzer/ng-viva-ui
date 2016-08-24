# ng-viva-ui
Viva Ui Kit's implementation for AngularJS

[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Installing
You can install via [bower](https://bower.io/):  
`bower install --save ng-viva-ui`  

or [npm](https://www.npmjs.com/):  
`npm i -S ng-viva-ui`

## Links
API Reference: [vivareal.github.io/ng-viva-ui/docs/#/api](http://vivareal.github.io/ng-viva-ui/docs/#/api)

## Contribute  

### Dependencies
- [Node.js 5+](https://nodejs.org/)

### CSS Guidelines
We use BEM for this project, [read the guideline](http://cssguidelin.es/).

### Building
First, run `npm install && npm run installdep`.  
After that you can choose between these options:  
- Run `npm run build` for building, `npm run dev` will do the same but watching for file changes.  
- Run `npm run dev:unbreakable` to avoid breaks on linter errors.  
- Or you can run `npm run dev:unsafe` to ignore linter check.

### Documentation
Run `npm run docs`, a local server will be initialized.

### Testing
Running `npm test` will run the unit tests with karma and `npm run test:continuos` will rerun the unit tests each time a file changes.
