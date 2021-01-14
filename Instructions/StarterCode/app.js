//Function to grab the data for my vizualizations
function getPlot(myData) {

// pulling data from json file
  d3.json("/data/samples.json").then((myData) =>  {
    console.log(myData)
// error throwing on dataset  
  }   
  )}