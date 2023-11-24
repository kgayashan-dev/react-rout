import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { motion } from "framer-motion";

const Cousine = () => {
  const [cuisine, setCuisine] = useState([]);

  let params = useParams();
  const getCuisin = async (name) => {
    const data =
      await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API}&cuisine=${name}
    `);

    const recipes = await data.json();
    setCuisine(recipes.results);

    console.log(cuisine);
  };

  useEffect(() => {
    console.log(params.type);

    getCuisin(params.type);
  }, [params.type]);

  return (
    <Grid>
      {cuisine.map((item) => (
        <Link to={'/recipe/'+item.id}>
          {" "}
          <Card key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </Card>
        </Link>
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 1rem;
  }

  p {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cousine;
