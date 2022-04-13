import useAxios from "axios-hooks";
import { useContext } from "react";
import AxiosContainer from "../providers/AxiosContainer";
import StringifyJSON from "../providers/StringifyJSON";
import { AuthContext } from "../providers/AuthProvider";

const MyDonation = () => {
  const [{ data: donations, loading, error }, refetch] = useAxios(
    "/api/user_donations"
  );
  console.log("User Donations Being Called:");
  console.log(donations);

  return (
    <AxiosContainer title={"My Donations"} loading={loading} error={error}>
      <StringifyJSON data={donations} />
    </AxiosContainer>
  );
};

export default MyDonation;

// const Campaigns = () => {
//   const [{ data: campaigns, loading, error }, refetch] =
//     useAxios("/api/campaigns");
//   console.log("Campaign Info Being Called:");
//   console.log(campaigns);

//   return (
//     <AxiosContainer title={"Campaigns"} loading={loading} error={error}>
//       <StringifyJSON data={campaigns} />
//     </AxiosContainer>
//   );
// };
