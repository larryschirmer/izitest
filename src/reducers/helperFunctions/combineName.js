export default (nameObj = {}) => {
  let name = '';

  if (nameObj.first) name = `${nameObj.first}`;
  if (nameObj.middle) name = `${name} ${nameObj.middle}`;
  if (nameObj.last) name = `${name} ${nameObj.last}`;

  return name;
};
