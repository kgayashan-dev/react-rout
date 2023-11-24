import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API}`
    );
    const fetchedData = await data.json();
    setDetails(fetchedData);
  };

  useEffect(() => {
    fetchDetails(params.name);
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h3>{details.title}</h3>
        <img src={details.image} alt="" />
      </div>

      <Info>
        <StyleButton
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </StyleButton>
        <StyleButton
          className={activeTab === "ingradients" ? "active" : ""}
          onClick={() => setActiveTab("ingradients")}
        >
          Ingradients
        </StyleButton>
      </Info>

      <div>
        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}

        {activeTab === "ingradients" && (
          <ul>
            {details.extendedIngredients.map((i) => (
              <li key={i.id}>{i.original}</li>
            ))}
          </ul>
        )}
      </div>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  background: ;
  position: relative;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  img {
    width: 25rem;
    border-radius: 0.1rem;
  }
  h3 {
    margin-top: 1rem;

  }

  li {
    font-size: 1rem;
    line-height: 2.5rem;
  }
  ul {
    margin: 4rem 5rem;
  }
  p {
    margin: 4rem 2rem;
    width: 100%;
    justify-content: right;
  }
`;

const StyleButton = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;
const Info = styled.div`
  margin-left: 10rem;
  position: absolute;
  right: -3%;
  top: 0%;
`;

export default Recipe;
