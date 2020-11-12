//get data from JSON file
d3.json("samples.json").then(function(importedData) {
    //console.log(importedData)
    //store data into a variable
    var data = importedData    
    //get the test subject ID to place in dropdown
    var names = data.names;
    names.forEach(function(name){
    d3.select("#selDataset").append("option").text(name);
})

// Create a default plot to initialize
function init(){

    defaultData = data.samples.filter(sample => sample.id === "940")[0];
    //console.log(defaultData)

    //get all the data for defaultData
    var defaultValue = defaultData.sample_values;
    var defaultLabel = defaultData.otu_labels;
    var defaultID = defaultData.otu_ids;
    //console.log(defaultValue)

    //slice the needed data from the defaultData
    var defaultSampleTop = defaultValue.slice(0,10);
    var defaultLabelsTop = defaultLabel.slice(0,10);
    var defaultOTUIDTop = defaultID.slice(0,10);
    // console.log(defaultSampleTop);
    // console.log(defaultSampleTopdefaultLabelsTop);
    // console.log(defaultOTUIDTop)
// creating Bar graph
var trace = [{
    type: "bar",
    x: defaultOTUIDTop,
    y:defaultSampleTop,
    orientation: "h"
}]
var layout ={
    title: "Top OTU Values",
    xaxis: {title: "OTU IDs"},
    yaxis: {title: "OTU Values"},
}
Plotly.newPlot("bar", trace, layout)

//Creating bubble chart
var trace1 = [{
    x: defaultID,
    y:defaultValue,
    text: defaultLabel,
    mode: "markers",
    marker:{
        size:defaultValue,
        color: defaultID
    }
}]
  
  var layout1 = {
    title: "Values of All Samples",
    xaxis: {title: "OTU IDs"},
    yaxis:{title: "Values of OTU"}

  };
  
  Plotly.newPlot('bubble', trace1, layout1);

  //add default demographics
  var demographics = data.metadata.filter(info=>info.id===940)[0]
  //console.log(demographics)
  Object.entries(demographics).forEach(([key,value])=>
  d3.select("#sample-metadata").append("div").text(`${key}: ${value}`));

}
init();

//update to take place on DOM
d3.selectAll("#selDataset").on("click", updatePlotly);
function updatePlotly() {
    //select dropdown
    dropdownMenu = d3.select("#selDataset");
    //assign value to dropdown menu
    var dropdownMenuValue= dropdownMenu.property("value");
    //console.log(dropdownMenuValue)
    //Filter through the individual IDs
    var allData = data.samples.filter(sample => sample.id ===dropdownMenuValue)[0];
    //console.log(allData)
    
    //select all values based on selected ID
    var sampleValues= allData.sample_values
    var sampleLabel = allData.otu_labels;
    var sampleID = allData.otu_ids;

    // select only the top 10 OTUs in each sample value
    var sampleValuesTop = sampleValues.slice(0.10);
    var sampleLabelTop= sampleLabel.slice(0.10)
    var sampleIDTop= sampleID.slice(0,10);
    //console.log(sampleValuesTop)
    //console.log(sampleLabelTop)
    //console.log(sampleIDTop)

    //update charts
    Plotly.restyle("bar","x", [sampleValuesTop]);
    Plotly.restyle("bar", "y", [sampleIDTop]);


    Plotly.restyle("bubble", "x", [sampleID]);
    Plotly.restyle("bubble", "y", [sampleValues]);
    Plotly.restyle("bubble", "text", [sampleLabel]);
    Plotly.restyle("bubble", "marker.size", [sampleValues])
    Plotly.restyle("bubble", "marker.color", [sampleID])

    //update demographics
    newdemographics = data.metadata.filter(info=>info.id===dropdownMenuValue)[0]
    //clear inputs
    d3.select("#sample-metadata").html("");

    // Display the demographics information of each new input
    Object.entries(newdemographics).forEach(([key,value])=>
    d3.select("#sample-metadata").append("div").text(`${key}: ${value}`));
  
updatePlotly();
}

})

  