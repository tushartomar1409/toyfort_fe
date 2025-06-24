export const getContinentByCountry = (countryCode) => {
  const continentMap = {
    AF: 'Asia', IN: 'Asia', CN: 'Asia', JP: 'Asia',
    US: 'North America', CA: 'North America', MX: 'North America',
    FR: 'Europe', DE: 'Europe', IT: 'Europe', GB: 'Europe',
    BR: 'South America', AR: 'South America',
    NG: 'Africa', ZA: 'Africa', EG: 'Africa',
    AU: 'Australia', NZ: 'Australia',
    AQ: 'Antarctica',
  };
  return continentMap[countryCode] || 'Other';
};