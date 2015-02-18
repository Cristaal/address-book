$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedStreet1 = $("input#new-street1").val();
    var inputtedStreet2 = $("input#new-street2").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedState = $("input#new-state").val();
    var inputtedZip = $("input#new-zip").val()

    var newAddress = { street1: inputtedStreet1,
                       street2: inputtedStreet2,
                       city: inputtedCity,
                       state: inputtedState,
                       zip: inputtedZip,
                       fullAddress: function() {
                         if ((/([\w])/).test(this.street2)) {
                           return this.street1 + ', ' + this.street2 + ', ' + this.city + ', ' + this.state + ', ' + this.zip;
                         } else {
                           return this.street1 + ', ' + this.city + ', ' + this.state + ', ' + this.zip;
                         }
                       }
                      };

    var newContact = { firstName: inputtedFirstName,
                       lastName: inputtedLastName,
                       address: newAddress.fullAddress()
                     };

    $("ul#contacts").append("<li><span class='contact'>" +
                           newContact.firstName + " " +
                           newContact.lastName +
                           "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-street1").val("");
    $("input#new-street2").val("");
    $("input#new-city").val("");
    $("input#new-state").val("");
    $("input#new-zip").val("");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
      $(".address").text(newContact.address);
    });
  });
});
