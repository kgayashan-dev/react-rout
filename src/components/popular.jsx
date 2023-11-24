import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
// Default theme

const Popular = () => {
  // get popular
  const [popular, setPopular] = useState([]);
  // console.log(popular);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    // console.log(check);
    if (check) {
      setPopular(JSON.parse(check));
      // console.log(check);
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API}&number=10`
      );
      const data = await api.json();
      // console.log(data);
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      // console.log(data.recipes);
      setPopular(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Popular picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {popular.map((p) => (
            <SplideSlide key={p.id}>
              <Link to={"/recipe/" + p.id}>
                <Card>
                  <p>{p.title}</p>
                  <img src={p.image} alt={p.title} />
                </Card>
                <Gradient> </Gradient>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin: 2rem 0rem;
`;

const Card = styled.div`
  border-radius: 2rem;
  position: relative;

  img {
    border-radius: 2rem;
    left: 0;
    width: 200px;
    height: 200px;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, 0%);
    color: white;
    text-align: center;
    font-weigth: 600;
    font-size: 10pt;
    height: 10%;
    display: flex;
  }
`;

const Gradient = styled.div`
  border-radius: 2rem;
  z-index: 1;
  position: absolute;
  top: 0;
  // right:1rem;
  width: 200px;
  height: 200px;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6));
`;

export default Popular;
