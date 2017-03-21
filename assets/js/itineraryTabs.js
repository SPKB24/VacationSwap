$(".nav-tabs").on("click", "a", function (e) {
        e.preventDefault();
        if (!$(this).hasClass('add-day')) {
            $(this).tab('show');
        }
    });

$('.add-day').click(function (e) {
    e.preventDefault();
    var id = $(".nav-tabs").children().length; //think about it ;)
    var tabId = 'day' + id;
    $(this).closest('li').before('<li><a href="#day_' + id + '">New Tab</a></li>');
    $('.tab-content').append('<div class="tab-pane" id="' + tabId + '">Contact Form: New Contact ' + id + '</div>');
   $('.nav-tabs li:nth-child(' + id + ') a').click();
});