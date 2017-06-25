var screen = $('#calc-screen');

function calc() {
    var value = screen.val();
    var result;
    try {
        result = eval(value);
    } catch (e) {
        result = 'Error';
    }
    screen.val(result);
    $('#clear-btn').text('AC');
}

function enter(e) {
    var key = e.which | e.keyCode;
    if (/[\n\r]/.test(String.fromCharCode(key))) {
        calc();
    }
}

$('body').keypress(function (e) {
    enter(e);
});


$('button').keypress(function (e) {
    enter(e);
    return false;
});


$('button').click(function () {
    var key = $(this).text();
    var value;
    console.log(key);
    if (key === '=') {
        calc();
    } else if (key === 'AC') {
        screen.val('');
        $('#clear-btn').text('CE');
    } else if (key === 'CE') {
        value = screen.val();
        screen.val(value.substring(0, value.length - 1));
    } else {
        value = screen.val();
        screen.val(value + key);
        $('#clear-btn').text('CE');
    }
});