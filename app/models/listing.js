import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.belongsTo('category', { async: true}),
  author: DS.attr(),
  title: DS.attr(),
  content: DS.attr(),
  date: DS.attr(),
  price: DS.attr(),
  city: DS.attr(),
  state: DS.attr(),
  imageUrl: DS.attr()
});
