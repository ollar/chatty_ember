import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  enabled: DS.attr('boolean'),
  created: DS.attr('date'),
  modified: DS.attr('date'),
  logo: DS.attr('string'),

  telegram: DS.attr(),
});
