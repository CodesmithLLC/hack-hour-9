/**
 * Make an EventEmitter that
 *
 * Example:
 * let instance = new EventEmitter();
 * let counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
  const output = {};
  output.on = (str, func) => {
    this[str] = func;
  };
  output.trigger = (input, ...rest) => {
    this[input](...rest);
  };
  return output;
}

// testing
// let instance = new EventEmitter();
// let counter = 0;
// instance.on('increment', () => {
//   counter++;
// }); // counter should be 0
// instance.on('print', (str) => {
//   console.log(str);
// });
// console.log('counter should be 0: ' + counter);
// instance.trigger('increment'); // counter should be 1
// console.log('counter should be 1: ' + counter);
// instance.trigger('increment'); // counter should be 2
// console.log('counter should be 2: ' + counter);
// instance.trigger('print', 'hello');

module.exports = EventEmitter;
