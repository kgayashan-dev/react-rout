import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";
import { Link } from "react-router-dom";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);
  // console.log(veggie);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    // console.log(check);
    if (check) {
      setVeggie(JSON.parse(check));
      // console.log(check);
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API}&number=9&tags=vegetarian`
      );
      const data = await api.json();
      // console.log(data.recipes);
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      // console.log(data.recipes);
      setVeggie(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Our Veggie </h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2rem",
          }}
        >
          {veggie.map((v) => (
            <SplideSlide key={v.id}>
              <Link to={'/recipe/'+v.id}>
                <Card>
                  <p>{v.title}</p>
                  <img src={v.image} alt={v.title} />
                  {/* <p style={{text:"bold"}}>{v.vegetarian ? "Veggie" : ""}</p> */}
                </Card>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    left: 0;
    width: 100%;
    height: 75%;
    position: absolute;
    object-fit: cover;
  }

  p {
    position: absolute;

    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: black;
    text-align: center;
    font-weigth: 600;
    font-size: 10pt;
    height: 50%;
    display: flex;
    // justify-content: center;
    align-item: center;
  }
`;

const Gradient = styled.div`
  z-index: 9;
  position: absolute;
  width: 100%;
  height: 100%;
  background: red;
  background: linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggie;
