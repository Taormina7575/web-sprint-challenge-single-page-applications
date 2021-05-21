import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 70%;
  margin: 0 auto;
`;
const FormImg = styled.img`
  width: 100%;
  height: 50rem;
`;
const FormHeader = styled.h1`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 5rem;
  font-weight: bold;
`;

const FormCat = styled.div`
    background-color: lightgray;
`
const FormCatName = styled.h3`
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 3rem;
    margin-left: 5rem;
    color: red;
`
const FormError = styled.p`
    font-size: 2rem;
    color: red;
    margin-left: 6rem;
`

export default function Form() {
  return <main>
      <FormContainer>
          <FormImg src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.MfhIfzrC6x6T1-szQkjtCgHaEo%26pid%3DApi&f=1' alt='pizza'>
          </FormImg>
          <FormHeader>Build Your Own Pizza!</FormHeader>
          <form>
                <FormCat>
                    <FormCatName>
                        Select Your Sauce
                    </FormCatName>
                    <FormError>
                    </FormError>
                    <FormCatName>
                        Select Your Sauce
                    </FormCatName>
                    <FormError>
                    </FormError>
                </FormCat>
          </form>
      </FormContainer>
  </main>;
}
