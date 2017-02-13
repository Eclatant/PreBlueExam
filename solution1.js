function to1240(number) {
  let result = 0;
  function log4(value) { return Math.log(value) / Math.log(4); }

  while (number > 3) {
    result += Math.pow(10, Math.floor(log4(number)));
    number -= Math.pow(4, Math.floor(log4(number)));
  }

  result += number;
  return String(result).replace(/3/g, "4");
}

function toDec(str) {
  let result = 0;
  str = str.replace(/4/g, "3");

  for (let i = 0, leng = str.length; i < leng; i++) {
    result += Number(str[i]) * Math.pow(4, leng - i - 1);
  }

  return result;
}

console.log(toDec(to1240(2685))); // 2685
