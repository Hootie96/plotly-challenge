d3.json("./samples.json").then((data)=> {
  console.log(data)

var wfreq = data.metadata.map(d => d.wfreq)
        console.log(`Washing Freq: ${wfreq}`)
// id="selDataset"
var samples = data.samples.filter(s => s.id.toString() === "selDataset")[0];

console.log(samples);







});
