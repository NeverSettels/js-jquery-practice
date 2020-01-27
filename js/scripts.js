//Backend Logic
function setResult(answered) {
    if (answered !== 5) {
        return 'Oops! Looks like you either forgot an answer!'
    }
    else if ((q1 != 'y' && q1 != "n") || (q2 != 'y' && q2 != "n") || (q3 != 'y' && q3 != "n") || (q4 != 'y' && q4 != "n") || (q5 != 'y' && q5 != "n")) {
        return 'Oops! Looks like you inputed something other than Y or N!'
    }
    else {
        $('#result').removeClass('error')
        if (q1 === "y" && q2 === "y" && q3 === "n" && q4 === "y") {
            return "You'll really enjoy JavaScript!"
        }
        else if (q1 === "n" && q2 === "n" && q3 === "y" && (q4 === "y" || q4 === 'n')) {
            return "If you're designed minded you'll probably enjoy CSS"
        }
        else if (q1 === "y" && q2 === "y" && q3 === "y" && (q4 === "y" || q4 === 'n')) {
            return "You like a bit of everything! That's Awesome! You'll really like messing around in React!"
        }
        else if (q1 === "n" && q2 === "n" && q3 === "n" && q4 === "n" && q5 === 'y') {
            return "You'll probably enjoy just about any programing language! They're all about a whole lot of things coming together! "
        }
        else {
            return "You really dont seem to like any of them, maybe something other than programing is your thing!"
        }
    }
}

// Frontend logic
$(document).ready(function () {
    $("#form1").submit(function (event) {
        event.preventDefault()
        var q1 = $('#question1').val().toLowerCase()
        var q2 = $('#question2').val().toLowerCase()
        var q3 = $('#question3').val().toLowerCase()
        var q4 = $('#question4').val().toLowerCase()
        var q5 = $('#question5').val().toLowerCase()
        const answered = q1.length + q2.length + q3.length + q4.length + q5.length
        var result = setResult(answered)

        $('#jumbo1').addClass('noDisplay')
        $('#jumbo2').removeClass('noDisplay')
        $("#result").text(result)
    })
    $("#resetBtn").click(function () {
        location.reload(true);
    })
})