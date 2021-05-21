import { React, useState, useEffect } from "react";
import styled from "styled-components";
import * as yup from "yup";
import schema from "../validation/FormSchema";
import axios from "axios";

//*! Styles !!!!!!!
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
  width: 35%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
  margin-top: 2rem;
  align-items: center;
  padding: 1rem;
`;
const FormCatName = styled.h3`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 3rem;
  margin-left: 5rem;
  color: red;
`;
const FormError = styled.p`
  font-size: 2rem;
  color: red;
  margin-left: 6rem;
`;

const FormText = styled.input`
  border: 2px solid black;
  margin-left: 4rem;
  width: 25%;
`;
const FormSelect = styled.select`
  border: 2px solid black;
  font-size: 2rem;
  margin-left: 4rem;
`;
const FormCheck = styled.input`
  border: 2px solid black;
`;
const SubmitButton = styled.button`
  border: 1px solid black;
  width: 20%;
  background-color: red;
  font-size: 2.5rem;
  border-radius: 1rem;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    cursor: default;
  }
`;
const CheckLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 25%;
`;
//*! End of Styles!!!!!!

const initialFormValues = {
  name: "",
  size: "",
  special: "",
  sausage: false,
  pepperoni: false,
  anchovies: false,
  peppers: false,
  pineapple: false,
};

const initialFormErrors = {
  name: "",
  size: "",
};

const initialDisabled = true;

export default function Form() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const change = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    yup
      .reach(schema, name)
      .validate(valueToUse)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })

      .catch((err) => {
        setFormErrors({
          ...formErrors,

          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: valueToUse,
    });
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const submit = (evt) => {
    evt.preventDefault();
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      special: formValues.special,
      sausage: formValues.sausage,
      pepperoni: formValues.pepperoni,
      anchovies: formValues.anchovies,
      peppers: formValues.peppers,
      pineapple: formValues.pineapple,
    };
    setFormValues(initialFormValues);
    postOrder(newOrder);
  };

  const postOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main>
      <FormContainer>
        <FormImg
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.MfhIfzrC6x6T1-szQkjtCgHaEo%26pid%3DApi&f=1"
          alt="pizza"
        ></FormImg>
        <FormHeader>Build Your Own Pizza!</FormHeader>
        <form id="pizza-form" onSubmit={submit}>
          <FormCat>
            <FormCatName>What Is Your Name?</FormCatName>
            <FormError>{formErrors.name}</FormError>
          </FormCat>
          <FormText
            id="name-input"
            type="text"
            name="name"
            value={formValues.name}
            onChange={change}
          ></FormText>
          <FormCat>
            <FormCatName>Select Pizza Size</FormCatName>
            <FormError>{formErrors.size}</FormError>
          </FormCat>
          <FormSelect
            id="size-dropdown"
            name="size"
            value={formValues.size}
            onChange={change}
          >
            <option value="">Select Size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </FormSelect>
          <FormCat>
            <FormCatName>Select Your Topping</FormCatName>
            <FormError></FormError>
          </FormCat>
          <CheckLabel>
            {" "}
            Sausage
            <FormCheck
              type="checkbox"
              name="sausage"
              checked={formValues.sausage}
              onChange={change}
            ></FormCheck>
          </CheckLabel>
          <CheckLabel>
            {" "}
            Pepperoni
            <FormCheck
              type="checkbox"
              name="pepperoni"
              checked={formValues.pepperoni}
              onChange={change}
            ></FormCheck>
          </CheckLabel>
          <CheckLabel>
            {" "}
            Anchovies
            <FormCheck
              type="checkbox"
              name="anchovies"
              checked={formValues.anchovies}
              onChange={change}
            ></FormCheck>
          </CheckLabel>
          <CheckLabel>
            {" "}
            Peppers
            <FormCheck
              type="checkbox"
              name="peppers"
              checked={formValues.peppers}
              onChange={change}
            ></FormCheck>
          </CheckLabel>
          <CheckLabel>
            {" "}
            Pineapple
            <FormCheck
              type="checkbox"
              name="pineapple"
              checked={formValues.pineapple}
              onChange={change}
            ></FormCheck>
          </CheckLabel>
          <FormCat>
            <FormCatName>Special Instructions</FormCatName>
            <FormError></FormError>
          </FormCat>
          <FormText
            id="special-text"
            name="special"
            type="text"
            value={formValues.special}
            onChange={change}
          ></FormText>
          <FormCat>
            <FormCatName>Place Your Order!</FormCatName>
            <SubmitButton id="order-button" disabled={disabled}>
              Add To Order
            </SubmitButton>
          </FormCat>
        </form>
      </FormContainer>
    </main>
  );
}
