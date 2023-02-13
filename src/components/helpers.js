function truncate(num) {
  return Math.trunc(num);
}

function clearEl(el) {
  return (el.innerHTML = '');
}

function kelTempToFahr(temp) {
  return ((temp - 273.15) * 9) / 5 + 32;
}

// create function that takes a temp bool for fahrenheit value and temp value as params
function toggleTemp(btn, bool, temp, el, symbol) {
  btn.addEventListener('click', e => {
    e.preventDefault();
    // if true, bool is fahrenheit
    if (bool === true) {
      // console.log(el.dataset.id);
      temp = (temp - 32) * (5 / 9);
      if (el.dataset.id === 'temp') {
        el.innerHTML = `${truncate(temp)}${symbol}`;
      } else if (el.dataset.id === 'feels') {
        el.innerHTML = `Feels like: ${truncate(temp)}${symbol}`;
      } else {
      }
      bool = !bool; // flip to false
    } else {
      temp = (temp * 9) / 5 + 32;
      if (el.dataset.id === 'temp' || el.dataset.id === 'feels_like') {
        el.innerHTML = `${truncate(temp)}${symbol}`;
      } else if (el.dataset.id === 'feels') {
        el.innerHTML = `Feels like: ${truncate(temp)}${symbol}`;
      } else {
      }
      bool = !bool; // flip to true
    }
  });
}

function toggleMinMax(btn, bool, temp1, temp2, el, symbol) {
  btn.addEventListener('click', e => {
    e.preventDefault();
    // if true, bool is fahrenheit
    if (bool === true) {
      // console.log(el.dataset.id);
      temp1 = (temp1 - 32) * (5 / 9);
      temp2 = (temp2 - 32) * (5 / 9);
      el.innerHTML = `L: ${truncate(temp1)}${symbol} | H: ${truncate(
        temp2,
      )}${symbol}`;
      bool = !bool; // flip to false
    } else {
      temp1 = (temp1 * 9) / 5 + 32;
      temp2 = (temp2 * 9) / 5 + 32;
      el.innerHTML = `L: ${truncate(temp1)}${symbol} | H: ${truncate(
        temp2,
      )}${symbol}`;
      bool = !bool; // flip to true
    }
  });
}

export { truncate, clearEl, kelTempToFahr, toggleTemp, toggleMinMax };
