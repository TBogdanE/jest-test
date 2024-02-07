const capitalize = require("./capitalize");
const reverseStr = require("./reverseStr");
const calculator = require("./calculator");
const analyzeArray = require("./analyzeArray");
const caesarShift = require("./caesarShift");

test("Capitalize", () => {
  expect(capitalize("sum")).toBe("Sum");
});

test("Reverse string", () => {
  expect(reverseStr("string")).toBe("gnirts");
});

test("Add", () => {
  expect(new calculator().add(2, 3)).toBe(5);
});

test("Substract", () => {
  expect(new calculator().substract(6, 3)).toBe(3);
});

test("Add", () => {
  expect(new calculator().multiply(2, 3)).toBe(6);
});

test("Add", () => {
  expect(new calculator().divide(9, 3)).toBe(3);
});

test("analyzeArray", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("caesarShift", () => {
  expect(caesarShift("salutarexyz", 3)).toBe("VDOXWDUHABC");
});
