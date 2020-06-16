import type {testFn} from './_types';

/**
 * Extracts values from right, while a test passes.
 * @param x an iterable
 * @param fn test function (v, i, x)
 */
function* takeWhileRight<T>(x: Iterable<T>, fn: testFn<T>): IterableIterator<T> {
  var i = -1, a = [];
  for(var v of x) {
    if(fn(v, ++i, x)) a.push(v);
    else a.length = 0;
  }
  yield* a;
}
export default takeWhileRight;
