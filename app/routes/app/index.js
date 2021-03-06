import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      bots: this.get('store').findAll('bot'),
    });
  }
});
