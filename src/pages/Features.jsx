import "../styles/Features.css";
import icon1 from "../img/Icon1.png";
import icon2 from "../img/Icon2.png";
import icon3 from "../img/Icon3.png";
import screen01 from "../img/screen-01.png";
import screen02 from "../img/screen-02.png";
import screen03 from "../img/screen-03.png";

const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="main-features container">
          <h1 className="features-title">Main Features</h1>
          <p className="features-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
            vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor
            pulvinar risus pulvinar sit amet. Id vel in nam malesuada.
          </p>
        </div>
        <div className="features-grid container">
          <div className="grid-item">
            <img src={icon1} alt="icon" />
            <h3>Monitoring 24/7</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipis cing elit.
              Elementum nisi aliquet volutpat.
            </p>
          </div>
          <div className="grid-item">
            <img src={icon2} alt="icon" />
            <h3>Widget System</h3>
            <p>
              Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae
              et, tortor pulvinar risus pulvinar.
            </p>
          </div>
          <div className="grid-item">
            <img src={icon3} alt="icon" />
            <h3>Best Performance</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipis cing elit.
              Elementum nisi aliquet volutpat.
            </p>
          </div>
        </div>
        <section>
          <div className="section-info">
            <h1>Automated Reports & Widget Alerts</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
              vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor
              pulvinar risus pulvinar sit amet.
            </p>
          </div>
          <div className="section-img">
            <img src={screen01} alt="screen" />
          </div>
        </section>
        <section>
          <div className="section-img">
            <img src={screen02} alt="screen" />
          </div>
          <div className="section-info">
            <h1>Fully customizable to address your needs </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
              vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor
              pulvinar risus pulvinar sit amet.
            </p>
          </div>
        </section>
        <section>
          <div className="section-info">
            <h1>Pre-built Dashboard Templates</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
              vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor
              pulvinar risus pulvinar sit amet.
            </p>
          </div>
          <div className="section-img">
            <img src={screen03} alt="screen" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;
