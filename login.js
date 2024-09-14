$(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  const countrySelect = document.getElementById("countrySelect");

const phoneNumberInput = document.getElementById("phoneNumber");



countrySelect.addEventListener("change", () => {

    const selectedCountryCode = countrySelect.value;

    phoneNumberInput.value = selectedCountryCode + phoneNumberInput.value.replace(selectedCountryCode, ""); 

});