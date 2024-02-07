const capitalize = (string) => {
  const capStr = string.charAt(0).toUpperCase() + string.slice(1);
  return capStr;
};

module.exports = capitalize;
