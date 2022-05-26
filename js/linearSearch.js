const arrayToSearchThrough = [];
for (let i = 1; i <= 1000; i++) {
    arrayToSearchThrough.push(i);
}

exports.linearSearch = function(valueToFind, arrayToSearchThrough) {
  for(let i = 0; i < arrayToSearchThrough.length; i++) {
    if(valueToFind === arrayToSearchThrough[i]) {
      return i;
    }
  }
  return undefined;
};

exports.linearSearchGlobal = function(valueToFind, arrayToSearchThrough) {
  let res = [];
  for(let i = 0; i < arrayToSearchThrough.length; i++) {
    if(valueToFind === arrayToSearchThrough[i]) {
      console.log(i);
      res.push((function() {
        return i;
      })())
    }
  }
  return res;
}
