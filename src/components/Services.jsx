import "./Services.css";
import ServicesImg from "../assets/ServicesImg.jpg";

const Services = () => {
  return (
    <div className="about-content-container">
      <div className="about-img-container">
        <img src={ServicesImg} alt="AboutImg" className="about-img" />
      </div>
      <div className="about-text-container">
        <h1>Services We Provide</h1>
        <p>
          StructuraWorks history of commercial services successes range from
          residential and industrial complexes. StructuraWorks provides the
          highest quality of service for just about every type of Institutional,
          commercial project, and that's a promise that's backed by the
          testimony of more than a halfdecade worth of satisfied customers.
        </p>
        <div className="services-container">
          <ul>
            <li>Finishin</li>
            <li>Tiles and Gypsum</li>
            <li>Carpentory work</li>
            <li>MEP work</li>
            <li>Excavation</li>
            <li>Compaction</li>
            <li>Leveling</li>
            <li>Blinding Concrete</li>
            <li>Shuttering work</li>
            <li>Steel Reinforcement</li>
            <li>Concrete Curing</li>
            <li>Concrete and concrete test</li>
            <li>Backfilling and soil test</li>
            <li>Furniture work</li>
            <li>Completion</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
