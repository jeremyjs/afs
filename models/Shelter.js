
const Shelter = class Shelter {

  //create a constructor that accepts defaults, an object with `key: value` pairs that correspond to Parse columns
  constructor (defaults) {
    // Start by extending the Parse object this class is associated with and assigning it to the class with the `this` operator
    // Naming convention should be be _ClassName.
    this._Shelter = new (Parse.Object.extend('Shelter'))();
    for(let k in defaults) {
      if(defaults.hasOwnProperty(k)) {
        var [key, value] = [k, defaults[k]];
        this._Shelter.set(key, value);
      }
    }
  }

  save () {
    // Returning this let's us use it as a promise
    return this._Shelter.save()
  }

  /***********
   * Setters *
   ***********/

  // set shelterId (val) {
  //   // ShelterId
  //   this._Shelter.set('shelterId', val);
  // }

  set title (val) {
    // String
    if(typeof val !== 'string') {
      throw new IncorrectValueTypeException('Expected String, got', typeof val);
    }
    this._Shelter.set('title', val);
  }

  set description (val) {
    // String
    if(typeof val !== 'string') {
      throw new IncorrectValueTypeException('Expected String, got', typeof val);
    }
    this._Shelter.set('description', val);
  }

  set verified (val) {
    // Boolean
    if(typeof val !== 'boolean') {
      throw new IncorrectValueTypeException('Expected Boolean, got', typeof val);
    }
    this._Shelter.set('verified', Boolean(val));
  }

  /***********
   * Getters *
   ***********/

  get id () {
    // ShelterId
    this._Shelter.get('id');
  }

  get title () {
    // String
    this._Shelter.get('title');
  }

  get description () {
    // String
    this._Shelter.get('description');
  }

  get verified () {
    // Boolean
    return this._Shelter.get('verified');
  }

}
