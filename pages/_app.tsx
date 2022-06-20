import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div
      className="m-0 flex min-h-screen flex-col"
      style={{ backgroundColor: "#E61997" }}
    >
      <Navbar />
      <div className="py-3"> </div>
      <div className="grow">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
