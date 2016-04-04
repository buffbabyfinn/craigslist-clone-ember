import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    newListingFormShow(){
      this.set('addNewListing', true);
    },
    saveListing(){
      var params = {
        author: this.get('author') ? this.get('author'): "",
        title: this.get('title'),
        content: this.get('content') ? this.get('content'): "",
        price: parseInt(this.get('price')),
        city: this.get('city') ? this.get('city'): "",
        state: this.get('state') ? this.get('state'): "",
        imageUrl: this.get('imageUrl') ? this.get('imageUrl'): "",
        category: this.get('category')
      };
      this.set('addNewListing', false);
      this.sendAction('saveListing', params);
    }
  }
});
