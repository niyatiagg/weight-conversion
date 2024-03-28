const kilogramInput = document.querySelector('#Kilogram > input');
const poundInput = document.querySelector('#Pound > input');
const ounceInput = document.querySelector('#Ounce > input');

const roundToTwoDP = (num) => {
  return num.toFixed(2);
};


const kgToLbAndOz = () => {
  const kilogramVal = parseFloat(kilogramInput.value);
  const poundVal = kilogramVal * 2.2046;
  const ounceVal = kilogramVal * 35.274;

  poundInput.value = roundToTwoDP(poundVal);
  ounceInput.value = roundToTwoDP(ounceVal);
};


const lbToKgAndOz = () => {
  const poundVal = parseFloat(poundInput.value);
  const kilogramVal = poundVal * 0.4536;
  const ounceVal = poundVal * 16;

  kilogramInput.value = roundToTwoDP(kilogramVal);
  ounceInput.value = roundToTwoDP(ounceVal);
};

const ozToKgAndLb = () => {
  const ounceVal = parseFloat(ounceInput.value);
  const kilogramVal = (ounceVal / 16) * 0.4536;
  const poundVal =  ounceVal / 16;

  kilogramInput.value = roundToTwoDP(kilogramVal);
  poundInput.value = roundToTwoDP(poundVal);
};


const main = () => {
  kilogramInput.addEventListener('input', kgToLbAndOz);
  poundInput.addEventListener('input', lbToKgAndOz);
  ounceInput.addEventListener('input', ozToKgAndLb);
};

main();