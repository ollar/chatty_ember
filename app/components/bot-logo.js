import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['logo-wrapper'],

  initials: computed('data.name', function() {
    if (!this.get('data.name')) return '';
    return this.get('data.name')
      .split(' ')
      .map(item => item[0].toUpperCase())
      .slice(0,2)
      .join('');
  }),
});
