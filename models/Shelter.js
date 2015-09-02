
const Shelter = class Shelter {

  //create a constructor that accepts defaults, an object with `key: value` pairs that correspond to Parse columns
  constructor (defaults) {
    // Start by extending the Parse object this class is associated with and assigning it to the class with the `this` operator
    // Naming convention should be be _ClassName.
    if(typeof defaults.isValid === 'function' && defaults.isValid()) {
      defaults = defaults.attributes;
    }

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

  // Schema
  // Address: Object { line1, line2, city, state, zipcode }
  // Description: String
  // Email: String
  // Location: GeoPoint
  // Name: String
  // Phone: String
  // Verified: Boolean
  // CreatedAt: Date
  // UpdatedAt: Date

  /***********
   * Setters *
   ***********/

  set name (val) {
    if(typeof val !== 'string') {
      throw new IncorrectValueTypeException('Expected String, got', typeof val);
    }
    return this._Shelter.set('name', val);
  }

  set email (val) {
    if(typeof val !== 'string') {
      throw new IncorrectValueTypeException('Expected String, got', typeof val);
    }
    return this._Shelter.set('email', val);
  }

  set phone (val) {
    if(typeof val !== 'string') {
      throw new IncorrectValueTypeException('Expected String, got', typeof val);
    }
    return this._Shelter.set('phone', val);
  }

  set address (val) {
    if(typeof val !== 'object') {
      throw new IncorrectValueTypeException('Expected Object, got', typeof val);
    }
    val = _.extend({}, {
      line1:   val.line1,
      line2:   val.line2,
      city:    val.city,
      state:   val.state,
      zipcode: val.zipcode,
    });
    return this._Shelter.set('address', val);
  }

  set location (val) {
    // TODO: check that val is a geopoint or equivalent
    return this._Shelter.set('location', val);
  }

  set description (val) {
    if(typeof val !== 'string') {
      throw new IncorrectValueTypeException('Expected String, got', typeof val);
    }
    return this._Shelter.set('description', val);
  }

  set verified (val) {
    if(typeof val !== 'boolean') {
      throw new IncorrectValueTypeException('Expected Boolean, got', typeof val);
    }
    return this._Shelter.set('verified', Boolean(val));
  }

  /***********
   * Getters *
   ***********/

  get id ()          { return this._Shelter.get('id')           }
  get name ()        { return this._Shelter.get('name');        }
  get email ()       { return this._Shelter.get('email');       }
  get phone ()       { return this._Shelter.get('phone');       }
  get address ()     { return this._Shelter.get('address');     }
  get location ()    { return this._Shelter.get('location');    }
  get description () { return this._Shelter.get('description'); }
  get verified ()    { return this._Shelter.get('verified');    }
  get createdAt ()   { return this._Shelter.get('createdAt');   }
  get updatedAt ()   { return this._Shelter.get('updatedAt');   }

}
