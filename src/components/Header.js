import React from "react";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container className="mt-4">
      <h1>Product Catalog</h1>
      <p style={{ width: "40%", fontFamily: "Comfortaa" }}>
        Our mission is to make beautiful jewellery accessible. Jewellery that
        not only makes a woman look beautiful but also make her feel beautiful
        and loved.A leading Jewellery house with the most promising
        exceptionally rare collection of Kundan, Polki/Jadau, Gold and Diamond
        Jewellery
      </p>
    </Container>
  );
};

export default Header;
