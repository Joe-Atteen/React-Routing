import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services">
      <h1>Services</h1>
      <p>
        This is the services page. We provide the following{" "}
        <Link className="link" to="/servicedetails:id">
          services
        </Link>
      </p>
    </div>
  );
};

export default Services;
