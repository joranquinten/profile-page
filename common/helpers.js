const sorterByProperty = (property, type) => (a, b) => {
  const fallback = type === 'date' ? new Date().toISOString().split('T')[0] : '';

  const getValue = item => {
    const value = item[property] || fallback;
    return !isNaN(parseFloat(value)) && isFinite(value) ? value : value.toLowerCase(); // esline-disable-line no-restricted-globals
  };

  if (getValue(a) < getValue(b)) {
    return -1;
  }
  if (getValue(b) < getValue(a)) {
    return 1;
  }
  return 0;
};

export { sorterByProperty };
