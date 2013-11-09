(function($) {

	'use strict';
	var Utils = require('./utils');
	var d3 = require('./d3shim.js');


	$(document).ready(function() {


		console.log(d3.version);
		console.log(Utils.simpleAdd(1, 2));
		console.log(Utils.d3Version());


		console.log('initializing.......');
		console.log($.fn.jquery);

    var sampleSVG = Utils.createSvg('#viz',400,400);
	console.log(sampleSVG);
	Utils.addCircle(sampleSVG, 120,130,130,'white','black');
    // sampleSVG.append("svg:circle")
    //     .style("stroke", "black")
    //     .style("fill", "white")
    //     .attr("r", 120)
    //     .attr("cx", 130)
    //     .attr("cy", 130);
	});

})(jQuery);