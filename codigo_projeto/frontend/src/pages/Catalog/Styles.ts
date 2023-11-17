import styled from "styled-components";

export const Container = styled.div`
padding: 5rem 3rem 5rem 3rem;
display: flex;
scroll: auto;
width: 100%;
gap: 2rem;
align-items: center;
flex-direction: column;
height: 100vh;

@media(max-width: 768px) {
    padding: 5rem 0 0 0;
}
`;

export const TitleSubtitleContainer = styled.div`
display: flex;
width: 100%;
gap: 1px;
flex-direction: column;

@media(max-width: 768px) {
    text-align: center;
}
`

export const Title = styled.h1`
color: var(--green);
margin: 1rem 0 0 0;

@media(max-width: 768px) {
    font-size: 1.6rem;
    margin: 0 2rem;
}
`

export const Subtitle = styled.h2`
font-size: 1rem;
color: #6e6e73;
margin: 0;
font-weight: 400;
@media(max-width: 768px) {
    margin: 0 2rem;
}
`

export const CardPlanContainer = styled.div`
width: 100%;
height: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
background-color: #fff;
padding: 20px;
--grid-layout-gap: 1.5rem;
--grid-column-count: 4;
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
