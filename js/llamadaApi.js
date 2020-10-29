$(document).ready( function(){
    $('#update').click( function(){
        var email = $('#email').val();
        var phone = $('#phone').val();
        fetch(' https://my-json-server.typicode.com/easternpablo/pruebaNivel')
            .then(response => response.json())
            .then(json => console.log(json))
            //.then(post => ${post[email]},${post[phone]})
    });
});