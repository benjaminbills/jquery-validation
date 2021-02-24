$(document).ready(function () {
  var $shippingForm = $("#shippingForm");
  $shippingForm.validate({
    errorClass: "error fail-alert",
    validClass: "valid success-alert",
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
      address: {
        required: true,
        minlength: 6,
      },
      city: {
        required: true,
      },
      zip: {
        required: true,
        digits: true,
      },
    },
    messages: {
      name: {
        required: "Please enter username!",
        minlength: "Name should be at least 3 characters",
      },
      email: {
        required: "Please enter email!",
        email: "Please enter a valid email example@gmail.com",
      },
      address: {
        required: "Please enter address",
        minlength: "Address should be atleast 6 characters",
      },
      city: {
        required: "Please enter city",
      },
      zip: {
        required: "Please enter zip code",
        digits: "Enter a valid zip code(digits)",
      },
    },
  });
  $shippingForm.submit(function (e) {
    e.preventDefault();

    if (!$shippingForm.validate().errorList.length > 0) {
      $(".fa-gifts").animate({
        left: 400,
        height: "20px",
        width: "20px",
        opacity: "0",
      });
      $shippingForm.hide();
    }
  });
});
