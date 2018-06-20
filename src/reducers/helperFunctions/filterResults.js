export default ({ data }) =>
  data.map(({ _id, creationDate, accessors }) => {
    const { name } = accessors.filter(({ name }) => name)[0];

    return {
      id: _id,
      name,
      creationDate,
    };
  });
