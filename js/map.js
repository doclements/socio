(function($) {
  'use strict';
  var Utils = require('./utils');
  var d3 = require('./d3shim.js');
  var d3chart = require('../bower_components/d3.chart/d3.chart');
  var bchart = require('./barchart2');
  var _ = require('underscore');
  
  var get_fill_data = function(){
    return _.random(20,70);
  };

  var update_plot = function(chart){

chart.draw([
  { name : 'Jan', value : get_fill_data() },
  { name : 'Feb', value : get_fill_data() },
  { name : 'Mar', value : get_fill_data() },
  { name : 'Apr', value : get_fill_data() },
  { name : 'May',value : get_fill_data()},
  { name : 'Jun', value : get_fill_data() },
  { name : 'Jul', value : get_fill_data() },
  { name : 'Aug', value : get_fill_data() },
  { name : 'Sep', value : get_fill_data() },
  { name : 'Oct', value : get_fill_data() },
  { name : 'Nov', value : get_fill_data() },
  { name : 'Dec', value : get_fill_data() }
]);
  };
  $(document).ready(function() {
    var barchart = d3.select('#top_chart')
  .append('svg')
  .attr('height', 150)
  .attr('width', 400)
  .chart('BarChart2');

barchart.draw([
  { name : 'Jan', value : 29 },
  { name : 'Feb', value : 32 },
  { name : 'Mar', value : 48 },
  { name : 'Apr', value : 49 },
  { name : 'May',value : 58 },
  { name : 'Jun', value : 68 },
  { name : 'Jul', value : 74 },
  { name : 'Aug', value : 73 },
  { name : 'Sep', value : 65 },
  { name : 'Oct', value : 54 },
  { name : 'Nov', value : 45 },
  { name : 'Dec', value : 35 }
]);

var barchart2 = d3.select('#middle_chart')
  .append('svg')
  .attr('height', 150)
  .attr('width', 400)
  .chart('BarChart2');

barchart2.draw([
 { name : 'Jan', value : 29 },
  { name : 'Feb', value : 32 },
  { name : 'Mar', value : 48 },
  { name : 'Apr', value : 49 },
  { name : 'May',value : 58 },
  { name : 'Jun', value : 68 },
  { name : 'Jul', value : 74 },
  { name : 'Aug', value : 73 },
  { name : 'Sep', value : 65 },
  { name : 'Oct', value : 54 },
  { name : 'Nov', value : 45 },
  { name : 'Dec', value : 35 }
]);



    var width = 400,
      height = 500,
      centered;

    var projection = d3.geo.albers()
      .center([0, 55.4])
      .rotate([4.4, 0])
      .parallels([50, 60])
      .scale(1200 * 2)
      .translate([width / 2.5, height / 2]);

    var path = d3.geo.path()
      .projection(projection)
      .pointRadius(2);

    var svg = d3.select("#map")
      .attr("width", width)
      .attr("height", height);

    var do_explore  = function(region){
      var now = $('#exp_title').text();
      if (now == region){
        $('#exp_title').text('');
        return;
      }
      $('#exp_title').text(region);
      update_plot(barchart2);

    };


    var g = svg.append("g");

    d3.json("data/uk.json", function(error, uk) {
      // d3.json("data/unitary.json", function(error, unitary) {
        //console.log(unitary);
        var subunits = topojson.feature(uk, uk.objects.subunits);
        //var units = topojson.feature(unitary, unitary.objects.unitary);        
        g.selectAll("path.cunts")
          .data(subunits.features)
          .enter().append("path")
          .attr("class", function(d) {
            console.log(d);
            return "subunit " + d.id;
          })
          .attr("d", path)
          .on('click', clicked);

         // g.selectAll("path.units")
         //  .data(units.features)
         //  .enter().append("path")
         //  .attr("class", function(d) {
         //   // console.log(d);
         //    return "unit " + d.id;
         //  })
         //  .attr("d", path);
          

        // g.append("path")
        //     .datum(topojson.mesh(uk ,uk.objects.subunits, function(a, b) {
        //             return a !== b && a.id !== "IRL";
        //        }))
        //     //.attr("id", "country-borders")
        //     .attr("d", path)
        //     .attr("class", "subunit-boundary");


        g.selectAll(".subunit-label")
          .data(subunits.features)
          .enter().append("text")
          .attr("class", function(d) {
            return "subunit-label " + d.id;
          })
          .attr("transform", function(d) {
            return "translate(" + path.centroid(d) + ")";
          })
          .attr("dy", ".35em")
          .text(function(d) {
            return d.properties.name;
          });
      // });
    });

    function clicked(d) {
      var x, y, k;
      console.log(d);
      do_explore(d.properties.name);
      if (d && centered !== d) {
        var centroid = path.centroid(d);
        x = centroid[0];
        y = centroid[1];
        k = 4;
        centered = d;
      } else {
        x = width / 2;
        y = height / 2;
        k = 1;
        centered = null;
      }

      g.selectAll("path")
        .classed("active", centered && function(d) {
          return d === centered;
        });

      g.transition()
        .duration(750)
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
        .style("stroke-width", 1 / k + "px");

    }
  });
})(jQuery);