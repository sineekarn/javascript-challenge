// from data.js
var table_data = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody")
console.log(tbody)

table_data.forEach((ufo_data) => {
  var row = tbody.append("tr");
  Object.entries(ufo_data).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Assign the data from `data.js` to a descriptive variable
var ufo = data;

// Select the button
var button = d3.select("button");

button.on("click", function() {
  tbody.html('')
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(ufo);

  var filteredData = ufo.filter(ufo => ufo.datetime === inputValue);

  console.log(filteredData);

  filteredData.forEach((ufo_data) => {
    var row = tbody.append("tr");
    Object.entries(ufo_data).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
  });
});
});
