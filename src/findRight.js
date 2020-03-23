/**
 * Finds last value which satisfies a test.
 * @param {Iterable} x an iterable
 * @param {function} fn test function (v, i, x)
 * @param {object?} ths this argument
 * @returns {*}
 */
function findRight(x, fn, ths=null) {
  var a, i = -1;
  for(var v of x)
    if(fn.call(ths, v, ++i, x)) a = v;
  return a;
}
module.exports = findRight;