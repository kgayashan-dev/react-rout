import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate("/searched/" + search);
    e.preventDefault();
  };
  return (
    <FormStyle onSubmit={handleSubmit}>
      <div>
        <FaSearch />
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          name="search"
          id="search"
          value={search}
          placeholder="Type keywords!"
        />
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  width: 100%;
  justify-content: center;

  div {
    width: 100%;
    margin: 2rem 0rem;
    position: relative;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1rem;
    color: white;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    padding: 1rem 3rem;
  }

  svg {
    position: absolute;
    top: 1.2rem;
    left: 1rem;
    color: white;
  }
`;

export default Search;
