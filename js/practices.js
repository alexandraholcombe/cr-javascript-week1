var lookup = require('./../js/doctorlookup.js').lookupModule;

Practice = function(){
}

Practice.prototype.makePractice = function(name, practiceId, newPatients){
  this.name = name;
  this.practiceId = practiceId;
  this.newPatients = newPatients;
}

exports.practiceModule = Practice;
