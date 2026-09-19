// 10. Daily Temperatures

var dailyTemperatures = function (temperatures) {
  const result = new Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const previousIndex = stack.pop();

      result[previousIndex] = i - previousIndex;
    }

    stack.push(i);
  }

  return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
