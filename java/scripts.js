/* header loading animations */

function loadingLogo() {
    var elem = document.getElementById("headerContent");
    var pos = -100;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 10){
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + "px";
        }
    }
}

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx,{
    type: 'bar',
    data:{
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets:[{
            data: [12, 19, 3, 5, 2, 4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)'
                ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginsAtZero:true
                }
            }]
        }
    }
})