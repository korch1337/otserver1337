$(document).ready(function(){
setInterval(ajaxd,10000);
ajaxd();
});
function ajaxd(){
$.ajax({
        type: 'GET',
        url: 'general.json',
        dataType: 'json',
        async: true,
        success: function (bounty) {
                $('#test').empty();
                for (i=0; i <= bounty.length - 1; i++){
                        $('#test').append('<li id="remove"> Name: ' + bounty[i].name + ', Bounty: ' + bounty[i].prize + '</li>')
                };
        }
        
});
};
