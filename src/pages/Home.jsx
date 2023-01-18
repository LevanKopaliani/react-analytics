import Button from "../components/Button";
import NavBar from "../components/NavBar";
import "../styles/Home.css";
import mainchart from "../img/main-screen.png";

const Home = () => {
  return (
    <main className="homepage">
      <NavBar />
      <div className="main-page">
        <div className="main-info">
          <div className="main-info-section">
            <h1 className="main-title">
              Monitor your business on real-time dashboard
            </h1>
            <p className="main-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
              vitae nibh nunc mattis imperdiet sed nullam.{" "}
            </p>
            <Button
              className="main-button"
              text={"Try for free"}
              bg={"maincolor"}
            />
          </div>
        </div>
        <div className="main-img">
          <img src={mainchart} alt="mainchart" className="mianchart" />
        </div>
      </div>
    </main>
  );
};

export default Home;
