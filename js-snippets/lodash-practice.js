var baseIsArguments = noop;
var isArray = Array.isArray;

  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  function isFlattenable(value) {
    return isArray(value) || isArguments(value);
  }

  var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
      !propertyIsEnumerable.call(value, 'callee');
  };

  function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1,
        length = array.length;

    predicate || (predicate = isFlattenable);
    result || (result = []);

    while (++index < length) {
      var value = array[index];
      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          // Recursively flatten arrays (susceptible to call stack limits).
          baseFlatten(value, depth - 1, predicate, isStrict, result);
        } else {
          arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }

function baseSlice(array, start, end) {
    var index = -1,
        length = array.length;

    if (start < 0) {
      start = -start > length ? 0 : (length + start);
    }
    end = end > length ? length : end;
    if (end < 0) {
      end += length;
    }
    length = start > end ? 0 : ((end - start) >>> 0);
    start >>>= 0;

    var result = Array(length);
    while (++index < length) {
      result[index] = array[index + start];
    }
    return result;
  }
function copyArray(source) {
    return baseSlice(source, 0, source.length);
}
function arrayPush(array, values) {
    array.push.apply(array, values);
    return array;
}

function concat() {
    var length = arguments.length;
    if (!length) {
        return [];
    }
    var args = Array(length - 1),
        array = arguments[0],
        index = length;
    while (index--) {
        args[index - 1] = arguments[index];
    }
    return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
}

var array = [1];
var other = concat(array, 2, [3], [[4]]);
console.log(other);
// => [1, 2, 3, [4]]
