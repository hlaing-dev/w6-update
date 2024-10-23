import Layout from "../Layout";
import Header from "../components/home/Header";
import InviteHost from "../components/home/InviteHost";
import MyHost from "../components/home/MyHost";
import TabMenu from "../components/home/TabMenu";

export default function StepsDemo() {
  return (
    <Layout>
      <div className="">
        <Header />
        <TabMenu />
        <InviteHost />
        <MyHost />
      </div>
    </Layout>
  );
}
