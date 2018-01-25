$(function () {
    // Datetime Picker Plugin
    $('.registered_datetime_picker').bootstrapMaterialDatePicker({
        lang : 'pt-br',
        format: 'DD MMMM YYYY - HH:mm',
        minDate : new Date(),
        clearButton: true,
        clearText: 'Limpar',
        cancelText : 'Fechar',
        weekStart: 1
    });
    $('.changed_datetime_picker').bootstrapMaterialDatePicker({
        lang : 'pt-br',
        format: 'DD MMMM YYYY - HH:mm',
        clearButton: true,
        clearText: 'Limpar',
        cancelText : 'Fechar',
        weekStart: 1
    });
});     