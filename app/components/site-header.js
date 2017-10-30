import Component from '@ember/component';

export default Component.extend({
  tagName: 'header',
  classNames: ['header'],
  menuItems: [
    {
      title: 'Sign up',
      link: 'register',
    },
  ]
});
