// Helper to throw better errors in Models
function IncorrectValueTypeException(...message) {
   this.message = message.join(" ");
   this.name = "IncorrectValueTypeException";
   this.toString = function() {return this.name + ": " + this.message;}
}
