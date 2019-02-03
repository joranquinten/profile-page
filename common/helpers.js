const sorterByProperty = (property, type) => (a, b) => {
  const fallback = type === 'date' ? new Date().toISOString().split('T')[0] : '';
  if ((a[property] || fallback) < (b[property] || fallback)) {
    return -1;
  }
  if ((b[property] || fallback) < (a[property] || fallback)) {
    return 1;
  }
  return 0;
};

export { sorterByProperty };
