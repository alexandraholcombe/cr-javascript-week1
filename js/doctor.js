var lookup = require('./../js/doctorlookup.js').lookupModule;

Doctor = function(){
}

Doctor.prototype.makeDoctor = function(physician, doctorPractices){
  this.physician = physician;
  this.practices = doctorPractices;
}

exports.doctorModule = Doctor;
