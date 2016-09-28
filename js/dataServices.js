angular.module('quoteBook').service('dataService', function() {
  
    var quotes = [
    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  ];
  
  this.getData = function() {
    return quotes;
  };
  /*addData takes in a data object, verifies that data object has the 
  proper keys (just text and author), then adds that object 
  to the end of the quotes array*/
  this.addData = function (newQuote) {
    if(newQuote.text && newQuote.author) {
      quotes.push(newQuote);
      return true;
    }
      return false;
  };
  /*removeData takes in the text of a quote, loops through the quotes array, 
  then removes the proper quote from the array.*/
  this.removeData = function(textToRemove) {
    for(var i = 0; quotes.length; i++) {
      if(quotes[i].text.toLowerCase() === textToRemove.toLowerCase()) {
        quotes.splice(i--, 1);
      }
    } 
  };
  
});