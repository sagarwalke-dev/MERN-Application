import React from "react";
import "./css/Contact.css";
const About = () => {
  let jwtVerify = async (e) => {
    e.preventDefault();
    const res = await fetch("/profile", {
      method: "get",
      credentials: "include",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await res.json();
    console.log(data.user.userId);
  };
  return (
    <>
      <button onClick={jwtVerify}>JWT Verification</button>
    </>
  );
};

export default About;
