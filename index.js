const week1 = new Date("Jul 31, 2025 11:30:00").getTime();
const week2 = new Date("Aug 8, 2025 12:00:00").getTime();
const week3 = new Date("Aug 14, 2025 12:00:00").getTime();
const weeks = [week1, week2, week3];
var currentWeek = 0

const validateID = async () => {
    let studentIDDOM = document.getElementById("idInput").value; 

    try {
        const response = await axios.get(`http://localhost:8000/api/users/students/${studentIDDOM}`);
        console.log(response.data);
        if (currentWeek == 0) {
            document.getElementById("hint").innerText = "Be patient, the hints will be available soon!";
        }
        else if (currentWeek == 1) {
            const hint = response.data.week1
            document.getElementById("hint").innerText = "Your hint is: " + hint;
        }
        else if (currentWeek == 2) {
            const hint = response.data.week2
            document.getElementById("hint").innerText = "Your hint is: " + hint;
        }
        else if (currentWeek == 3) {
            const hint = response.data.week3
            document.getElementById("hint").innerText = "Your hint is: " + hint;
        }
        else if (currentWeek > 3) {
            document.getElementById("hint").innerText = "See you at First-Meet TUPINE!!!";
        }
    }
    catch (error) {
        document.getElementById("hint").innerText = "An error occurred! :(";
        return;
    }
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

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = "Next hint: " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

}, 1000);

