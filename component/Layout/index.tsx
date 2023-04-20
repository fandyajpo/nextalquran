import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
