'use strict'

var React = require('react');
var ReactDom = require('react-dom');

var App = React.createClass({
  render: function(){
    return (
      <div>
      <SampleChart/>
      </div>
    )
  }
});

var SampleChart = React.createClass({
  showChart: function(dom){
    var chart = new tauCharts.Chart({
        type: 'scatterplot',
        x: 'economy (mpg)',
        y: 'power (hp)',
        color: 'cylinders',

        plugins: [
            tauCharts.api.plugins.get('tooltip')({fields:["name", "year", "economy (mpg)", "power (hp)"]}),
            tauCharts.api.plugins.get('trendline')(),
            tauCharts.api.plugins.get('legend')()
        ],

        data: [{
            "name": "AMC Ambassador Brougham",
            "economy (mpg)": 13,
            "cylinders": 8,
            "displacement (cc)": 360,
            "power (hp)": 175,
            "weight (lb)": 3821,
            "0-60 mph (s)": 11,
            "year": 73
        }, {
            "name": "AMC Ambassador DPL",
            "economy (mpg)": 15,
            "cylinders": 8,
            "displacement (cc)": 390,
            "power (hp)": 190,
            "weight (lb)": 3850,
            "0-60 mph (s)": 8.5,
            "year": 70
        }, {
            "name": "AMC Ambassador SST",
            "economy (mpg)": 17,
            "cylinders": 8,
            "displacement (cc)": 304,
            "power (hp)": 150,
            "weight (lb)": 3672,
            "0-60 mph (s)": 11.5,
            "year": 72
        }, {
            "name": "AMC Concord DL 6",
            "economy (mpg)": 20.2,
            "cylinders": 6,
            "displacement (cc)": 232,
            "power (hp)": 90,
            "weight (lb)": 3265,
            "0-60 mph (s)": 18.2,
            "year": 79
        }, {
            "name": "AMC Concord DL",
            "economy (mpg)": 18.1,
            "cylinders": 6,
            "displacement (cc)": 258,
            "power (hp)": 120,
            "weight (lb)": 3410,
            "0-60 mph (s)": 15.1,
            "year": 78
        }, {
            "name": "AMC Concord DL",
            "economy (mpg)": 23,
            "cylinders": 4,
            "displacement (cc)": 151,
            "power (hp)": 0,
            "weight (lb)": 3035,
            "0-60 mph (s)": 20.5,
            "year": 82
        }, {
            "name": "AMC Concord",
            "economy (mpg)": 19.4,
            "cylinders": 6,
            "displacement (cc)": 232,
            "power (hp)": 90,
            "weight (lb)": 3210,
            "0-60 mph (s)": 17.2,
            "year": 78
        }, {
            "name": "AMC Concord",
            "economy (mpg)": 24.3,
            "cylinders": 4,
            "displacement (cc)": 151,
            "power (hp)": 90,
            "weight (lb)": 3003,
            "0-60 mph (s)": 20.1,
            "year": 80
        }, {
            "name": "AMC Gremlin",
            "economy (mpg)": 18,
            "cylinders": 6,
            "displacement (cc)": 232,
            "power (hp)": 100,
            "weight (lb)": 2789,
            "0-60 mph (s)": 15,
            "year": 73
        }, {
            "name": "AMC Gremlin",
            "economy (mpg)": 19,
            "cylinders": 6,
            "displacement (cc)": 232,
            "power (hp)": 100,
            "weight (lb)": 2634,
            "0-60 mph (s)": 13,
            "year": 71
        }, {
            "name": "AMC Gremlin",
            "economy (mpg)": 20,
            "cylinders": 6,
            "displacement (cc)": 232,
            "power (hp)": 100,
            "weight (lb)": 2914,
            "0-60 mph (s)": 16,
            "year": 75
        }, {
            "name": "AMC Gremlin",
            "economy (mpg)": 21,
            "cylinders": 6,
            "displacement (cc)": 199,
            "power (hp)": 90,
            "weight (lb)": 2648,
            "0-60 mph (s)": 15,
            "year": 70
        }, {
            "name": "AMC Hornet Sportabout (Wagon)",
            "economy (mpg)": 18,
            "cylinders": 6,
            "displacement (cc)": 258,
            "power (hp)": 110,
            "weight (lb)": 2962,
            "0-60 mph (s)": 13.5,
            "year": 71
        }, {
            "name": "AMC Hornet",
            "economy (mpg)": 18,
            "cylinders": 6,
            "displacement (cc)": 199,
            "power (hp)": 97,
            "weight (lb)": 2774,
            "0-60 mph (s)": 15.5,
            "year": 70
        }, {
            "name": "AMC Hornet",
            "economy (mpg)": 18,
            "cylinders": 6,
            "displacement (cc)": 232,
            "power (hp)": 100,
            "weight (lb)": 2945,
            "0-60 mph (s)": 16,
            "year": 73
        }, {
            "name": "AMC Hornet",
            "economy (mpg)": 19,
            "cylinders": 6,
            "displacement (cc)": 232,
            "power (hp)": 100,
            "weight (lb)": 2901,
            "0-60 mph (s)": 16,
            "year": 74
        }, {
            "name": "AMC Hornet",
            "economy (mpg)": 22.5,
            "cylinders": 6,
            "displacement (cc)": 232,
            "power (hp)": 90,
            "weight (lb)": 3085,
            "0-60 mph (s)": 17.6,
            "year": 76
        }, {
            "name": "AMC Matador (Wagon)",
            "economy (mpg)": 14,
            "cylinders": 8,
            "displacement (cc)": 304,
            "power (hp)": 150,
            "weight (lb)": 4257,
            "0-60 mph (s)": 15.5,
            "year": 74
        }, {
            "name": "AMC Matador (Wagon)",
            "economy (mpg)": 15,
            "cylinders": 8,
            "displacement (cc)": 304,
            "power (hp)": 150,
            "weight (lb)": 3892,
            "0-60 mph (s)": 12.5,
            "year": 72
        }, {
            "name": "AMC Matador",
            "economy (mpg)": 14,
            "cylinders": 8,
            "displacement (cc)": 304,
            "power (hp)": 150,
            "weight (lb)": 3672,
            "0-60 mph (s)": 11.5,
            "year": 73
        }, {
            "name": "AMC Matador",
            "economy (mpg)": 15,
            "cylinders": 6,
            "displacement (cc)": 258,
            "power (hp)": 110,
            "weight (lb)": 3730,
            "0-60 mph (s)": 19,
            "year": 75
        }, {
            "name": "AMC Matador",
            "economy (mpg)": 15.5,
            "cylinders": 8,
            "displacement (cc)": 304,
            "power (hp)": 120,
            "weight (lb)": 3962,
            "0-60 mph (s)": 13.9,
            "year": 76
        }, {
            "name": "AMC Matador",
            "economy (mpg)": 16,
            "cylinders": 6,
            "displacement (cc)": 258,
            "power (hp)": 110,
            "weight (lb)": 3632,
            "0-60 mph (s)": 18,
            "year": 74
        }, {
            "name": "AMC Matador",
            "economy (mpg)": 18,
            "cylinders": 6,
            "displacement (cc)": 232,
            "power (hp)": 100,
            "weight (lb)": 3288,
            "0-60 mph (s)": 15.5,
            "year": 71
        }, {
            "name": "AMC Pacer D/L",
            "economy (mpg)": 17.5,
            "cylinders": 6,
            "displacement (cc)": 258,
            "power (hp)": 95,
            "weight (lb)": 3193,
            "0-60 mph (s)": 17.8,
            "year": 76
        }, {
            "name": "AMC Pacer",
            "economy (mpg)": 19,
            "cylinders": 6,
            "displacement (cc)": 232,
            "power (hp)": 90,
            "weight (lb)": 3211,
            "0-60 mph (s)": 17,
            "year": 75
        }, {
            "name": "AMC Rebel SST (Wagon)",
            "economy (mpg)": 0,
            "cylinders": 8,
            "displacement (cc)": 360,
            "power (hp)": 175,
            "weight (lb)": 3850,
            "0-60 mph (s)": 11,
            "year": 70
        }, {
            "name": "AMC Rebel SST",
            "economy (mpg)": 16,
            "cylinders": 8,
            "displacement (cc)": 304,
            "power (hp)": 150,
            "weight (lb)": 3433,
            "0-60 mph (s)": 12,
            "year": 70
        }, {
            "name": "AMC Spirit DL",
            "economy (mpg)": 27.4,
            "cylinders": 4,
            "displacement (cc)": 121,
            "power (hp)": 80,
            "weight (lb)": 2670,
            "0-60 mph (s)": 15,
            "year": 79
        }, {
            "name": "Audi 100 LS",
            "economy (mpg)": 20,
            "cylinders": 4,
            "displacement (cc)": 114,
            "power (hp)": 91,
            "weight (lb)": 2582,
            "0-60 mph (s)": 14,
            "year": 73
        }, {
            "name": "Audi 100 LS",
            "economy (mpg)": 23,
            "cylinders": 4,
            "displacement (cc)": 115,
            "power (hp)": 95,
            "weight (lb)": 2694,
            "0-60 mph (s)": 15,
            "year": 75
        }, {
            "name": "Audi 100 LS",
            "economy (mpg)": 24,
            "cylinders": 4,
            "displacement (cc)": 107,
            "power (hp)": 90,
            "weight (lb)": 2430,
            "0-60 mph (s)": 14.5,
            "year": 70
        }, {
            "name": "Audi 4000",
            "economy (mpg)": 34.3,
            "cylinders": 4,
            "displacement (cc)": 97,
            "power (hp)": 78,
            "weight (lb)": 2188,
            "0-60 mph (s)": 15.8,
            "year": 80
        }, {
            "name": "Audi 5000",
            "economy (mpg)": 20.3,
            "cylinders": 5,
            "displacement (cc)": 131,
            "power (hp)": 103,
            "weight (lb)": 2830,
            "0-60 mph (s)": 15.9,
            "year": 78
        }, {
            "name": "Audi 5000S (Diesel)",
            "economy (mpg)": 36.4,
            "cylinders": 5,
            "displacement (cc)": 121,
            "power (hp)": 67,
            "weight (lb)": 2950,
            "0-60 mph (s)": 19.9,
            "year": 80
        }, {
            "name": "Audi Fox",
            "economy (mpg)": 29,
            "cylinders": 4,
            "displacement (cc)": 98,
            "power (hp)": 83,
            "weight (lb)": 2219,
            "0-60 mph (s)": 16.5,
            "year": 74
        }, {
            "name": "BMW 2002",
            "economy (mpg)": 26,
            "cylinders": 4,
            "displacement (cc)": 121,
            "power (hp)": 113,
            "weight (lb)": 2234,
            "0-60 mph (s)": 12.5,
            "year": 70
        }, {
            "name": "BMW 320i",
            "economy (mpg)": 21.5,
            "cylinders": 4,
            "displacement (cc)": 121,
            "power (hp)": 110,
            "weight (lb)": 2600,
            "0-60 mph (s)": 12.8,
            "year": 77
        }, {
            "name": "Buick Century 350",
            "economy (mpg)": 13,
            "cylinders": 8,
            "displacement (cc)": 350,
            "power (hp)": 175,
            "weight (lb)": 4100,
            "0-60 mph (s)": 13,
            "year": 73
        }, {
            "name": "Buick Century Limited",
            "economy (mpg)": 25,
            "cylinders": 6,
            "displacement (cc)": 181,
            "power (hp)": 110,
            "weight (lb)": 2945,
            "0-60 mph (s)": 16.4,
            "year": 82
        }, {
            "name": "Buick Century Luxus (Wagon)",
            "economy (mpg)": 13,
            "cylinders": 8,
            "displacement (cc)": 350,
            "power (hp)": 150,
            "weight (lb)": 4699,
            "0-60 mph (s)": 14.5,
            "year": 74
        }, {
            "name": "Buick Century Special",
            "economy (mpg)": 20.6,
            "cylinders": 6,
            "displacement (cc)": 231,
            "power (hp)": 105,
            "weight (lb)": 3380,
            "0-60 mph (s)": 15.8,
            "year": 78
        }, {
            "name": "Buick Century",
            "economy (mpg)": 17,
            "cylinders": 6,
            "displacement (cc)": 231,
            "power (hp)": 110,
            "weight (lb)": 3907,
            "0-60 mph (s)": 21,
            "year": 75
        }, {
            "name": "Buick Century",
            "economy (mpg)": 22.4,
            "cylinders": 6,
            "displacement (cc)": 231,
            "power (hp)": 110,
            "weight (lb)": 3415,
            "0-60 mph (s)": 15.8,
            "year": 81
        }, {
            "name": "Buick Electra 225 Custom",
            "economy (mpg)": 12,
            "cylinders": 8,
            "displacement (cc)": 455,
            "power (hp)": 225,
            "weight (lb)": 4951,
            "0-60 mph (s)": 11,
            "year": 73
        }, {
            "name": "Buick Estate Wagon (Wagon)",
            "economy (mpg)": 14,
            "cylinders": 8,
            "displacement (cc)": 455,
            "power (hp)": 225,
            "weight (lb)": 3086,
            "0-60 mph (s)": 10,
            "year": 70
        }, {
            "name": "Buick Estate Wagon (Wagon)",
            "economy (mpg)": 16.9,
            "cylinders": 8,
            "displacement (cc)": 350,
            "power (hp)": 155,
            "weight (lb)": 4360,
            "0-60 mph (s)": 14.9,
            "year": 79
        }, {
            "name": "Buick Lesabre Custom",
            "economy (mpg)": 13,
            "cylinders": 8,
            "displacement (cc)": 350,
            "power (hp)": 155,
            "weight (lb)": 4502,
            "0-60 mph (s)": 13.5,
            "year": 72
        }, {
            "name": "Buick Opel Isuzu Deluxe",
            "economy (mpg)": 30,
            "cylinders": 4,
            "displacement (cc)": 111,
            "power (hp)": 80,
            "weight (lb)": 2155,
            "0-60 mph (s)": 14.8,
            "year": 77
        }, {
            "name": "Buick Regal Sport Coupe (Turbo)",
            "economy (mpg)": 17.7,
            "cylinders": 6,
            "displacement (cc)": 231,
            "power (hp)": 165,
            "weight (lb)": 3445,
            "0-60 mph (s)": 13.4,
            "year": 78
        }]
    });
    chart.renderTo('#sample_chrart');
  },
  render: function(){
    var self = this;
    return (
      <div id='sample_chrart' ref={function(dom){self.showChart(dom)}}></div>
    );
  }
});

ReactDom.render(<App/>, document.getElementById('app'));

module.exports.App = App;