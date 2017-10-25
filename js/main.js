Chart.defaults.global.defaultFontFamily = "Courier New";

var ctx = document.getElementById('chartWork').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', ' '],
    datasets: [{
       hidden: false,
      label: 'charge de travail          ',
      data: [4, 17, 17, 19, 21.5, 5, 3, 17, 17, 1, 22, 22],
      backgroundColor: "rgba(39,41,41,0.5)",
      borderColor: "rgba(0, 0, 0, 0)",
      fill: true,
      spanGaps: false,
    }, {
      label: 'syndrôme de l’imposteur',
      data: [5, 15, 23, 22, 21, 20, 19, 18, 17, 23, 15, 11],
      backgroundColor: "rgba(208,217,217,0.5)",
      borderColor: "rgba(0, 0, 0, 0)",
      fill: true,
    }]
  },
  options: {
    animation : false,
    legend: {display: true},
    scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: false
          }],
        },
    elements: { point: { radius: 0 } }

  }

});


/**/
/**/
/**/


var ctx = document.getElementById('chartMoney').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', ' '],
    datasets: [{
       hidden: false,
      label: 'revenu mensuel          ',
      data: [0.2, 0.2, 20, 21, 22, 23, 0.2, 0.2, 23, 3, 7, 7],
      backgroundColor: "rgba(39, 41, 41, 0.5)",
      borderColor: "rgba(39, 41, 41, 0)",
      fill: true,
      spanGaps: false,
    }, {
      label: 'REERs          ',
      data: [0.2, 0.2, 0.2, 17, 19, 21, 20, 0.2, 0.2, 0.2, 0.2, 0.2],
      backgroundColor: "rgba(208, 217, 217, 0.5)",
      borderColor: "rgba(208, 217, 217, 0)",
      fill: true,
    },{
      label: 'heures de sommeil',
      data: [4, 4, 8, 9, 9, 9, 9, 1, 1, 1, 9, 9],
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "rgba(0, 0, 0, 1)",
      fill: true,
    }]
  },
  options: {
    animation : false,
    legend: {display: true},
    scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: false
          }],
        },
    elements: { point: { radius: 0 } }

  }
});


/**/
/**/
/**/


var ctx = document.getElementById('chartDreams').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', ' '],
    datasets: [{
      label: 'concepteur de jeux',
      data: [24, 23, 23, 0.2, 0.2, 0.2, 0.2, 0.2, 23, 23, 23, 23],
      backgroundColor: "rgba(39, 41, 41, 0.5)",
      borderColor: "rgba(110, 110, 110, 0)",
      fill: true,
    }, {
      label: 'danseur',
      data: [0.2, 0.2, 0.2, 0.2, 10, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
      backgroundColor: "rgba(180, 219, 215, 0.5)",
      borderColor: "rgba(141, 195, 223, 0)",
      fill: true,
    }, {
      label: 'prof',
      data: [0, 0, 0, 0, 0, 0, 0, 20, 20, 20, 20, 20],
      backgroundColor: "rgba(208, 217, 217, 0.5)",
      borderColor: "rgba(110, 110, 110, 0)",
      fill: true,
    }, {
       hidden: false,
      label: 'auteur',
      data: [5, 0.2, 0.2, 5, 0.2, 0.2, 5, 0.2, 0.2, 5, 0.2, 5],
      backgroundColor: "rgba(79, 79, 79, 0)",
      borderColor: "rgba(79, 79, 79, 1)",
      fill: true,
      spanGaps: false,
    }]
  },
  options: {
    animation : false,
    legend: {display: true},
    scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: false
          }],
        },
    elements: { point: { radius: 0 } }

  }
});


/**/
/**/
/**/


var ctx = document.getElementById('chartLearn').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', ' '],
    datasets: [{
      label: 'lire un livre',
      data: [21, 21, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 20, 21.5],
      backgroundColor: "rgba(180, 219, 215, 0.5)",
      borderColor: "rgba(184, 184, 184, 0)",
      fill: true,
    }, {
      label: 'enseigner',
      data: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 21, 21, 0.2, 0.2, 0.2],
      backgroundColor: "rgba(39, 41, 41, 0.5)",
      borderColor: "rgba(184, 184, 184, 0)",
      fill: true,
    }, {
      label: 'écrire',
      data: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 21, 0.2, 0.2],
      backgroundColor: "rgba(208, 217, 217, 0.5)",
      borderColor: "rgba(184, 184, 184, 0)",
      fill: true,
    }, {
       hidden: false,
      label: 'rentrer dans le tas',
      data: [0.3, 0.3, 0.4, 0.4, 0.7, 8, 14, 17, 17.1, 17.2, 17.3, 17.4],
      backgroundColor: "rgba(184, 184, 184, 0)",
      borderColor: "rgba(100, 100, 100, 1)",
      fill: true,
      spanGaps: false,
    }]
  },
  options: {
    animation : false,
    legend: {display: true},
    scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: false
          }],
        },
    elements: { point: { radius: 0 } }

  }
});





/**/
/**/
/**/


var ctx = document.getElementById('chartLove').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', ' '],
    datasets: [{
      label: 'en amour          ',
      data: [2, 6, 3, 12, 0.2, 0.2, 17, 0.2, 25, 2, 19, 5],
      backgroundColor: "rgba(208, 217, 217, 0.5)",
      borderColor: "rgba(208, 217, 217, 0)",
      fill: true,
    },{
      label: 'angoisse existentielle',
      data: [1, 2, 3, 3, 5, 7, 9, 11, 0.2, 13, 15, 17],
      backgroundColor: "rgba(39, 41, 41, 0.5)",
      borderColor: "rgba(39, 41, 41, 0)",
      fill: true,
    }]
  },
  options: {
    animation : false,
    legend: {display: true},
    scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: false
          }],
        },
    elements: { point: { radius: 0 } }

  }
});
