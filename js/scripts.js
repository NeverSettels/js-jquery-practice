$(document).ready(function () {
    console.log('loaded')
    $("#form1").submit(function (event) {


        var q1 = $('#question1').val()
        var q2 = $('#question2').val()
        var q3 = $('#question3').val()
        var q4 = $('#question4').val()
        var q5 = $('#question1').val()

        console.log(q1, q2, q3, q4, q5);



        event.preventDefault()
    })



})