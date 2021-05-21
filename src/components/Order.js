import React from 'react';
import styled from 'styled-components';


const MainName = styled.h2`
    font-size: 4rem;
`
const ListItem = styled.li`
    font-size: 2.5rem;
`
export default function Order({props}) {
 return(
     <div>
         <MainName>Name: {props.name}</MainName>
         <ul>
             <ListItem>Size: {props.size}</ListItem>
             <ListItem>Special Request: {props.special}</ListItem>
             <ListItem>Sausage: {props.sausage ? 'yes' : 'no'}</ListItem>
             <ListItem>Pineapple: {props.pineapple ? 'yes' : 'no'}</ListItem>
             <ListItem>Anchovies: {props.anchovies ? 'yes' : 'no'}</ListItem>
             <ListItem>Peppers: {props.peppers ? 'yes' : 'no'}</ListItem>
             <ListItem>Pepperoni: {props.pepperoni ? 'yes' : 'no'}</ListItem>
         </ul>
     </div>
 )
}