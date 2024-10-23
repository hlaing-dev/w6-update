import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
