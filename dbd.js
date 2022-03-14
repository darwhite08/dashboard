function plotly_line_graph() {
    var xArray = ["Jan", "Feb", "March", "April", "May", "june", "july", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var yArray = [100, 400, 300, 400, 500, 100, 700, 300, 900, 1000, 1100, 1200];

    // Define Data
    var data = [{
        x: xArray,
        y: yArray,
        mode: "lines"
    }];

    // Define Layout
    var layout = {
        xaxis: { range: [], title: "Months" },
        yaxis: { range: [100, 1200], title: "Earning" },
        title: "dollars vs. month"
    };

    // Display using Plotly
    Plotly.newPlot("myPlot", data, layout);
}

function pi_3d_chart() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['f', 'Mhl'],
            ['e', 54.8],
            ['d', 48.6],
            ['c', 44.4],
            ['b', 23.9],
            ['a', 14.5]
        ]);

        var options = {
            title: 'Header text',
            is3D: true
        };

        var chart = new google.visualization.PieChart(document.getElementById('myChart'));
        chart.draw(data, options);
    }
}

function bar_chart() {
    var xArray = ["text1", "text2", "text3", "text4", "text5"];
    var yArray = [55, 49, 44, 24, 15];

    var layout = {
        title: "header text"
    };

    var data = [{
        labels: xArray,
        values: yArray,
        hole: .4,
        type: "pie"
    }];

    Plotly.newPlot("piechart", data, layout);
}



function Excute_onload() {
    plotly_line_graph();
    pi_3d_chart();
    bar_chart();
}