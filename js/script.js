$(document).ready(function(){
    var position = 'static';
    $("input[name='postioning']").click(function() {
        position = this.value;
        $("#box").css('position', position);
    });
});
