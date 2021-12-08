function getContext(id: string) {
  let canvas = document.getElementById(id) as HTMLCanvasElement;
  let context = canvas.getContext('2d');
  return context;
}

let myChart = new Chart(getContext('chart'), {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Green'],
    datasets: [{
      data: [12, 19, 7],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
    }]
  }
});
