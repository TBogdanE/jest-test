const analyzeArray = (arr) => {
  const getAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return Math.round(sum / arr.length);
  };

  const average = getAverage(arr);
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  const obj = { average: average, min: min, max: max, length: length };

  return obj;
};

module.exports = analyzeArray;
