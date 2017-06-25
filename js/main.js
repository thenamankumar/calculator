var screen = $('#calc-screen');
var ans;
var reset;

function calc() {
    var value = screen.val();
    var result;
    try {
        result = eval(value);
        ans = result;
    } catch (e) {
        result = 'Error';
        ans = null;
    }
    screen.val(result);
    $('#clear-btn').text('AC');
    reset=1;
}

function enter(e) {
    var key = e.which | e.keyCode;
    if (/\r/.test(String.fromCharCode(key))) {
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
    if(reset===1) {
        screen.val('');
        reset = 0;
    }
    if (key === '=') {
        calc();
    } else if (key === 'AC') {
        screen.val('');
        ans = null;
        $('#clear-btn').text('CE');
    } else if (key === 'CE') {
        value = screen.val();
        screen.val(value.substring(0, value.length - 1));
    } else if (key === 'ans') {
        if (ans !== undefined && ans !== null) {
            value = screen.val();
            screen.val(value + ans);
        }
        $('#clear-btn').text('CE');
    } else {
        value = screen.val();
        screen.val(value + key);
        $('#clear-btn').text('CE');
    }
});