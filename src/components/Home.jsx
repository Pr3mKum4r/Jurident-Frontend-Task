import "./Home.css";
import HeroImg from "../assets/HeroImg.jpg";
import Team from "./Team";
import WhyUs from "./WhyUs";
import CoreValues from "./CoreValues";

const Home = () => {
  return (
    <>
      <div className="main-content-container">
        <div className="text-container">
          <h1>Constructing a Better</h1>
          <h1>Future Together</h1>
          <p>
            We take pride in providing Residential, Commercial & Hospitality
            Engineering, Infra & Construction services.
          </p>
        </div>
        <div className="img-container">
          <img src={HeroImg} alt="HeroImg" className="hero-img" />
        </div>
      </div>
      <WhyUs/>
      <CoreValues/>
      <Team />
    </>
  );
};

export default Home;
