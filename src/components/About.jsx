import AboutImg from "../assets/AboutImg.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about-content-container">
      <div className="about-img-container">
        <img src={AboutImg} alt="AboutImg" className="about-img" />
      </div>
      <div className="about-text-container">
        <h1>Who We Are</h1>
        <p>
          StructuraWorks is a TURNKEY, Civil-contracting Proprietorship firm, which was
          founded in 2023.
        </p>
        <p>
        StructuraWorks takes pride in providing Residential, Commercial & Hospitality
          Engineering, Infra & Construction services. StructuraWorks have a team of
          experienced and professional engineers who are passionate about
          executing and are able to Complete the projects in given time line
          with there passion and hard work and quality to deal with the workers
          and get the work done
        </p>
        <p>
          We started with contracting of Institutional ,Residential, Commercial
          & Hospitality finishing Turnkey contracts . StructuraWorks hallmark of quality
          can be found on the intricate, high-end quality
        </p>
        <p>
          By contracting with StructuraWorks, you can be assured of a highly motivated,
          professional, and skilled workforce and quality job delivery at the
          most affordable rates. We never settle for ‘just ok’ but aspire for
          best in every inch of what we do.
        </p>
      </div>
    </div>
  );
};

export default About;
