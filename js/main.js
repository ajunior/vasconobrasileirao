var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38"],
        datasets: [{
            label: 'Vasco (2018)',
            data: [3, 4],
            backgroundColor: 'rgba(245, 162, 235, 1)',
            borderColor: 'rgba(245, 162, 235, 1)',
            borderWidth: 1
        },
        {
            label: 'Vasco (2017)',
            data: [0, 3, 6, 6, 6, 9, 9, 12, 12, 15, 16, 16, 19, 20, 20, 23, 23, 23, 24, 25, 25, 28, 31, 31, 32, 33, 36, 39, 42, 43, 44, 45, 48, 49, 50, 50, 53, 56],
            backgroundColor: 'rgba(255,99,132,1)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
        },
        {
            label: 'Campeão de 2017',
            data: [1, 4, 7, 10, 13, 16, 19, 20, 23, 26, 29, 32, 35, 36, 37, 40, 41, 44, 47, 50, 50, 50, 50, 53, 54, 55, 58, 58, 59, 59, 59, 62, 65, 68, 71, 71, 72, 72],
            backgroundColor: 'rgba(78,67,234,1)',
            borderColor: 'rgba(78,67,234,1)',
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Pontuação acumulada'
        }, 
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    min: 0
                }
            }]
        }
    }
});