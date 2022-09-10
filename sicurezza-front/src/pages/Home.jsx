import image from "../assets/logo.png";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <div>
        <h1>Home Pages</h1>
        <img src={image} />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
