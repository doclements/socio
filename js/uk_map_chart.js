//  console.log('iniitialising map....');
//  var width = 400,
//      height = 600,
//      centered;

//  function clicked(d) {
//      var x, y, k;
//      console.log('clicked on : ',d);
//      if (d && centered !== d) {
//          console.log('in if');
//          var centroid = path.centroid(d);
//          x = centroid[0];
//          y = centroid[1];
//          k = 4;
//          centered = d;
//      } else {
//          console.log('in else');
//          x = width / 2;
//          y = height / 2;
//          k = 1;
//          centered = null;
//      }

//      svg.selectAll("path")
//          .classed("active", centered && function(d) {
//              return d === centered;
//          });

//      svg.transition()
//          .duration(750)
//          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale( 1200 * " + k + ")translate(" + -x + "," + -y + ")")
//          .style("stroke-width", 1.5 / k + "px");
//  }
//  var projection = d3.geo.albers()
//      .center([0, 55.4])
//      .rotate([4.4, 0])
//      .parallels([50, 60])
//      .scale(1200 * 2)
//      .translate([width / 2.5, height / 2.5]);

//  var path = d3.geo.path()
//      .projection(projection)
//      .pointRadius(2);

//  var svg = d3.select("body").append("svg")
//      .attr("width", width)
//      .attr("height", height);

//  d3.json("data/uk.json", function(error, uk) {
//      var subunits = topojson.feature(uk, uk.objects.subunits); //,
//      //places = topojson.feature(uk, uk.objects.places);

//      svg.selectAll(".subunit")
//          .data(subunits.features)
//          .enter().append("path")
//          .attr("class", function(d) {
//              console.log(d);
//              return "subunit " + d.id;
//          })
//          .attr("d", path)
//          .on('click', clicked);

//      svg.append("path")
//          .datum(topojson.mesh(uk, uk.objects.subunits, function(a, b) {
//              return a !== b && a.id !== "IRL";
//          }))
//          .attr("d", path)
//          .attr("class", "subunit-boundary");

//      // svg.append("path")
//      //     .datum(topojson.mesh(uk, uk.objects.subunits, function(a, b) { return a === b && a.id === "IRL"; }))
//      //     .attr("d", path)
//      //     .attr("class", "subunit-boundary IRL");

//      svg.selectAll(".subunit-label")
//          .data(subunits.features)
//          .enter().append("text")
//          .attr("class", function(d) {
//              return "subunit-label " + d.id;
//          })
//          .attr("transform", function(d) {
//              return "translate(" + path.centroid(d) + ")";
//          })
//          .attr("dy", ".35em")
//          .text(function(d) {
//              return d.properties.name;
//          });

//      // svg.append("path")
//      //     .datum(places)
//      //     .attr("d", path)
//      //     .attr("class", "place");


//  });

// });