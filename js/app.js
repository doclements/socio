(function($) {

	'use strict';
	var Utils = require('./utils');
	var d3 = require('./d3shim.js');
		var d3chart = require('../bower_components/d3.chart/d3.chart');

	var a = require('./a');
	var b = require('./b');
var bchart = require('./bartest');



	$(document).ready(function() {
		var barchart = d3.select('#viz')
  .append('svg')
  .attr('height', 300)
  .attr('width', 800)
  .chart('BarChart');

barchart.draw([
  { name : 'January', value : 29 },
  { name : 'February', value : 32 },
  { name : 'March', value : 48 },
  { name : 'April', value : 49 },
  { name : 'May', value : 58 },
  { name : 'June', value : 68 },
  { name : 'July', value : 74 },
  { name : 'August', value : 73 },
  { name : 'September', value : 65 },
  { name : 'October', value : 54 },
  { name : 'November', value : 45 },
  { name : 'December', value : 35 }
]);
		console.log(d3.chart);
		console.log(a.hmmm());
console.log(b.hmmm());
console.log(b.blah());


		console.log(d3.version);
		console.log(Utils.simpleAdd(1, 2));
		console.log(Utils.d3Version());


		console.log('initializing.......');
		console.log($.fn.jquery);

    var sampleSVG = Utils.createSvg('#viz',400,400);
	console.log(sampleSVG);
	Utils.addCircle(sampleSVG, 120,130,130,'white','black');
    sampleSVG.append("svg:circle")
        .style("stroke", "black")
        .style("fill", "None")
        .attr("r", 120)
        .attr("cx", 140)
        .attr("cy", 140);
	});
//
})(jQuery);