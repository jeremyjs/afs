/* This will serve as an example file for how to create Parse classes that can be used with Angular. */
const Campaign = class Campaign {
  //create a constructor that accepts defaults, an object with `key: value` pairs that correspond to Parse columns
  constructor(defaults) {
    // Start by extending the Parse object this class is associated with and assigning it to the class with the `this` operator
    // Naming convention should be be _ClassName.
    this._Campaign = new (Parse.Object.extend("Campaign"))();
    for(let k in defaults) {
      //Loop over default values and set them;
      if(defaults.hasOwnProperty(k)) {
          var [key, value] = [k, defaults[k]];
          this._Campaign.set(key, value);
      }
    }
  }
  // Each Parse Column needs a getter and setter here for it to work with Angular
  // We also can do some validation here.
  set CommunityId(val) {
    // CommunityId
    this._Campaign.set("CommunityId", val);
  }
  set ShelterId(val) {
    // ShelterId
    this._Campaign.set("ShelterId", val);
  }
  set Description(val) {
    // String
    if(typeof val !== "string") {
      throw new IncorrectValueTypeException("Expected String, got", typeof val);
    }
    this._Campaign.set("Description", val);
  }
  set Verified(val) {
    // Boolean
    if(typeof val !== "boolean") {
      throw new IncorrectValueTypeException("Expected Boolean, got", typeof val);
    }
    this._Campaign.set("Verified", Boolean(val));
  }

  get CommunityId() {
    // CommunityId
    this._Campaign.get("CommunityId");
  }
  get ShelterId() {
    // ShelterId
    this._Campaign.get("ShelterId");
  }
  get Description() {
    // String
    this._Campaign.get("Description");
  }
  get Verified() {
    // Boolean
    return this._Campaign.get("Verified");
  }
  // Each object needs a way to be saved. Some
  save() {
    // Returning this let's us use it as a promise
    return this._Campaign.save()
  }
}
