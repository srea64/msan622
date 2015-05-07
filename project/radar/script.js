var w = 500,
	h = 500;

var colorscale = d3.scale.category10();

//Legend titles
// var LegendOptions = ['Smartphone','Tablet'];
var LegendOptions = ['Ash','Gary'];

//Data
// var d = [
// 		  [
// 			{axis:"Email",value:0.59},
// 			{axis:"Social Networks",value:0.56},
// 			{axis:"Internet Banking",value:0.42},
// 			{axis:"News Sportsites",value:0.34},
// 			{axis:"Search Engine",value:0.48},
// 			{axis:"Use less Once week",value:0.08}
// 		  ],[
// 			{axis:"Email",value:0.48},
// 			{axis:"Social Networks",value:0.41},
// 			{axis:"Internet Banking",value:0.27},
// 			{axis:"News Sportsites",value:0.28},
// 			{axis:"Search Engine",value:0.46},
// 			{axis:"Use less Once week",value:0.17}
// 		  ]
// 		];

// Mewtwo
var d = [
	[{axis:"Health Points", value:106},
	{axis:"Attack", value:110},
	{axis:"Defense", value:90},
	{axis:"Special Attack", value:154},
	{axis:"Special Defense", value:90},
	{axis:"Speed", value:130}],


	// Mew
	[{axis:"Health Points", value:100},
	{axis:"Attack", value:100},
	{axis:"Defense", value:100},
	{axis:"Special Attack", value:100},
	{axis:"Special Defense", value:100},
	{axis:"Speed", value:100}]
];


tester = [{axis:"Health Points", value:100},
	{axis:"Attack", value:100},
	{axis:"Defense", value:100},
	{axis:"Special Attack", value:100},
	{axis:"Special Defense", value:100},
	{axis:"Speed", value:100}];

console.log(typeof tester);

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  // maxValue: 200, // calculated automatically elsewhere
  levels: 10,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	// .text("What % of owners use a specific service in a week");
	.text("Team");
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	