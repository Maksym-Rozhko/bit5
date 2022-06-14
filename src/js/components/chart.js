new Chart(
    document.querySelector('.chart'),
    {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'March', 'April'],
        datasets: [
        {
            label: 'BIT Increase',
            data: [0, 220, 120, 270],
            borderColor: '#ee9b4f',
            borderWidth: 1,
            backgroundColor: '#ee9b4f2e',
            cubicInterpolationMode: 'monotone',
            pointStyle: 'circle',
            fill: true
        }
        ]
    },
    options: {
        responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                }
            }
        }
    }
);