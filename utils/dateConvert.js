import 'intl';
import 'intl/locale-data/jsonp/en';

// This is used for transforming ISODate strings from a ms value into a string we display

const isoToLocale = isoDate => {
  const intl = new Intl.DateTimeFormat('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  }).format(new Date(isoDate));

  return intl;
};

export default isoToLocale;
