import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('app', function() {
    this.route('bots', function() {});
    this.route('stats');
    this.route('settings');
  });
});

export default Router;
