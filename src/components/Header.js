import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./header.css";

const NewHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightgray;
`;
const MainHeading = styled.h1`
  font-size: 8rem;
  font-weight: bolder;
  margin-left: 10rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: red;
`;

const LinkHolder = styled.div`
  display: flex;
  justify-content: space-around;
  width: 25%;
`;

export default function Header() {
  return (
    <NewHeader>
      <MainHeading>Lamda Eats</MainHeading>
      <LinkHolder>
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="/pizza" className="navLink">
          Order
        </Link>
      </LinkHolder>
    </NewHeader>
  );
}
