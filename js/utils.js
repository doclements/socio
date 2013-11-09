(function($) {

	'use strict';
	var d3 = require('./d3shim.js');

	var Utils = {};


	Utils.simpleAdd = function(a, b) {
		return a + b;
	};

	Utils.d3Version = function() {
		return d3.version;
	};

	Utils.createSvg = function(el, h, w) {
		return d3.select(el)
			.append("svg:svg")
			.attr("width", w)
			.attr("height", h);
	};

	Utils.addCircle = function(svgObj, r, cx, cy, fill, stroke) {
		return svgObj.append("svg:circle")
			.style("stroke",stroke)
			.style("fill", fill)
			.attr("r", r)
			.attr("cx", cx)
			.attr("cy", cy);
	};



	module.exports = Utils;


})(jQuery);