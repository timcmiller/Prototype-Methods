
var timPush = module.exports.timPush = function(arr) {

  for (var i = 0; i < arguments.length - 1; i++) {
    arr[arr.length] = arguments[i + 1];
  }

  return arr.length;
};

var timPop = module.exports.timPop = function(arr) {

  var value = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return value;

};

var timShift = module.exports.timShift = function(arr) {

  var value = arr[0];

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;
  return value;
};

var timUnshift = module.exports.timUnshift = function(arr) {

  for (var i = arr.length; i > 0; i--){
    arr[i + arguments.length - 2] = arr[i - 1];
  }

  for (i = 0; i < arguments.length - 1; i++) {
    arr[i] = arguments[i + 1];
  }

  return arr.length;
};

var timUnique = module.exports.timUnique = function(arr) {
  unique = [];
  tempObj = {};

  for(var i = 0, j = 0; i < arr.length; i++) {

    if (tempObj[arr[i]] === undefined) {
      tempObj[arr[i]] = 'defined';
      unique[j] = arr[i];
      j++;
    }
  }
  return unique;
};

var timFrequency = module.exports.timFrequency = function(arr) {
  var obj = {};
  var key;

  for (var i = 0, j= 0; i < arr[j].length; i++) {

    if (obj[arr[j][i]]) {
      obj[arr[j][i]]++;

      if(obj[arr[j][i]] > obj[key]) {
        key = arr[j][i];
      }
    }

    if (!obj[arr[j][i]]) {
      obj[arr[j][i]] = 1;
      if(!key) {
        key = arr[j][i];
      }
    }

    if(!arr[j][i + 1] && arr[j + 1]) {
      i = -1;
      j++;
    }
  }

  var answer = (key + ' ' + obj[key] + ' times');
  return answer;
};
