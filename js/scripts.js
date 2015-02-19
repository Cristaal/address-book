$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                '<div class="form-group">' +
                                   '<label for="new-street1">Address Line 1</label>' +
                                   '<input type="text" class="form-control new-street1" placeholder="Street Address, P.O. box, company name, c/o">' +

                                  '</div>' +
                                  '<div class="form-group">' +
                                   '<label for"new-street2">Address Line 2</label>' +
                                   '<input type="text" class="form-control new-street2" placeholder="Apartment, suite, unit, building, floor, etc.">' +

                                   '</div>' +
                                   '<div class="form-group">' +
                                     '<label for="new-city">City</label>' +
                                      '<input type="text" class="form-control new-city" placeholder="City">' +

                                    '</div>' +
                                    '<div class="form-group">' +
                                      '<label for="new-state">State</label>' +
                                      '<input type="text" class="form-control new-state" placeholder="State">' +

                                      '</div>' +
                                    '</div>');
  });
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, addresses: [] };

    $(".new-address").each(function(){
      var inputtedStreet1 = $("input#new-street1").val();
      var inputtedStreet2 = $("input#new-street2").val();
      var inputtedCity = $("input#new-city").val();
      var inputtedState = $("input#new-state").val();
      var inputtedZip = $("input#new-zip").val();

      var newAddress = { street: inputtedStreet1, street2: inputtedStreet2, city: inputtedCity, state: inputtedState,
        fullAddress: function() {
          if ((/([\w])/).test(this.street2)) {
            return this.street1 + ', ' + this.street2 + ', ' + this.city + ', ' + this.state + ', ' + this.zip;
          } else {
            return this.street1 + ', ' + this.city + ', ' + this.state + ', ' + this.zip;
          }
        }
      };
      newContact.addresses.push(newAddress);
    });

    $("ul#contacts").append("<li><span class='contact'>" +
                           newContact.firstName + " " +
                           newContact.lastName +
                           "</span></li>");
  });


    $(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
      $(".address").text(newContact.address);
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-street1").val("");
    $("input#new-street2").val("");
    $("input#new-city").val("");
    $("input#new-state").val("");
    $("input#new-zip").val("");

});
