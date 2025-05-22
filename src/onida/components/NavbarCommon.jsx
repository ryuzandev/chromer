// export default Navbar;
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";
import {
  Navbar as NavbarComponent,
  Nav,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../componentsCss/NavbarCss.css";
import lgLogo from "../componentsSrcAssets/onidalogo.png";
import { AppContext } from "../../App";

function NavbarCommon() {
  const { brandName } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // const searchableRoutes = [ /* your full route list */ ];
  const searchableRoutes = [
    // { name: "Television", path: "/onida/tv" },
    // { name: "Television Service", path: "/onida/tv" },
    // { name: "Washing Machine", path: "/onida/washing" },
    // { name: "Washing Machine Service", path: "/onida/washing" },
    // { name: "Microwave", path: "/onida/microwave" },
    // { name: "Microwave Service", path: "/onida/microwave" },
    // { name: "Air Conditioner", path: "/onida/aircondition" },
    // { name: "Air Conditioner Service", path: "/onida/aircondition" },
    // { name: "Refrigerator", path: "/onida/refridgerater" },
    // { name: "Refrigerator Service", path: "/onida/Refrigerator" },
    // { name: "Dish Washer", path: "/lg/DishWasher" },
    // { name: "Dish Washer Service", path: "/lg/DishWasher" },

    { name: "Television", path: `/${brandName}/onida/tv` },
    { name: "Television Service", path: `/${brandName}/onida/tv` },
    { name: "Washing Machine", path: `/${brandName}/lg/washing` },
    { name: "Washing Machine Service", path: `/${brandName}/onida/washing` },
    { name: "Microwave", path: `/${brandName}/onida/microwave` },
    { name: "Microwave Service", path: `/${brandName}/onida/microwave` },
    { name: "Air Conditioner", path: `/${brandName}/onida/aircondition` },
    {
      name: "Air Conditioner Service",
      path: `/${brandName}/onida/aircondition`,
    },
    { name: "Refrigerator", path: `/${brandName}/onida/Refrigerator` },
    { name: "Refrigerator Service", path: `/${brandName}/onida/Refrigerator` },
  ];

  const fuse = new Fuse(searchableRoutes, {
    keys: ["name"],
    threshold: 0.3,
  });

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSuggestions([]);
      return;
    }

    const results = fuse.search(searchTerm).slice(0, 5);
    setSuggestions(results.map((res) => res.item));
    console.log(results);
  }, [searchTerm]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      navigate(suggestions[0].path);
    } else {
      alert("No matching page found.");
    }
  };

  return (
    <NavbarComponent expand="xxl" className="navbar-dark-theme">
      <Container fluid>
        {/* <NavbarComponent.Brand as={Link} to="/" className="text-white">
          HYPERSONIC
        </NavbarComponent.Brand> */}
        <NavbarComponent.Brand
          as={Link}
          to={`/${brandName}/onida`}
          className="d-flex align-items-center"
        >
          <img
            src={lgLogo}
            alt="Hypersonic Logo"
            style={{ height: "60px", width: "auto" }} // adjust size if needed
          />
        </NavbarComponent.Brand>

        <NavbarComponent.Toggle aria-controls="navbarScroll" />
        <NavbarComponent.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 nav-scroll" navbarScroll></Nav>

          <Form
            className="d-flex position-relative"
            onSubmit={handleSearchSubmit}
          >
            <Form.Control
              type="search"
              placeholder="Search"
              className="search-input"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoComplete="off"
            />
            <Button
              variant="outline-light"
              className="search-button"
              type="submit"
            >
              Search
            </Button>

            {suggestions.length > 0 && (
              <div className="search-suggestions position-absolute bg-white w-100 shadow">
                {suggestions.map((item, index) => (
                  <div
                    key={index}
                    className="suggestion-item px-3 py-2 text-dark"
                    onClick={() => {
                      navigate(item.path);
                      setSearchTerm("");
                      setSuggestions([]);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            )}
          </Form>
        </NavbarComponent.Collapse>
      </Container>
    </NavbarComponent>
  );
}

export default NavbarCommon;
