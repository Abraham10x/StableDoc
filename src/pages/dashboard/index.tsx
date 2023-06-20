import type { NextPage } from "next";
import Seo from "../../components/general/Seo";
import Login from "../../components/dashboard/Login";

const index: NextPage = () => {
  return (
    <>
      <Seo templateTitle="Login" />
      <Login />
    </>
  );
};
export default index;
