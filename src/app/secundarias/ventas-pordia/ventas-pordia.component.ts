import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'app-ventas-pordia',
  templateUrl: './ventas-pordia.component.html',
  styleUrls: ['./ventas-pordia.component.css']
})
export class VentasPordiaComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  /*  		var categories= ['','Accesorios', 'Audio', 'Fotografía', 'Telefonía', 'Computadores','eBook','Artilugios','GPS y Navegación','Entretenemiento','Electrónica','Audio Portable','Video Portable','Seguridad','Servicios','Televisión','Vehículos'];

		var dollars = [213,209,190,179,156,209,190,179,213,209,190,179,156,209,190,190];

		var colors = ['#0000b4','#0082ca','#0094ff','#0d4bcf','#0066AE','#074285','#00187B','#285964','#405F83','#416545','#4D7069','#6E9985','#7EBC89','#0283AF','#79BCBF','#99C19E'];

		var grid = d3.range(25).map(function(i){
			return {'x1':0,'y1':0,'x2':0,'y2':480};
		});

		var tickVals = grid.map(function(d,i){
			if(i>0){ return i*10; }
			else if(i===0){ return "100";}
		});

		var xscale = d3.scaleLinear()
						.domain([10,250])
						.range([0,722]);

		var yscale = d3.scaleLinear()
						.domain([0,categories.length])
						.range([0,480]);

		var colorScale = d3.scaleQuantize()
						.domain([0,categories.length])
						.range(colors);

		var canvas = d3.select("#wrapper")
						.append('svg')
						.attr({'width':900,'height':550});

		var grids = canvas.append('g')
						  .attr('id','grid')
						  .attr('transform','translate(150,10)')
						  .selectAll("line")
						  .data(grid)
						  .enter()
						  .append("line")
						  .attr({'x1':function(d,i){ return i*30; },
								 'y1':function(d){ return d.y1; },
								 'x2':function(d,i){ return i*30; },
								 'y2':function(d){ return d.y2; },
							})
						  .style({'stroke':'#adadad','stroke-width':'1px'});

		var	xAxis = d3.svg.axis();
			xAxis
				.orient('bottom')
				.scale(xscale)
				.tickValues(tickVals);

		var	yAxis = d3.svg.axis();
			yAxis
				.orient('left')
				.scale(yscale)
				.tickSize(2)
				.tickFormat(function(d,i){ return categories[i]; })
				.tickValues(d3.range(17));

		var y_xis = canvas.append('g')
						  .attr("transform", "translate(150,0)")
						  .attr('id','yaxis')
						  .call(yAxis);

		var x_xis = canvas.append('g')
						  .attr("transform", "translate(150,480)")
						  .attr('id','xaxis')
						  .call(xAxis);

		var chart = canvas.append('g')
							.attr("transform", "translate(150,0)")
							.attr('id','bars')
							.selectAll('rect')
							.data(dollars)
							.enter()
							.append('rect')
							.attr('height',19)
							.attr({'x':0,'y':function(d,i){ return yscale(i)+19; }})
							.style('fill',function(d,i){ return colorScale(i); })
							.attr('width',function(d){ return 0; });


		var transit = d3.select("svg").selectAll("rect")
						    .data(dollars)
						    .transition()
						    .duration(1000) 
						    .attr("width", function(d) {return xscale(d); });

		var transitext = d3.select("#bars")
							.selectAll('text')
							.data(dollars)
							.enter()
							.append('text')
							.attr({'x':function(d) {return xscale(d)-200; },'y':function(d,i){ return yscale(i)+35; }})
							.text(function(d){ return d+"$"; }).style({'fill':'#fff','font-size':'14px'});*/




  }

}


		