import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
padding: 6rem 2rem;
display: flex;
flex-direction: column;
align-items: center;
`;

export const ProductImage = styled.img`
height: 15rem;
width: auto;
`;

export const DetailsContainer = styled.div`
display: flex;
flex-direction: column;
position: absolute;
height: 45vh;
left: 50%;
width: 40vw;
min-width: 320px;
transform: translateX(-50%);
bottom: 0;
padding: 1rem 2rem;
border-radius: 3rem 3rem 0 0;
background: #F7F7F7;
max-width: 45rem;
padding: 2.5rem 2rem 1rem 2rem;

@media(max-width: 1114px) {
    padding: 2rem 2rem 5rem 2rem;
    width: 100vw;
}
`;

export const NameAmountContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`

export const ProductName = styled.p`
font-weight: 700;
font-size: 1.3rem;
margin: 0;
`;

export const ProductDescription = styled.p`
color: #AAAAAA;
font-size: 1rem;
margin: 1rem 0;
overflow: auto;
`;

export const ButtonsRow = styled.div`
display: flex;
margin: auto 0 0 0;
gap: .5rem;
`;

export const Cart = styled(Link)`
padding: .4rem;
background-color: var(--gray);
border-radius: .5rem;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;

& div {
    height: 1.5rem;
}

& svg {
    width: 1.5rem;
    height: 1.5rem;
}
`;

export const ChooseAmount = styled.div`
display: flex;
align-items: center;
`;

export const AmountButton = styled.button`
display: flex;
align-items: center;
height: 1.5rem;
width: 1.5rem;
justify-content: center;
background: var(--green);
border: none;
color: #fff;
font-size: 1.1rem;
border-radius: .2rem;
`

export const Img = styled.img`
width: 1.5rem;
`

export const Text = styled.p<{margin?: string, weight?: string, width?: string}>`
margin: ${(props) => props.margin || "0 .2rem"};
font-weight: ${(props) => props.weight || "500"};
width: ${(props) => props.width || "initial"};
text-align: center;
`