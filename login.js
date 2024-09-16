$(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  
// check box to accept than only the submit button can access
const checkbox = document.getElementById('termsAndConditions');
        const submitButton = document.getElementById('submitButton');
        checkbox.addEventListener('change', () => {
            submitButton.disabled = !checkbox.checked;
        });