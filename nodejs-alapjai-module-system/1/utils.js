const increaseDate = (date, dayCount = 3) => {
  return date.getTime() + dayCount * 24 * 60 * 60 * 1000;
};

const increaseAndFormatDate = (datesArray, location = 'hu-HU') => {
  const criteria = { year: 'numeric', month: 'long', day: 'numeric' };
  return datesArray.map( date =>
    new Intl.DateTimeFormat(location, criteria).format(increaseDate(date))
  );
};

module.exports = Object.freeze(
  increaseAndFormatDate
);