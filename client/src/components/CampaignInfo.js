import useAxios from "axios-hooks";
import AxiosContainer from "../providers/AxiosContainer";
import StringifyJSON from "../providers/StringifyJSON";

const Campaigns = () => {
  const [{ data: campaigns, loading, error }, refetch] =
    useAxios("/api/campaigns");
  console.log("Campaign Info Being Called:");
  console.log(campaigns);

  const renderOneCamp = (campObj) => {
    return { ...campObj };
  };

  return (
    <AxiosContainer title={"Campaigns"} loading={loading} error={error}>
      <StringifyJSON data={campaigns} />
    </AxiosContainer>
  );
};

export default Campaigns;
