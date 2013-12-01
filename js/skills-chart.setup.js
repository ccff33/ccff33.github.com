$(function () {
    $(document).ready(function() {

        Highcharts.setOptions(Highcharts.theme);
    
        var colors = Highcharts.getOptions().colors;
        var categories = ['PHP', 'Ruby', 'C#'];
        var name = 'Technical Skills';
        var data = [{
            y: 100,
            color: colors[0]
        }, {
            y: 60,
            color: colors[1]
        }, {
            y: 70,
            color: colors[3]
        }
        ];
   
        new Highcharts.Chart({
            chart: {
                renderTo: 'skills-container',
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: categories
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            series: [{
                name: name,
                data: data,
                color: '#ccff77'
            }],
            tooltip: {
                enabled: false
            }
        });
    });

});