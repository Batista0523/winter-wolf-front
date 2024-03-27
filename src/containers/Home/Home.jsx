import React from "react";
import "./Home.css";
import images from "../../constants/images";

function Home() {
  return (
    <div>
      <div className="home-section">
        <section className="img-container">
          <img className="img-logo" src={images.logo} alt="" />
          <div className="description-container">
            <p className="description">
              Winter Wolf is synonymous with excellence. As leaders in HVAC
              services, we redefine industry benchmarks with our unwavering
              focus on quality, reliability, and client satisfaction. Our expert
              technicians, armed with cutting-edge technology, ensure every
              project, from installation to maintenance, is executed with
              precision. Beyond functionality, we prioritize creating
              environments of comfort, efficiency, and safety for our clients.
              With prompt responses and tailored solutions, we stand out as the
              preferred choice for discerning homeowners and businesses. Choose
              Winter Wolf for the pinnacle of HVAC service—where your
              satisfaction is not just our priority; it's our promise.
            </p>
          </div>
          
        </section>
      </div>
    </div>
  );
}

export default Home;
