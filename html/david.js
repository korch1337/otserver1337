$(document).ready(function(){
setInterval("ajaxd()",10000);
});

function ajaxd(){
var $bountyh = $('#test');
$.ajax({
        type: 'GET',
        url: 'general.json',
        dataType: 'json',
        success: function (bounty) {
            $.each(bounty, function(i, bounty){
                $bountyh.replace('<li> Name: ' + bounty.name + ', Bounty: ' + bounty.price + '</li>');
            });
        },
    });
    
    
    
};
