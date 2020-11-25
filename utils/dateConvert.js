import 'intl';
import 'intl/locale-data/jsonp/en';

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
