import Header from "components/atoms/header";
import Layout from "components/atoms/layout";
import Item from "components/molecules/item";
import NavBar from "components/organisms/nav-bar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout type="nav">
        <NavBar url={"/"} />
      </Layout>
    </>
  );
}
