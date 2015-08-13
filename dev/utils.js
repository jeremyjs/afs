/*global IncorrectValueTypeException */

// Helper to throw better errors in Models
function IncorrectValueTypeException(...message) {
  this.message = message.join(" ");
  this.name = "IncorrectValueTypeException";
  this.toString = () => this.name + ": " + this.message;
}
