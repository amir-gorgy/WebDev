// Check/Uncheck todos when clicking on items
$("ul").on("click", "li", function () {
    $(this).toggleClass('checked');
});

// Click on X to delete item
$("ul").on('click', 'span', function (e) {

    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function (e) {
    // when enter is pressed
    if (e.which === 13) {
        // grab the text
       var todosText =  $(this).val();
        $("ul").append("<li>" + "<span><i class='far fa-trash-alt'></i></span> " + todosText + "</li>");
        $(this).val("");
    }
});
$('#toggle-form').click(function (e) { 
    $("input[type='text']").fadeToggle();
});