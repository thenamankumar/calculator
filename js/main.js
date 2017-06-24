var screen = $('#calc-screen');

$('body').keypress(function (e) {
    if (e.which === 13) {
        var value = screen.val();
        screen.val(eval(value));
    }
});

screen.keypress(function (e) {
    if (e.which === 13) {
        var value = screen.val();
        screen.val(eval(value));
    }
});

$('button').keypress(function (e) {
    if (e.which === 13) {
        var value = screen.val();
        screen.val(eval(value));
    }
    return false;
});


$('button').click(function () {
    var key = $(this).text();
    console.log(key);
    if (key === '=') {
        var value = screen.val();
        screen.val(eval(value));
    } else if (key === 'AC') {
        screen.val('');
    } else if (key === '<-') {
        value = screen.val();
        screen.val(value.substring(0, value.length - 1));
    }
    else {
        value = screen.val();
        screen.val(value + key);
    }

});