import "../styles/Pricing.css";
import Button from "../components/Button";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="pricing-container container">
        <div className="pricing-info">
          <h1>Pricing Plans</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet
            <br /> volutpat pellentesque volutpat est.
          </p>
        </div>
        <div className="pricing-grid">
          <div className="pricing-grid__item">
            <h2>Starter</h2>
            <p>test</p>
            <h1>$29</h1>
            <p>per month</p>
            <Button text={"Order"} size={"small"} />
          </div>
          <div className="pricing-grid__item"></div>
          <div className="pricing-grid__item"></div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
