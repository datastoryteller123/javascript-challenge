// from data.js
var tableData = data;
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use d3 to append one table row `tr` for each UFO Sighting
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO Sightings value
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value)
    });
});

// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html("");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#form");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

var filteredData = tableData.filter((sighting => sighting.datetime === inputValue),
    (sighting => sighting.city === inputValue),(sighting => sighting.state === inputValue),
    (sighting => sighting.country === inputValue),(sighting => sighting.shape === inputValue));
console.log(filteredData);

filteredData.forEach(function(selection) {
    console.log(selection);

    // Use d3 to append one table row `tr` for each UFO Sighting
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO Sightings value
    Object.entries(selection).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value)        
    });
});
});
