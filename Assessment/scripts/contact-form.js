
// Checks if a string is blank or contains only white-space returns {boolean}
String.prototype.isEmpty = function () {
    return (this.length === 0 || !this.trim());
};

$(document).ready(function() {

    let validateContactForm = function(form) {

        let valid = true,
            inputs = form.find('input').filter('[required]:visible');

        // For each input field
        inputs.each(function () {

            let input = $(this),
                inputBox = input.parent('.error-input'),
                value = input.val(),
                pattern = input.attr('pattern'),
                isValid = true;

            // Check if fields are empty
            if (value.isEmpty()) {

                input.siblings('.error').fadeIn();
                isValid = valid = false;

            } else if (typeof pattern != "undefined") {

                // Test regular Expressions matching pattern
                pattern = new RegExp(pattern);

                if (!pattern.test(value)) {

                    input.siblings('.error').fadeIn();
                    isValid = valid = false;

                }
            }

            // Handle error-box class and error message
            if (isValid) {

                inputBox.removeClass('error-box');
                input.siblings('.error').fadeOut();

            } else {

                inputBox.addClass('error-box');

            }
        });

        return valid;
    };


    $('form.contact-form .submit-button').click(function (e) {

        // Prevent form from submitting
        e.preventDefault();

        let form = $('form.contact-form');

        // Call Function to validate form
        validateContactForm(form);

    });
});