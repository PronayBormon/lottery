$(".button").click(function() {
    

    var buttonText = $(this).text();
    
    // Check if any input field contains the same value
    var $targetInput = $(".input").filter(function() {
        return $(this).val() === buttonText;
    });

    if ($targetInput.length > 0) {
        // If input field contains the same value, remove it
       
        $(this).removeClass("active");
        $targetInput.val("");
    }else if($targetInput.length > 0 ){
        window.alert("full");
    }
     else {
        // Find the next empty input field and set its value
        $(".input").filter(function() {
            return $(this).val() === "";
        }).first().val(buttonText);
        $(this).addClass("active");
        // if($(".clicks.active").length == 5) {
        //     $(this).removeClass("active");
        //     $("#message").fadeIn();
        // }else{
        // $(this).addClass("active");
        // }
    }
    
});


$(".btn_reset").click(function(){
    $(".clicks").removeClass("active");
    $("#message").fadeOut();
});
$(".add").click(function(){
    $(".in_field").clone().appendTo(".field_group");
    $(".add").add
})