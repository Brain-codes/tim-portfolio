import Footer from "./Footer";
import Head from "next/head";
import Navbars from "./Navbars"
import Index from "./Index";
import index from "../pages";
// import Secondnav from "./Secondnav"
import AOS from "aos";
// import "aos/dist/aos.css";

// AOS.init();

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Ayodele Timothy</title>
        <script>AOS.init();</script>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </Head>

      <div className="content">
        <Navbars/>
          {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
