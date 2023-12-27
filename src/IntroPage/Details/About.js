import React from "react";
import prod from "../../images/Prod.jpg";
import "../Details/About.css";
function About() {
  return (
    <div>
      <img src="https://splitease.cc/assets/images/noDebt.svg" alt="error" />
      <h4>
        Welcome to Shareify, where simplicity meets efficiency in managing your
        shared expenses! Our team is passionate about making your financial
        collaborations seamless and stress-free.
      </h4>
      <br />
      <h4>
        At Shareify, our mission is to empower individuals and groups to
        effortlessly track, manage, and settle shared expenses. We understand
        the challenges that come with splitting bills and managing group
        finances, and we're here to simplify the process for you.
      </h4>
      <br />
      <h4>
        We are a dedicated team of finance enthusiasts, software developers, and
        user experience designers who came together with a shared vision. Our
        diverse backgrounds and experiences have shaped Shareify into the
        reliable and user-friendly expense sharing app it is today.
      </h4>
      <hr />
      <div className="prodiv">
        <h2>Investors : </h2>
        <img src={prod} alt="error" className="prod" />
        <h3>Sri Pradosh</h3>
        <h5>Founder:</h5>
        <p>Intica pvt.ltd, Coimbatore</p>
      </div>
      <hr />
    </div>
  );
}

export default About;
