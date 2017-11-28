import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'li',
  classNames: ['bot-list-item'],

  telegramBotId: computed(function() {
    return 'telegram_bot_' + this.attrs.data.id;
  }),

  whatsupBotId: computed(function() {
    return 'whatsup_bot_' + this.attrs.data.id;
  }),

  actions: {
    toggleTelegram(e) {
      e.preventDefault();
      this.toggleProperty('data.telegram')
    },

    toggleWhatsup(e) {
      e.preventDefault();
      this.toggleProperty('data.whatsup')
    }
  }
});
