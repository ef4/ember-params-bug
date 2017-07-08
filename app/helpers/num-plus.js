import Ember from 'ember';

export function numPlus([a,b]) {
  return a + b;
}

export default Ember.Helper.helper(numPlus);
