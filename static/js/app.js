function getPlots(id) {
    //Read samples.json
        d3.json("samples.json").then (sampledata =>{
            console.log(sampledata)
            var ids = sampledata.samples[0].otu_ids;
            console.log(ids)
            var sampleValues =  sampledata.samples[0].sample_values.slice(0,10).reverse();
            console.log(sampleValues)
            var labels =  sampledata.samples[0].otu_labels.slice(0,10);
            console.log (labels)
        // for top 10 otu ids for the plot OTU and reversing it. 
            var OTU_top = ( sampledata.samples[0].otu_ids.slice(0, 10)).reverse();
        // for otu id's to the desired form for the plot
            var OTU_id = OTU_top.map(d => "OTU " + d);
            console.log(`OTU IDS: ${OTU_id}`)
         // for top 10 labels for the plot
            var labels =  sampledata.samples[0].otu_labels.slice(0,10);
            console.log(`OTU_labels: ${labels}`)
            var trace = {
                x: sampleValues,
                y: OTU_id,
                text: labels,
                marker: {
                color: 'orange'},
                type:"bar",
                orientation: "h",
            };
            // for data variable
            var data = [trace];
    
            // for layout variable to set plots layout
            var layout = {
                title: "Top 10 OTUs",
                yaxis:{
                    tickmode:"linear",
                },
                margin: {
                    l: 100,
                    r: 100,
                    t: 100,
                    b: 30
                }
            };
    
            // for the bar plot
        Plotly.newPlot("bar", data, layout);
            // for bubble chart
            var trace1 = {
                x: sampledata.samples[0].otu_ids,
                y: sampledata.samples[0].sample_values,
                mode: "markers",
                marker: {
                    size: sampledata.samples[0].sample_values,
                    color: sampledata.samples[0].otu_ids
                },
                text:  sampledata.samples[0].otu_labels
    
            };
    
            // for the layout for the bubble plot
            var layout_2 = {
                xaxis:{title: "OTU ID"},
                height: 600,
                width: 1000
            };
    
            // for data variable 
            var data1 = [trace1];
    
        // for the bubble plot
        Plotly.newPlot("bubble", data1, layout_2); 
        
        });
    }  
    // for the function to get the necessary data
    function getDemoInfo(id) {
    // read the json file to get data
        d3.json("samples.json").then((data)=> {
    // for metadata info for the demographic panel
            var metadata = data.metadata;
    
            console.log(metadata)
    
          // for filtering the meta data info by id
           var result = metadata.filter(meta => meta.id.toString() === id)[0];
          // for selecting the demographic panel to put data
           var demographicInfo = d3.select("#sample-metadata");
            
         // for emptying the demographic info panel each time before getting new id info
           demographicInfo.html("");
    
         // for grabbing the necessary demographic data data for the id and append the info to the panel
            Object.entries(result).forEach((key) => {   
                demographicInfo.append("h5").text(key[0].toLowerCase() + ": " + key[1] + "\n");    
            });
        });
    }
    // for the function for the change event
    function optionChanged(id) {
        getPlots(id);
        getDemoInfo(id);
    }
    
    // for the function for the initial data rendering
    function init() {
        // for selecting dropdown menu 
        var dropdown = d3.select("#selDataset");
    
        // for reading the data 
        d3.json("samples.json").then((data)=> {
            console.log(data)
    
            // for getting the id data to the dropdwown menu
            data.names.forEach(function(name) {
                dropdown.append("option").text(name).property("value");
            });
    
            // for calling the functions to display the data and the plots to the page
            getPlots(data.names[0]);
            getDemoInfo(data.names[0]);
        });
    }
    
    init();