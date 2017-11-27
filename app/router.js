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
    this.route('bots', function() {
      this.route('create');
      this.route('settings', {path: '/:bot_id/settings'});
    });
    this.route('stats');
    this.route('settings');
    this.route('reset-password');
  });
});

export default Router;
