import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 20px;
background-color: #fff;
padding: 20px;
--grid-layout-gap: 1.5rem;
--grid-column-count: 2;
--grid-item--min-width: 12rem;

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
z-index: 2;
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