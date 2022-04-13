import useAxios from "axios-hooks";
import { useContext } from "react";
import AxiosContainer from "../providers/AxiosContainer";
import StringifyJSON from "../providers/StringifyJSON";
import { AuthContext } from "../providers/AuthProvider";

const WalletBalance = () => {
  // need to grab User from AuthProvider
  const auth = useContext(AuthContext);

  return <p> ${auth.user.balance} </p>;
};

export default WalletBalance;
