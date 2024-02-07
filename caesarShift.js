const caesarShift = (string, key) => {
  const text = string.split("");
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  let encryption = "";

  for (let i = 0; i < text.length; i++) {
    let index = letters.indexOf(text[i]) + key;
    if (index > 25) index = index - 26;
    encryption += letters[index].toUpperCase();
  }
  console.log(encryption);
  return encryption;
};

caesarShift("salutarexyz", 3);
module.exports = caesarShift;
