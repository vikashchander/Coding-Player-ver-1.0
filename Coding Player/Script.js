$(".togglebutton").hover(function () {
        // over
        $(this).addClass("highlightButton")
    }, function () {
        // out
        $(this).removeClass("highlightButton")
    }
);
function updateOutput(){
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" +
    $("#cssPanel").val() + "</style></head><body>"+
    $("#htmlPanel").val() +"</body></html>");
    
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());

}
$(".togglebutton").click(function(){
    $(this).toggleClass("active");
    $(this).removeClass("highlightButton");
    var panelId= $(this).attr("id")+"Panel";
    //alert(panelId);
     $("#"+panelId).toggleClass("hidden");
     var numberOfActivePanel =4 - $('.hidden').length;
     $('.Panel').width(($(window).width()/numberOfActivePanel)-10);
}); 
$(".Panel").height($(window).height()-$("#header").height() -10);
$(".Panel").width($(window).width()/2 -10);
$("iframe").contents().find("html").html($('#htmlPanel').val());
updateOutput();
$("textarea").on('change keyup paste', function() {
updateOutput();
    
});