var lookup = require('./../js/doctorlookup.js').lookupModule;

$(function(){
  var newLookup = new Lookup();
  function showPractice(input){
    $('#results').append('<li>' + input + '</li>');
  }
  $('#symptom-form').submit(function(event){
    event.preventDefault();
    var medicalIssue = $('#symptom').val();
    $('#symptom').val("");
    $('#results').empty();

    newLookup.getDoctors(medicalIssue, showPractice);
  })
})
