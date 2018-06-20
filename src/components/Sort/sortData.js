export default (data, type, direction) => {
  const directionLookup = {
    assending: (a, b) => a > b,
    desending: (a, b) => b > a,
  };

  const typeLookup = {
    'creation-date': (a, b) => directionLookup[direction](a['creationDate'], b['creationDate']),
    'last-name': (a, b) => directionLookup[direction](a['name']['last'], b['name']['last']),
  };

  return data.sort(typeLookup[type]);
};
