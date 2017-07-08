import Ember from 'ember';

let C = Ember.Component.extend({
  result: Ember.computed('params', function() {
    return JSON.stringify(this.get('params'));
  })
});

C.reopenClass({
  positionalParams: 'params'
});

export default C;
