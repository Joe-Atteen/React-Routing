import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Service Details</h1>
      <p>This is the service details page for service {id}.</p>
    </div>
  );
};

export default ServiceDetails;
