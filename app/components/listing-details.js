import Ember from 'ember';

export default Ember.Component.extend({
  formattedDate: moment(this.get('date')).format('YYYYDoMM');
});
