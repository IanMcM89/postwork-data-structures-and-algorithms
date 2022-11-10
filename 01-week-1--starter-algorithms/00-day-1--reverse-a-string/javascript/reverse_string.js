function reverseString(str) {
  let result = [];
  [...str].forEach((e, i) => result.push(str[(str.length-1)-i]));
  // console.log(result);
  return result.join('');
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'gnirts'");
  console.log("=>", reverseString("string"));

  console.log("");

  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
/**************************************************
 * initialize empty array called result
 * 
 * convert string to array and iterate over each item:
 *    new index of item equals length of string decremented by 1 minus the item index
 *    push item into result
 * 
 * return result array
 * ************************************************/

// And a written explanation of your solution
/**************************************************

 * ************************************************/
