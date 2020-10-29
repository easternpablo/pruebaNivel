$(document).ready( function(){
    $('#search').on("keyup", function(){
        // recoger el texto introducido en el campo search.
        var valorFiltro = $(this).val().toLowerCase();
        $('#tabla tr').filter(function(){
            // comparo los datos de la tabla con el texto introducido en el campo
            $(this).toggle($(this).text().toLowerCase().indexOf(valorFiltro) > -1)
        });
    });
});