/**
 * Created by greenman on 7/6/17.
 */
var total, tortilla, ingredients;
var parseQueryString = function( queryString ) {
    var params = [], queries, temp, i, l, j =0;
    // Split into key/value pairs
    queries = queryString.replace('?', '').split("&");
    // Convert the array of strings into an object
    for ( i = 0, l = queries.length; i < l; i++ ) {
        temp = queries[i].split('=');
        if(temp[0] === 'tortilla'){
            tortilla = temp[1];
        }
        if(temp[0] === 'meat' || temp[0] === 'included-ingredients' || temp[0] === 'extra-ingredients')
        {
            params[j] = decodeURIComponent(temp[1]).replace('+', ' ');
            ++j;
        }
        else if(temp[0] === 'total'){
            total = temp[1];
        }
    }
    return params;
};

var qstring = window.location.search;
ingredients = parseQueryString(qstring);
console.log(total);

$('#order-details').html('<h4>Tortilla: ' + tortilla + '</h4>' +
                        "<ul id='ingredientList'></ul>" +
                        "<h4>Total: $" + total +"</h4>" );

for(var i = 0; i < ingredients.length; ++i){
    $('#ingredientList').append('<li>' + ingredients[i] + '</li>');
}



