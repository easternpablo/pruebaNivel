$(document).ready( function(){
    // Obtiene cada uno de las variables pasadas por url separando ? y &
    var getUrlParameter = function getUrlParameter(sParam) { 
        var sPageURL = decodeURIComponent(window.location.search.substring(1)), 
        sURLVariables = sPageURL.split('&'), sParameterName, i; 
        for (i = 0; i < sURLVariables.length; i++) { 
            sParameterName = sURLVariables[i].split('='); 
            if (sParameterName[0] === sParam) { 
                return sParameterName[1] === undefined ? true : sParameterName[1]; 
            } 
        } 
    }; 
    var name = getUrlParameter('val1');$('#name').val(name);
    var username = getUrlParameter('val2');$('#username').val(username);
    var email = getUrlParameter('val3');$('#email').val(email);
    var phone = getUrlParameter('val4');$('#phone').val(phone);
});