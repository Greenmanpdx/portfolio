/**
 * Created by greenman on 6/27/17.
 */


function sub() {
    $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather',
    data: {

        zip: $('#zipcode').val(),
        APPID: "9ef3311b380d2586bf47ff522529e7a9"
    },
    dataType: 'jsonp',
    type: 'post',
    success: function (data) {
        // $('#weather').html(data)
        var celcius = data.main.temp - 273.15;
        var faren = data.main.temp * 9/5 - 459.67;
        $('#celcius').html(celcius);
        $('#faren').html(faren);
        console.log(data);
        var weatherCode = data.weather[0].id;
        var code = Math.floor(weatherCode/100);
        var icon;
        if (code === 2){icon = '11d.png'}
        if (code === 3){icon = '09d.png'}
        if (code === 5){icon = '10d.png'}
        if (code === 6){icon = '13d.png'}
        if (code === 7){icon = '50d.png'}
        if (code === 8){icon = '01d.png'}

        $('body').css({'backgroundImage': "url(http://openweathermap.org/img/w/" + icon+")"})



    }
})

}
$('.target').click(sub)