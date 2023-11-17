import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
    padding: 6rem 3rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 50%;
    margin: auto;
    max-height: 100vh;
}
    @media(max-width: 768px) {
        
        position: initial;
        padding: 3rem 2rem;
        height: calc(100vh - 4rem);

        & p:first-of-type {
            text-align: left;
        }

    }
`;

export const Alert = styled.p`
    font-size: 0.8rem;
    display: flex;
    color: "red";
    margin:5px 0 0 0;
    font-weight: 600;
    text-decoration: none;
`;

export const Content = styled.div`
    width: 40vw;
    padding: 20px 0;

    display: contents;
    @media(max-width: 768px) {
        width: 80vw;
    }
`

export const InputBox = styled.div`
    display: flex;
    width: 34vw;
    align-items: center;
    padding: 0 35px 0 0;
    justify-content: space-between;
    margin-top: 15px;

    @media(max-width: 768px) {
        width: 80vw;
    }
`

export const FormsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin 30px 0;
    padding: 20px 0;
`

export const BackBtn = styled.div`
    background-color: #ebebeb;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
`

export const Img = styled.img`
margin: auto 0;
display: block;

@media(max-width: 768px) {
    width: 150px;
}
`

export const StyledLink = styled(Link)`
    color: var(--green);
    text-decoration: none;
    margin: 1.5rem 0 0 0;
    font-weight: 600;
    font-size: 1rem;
    transition: .25s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`