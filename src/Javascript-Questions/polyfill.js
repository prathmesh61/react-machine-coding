// map polyfill
//  map - num.map((item,index,arr)=>())

Array.prototype.Mymap = function (callback) {
  // Error handling and type checking:
  if (typeof callback !== "function") {
    throw new TypeError("callback must be a function");
  }

  // Create a new array to store the results:
  const result = [];

  // Iterate through the original array and apply the callback:
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this)); // Pass element, index, and original array
  }

  // Return the newly created array with transformed elements:
  return result;
};
