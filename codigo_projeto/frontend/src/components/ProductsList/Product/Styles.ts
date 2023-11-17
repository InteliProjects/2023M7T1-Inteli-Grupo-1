import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
padding:1.5rem 1rem;
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
border-radius: 11px;
transition: .2s ease-in-out;

&:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

@media(max-width: 767px) {
    width: 90%;
    align-items: center;
}

@media(max-width: 320px) {
    width: 100%;
}
`

export const PriceDetails = styled.div`
display: flex;
width: 100%;
gap: .1rem;
`

export const StyledLink = styled(Link)`
text-decoration: none;
display: flex;
flex-direction: column;
gap: 1rem;
`

export const ProductImage = styled.img`
padding: 0 2rem;
max-width: 8rem;
`

export const ProductName = styled.p`
margin: .1rem 0;
font-weight: 700;
color: #242424;
`

export const Price = styled(ProductName)`
font-weight: 400;
color: var(--black);
`;

export const DetailsContainer = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: flex-end;
align-items: flex-end;
`

export const SeeDetails = styled.span`
padding: .2rem;
color: #242424;
height: 1.5rem;
width: 1.5rem;
white-space: nowrap;
border: 1px solid rgba(55, 73, 87, 0.2);
border-radius: .4rem;
display: flex;
justify-content: center;
align-items: center;
font-weight: 700;
`

export const Div = styled.div`
display: flex;
flex-direction: column;
gap: .25rem;
`