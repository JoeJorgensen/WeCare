import useAxios from "axios-hooks";
import AxiosContainer from "../providers/AxiosContainer";
import StringifyJSON from "../providers/StringifyJSON";

const WalletBalance = () => {
  const [{ data: users, loading, error }, refetch] = useAxios("/api/users");
  console.log("User Info Being Called:");
  console.log(users);

  return (
    <AxiosContainer title={"Users"} loading={loading} error={error}>
      <StringifyJSON data={users} />
    </AxiosContainer>
  );
};

export default WalletBalance;
