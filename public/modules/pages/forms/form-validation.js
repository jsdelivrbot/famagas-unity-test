$(function () {
    $('#form_validation').validate({
        rules: {
            'checkbox': {
                required: true
            },
            'gender': {
                required: true
            }
        },
        highlight: function (input) {
            $(input).parents('.form-line').addClass('error');
        },
        unhighlight: function (input) {
            $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function (error, element) {
            $(element).parents('.form-group').append(error);
        },
        // intermediate session after sucess validation and if with sucess call dialog
        submitHandler: function(form) {
            // do other things for a validate form
            var color = 'green';
            $('#sucessFirstStageModal .modal-content').removeAttr('class').addClass('modal-content modal-col-' + color);
            $('#sucessFirstStageModal').modal('show');
        }
    });

    //Advanced Form Validation
    $('#form_advanced_validation').validate({
        rules: {
            'date': {
                customdate: true
            },
            'creditcard': {
                creditcard: true
            }
        },
        highlight: function (input) {
            $(input).parents('.form-line').addClass('error');
        },
        unhighlight: function (input) {
            $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function (error, element) {
            $(element).parents('.form-group').append(error);
        }
    });

    //Custom Validations ===============================================================================
    //Date
    $.validator.addMethod('customdate', function (value, element) {
        return value.match(/^\d\d\d\d?-\d\d?-\d\d$/);
    },
        'Please enter a date in the format YYYY-MM-DD.'
    );

    //Credit card
    $.validator.addMethod('creditcard', function (value, element) {
        return value.match(/^\d\d\d\d?-\d\d\d\d?-\d\d\d\d?-\d\d\d\d$/);
    },
        'Please enter a credit card in the format XXXX-XXXX-XXXX-XXXX.'
    );
    //==================================================================================================
});