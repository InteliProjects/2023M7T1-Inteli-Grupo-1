import styled from "styled-components";

interface ImageProps {
    width?: string,
    height?: string,
    margin?: string
}

export const Container = styled.div`
height: 100%;
width: 100%;
padding: 1rem;
border: 1px solid rgb(188,200,214);
border-radius: 1rem;

`

export const ImagesContainer = styled.div`
display: flex;
height: max-content;
`

export const Image = styled.img<ImageProps>`
height: ${props => (props.height || "auto")};
width: ${props => (props.width || "auto")};
margin: ${props => props.margin || "auto"};
`

export const MachineName = styled.h2`
font-weight: 400;
`

export const PriceContainer = styled.div`
display: flex;
justify-content: space-between;
`

export const P = styled.p`
font-size: .9rem;
margin: 0;
`

export const DiscountPrice = styled(P)`
font-size: .8rem;
text-decoration: line-through;
`

export const CurrentPrice = styled(P)`
font-weight: 700;
`

export const InCash = styled(P)`
font-size: .8rem;
`

export const InstallmentsContainer = styled.div`
display: flex;
gap: .2rem;
align-items: flex-end;
`

export const Installments = styled(P)`
font-weight: 700;
font-size: .8rem;
`

export const Currency = styled(P)`
color: var(--green);
font-weight: 500;
font-size: .8rem;
text-align: right;
`

export const InstallmentPrice = styled.div`
font-size: 2.4rem;
font-weight: 700;
color: var(--green);
display: inline-flex;
align-items: flex-end;
margin-bottom: -4px;
height: min-content;
`
export const Btns = styled.div`
display: flex;
flex-direction: column;
`

export const AddToCartButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
background-color: #b0b0b0;
border: none;
width: 100%;
height: 45px;
border-radius: .8rem;
margin-top: 10px;
transition: .2s ease;

&:hover {
    background-color: orange;
}
`

export const PurchaseButton = styled.button`
width: 100%;
padding: .8rem 1rem;
border-radius: .8rem;
background: var(--green);
color: #fff;
text-transform: uppercase;
font-weight: 600;
font-size: .9rem;
transition: .2s ease;
border: 2px solid transparent;
margin-top: 10px;

&:hover {
    background: #04915c;
    border: 2px solid #04915c;
}

&:active {
    background: #0a714b;   
}

&:disabled, &[disabled] {
    background: #777;
    border: 2px solid #777;
    cursor: not-allowed;
}
`

export const FeaturesList = styled.ul`

`

export const Feature = styled.li`
padding: .3rem 0;
font-size: .8rem;
`

export const NextButton = styled.button<{visible?: boolean}>`
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
z-index: 10;
transition: .2s ease;

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