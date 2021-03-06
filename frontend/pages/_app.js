import Layout from "../components/Reusable/t_fx__layout";
import Header from "../components/Common/Header/header.jsx";
import Footer from "../components/Common/Footer/footer.jsx";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div id="root">
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </div>
      <div id="modal"></div>
    </Layout>
  );
}

export default MyApp;
