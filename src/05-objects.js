/**
 * createEmptyObject()
 * ---------------------
 * Returns an empty object.
 * Should return a new empty object each time the function is called.
 * @returns {Object}
 *
 * EXAMPLE:
 *  createEmptyObject()
 *  //> {}
 */
function createEmptyObject() {
  let newObj = {};
  return newObj;
}

/**
 * createObjectWithValue()
 * ---------------------
 * Creates an object with the input as a value. The key can be anything.
 * @param {*} val
 * @returns {Object}
 *
 * EXAMPLE:
 *  createObjectWithValue(19);
 *  //> { whateverKey: 19 }
 */
function createObjectWithValue(val) {
  let newObj = {}
  newObj.newKey = val
  return newObj
}

/**
 * createObjectWithKey()
 * ---------------------
 * Creates an object with the input as a key. The value can be anything.
 * @param {*} key
 * @returns {Object}
 *
 * EXAMPLE:
 *  createObjectWithKey("left");
 *  //> { left: false }
 */
function createObjectWithKey(key) {
let newObj = {}
newKey = key 
newObj[newKey] = 7
return newObj
}

/**
 * createObjectWithKeyValuePair()
 * ---------------------
 * Creates an object with the inputs as a key-value pair.
 * @param {*} key
 * @param {*} val
 * @returns {Object}
 *
 * EXAMPLE:
 *  createObjectWithKeyValuePair("left", "right");
 *  //> { left: "right" }
 */
function createObjectWithKeyValuePair(key, val) {
  let newObj = {}
  newObj[key] = val
  return newObj
}

/**
 * getNameFromObject()
 * ---------------------
 * Returns the value of the `name` key from the inputted object.
 * @param {Object} object
 * @returns {*}
 *
 * EXAMPLE:
 *  getNameFromObject({ name: "Jay" });
 *  //> "Jay"
 */
function getNameFromObject(object) {
  let newObj = object
  return newObj.name
}

/**
 * getAgeFromObject()
 * ---------------------
 * Returns the value of the `age` key from the inputted object.
 * @param {Object} object
 * @returns {*}
 *
 * EXAMPLE:
 *  getAgeFromObject({ age: 30 });
 *  //> 30
 */
function getAgeFromObject(object) {
  let newObj = object
  return newObj.age
}

/**
 * addValueToObject()
 * ---------------------
 * Adds the input as a value on the given object. The key can be anything.
 * @param {Object} object
 * @param {*} val
 * @returns {Object}
 *
 * EXAMPLE:
 *  addValueToObject({ left: true }, false);
 *  //> { left: true, key: false }
 */
function addValueToObject(object, val) {
  let newObj = object;
  newObj.newKey = val
  return newObj
}

/**
 * addKeyToObject()
 * ---------------------
 * Adds the input as a key on the given object. The value can be anything.
 * @param {Object} object
 * @param {*} key
 * @returns {Object}
 *
 * EXAMPLE:
 *  addKeyToObject({ right: false }, "left");
 *  //> { right: false, left: true }
 */
function addKeyToObject(object, key) {
  let newObj = object;
  newObj.[key] = 3
  return newObj
}

/**
 * addKeyValuePairToObject()
 * ---------------------
 * Adds the inputted key and value as a key-value pair on the given object.
 * @param {Object} object
 * @param {*} key
 * @param {*} val
 * @returns {Object}
 *
 * EXAMPLE:
 *  addKeyValuePairToObject({ up: true }, "left", false);
 *  //> { up: true, left: false }
 */
function addKeyValuePairToObject(object, key, val) {
  let newObj = object;
  newObj.[key] = val;
  return newObj;
}

/**
 * deleteKeyFromObject()
 * ---------------------
 * Remove the key from the given object. You may use the `delete` keyword.
 * @param {Object} object
 * @param {string} key
 * @returns {Object}
 *
 * EXAMPLE:
 *  deleteKeyFromObject({ left: true, right: false }, "left");
 *  //> { right: false }
 */
function deleteKeyFromObject(object, key) {
    let newObj = object;
    delete newObj.[key]
    return newObj

}

// Do not change any code below this line.
module.exports = {
  createEmptyObject,
  createObjectWithValue,
  createObjectWithKey,
  createObjectWithKeyValuePair,
  getNameFromObject,
  getAgeFromObject,
  addValueToObject,
  addKeyToObject,
  addKeyValuePairToObject,
  deleteKeyFromObject,
};
