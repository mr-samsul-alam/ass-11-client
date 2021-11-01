import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const AllServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-5">
      <div className="title">
        <h1 className="sub-heading">Our All Packages</h1> 
      </div>
      <div className="container ">
        <div class="row row-cols-1 row-cols-md-3 g-4 my-5">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
