const StringifyJSON = ({ data }) => {
  return <div>{JSON.stringify(data, null, 2)}</div>;
};

export default StringifyJSON;
