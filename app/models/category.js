import DS from 'ember-data';

export default DS.Model.extend({
  pattern: DS.attr('string'),
  template: DS.attr('string'),

  botId: DS.belongsTo('bot')
});
