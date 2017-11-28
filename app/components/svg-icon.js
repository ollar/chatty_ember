import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  width: computed('width', function() {
    return this.attrs.width || 30;
  }),

  height: computed('height', function() {
    return this.attrs.height || 30;
  }),
});
