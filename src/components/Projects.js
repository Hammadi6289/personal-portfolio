import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/VALSPAR.PNG";
import projImg2 from "../assets/img/project-img22.PNG";
import projImg3 from "../assets/img/sharpShooterspng.PNG";
import projImg4 from "../assets/img/NatureExplorerTourismpng.PNG";
import projImg5 from "../assets/img/genesispng.PNG";
import projImg6 from "../assets/img/touchupPaintFactorypng.PNG";
import projImg7 from "../assets/img/touchupXSpng.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "RAL Sales POS",
      description: "MERN Stack App Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "TouchupXS - Express King",
      description: "MERN Stack App Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Sharpshooters Arena",
      description: "React.js, Node.js and MongoDB",
      imgUrl: projImg3,
    },
    {
      title: "Tourism Web Application",
      description: "React.js",
      imgUrl: projImg4,
    },
    {
      title: "Genesis Auto Body Supply.",
      description: "React.js (Designing)",
      imgUrl: projImg5,
    },
    {
      title: "Touchup Paint Factory",
      description: "Shopify, JavaScript",
      imgUrl: projImg6,
    },
    {
      title: "TouchupXS.com",
      description: "Wordpress, JavaScript, MongoDB",
      imgUrl: projImg7,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Recent Projects</h2>
                  <p>
                    Welcome to my portfolio! Here you'll find a collection of my
                    recent projects, showcasing my skills and expertise in web
                    development. Feel free to explore and learn more about each
                    project.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Completed</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Upcoming</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Stay Connected! More projects under pipeline, You can
                          always help me add projects here.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
