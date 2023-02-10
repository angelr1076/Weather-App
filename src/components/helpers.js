function truncate(num) {
  return Math.trunc(num);
}

function clearEl(el) {
  return (el.innerHTML = '');
}

export { truncate, clearEl };
