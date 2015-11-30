## Welcome 

> I used a previous template stack, and added Foundation 6 and Motion-UI so they could interact with Angular and Angular-UI. Enjoy!


## Usage

- Clone this repo
- Run `npm install` to install all necessary dependencies
- Run `gulp start` to start the server and a handful of other tasks


## Assets Installed By Default
- [Angular](https://github.com/angular/angular.js)
- [Ui-Router](https://github.com/angular-ui/ui-routerangular)
- [Normalize CSS](https://necolas.github.io/normalize.css/)

## Assets Setup and ready for use

- [Bourbon](http://bourbon.io/)
- [Neat](http://neat.bourbon.io/)
- [Font Awesome](https://fortawesome.github.io/Font-Awesome/)
- [Foundation 6](http://foundation.zurb.com/)
- [Motion-UI](http://foundation.zurb.com/apps/docs/#!/motion-ui)

#### How to use them?

At the top of your `main.scss` file, just import any of the following:

```scss
@import "bourbon";
@import "neat";
@import "font-awesome";

// Imported by Default
@import 'foundation';
@import 'motion-ui';
@include motion-ui-transitions;
@include foundation-everything;

```

> Note: You probably don't want to use BOTH Bourbon/Neat & Foundation. Just pick one.

## NPM Tools Used

- [Babel](https://babeljs.io/)
- [Browserify](http://browserify.org/)
- [JavaScript Code Style](http://jscs.info/)
- [SASS](http://sass-lang.com/)
- [Mocha](https://mochajs.org/)
- [Chai](http://chaijs.com/)
