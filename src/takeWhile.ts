import type {testFn} from './_types';

/**
 * Extracts values till a test passes.
 * @param x an iterable
 * @param fn test function (v, i, x)
 * @param ths this argument
 */
function* takeWhile<T>(x: Iterable<T>, fn: testFn<T>, ths: object=null): IterableIterator<T> {
  var i = -1;
  for(var v of x) {
    if(!fn.call(ths, v, ++i, x)) return;
    yield v;
  }
}
export default takeWhile;
