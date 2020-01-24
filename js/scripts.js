$(document).ready(function () {

    $("#form1").submit(function (event) {

        var result = ''
        var q1 = $('#question1').val().toLowerCase()
        var q2 = $('#question2').val().toLowerCase()
        var q3 = $('#question3').val().toLowerCase()
        var q4 = $('#question4').val().toLowerCase()
        var q5 = $('#question1').val().toLowerCase()

        console.log(q1, q2, q3, q4, q5);
        const answered = q1.length + q2.length + q3.length + q4.length + q5.length
        if (answered !== 5) {
            result = 'Oops! Looks like you either forgot an answer or inputed something other than Y or N!'
            $('#result').addClass('error')
        }
        else {
            if (q1 === "y" && q2 === "y" && q3 === "n" && q4 === "y") {
                result = "You'll really enjoy JavaScript!"
            }
            else if (q1 === "n" && q2 === "n" && q3 === "y" && (q4 === "y" || q4 === 'n')) {
                result = "If you're designed minded you'll probably enjoy CSS"
            }
            else if (q1 === "y" && q2 === "y" && q3 === "y" && (q4 === "y" || q4 === 'n')) {
                result = "You like a bit of everything! That's Awesome! You'll really like messing around in React!"
            }
            else {
                result = "You really dont seem to like any of them, maybe something other than programing is your thing!"

            }
        }
        $('#jumbo1').addClass('noDisplay')
        $('#jumbo2').removeClass('noDisplay')
        $("#result").text(result)

        event.preventDefault()
    })

    $("#resetBtn").click(function () {
        location.reload(true);
    })


})