import Layout from "components/atoms/layout";
import NavBar from "components/organisms/nav-bar";

export default function Stocks() {
  return (
    <>
    
      <Layout type="nav">
        <NavBar url={"/stocks"} />
      </Layout>
    </>
  );
}
