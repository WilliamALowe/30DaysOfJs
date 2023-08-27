// Write a function expect that helps developers test 
// their code. It should take in any value val and return 
// an object with the following two functions

/**
 * @param {string} val
 * @return {Object}
 */

let expect = function(val) {
  return {
      toBe: (val2) => {
          if (val !== val2){
            console.log("Values are not equal");
          } else return true;
      },
      notToBe: (val2) => {
          if (val === val2) {
            console.log("Values are equal");
          } else return true;
      }
  }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Values are equal"
 */