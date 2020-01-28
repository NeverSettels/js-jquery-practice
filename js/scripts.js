//Backend Logic
function setResult(q1, q2, q3, q4, q5) {
    const answered = q1.length + q2.length + q3.length + q4.length + q5.length
    let result = '';
    let error = true;

    //checks if user didnt fill out all inputs and with y or n
    if (answered !== 5) {
        result = 'Oops! Looks like you either forgot an answer!'
    } else if ((q1 != 'y' && q1 != "n") || (q2 != 'y' && q2 != "n") || (q3 != 'y' && q3 != "n") || (q4 != 'y' && q4 != "n") || (q5 != 'y' && q5 != "n")) {
        result = 'Oops! Looks like you inputed something other than Y or N!'
    } else { //if all inputs are correct it finds the right result
        error = false
        if (q1 === "y" && q2 === "y" && q3 === "n" && q4 === "y") {
            result = "You'll really enjoy JavaScript!"
        } else if (q1 === "n" && q2 === "n" && q3 === "y" && (q4 === "y" || q4 === 'n')) {
            result = "If you're designed minded you'll probably enjoy CSS"
        } else if (q1 === "y" && q2 === "y" && q3 === "y" && (q4 === "y" || q4 === 'n')) {
            result = "You like a bit of everything! That's Awesome! You'll really like messing around in React!"
        } else if (q1 === "n" && q2 === "n" && q3 === "n" && q4 === "n" && q5 === 'y') {
            result = "You'll probably enjoy just about any programing language! They're all about a whole lot of things coming together! "
        } else {
            result = "You really dont seem to like any of them, maybe something other than programing is your thing!"
        }
    }
    return [result, error]
}
// Frontend logic
$(document).ready(function () {
    $("#form1").submit(function (event) {
        event.preventDefault()
        //collects inputs
        var q1 = $('#question1').val().toLowerCase()
        var q2 = $('#question2').val().toLowerCase()
        var q3 = $('#question3').val().toLowerCase()
        var q4 = $('#question4').val().toLowerCase()
        var q5 = $('#question5').val().toLowerCase()
        //checks to see if its an error message and adds class 'error' if it is
        if (!setResult(q1, q2, q3, q4, q5)[1]) $('#result').removeClass('error')
        //sets the displays to correct info
        $('#jumbo1').addClass('noDisplay')
        $('#jumbo2').removeClass('noDisplay')
        $("#result").text(setResult(q1, q2, q3, q4, q5)[0])
    })
    $("#resetBtn").click(function () {
        location.reload(true);
    })
})