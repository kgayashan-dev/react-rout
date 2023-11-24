import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Searched = () => {
  let params = useParams();
  const [searchRec, setSearchedRec] = useState([]);

  const getSearched = async (name) => {
    const data =
      await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API}&query=${name}
      `);

    const searchedRecipes = await data.json();

    setSearchedRec(searchedRecipes.results);
  };

  useEffect(() => {

    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchRec.map((item) => (
        <Link to={'/recipe/'+item.id}>
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
    font-size:10pt;
  }
`;

export default Searched;
