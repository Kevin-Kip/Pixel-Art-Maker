var chart = $("#canvas");
var isErase = false;

$('#createCanvas').on('click',function () {
    var height = $('#height').val();
    var width = $('#width').val();
    chart.empty();

    var canvasWidth = "";
    for (var i = 1; i <= height; i++){
        var canvasHeight = "";
        for (var j = 1; j <= width; j++){
            canvasHeight += "<td></td>"
        }
        canvasWidth += "<tr>"+canvasHeight+"</tr>";
    }
    chart.append(canvasWidth)
});

$('table').on('click','td', function () {
    if (isErase === false) {
        var selectedColor = document.getElementById('colorPicker').value;
        $(this).css('backgroundColor', selectedColor);
    } else if (isErase === true){
        $(this).css('backGroundColor','none');
    }
});

$('#clearAll').on('click', function () {
    chart.empty();
});
