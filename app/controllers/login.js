import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    onsubmit(e) {
      e.preventDefault();
    }
  }
});
