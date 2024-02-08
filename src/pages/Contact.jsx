import React from "react";
import { useParams } from "react-router";

const Contact = () => {
  const { country } = useParams();
  console.log(country);

  if (country === "en") {
    return <p>Please call 0207 123456</p>;
  }

  if (country === "usa") {
    return <p>Please call 123 345 167</p>;
  }

  return <div>Contact page</div>;
};

export default Contact;
