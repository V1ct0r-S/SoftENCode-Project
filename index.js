const week1 = new Date("Aug 2, 2025 12:00:00").getTime();
const week2 = new Date("Aug 8, 2025 12:00:00").getTime();
const week3 = new Date("Aug 14, 2025 12:00:00").getTime();
const week4 = new Date("Aug 16, 2025 9:30:00").getTime();
const weeks = [week1, week2, week3, week4];
var currentWeek = 0
var beta = true

function validateID() {
    let studentIDDOM = document.getElementById("idInput").value.trim(); 
    try {
        const user =  searchID(studentIDDOM)
        if (user == undefined) {
            document.getElementById("hint").innerText = "ID not found :("
            }
        else if (beta) {
            document.getElementById("timer").innerText = "hint 1 : " + user.week1
            document.getElementById("See_u").innerText = "hint 3 : " + user.week3
            document.getElementById("hint").innerText = "hint 2 : " + user.week2
        }
        else {
            if (currentWeek == 0) {
                document.getElementById("hint").innerText = "Be patient, the hints will be available soon!";
            }
            else if (currentWeek == 1) {
                const hint = user.week1
                document.getElementById("hint").innerText = "1st hint : " + hint;
            }
            else if (currentWeek == 2) {
                const hint = user.week2
                document.getElementById("hint").innerText = "2nd hint: " + hint;
            }
            else if (currentWeek == 3) {
                const hint = user.week3
                document.getElementById("hint").innerText = "Final hint : " + hint;
                document.getElementById("See_u").innerText = "Good luck and see you at First-Meet TUPINE!!"
            }
            else if (currentWeek > 3) {
                document.getElementById("hint").innerText = "First-Meet TUPINE welcome you!";
                document.getElementById("See_u").innerText = "@301 Engineering Building, 12:30 PM";
        }
        }
        
    }
    catch (error) {
        document.getElementById("hint").innerText = "An error occurred! :(";
        return;
    }
}

function searchID(stdID) {
    for (let i = 0; i < userData.length;i++) {
        user = userData[i]
        if (stdID == user.studentID){
            return user
        }
    }
    return undefined
}

function getWeek() {
    for (let i = 0; i < weeks.length; i++) {
        var countDownDate = weeks[i];
        var dateNow = new Date().getTime();
        var distance = countDownDate - dateNow;
        if (distance > 0) {
            return i;
        }
        currentWeek = i + 1;
    }
}

if (beta = fasle) {

    var x = setInterval(function() {
        
    index = getWeek();
    countDownDate = weeks[index];
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (currentWeek == 3) {
        document.getElementById("timer").innerHTML = "First-Meet TUPINE: " + days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    }
    else {
        document.getElementById("timer").innerHTML = "Next hint: " + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    }

    }, 1000);

}