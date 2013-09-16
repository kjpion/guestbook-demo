$(document).ready(function() {
    $('input[type="submit"]').click(function(e) {
        e.preventDefault();

        var d = new Date();
        var month = d.getMonth() + 1;
        var day = d.getDay();
        var year = d.getFullYear();

        $('#placeholder').remove();
        $('#entries').append(
            $('<tr>').append(
                $('<td>').text($('input#name').val())
            ).append(
                $('<td>').text([month, day, year].join('/'))
            ).append(
                $('<td>').text($('textarea#message').val())
            )
        );
    });
});

