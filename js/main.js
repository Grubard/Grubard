// Import our core files
import angular from 'angular';

// Import jQuery and Foundation and Motion-UI
import $ from 'jquery';
import 'foundation';
import 'motion-ui';

// Import run to watch state change
import run from './run';

// Import our sub modules
import './app-core/index';
import './app-layout/index';
import './app-default/index';

// Start Foundation
$(document).foundation();

angular
  .module('app', ['app.core', 'app.layout', 'app.default'])
  .run(run)
;
