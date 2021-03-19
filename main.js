$(function () {
    $('input').after('<p class="error-msg"></p>');

    $('#name').focusout(validateName);
    $('#email').focusout(validateEmail);
    $('#password').focusout(validatePassword);
    $('#confirm_password').focusout(validateCPassword);

    $("#registrationForm").submit(handleFormSubmit);
});

function handleFormSubmit(e) {
    if(!(validateName() && validateEmail() && validatePassword() && validateCPassword()))
        return false;
    alert("Form is being submitted");
    e.preventDefault();
}

function validateName() {
    if ($('#name').val().length < 5) {
        $('#name').parent().find('p').html('should be atleast 5 characters long.');
        $('#name').addClass('error-input');
    } else {
        $('#name').parent().find('p').html('');
        $('#name').removeClass('error-input');
        return true;
    }
    return false;
}

function validateEmail() {
    if (!$('#email').val().includes('@') || !$('#email').val().includes('.')) {
        $('#email').parent().find('p').html('provide valid email address.');
        $('#email').addClass('error-input');
    } else {
        $('#email').parent().find('p').html('');
        $('#email').removeClass('error-input');
        return true;
    }
    return false;
}

function validatePassword() {
    if ($('#password').val().length < 8) {
        $('#password').parent().find('p').html('should be atleast 8 characters long.');
        $('#password').addClass('error-input');
    } else {
        $('#password').parent().find('p').html('');
        $('#password').removeClass('error-input');
        return true;
    }
    return false;
}

function validateCPassword() {
    if ($('#confirm_password').val() != $('#password').val()) {
        $('#confirm_password').parent().find('p').html('both passwords should match.');
        $('#confirm_password').addClass('error-input');
    } else {
        $('#confirm_password').parent().find('p').html('');
        $('#confirm_password').removeClass('error-input');
        return true;
    }
    return false;
}
