/**
 * Created by chris on 6/23/2017.
 */
document.getElementById('sub').addEventListener('click', function () {
    event.preventDefault();
    var color = document.getElementById('color').value;
    document.body.style.backgroundColor = color
});