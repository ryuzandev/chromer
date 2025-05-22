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
import sony from "../componentsSrcAssets/sony.png";
import { AppContext } from "../../App";

function Navbar() {
  const { brandName } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // const searchableRoutes = [ /* your full route list */ ];
  const searchableRoutes = [
    { name: "Television", path: `${brandName}/sony/tv` },
    { name: "Television Service", path: `${brandName}/sony/tv` },
    { name: "Music", path: `${brandName}/sony/musicstereo` },
    { name: "Music Stereo", path: `${brandName}/sony/musicstereo` },
    { name: "Gaming", path: `${brandName}/sony/playstation` },
    { name: "playstation", path: `${brandName}/sony/playstation` },
    { name: "play station", path: `${brandName}/sony/playstation` },
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
    <NavbarComponent expand="xxl" className="navbar-light-theme">
      <Container fluid>
        {/* <NavbarComponent.Brand as={Link} to="/" className="text-white">
          HYPERSONIC
        </NavbarComponent.Brand> */}
        <NavbarComponent.Brand
          as={Link}
          to={`${brandName}/sony`}
          className="d-flex align-items-center"
        >
          <img
            src={sony}
            alt="Hypersonic Logo"
            style={{ height: "70px", width: "auto" }} // adjust size if needed
          />
        </NavbarComponent.Brand>

        <NavbarComponent.Toggle aria-controls="navbarScroll" />
        <NavbarComponent.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 nav-scroll" navbarScroll>
            <Nav.Link
              as={Link}
              to={`/${brandName}/sony/tv`}
              className="text-black"
            >
              Television
            </Nav.Link>

            <Nav.Link
              as={Link}
              to={`/${brandName}/sony/musicstereo`}
              className="text-black"
            >
              {/* Refrigerator */}
              Music Stereo
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={`/${brandName}/sony/playstation`}
              className="text-black"
            >
              Play Station
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={`/${brandName}/sony/book-now`}
              className="text-black"
            >
              Specimen
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={`/${brandName}/sony/exoticdeletecards`}
              className="text-black"
            >
              Forward-Specimen
            </Nav.Link>
          </Nav>

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
              // variant="outline-light"
              variant="primary"
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

export default Navbar;
