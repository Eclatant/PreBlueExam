function parseData(map_string) {
  map_string = map_string.replace(/-/g, " ")
  let arr = map_string.split(",");

  let map_data = {
    width: parseInt(arr[0]),
    height: parseInt(arr[1].split("\n")[0]),
    data: arr[1].split("\n").slice(1,-1)
  }

  return map_data;
}

function drawMap(json) {
  for (value of json.data) {
    console.log(value);
  }
}

drawMap(parseData("10,5\n++++++++++\n+-P------+\n+--------+\n+-----o--+\n++++++++++\n"));
