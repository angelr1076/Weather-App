function truncate(num) {
  return Math.trunc(num);
}

function clearEl(el) {
  return (el.innerHTML = '');
}

function kelTempToFahr(temp) {
  return ((temp - 273.15) * 9) / 5 + 32;
}

function makeVisible(el) {
  el.classList.remove('hidden');
  el.classList.add('visible');
}

function makeHidden(el) {
  el.classList.remove('visible');
  el.classList.add('hidden');
}

// create function that takes a temp bool for fahrenheit value and temp value as params
function toggleTemp(btn, bool, temp, el, symbol) {
  btn.addEventListener('change', e => {
    e.preventDefault();
    // if true, bool is fahrenheit
    if (bool === true) {
      temp = (temp - 32) * (5 / 9);
      if (el.dataset.id === 'temp') {
        el.innerHTML = `${truncate(temp)}${symbol}`;
      } else if (el.dataset.id === 'feels') {
        el.innerHTML = `<i class="bi bi-thermometer-half"></i> Feels like <span class="temp-secondary">${truncate(
          temp,
        )}${symbol}</span>`;
      } else {
      }
      bool = !bool; // flip to false
    } else {
      temp = (temp * 9) / 5 + 32;
      if (el.dataset.id === 'temp') {
        el.innerHTML = `${truncate(temp)}${symbol}`;
      } else if (el.dataset.id === 'feels') {
        el.innerHTML = `<i class="bi bi-thermometer-half"></i> Feels like <span class="temp-secondary">${truncate(
          temp,
        )}${symbol}</span>`;
      } else {
      }
      bool = !bool; // flip to true
    }
  });
}

function toggleMinMax(btn, bool, temp1, temp2, el, symbol) {
  btn.addEventListener('change', e => {
    e.preventDefault();
    // if true, bool is fahrenheit
    if (bool === true) {
      temp1 = (temp1 - 32) * (5 / 9);
      temp2 = (temp2 - 32) * (5 / 9);
      el.innerHTML = `<i class="bi bi-thermometer"></i> <span class="temp-secondary">${truncate(
        temp1,
      )}${symbol}</span> | <i class="bi bi-thermometer-high"></i> <span class="temp-secondary">${truncate(
        temp2,
      )}${symbol}</span>`;
      bool = !bool; // flip to false
    } else {
      temp1 = (temp1 * 9) / 5 + 32;
      temp2 = (temp2 * 9) / 5 + 32;
      el.innerHTML = `<i class="bi bi-thermometer"></i> <span class="temp-secondary">${truncate(
        temp1,
      )}${symbol}</span> | <i class="bi bi-thermometer-high"></i> <span class="temp-secondary">${truncate(
        temp2,
      )}${symbol}</span>`;
      bool = !bool; // flip to true
    }
  });
}

function toggleLabel() {
  const checkbox = document.querySelector('.toggle-checkbox');
  const label = document.querySelector('.toggle-label');
  checkbox.addEventListener('change', () => {
    checkbox.checked
      ? (label.innerHTML = '&#8457;')
      : (label.innerHTML = '&#8451;');
  });
}

function toggleColor() {
  const checkbox = document.querySelector('.toggle-checkbox');
  checkbox.addEventListener('change', () => {
    if (!checkbox.checked) {
      document.body.classList.remove('fahrenheit-color');
      document.body.classList.add('celsius-color');
    } else {
      document.body.classList.remove('celsius-color');
      document.body.classList.add('fahrenheit-color');
    }
  });
}

export {
  truncate,
  clearEl,
  makeVisible,
  makeHidden,
  kelTempToFahr,
  toggleTemp,
  toggleMinMax,
  toggleLabel,
  toggleColor,
};
