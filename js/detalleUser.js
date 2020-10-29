$(document).ready( function(){
    $("#tabla tr").click( function(){
        var name = $(this).find('td:first').html();
        var username = $(this).find('td:nth-child(2)').html();
        var email = $(this).find('td:nth-child(3)').html();
        var phone = $(this).find('td:nth-child(4)').html();
        window.location = "../html/detalle.html?val1="+name+"&val2="+username+"&val3="+email+"&val4="+phone;
    });
});