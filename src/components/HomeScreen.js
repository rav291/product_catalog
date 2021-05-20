import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../App.css";
import "../bootstrap.min.css";

const HomeScreen = () => {
  return (
    <div classNameName="App">
      <div className="navigation" style={{ position: "sticky", top: 0 }}>
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-success">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarColor01"
              aria-controls="navbarColor01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav me-auto">
                <li
                  className="nav-item"
                  style={{ marginLeft: "8rem", marginRight: "2rem" }}
                >
                  <a className="nav-link active" href="#other">
                    others
                    <span className="visually-hidden">(current)</span>
                  </a>
                </li>
                <li className="nav-item" style={{ marginRight: "2rem" }}>
                  <a className="nav-link" href="#ring">
                    Rings
                  </a>
                </li>
                <li className="nav-item" style={{ marginRight: "2rem" }}>
                  <a className="nav-link" href="#bracelet">
                    Bracelets
                  </a>
                </li>
                <li className="nav-item" style={{ marginRight: "2rem" }}>
                  <a className="nav-link" href="#access">
                    Accessories
                  </a>
                </li>
                <li className="nav-item" style={{ marginRight: "2rem" }}>
                  <a className="nav-link" href="#other">
                    Others
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Container className="py-3 my-4">
        <Row>
          <strong>
            <h2 className="mt-2 mb-4">others</h2>
          </strong>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="assets\other.jpg" id="other" />
              <Card.Body>
                <Card.Title>other</Card.Title>
                <Card.Text>
                  {" "}
                  Gemstones and similar materials such as amber and coral,
                  precious metals, beads, and shells have been widely used
                </Card.Text>
                <Button className="bg-light text-dark" size="md">
                  Read More
                </Button>
                <Button className="bg-primary" size="md">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="assets\other.jpg" id="other" />
              <Card.Body>
                <Card.Title>other</Card.Title>
                <Card.Text>
                  {" "}
                  Gemstones and similar materials such as amber and coral,
                  precious metals, beads, and shells have been widely used
                </Card.Text>
                <Button className="bg-light text-dark" size="md">
                  Read More
                </Button>
                <Button className="bg-primary" size="md">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="assets\other.jpg" id="ring" />
              <Card.Body>
                <Card.Title>other</Card.Title>
                <Card.Text>
                  {" "}
                  Gemstones and similar materials such as amber and coral,
                  precious metals, beads, and shells have been widely used
                </Card.Text>
                <Button className="bg-light text-dark" size="md">
                  Read More
                </Button>
                <Button className="bg-primary" size="md">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="assets\other.jpg" id="ring" />
              <Card.Body>
                <Card.Title>other</Card.Title>
                <Card.Text>
                  {" "}
                  Gemstones and similar materials such as amber and coral,
                  precious metals, beads, and shells have been widely used
                </Card.Text>
                <Button className="bg-light text-dark" size="md">
                  Read More
                </Button>
                <Button className="bg-primary" size="md">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <strong>
          <h2 className="mt-4 mb-4">Rings</h2>
        </strong>

        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="assets\ring.jpg" id="ring" />
              <Card.Body>
                <Card.Title>other</Card.Title>
                <Card.Text>
                  {" "}
                  Gemstones and similar materials such as amber and coral,
                  precious metals, beads, and shells have been widely used
                </Card.Text>
                <Button className="bg-light text-dark" size="md">
                  Read More
                </Button>
                <Button className="bg-primary" size="md">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="assets\ring.jpg" id="ring" />
              <Card.Body>
                <Card.Title>other</Card.Title>
                <Card.Text>
                  {" "}
                  Gemstones and similar materials such as amber and coral,
                  precious metals, beads, and shells have been widely used
                </Card.Text>
                <Button className="bg-light text-dark" size="md">
                  Read More
                </Button>
                <Button className="bg-primary" size="md">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="assets\ring.jpg" id="ring" />
              <Card.Body>
                <Card.Title>other</Card.Title>
                <Card.Text>
                  {" "}
                  Gemstones and similar materials such as amber and coral,
                  precious metals, beads, and shells have been widely used
                </Card.Text>
                <Button className="bg-light text-dark" size="md">
                  Read More
                </Button>
                <Button className="bg-primary" size="md">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <strong>
          <h2 className="mt-4 mb-4">Bracelets</h2>
        </strong>

        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="assets\bracelet.jpg" id="bracelet" />
              <Card.Body>
                <Card.Title>other</Card.Title>
                <Card.Text>
                  {" "}
                  Gemstones and similar materials such as amber and coral,
                  precious metals, beads, and shells have been widely used
                </Card.Text>
                <Button className="bg-light text-dark" size="md">
                  Read More
                </Button>
                <Button className="bg-primary" size="md">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="assets\bracelet.jpg" id="bracelet" />
              <Card.Body>
                <Card.Title>other</Card.Title>
                <Card.Text>
                  {" "}
                  Gemstones and similar materials such as amber and coral,
                  precious metals, beads, and shells have been widely used
                </Card.Text>
                <Button className="bg-light text-dark" size="md">
                  Read More
                </Button>
                <Button className="bg-primary" size="md">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="assets\bracelet.jpg" id="bracelet" />
              <Card.Body>
                <Card.Title>other</Card.Title>
                <Card.Text>
                  {" "}
                  Gemstones and similar materials such as amber and coral,
                  precious metals, beads, and shells have been widely used
                </Card.Text>
                <Button className="bg-light text-dark" size="md">
                  Read More
                </Button>
                <Button className="bg-primary" size="md">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="assets\bracelet.jpg" id="bracelet" />
              <Card.Body>
                <Card.Title>other</Card.Title>
                <Card.Text>
                  {" "}
                  Gemstones and similar materials such as amber and coral,
                  precious metals, beads, and shells have been widely used
                </Card.Text>
                <Button className="bg-light text-dark" size="md">
                  Read More
                </Button>
                <Button className="bg-primary" size="md">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>{" "}
          </Col>
        </Row>

        <strong>
          <h2 className="mt-4 mb-4">Accessories</h2>
        </strong>

        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="assets\other.jpg" id="access" />
              <Card.Body>
                <Card.Title>other</Card.Title>
                <Card.Text>
                  {" "}
                  Gemstones and similar materials such as amber and coral,
                  precious metals, beads, and shells have been widely used
                </Card.Text>
                <Button className="bg-light text-dark" size="md">
                  Read More
                </Button>
                <Button className="bg-primary" size="md">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="assets\other.jpg" id="access" />
              <Card.Body>
                <Card.Title>other</Card.Title>
                <Card.Text>
                  {" "}
                  Gemstones and similar materials such as amber and coral,
                  precious metals, beads, and shells have been widely used
                </Card.Text>
                <Button className="bg-light text-dark" size="md">
                  Read More
                </Button>
                <Button className="bg-primary" size="md">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="assets\other.jpg" id="access" />
              <Card.Body>
                <Card.Title>other</Card.Title>
                <Card.Text>
                  {" "}
                  Gemstones and similar materials such as amber and coral,
                  precious metals, beads, and shells have been widely used
                </Card.Text>
                <Button className="bg-light text-dark" size="md">
                  Read More
                </Button>
                <Button className="bg-primary" size="md">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <strong>
          <h2 className="mt-4 mb-4">Others</h2>
        </strong>

        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="assets\other.jpg" id="access" />
              <Card.Body>
                <Card.Title>other</Card.Title>
                <Card.Text>
                  {" "}
                  Gemstones and similar materials such as amber and coral,
                  precious metals, beads, and shells have been widely used
                </Card.Text>
                <Button className="bg-light text-dark" size="md">
                  Read More
                </Button>
                <Button className="bg-primary" size="md">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="assets\other.jpg" id="access" />
              <Card.Body>
                <Card.Title>other</Card.Title>
                <Card.Text>
                  {" "}
                  Gemstones and similar materials such as amber and coral,
                  precious metals, beads, and shells have been widely used
                </Card.Text>
                <Button className="bg-light text-dark" size="md">
                  Read More
                </Button>
                <Button className="bg-primary" size="md">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="assets\other.jpg" id="access" />
              <Card.Body>
                <Card.Title>other</Card.Title>
                <Card.Text>
                  {" "}
                  Gemstones and similar materials such as amber and coral,
                  precious metals, beads, and shells have been widely used
                </Card.Text>
                <Button className="bg-light text-dark" size="md">
                  Read More
                </Button>
                <Button className="bg-primary" size="md">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeScreen;
