import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr('string'),
  created: DS.attr('string'),
  resistance: DS.attr('number'),
  is_critical: DS.attr('boolean')
});
