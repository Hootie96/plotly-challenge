//Function to grab the data for my vizualizations
function getPlot(id) {
    
  // get the data from the json file
  d3.json("data/samples.json").then((data)=> {
      console.log(data)
     
      var wfreq = data.metadata.map(d => d.wfreq)
        console.log(`Washing Freq: ${wfreq}`)

        var samples = data.samples.filter(s => s.id.toString() === id)[0];

  });
} 