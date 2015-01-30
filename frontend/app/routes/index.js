import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.filter('tweet', {}, function(tweet) {
      return !tweet.get('isNew');
    });
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    var newTweet = this.store.createRecord('tweet');
    this.controller.set('newTweet', newTweet);
  },

  actions: {
   createTweet: function(tweet) {
     tweet.save();

     var newTweet = this.store.createRecord('tweet');
     this.controller.set('newTweet', newTweet);
   }
 }

});
