import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
width: 100%;
padding: 5rem 0 0 0;
height: 100%;
display: grid;
background-color: #fff;
--grid-layout-gap: 1.5rem;
--grid-column-count: 5;
--grid-item--min-width: 20vw;

--gap-count: calc(var(--grid-column-count) - 1);
--total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
--grid-item--max-width: 
    calc((100% - var(--total-gap-width)) / var(--grid-column-count));

grid-template-columns: repeat(
    auto-fill, 
    minmax(max(var(--grid-item--min-width), 
    var(--grid-item--max-width)), 
    1fr
));
grid-gap: var(--grid-layout-gap);
row-gap: 4rem;

@media(max-width: 768px) {
    grid-template-columns: 1fr;
    width: calc(100vw - 2rem);
}
`


export const PreviousButton = styled.button<{visible?: boolean}>`
display: ${props => (props.visible ? "flex" : "none")};
justify-content: center;
align-items: center;
position: fixed;
font-weight: 700;
font-size: 1rem;
padding: .5rem 1rem;
top: .4rem;
border-radius: .8rem;
border: none;
background: var(--green);
border: 1.5px solid #fff;
color: #fff;
right: 2rem;
z-index: 2;
transition: .2s ease;
transform: rotate(180deg);

& div, & path {
    display: flex;
    justify-content: center;
    align-items: center;
    stroke: #fff;
    transition: .2s ease;
}

& svg {
    height: 2rem;
    width: auto;
}

&:hover {
    background: #fff;
}

&:hover path {
    stroke: var(--green);
}
`

export const AddressesContainer = styled.div`
display: flex;
flex-direction: column;
height: calc(100% - 8rem);
max-height: 246px;
margin: .5rem 0;
overflow: auto;
padding: 1rem 0;
gap: 1rem;
`

export const Address = styled.div`
font-size: .8rem;
`

export const AddressAttribute = styled.p`
margin: 0;
`

export const AddAddress = styled(Link)`
text-decoration: none;
font-size: .9rem;
color: var(--black);
padding: .5rem;
margin: .5rem 0;
background-color: var(--green);
color: var(--white);
border-radius: .5rem;
width: max-content;
align-self: flex-end;
display: flex;
justify-content: flex-end;
`