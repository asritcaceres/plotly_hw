    d3.json("samples.json").then(function(importedData) {
      console.log(importedData)
    
    });

    d3.selectAll("#selDataset").on("change", updatePlotly);

function updatePlotly(){
    var dropdownMenu = d3.selectAll("#selDataset");
    var dropdownMenuValue= dropdownMenu.property("value");
        //console.log(dropdownMenuValue)

    var allData = importedData.samples.filter(sample => sample.id ===dropdownMenuValue)[0]
        //console.log(allData)
    
    var sampleValues = allData.sample_values;
    var labels = allData.otu_labels;
    var ids = allData.otu_ids;

    //slice the needed data

    var sample_top = sample.slice(0,11)
    var labels_top = labels.slice(0,11)
    var otu_id_top = ids.slice(0,11)
    
    

        // init();

        // function unpack(rows, index) {
        //     return rows.map(function(row) {
        //       return row[index];
        //     });
        //   }
          
        //   function buildPlot() {
        //     d3.json(url).then(function(data) {
          
        //       // Grab values from the data json object to build the plots
        //       var name = data.dataset.name;
        //       var stock = data.dataset.dataset_code;
        //       var startDate = data.dataset.start_date;
        //       var endDate = data.dataset.end_date;
        //       var dates = unpack(data.dataset.data, 0);
        //       var closingPrices = unpack(data.dataset.data, 4);
          
        //       var trace1 = {
        //         type: "scatter",
        //         mode: "lines",
        //         name: name,
        //         x: dates,
        //         y: closingPrices,
        //         line: {
        //           color: "#17BECF"
        //         }
        //       };
          
        //       var data = [trace1];
          
        //       var layout = {
        //         title: `${stock} closing prices`,
        //         xaxis: {
        //           range: [startDate, endDate],
        //           type: "date"
        //         },
        //         yaxis: {
        //           autorange: true,
        //           type: "linear"
        //         }
        //       };
          
        //       Plotly.newPlot("plot", data, layout);
          
        //     });
        //   }
          
        //   buildPlot();

        updatePlotly();
}