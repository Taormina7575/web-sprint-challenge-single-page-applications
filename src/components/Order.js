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
             <ListItem>Size: {props.size === 'large' ? 'bigguy' : 'failed'}</ListItem>
             <ListItem>Special Request: {props.special}</ListItem>
             <ListItem>Sausage: {props.sausage ? 'sausagetest' : 'no'}</ListItem>
             <ListItem>Pineapple: {props.pineapple ? 'pineappletest' : 'no'}</ListItem>
             <ListItem>Anchovies: {props.anchovies ? 'anchoviestest' : 'no'}</ListItem>
             <ListItem>Peppers: {props.peppers ? 'pepperstest' : 'no'}</ListItem>
             <ListItem>Pepperoni: {props.pepperoni ? 'pepperonitest' : 'no'}</ListItem>
         </ul>
     </div>
 )
}