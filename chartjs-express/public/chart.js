document.addEventListener('DOMContentLoaded', (event) => {
    const ctx = document.getElementById('myChart').getContext('2d'); // get canvas with id
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
            datasets: [{
                label: 'Sample Data',
                data: [65, 59, 80, 81, 56, 55, 40, 79],
                borderColor: 'rgba(12, 15, 235, 0.5)',
                borderWidth: 2,
                fill: true,
                tension: 0.5 // Line Tension (Curviness of the Line)
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
