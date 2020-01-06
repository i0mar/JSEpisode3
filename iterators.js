/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = function(array) {
  array.forEach(el => console.log(el));
};

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const toCelsius = function(temperatures) {
  let temp = temperatures.map(el => el = (el - 32) * (5 / 9));
  return temp;
};

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
const hottestDays = function(temperatures, threshhold) {
  let temp = temperatures.filter(el => el > threshhold);
  return temp;
};

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
const logHottestDays = function(temperatures, threshhold) {
  let temp = hottestDays(temperatures, threshhold);
  let meshTemp = toCelsius(temp);
  meshTemp.forEach(el => console.log(el));
};

export { logger, toCelsius, hottestDays, logHottestDays };
