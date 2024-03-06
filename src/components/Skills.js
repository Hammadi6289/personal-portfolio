import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                As a MERN Stack developer, I possess a strong command over
                MongoDB, Express.js, React.js, and Node.js, enabling me to build
                scalable and efficient web applications. With expertise in
                frontend technologies like HTML, CSS, and JavaScript, I create
                intuitive user interfaces that enhance user experiences.
                Additionally, my skills extend to web designing, web
                development, and proficiency in tools like Amazon FBA and
                Shipstation. I am dedicated to continuous learning and staying
                updated with the latest trends and technologies in the field of
                web development.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>MERN Stack Development</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Web Designing</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Amazon FBA</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Shipstation</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
