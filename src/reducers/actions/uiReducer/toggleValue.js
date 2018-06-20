export default (values, state) => {
  const index = values.findIndex(({ id }) => id === state.id);
  const updatedIndex = (index + 1) % 2;
  return values[updatedIndex];
};
