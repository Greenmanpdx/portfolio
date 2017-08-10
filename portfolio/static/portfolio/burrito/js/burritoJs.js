/**
 * Created by greenman on 7/6/17.
 */
// Extend the default Number object with a formatMoney() method:
// usage: someVar.formatMoney(decimalPlaces, symbol, thousandsSeparator, decimalSeparator)
// defaults: (2, "$", ",", ".")
Number.prototype.formatMoney = function (places, symbol, thousand, decimal) {
    places = !isNaN(places = Math.abs(places)) ? places : 2;
    symbol = symbol !== undefined ? symbol : "$";
    thousand = thousand || ",";
    decimal = decimal || ".";
    var number = this,
        negative = number < 0 ? "-" : "",
        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};

$('.ui.checkbox').checkbox()


$('input[name="extra-ingredients"]').change(function () {
    var total = parseFloat($('#total').text().replace(/[^0-9-.]/g, ''));
    if (this.checked === true) {
        total += .5;

    }
    else {
        total -= .5;
    }
    $('#total').html(total.formatMoney());


});

$('input:checkbox').change(function () {
    if (this.checked === true) {
        if ($(this).attr('name') === 'terms') {
            console.log('terms');
        } else {
            $('<li class="item" />').appendTo('.relaxed.list').text($(this.nextElementSibling).text());
            console.log($(this.nextElementSibling).text());
            // $('#ingredients.ui.relaxed.list').append("<li class='item'>" + text($(this).val()) + "</li>")
        }
    }
    else {
        $(".relaxed li:contains(" + $(this.nextElementSibling).text() + ')').remove();
    }


});

$('input:radio').change(function () {
    if (this.checked === true) {
        if ($(this).attr('name') === 'delivery') {
            if ($(this).attr('value') === 'delivery') {
                var total = parseFloat($('#total').text().replace(/[^0-9-.]/g, ''));
                total += 5;
                $('#total').html(total.formatMoney());

            } else {
                var total = parseFloat($('#total').text().replace(/[^0-9-.]/g, ''));
                total -= 5;
                $('#total').html(total.formatMoney());

            }
        } else {
            $('.relaxed li').first().remove();
            $('<li class="item" />').prependTo('.relaxed.list').text($(this.nextElementSibling).text());
        }
    }
});

function checkLuhn(input) {
    var sum = 0;
    var numdigits = input.length;
    var parity = numdigits % 2;
    for (var i = 0; i < numdigits; i++) {
        var digit = parseInt(input.charAt(i));
        if (i % 2 === parity) digit *= 2;
        if (digit > 9) digit -= 9;
        sum += digit;
    }
    return (sum % 10) === 0;
}


$('#submit').click(function () {
    var cvv = /^[0-9]{3,4}$/
    var zip = /(^\d{5}(?:[\s]?[-\s][\s]?\d{4})?$)/
    var errors = [];
    var failed = false;

    $('#subTotal').val($('#total').text().replace('$', ''));
    if (!$('#name').val()) {
        failed = true;
        errors.push('Enter your name.');
    }
    if (checkLuhn($('#credit-card').val())) {
        failed = true;
        errors.push('Enter a valid credit card number.');

    }
    if (!cvv.test($('#cvv').val())) {
        failed = true;
        errors.push("Enter your credit card's verification number (CVV).")
    }
    if (!zip.test($('#zip').val())) {
        failed = true;
        errors.push("Enter the ZIP Code associated with the credit card.")
    }
    if ($('#tAndC').is(':checked') === false) {
        failed = true;
        errors.push("Agree to the terms of service");
    }
    console.log(errors);
    if (failed === true) {
        event.preventDefault();
        $('#error-messages').show().html(
            "<h2 id='errLabel'>Please correct the following errors before proceeding</h2>" +
            "<ul id='erList'></ul>");
        for (var i = 0; i < errors.length; ++i) {

            $('#erList').append('<li> ' + errors[i] + '</li>');
        }

    }
});


