import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Home.css";

const ImageContainer = styled.section`
  width: 100%;
  height: 60vh;
  background-image: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.xmDm57l_35cnQEPt6Vr0ygHaE9%26pid%3DApi&f=1");
  background-size: 100% 100%;
  display: flex;
  align-items: flex-end;
`;

const MainHead = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: RGBA(211, 211, 211, 0.75);
  text-align: center;
  margin-bottom: 2rem;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Message = styled.h2`
  font-size: 5rem;
  font-weight: bolder;
  margin-left: 10rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: red;
`;
const DeliverySection = styled.section`
  width: 80%;
  margin: 0 auto;
`;

const DeliveryHeading = styled.h3`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 4rem;
  margin-left: 2rem;
`;

const RestContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid black;
  margin-bottom: 1rem;
`;
const Rest = styled.div`
  width: 30%;
  border-top: 1px solid black;
  padding: 1rem;
`;
const RestImg = styled.img`
  width: 100%;
  height: 35rem;
`;
const RestHead = styled.h4`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 3rem;
`;
const RestDesc = styled.p`
  font-size: 2rem;
`;

export default function Home() {
  return (
    <main>
      <ImageContainer>
        <MainHead>
          <Message>
            Welcome To Lambda Eats! Best Quality, Anytime, Anywhere!
          </Message>
          <Link to="/pizza" className="navLink">
            Order Now!
          </Link>
        </MainHead>
      </ImageContainer>
      <DeliverySection>
        <DeliveryHeading>Food Delivery in South Jersey</DeliveryHeading>
        <RestContainer>
          <Rest>
            <RestImg src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.T6CZ9Og81O5GmdxrQi1eIwHaGU%26pid%3DApi&f=1' alt="restimg"></RestImg>
            <RestHead>Mcdonald's</RestHead>
            <RestDesc>American - Fast Food - Burgers</RestDesc>
          </Rest>
          <Rest>
            <RestImg src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.heByyLKzzlyA1n6J_S9ZGwHaHa%26pid%3DApi&f=1' alt="restimg"></RestImg>
            <RestHead>Wendy's</RestHead>
            <RestDesc>American - Fast Food - Burgers</RestDesc>
          </Rest>
          <Rest>
            <RestImg src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.44sY65ynmLz53nqSHjV8TgHaHv%26pid%3DApi&f=1' alt="restimg"></RestImg>
            <RestHead>Chic-Fil-A</RestHead>
            <RestDesc>American - Fast Food - Chicken</RestDesc>
          </Rest>
        </RestContainer>
      </DeliverySection>
    </main>
  );
}
