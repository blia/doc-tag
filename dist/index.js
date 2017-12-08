'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var dict = new WeakMap();
var isFrozenArray = function isFrozenArray(val) {
  return Array.isArray(val) && Object.isFrozen(val);
};
var isTemplateObject = function isTemplateObject(val) {
  return isFrozenArray(val) && isFrozenArray(val.raw);
};
var isPromise = function isPromise(val) {
  return typeof val.then === 'function';
};

var doc = exports.doc = function doc(first) {
  for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  if (isTemplateObject(first)) {
    return function (subj) {
      var desc = String.raw.apply(String, [first].concat(_toConsumableArray(keys.map(function (key) {
        return subj[key];
      }))));
      if (isPromise(subj)) {
        dict.set(subj, '[In Promise] ' + desc);
        subj.then(function (data) {
          if (data) {
            var newDesc = String.raw.apply(String, [first].concat(_toConsumableArray(keys.map(function (key) {
              return data[key];
            }))));
            dict.set(subj, newDesc);
          } else {
            dict.set(subj, desc);
          }
        });
      } else {
        dict.set(subj, desc);
      }
      return subj;
    };
  }

  return dict.get(first) || 'Undocumented subject';
};

exports.default = doc;
