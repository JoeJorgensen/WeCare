import { Badge } from "react-bootstrap";
import Card from "../../providers/Card";
import githubimg from "./Images/githubimg.png"
import linkedinimg from "./Images/Linkedin.png"
import facebook from "./Images/facebook.png"
import twitter from "./Images/Twitter.png"
import behance from "./Images/Behance.png"
import insta from "./Images/instagram.png"
import google from "./Images/google.png"




import "./AboutStyle.css";
import Nav from "react-bootstrap/Nav";

const About = () => {
  return (
    <Card>
      <div>
        <h1>
          <u>WeCare Dev Team</u>
        </h1>
        <hr></hr>
        <h3>
          <Badge className="container" pill bg="badge rounded-pill bg-denim">
            Randy Clements
          </Badge>
          <div className="container">
            <Nav.Link href="https://github.com/Randycl808">
              {githubimg && (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  src={githubimg}
                  width={300}
                />
              )}
            </Nav.Link>

            <Nav.Link href=" ">
              {linkedinimg && (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  src={linkedinimg}
                  width={300}
                />
              )}
            </Nav.Link>

            <Nav.Link href=" ">
              {facebook && (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  src={facebook}
                  width={50}
                />
              )}
            </Nav.Link>

            <Nav.Link href=" ">
              {twitter && (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  src={twitter}
                  width={300}
                />
              )}
            </Nav.Link>

            <Nav.Link href=" ">
              {behance && (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  src={behance}
                  width={300}
                />
              )}
            </Nav.Link>

            <Nav.Link href=" ">
              {insta && (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  src={insta}
                  width={300}
                />
              )}
            </Nav.Link>

            <Nav.Link href=" ">
              {google && (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  src={google}
                  width={300}
                />
              )}
            </Nav.Link>
          </div>

          <br />
          <Badge className="container" pill bg="badge rounded-pill bg-denim">
            Joe Jorgensen
          </Badge>

          <div className="container">
            <Nav.Link href="https://github.com/JoeJorgensen">
              {githubimg && (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  src={githubimg}
                  width={300}
                />
              )}
            </Nav.Link>

            <Nav.Link href=" ">
              {linkedinimg && (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  src={linkedinimg}
                  width={300}
                />
              )}
            </Nav.Link>

            <Nav.Link href=" ">
              {facebook && (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  src={facebook}
                  width={300}
                />
              )}
            </Nav.Link>

            <Nav.Link href=" ">
              {twitter && (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  src={twitter}
                  width={300}
                />
              )}
            </Nav.Link>

            <Nav.Link href=" ">
              {behance && (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  src={behance}
                  width={300}
                />
              )}
            </Nav.Link>

            <Nav.Link href=" ">
              {insta && (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  src={insta}
                  width={300}
                />
              )}
            </Nav.Link>

            <Nav.Link href=" ">
              {google && (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  src={google}
                  width={300}
                />
              )}
            </Nav.Link>
          </div>
          <br />
          <Badge className="container" pill bg="badge rounded-pill bg-denim">
            Steven Crass
          </Badge>

          <div className="container">
            <Nav.Link href="https://github.com/TheSteveIsGreat">
              {githubimg && (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  src={githubimg}
                  width={300}
                />
              )}
            </Nav.Link>

            <Nav.Link href="https://www.linkedin.com/in/stevecrass/">
              {linkedinimg && (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  src={linkedinimg}
                  width={300}
                />
              )}
            </Nav.Link>

            <Nav.Link href=" ">
              {facebook && (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  src={facebook}
                  width={300}
                />
              )}
            </Nav.Link>

            <Nav.Link href=" ">
              {twitter && (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  src={twitter}
                  width={300}
                />
              )}
            </Nav.Link>

            <Nav.Link href=" ">
              {behance && (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  src={behance}
                  width={300}
                />
              )}
            </Nav.Link>

            <Nav.Link href=" ">
              {insta && (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  src={insta}
                  width={300}
                />
              )}
            </Nav.Link>

            <Nav.Link href=" ">
              {google && (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  src={google}
                  width={300}
                />
              )}
            </Nav.Link>
          </div>
          <br />

          <Badge className="container" pill bg="badge rounded-pill bg-denim">
            Austin Kilgore
          </Badge>
          <h5>austin.s.kilgore@gmail.com</h5>
          <div className="container">
            <Nav.Link href="https://github.com/MrKilgore94">
              {githubimg && (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  src={githubimg}
                  width={300}
                />
              )}
            </Nav.Link>

            <Nav.Link href="https://www.linkedin.com/in/austin-kilgore-586760238/">
              {linkedinimg && (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  src={linkedinimg}
                  width={300}
                />
              )}
            </Nav.Link>

            <Nav.Link href="https://www.behance.net/austinkilgore3">
              {behance && (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  src={behance}
                  width={300}
                />
              )}
            </Nav.Link>

            <Nav.Link href="https://www.instagram.com/mr_kilgore_gaming/">
              {insta && (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  src={insta}
                  width={300}
                />
              )}
            </Nav.Link>
          </div>
          <br />
        </h3>
      </div>
    </Card>
  );
};
export default About;
