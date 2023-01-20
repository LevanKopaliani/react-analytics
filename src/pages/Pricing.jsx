import "../styles/Pricing.css";
import Button from "../components/Button";
import Footer from "../components/Footer";

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
            <h2 className="pack-name">Starter</h2>
            <p className="pack-sub">up to 3 users</p>
            <h1 className="pack-price">$29</h1>
            <p className="pack-price-month">per month</p>
            <Button
              className="pricing-button"
              text={"Order"}
              size={"pricing-button-m"}
            />
          </div>
          <div className="pricing-grid__item">
            <h2 className="pack-name second-item">Standard</h2>
            <p className="pack-sub">up to 20 users</p>
            <h1 className="pack-price second-item">$99</h1>
            <p className="pack-price-month">per month</p>
            <Button
              className="pricing-button"
              bg="maincolor"
              text={"Order"}
              size={"pricing-button-m"}
            />
          </div>
          <div className="pricing-grid__item">
            <h2 className="pack-name">Premium</h2>
            <p className="pack-sub">up to 200 users</p>
            <h1 className="pack-price">$299</h1>
            <p className="pack-price-month">per month</p>
            <Button
              className="pricing-button"
              text={"Order"}
              size={"pricing-button-m"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
