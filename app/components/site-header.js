import Component from '@ember/component';

export default Component.extend({
  tagName: 'header',
  classNames: ['header'],
  init() {
    this._super(...arguments);

    this.menuItems = [
        {
          title: 'Sign up',
          link: 'register',
        },
      ];
  },
});
