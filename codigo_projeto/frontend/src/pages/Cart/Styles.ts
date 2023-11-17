import styled from "styled-components";
import { Link } from 'react-router-dom';



export const HeaderCart = styled.div`
    position: fixed;
    height: 0;
    width: 100%;
    color: #fff;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 60px;
    z-index: 2;

    @media (max-width: 768px) {
        bottom: 0; 
        height: 120px;
        border-radius: 30px 30px 0 0;
        font-size: 30px;
        padding: 0 50px 60px 50px;
        background-color: #00A868;
        z-index: 3;
    }
`;

export const ContentLeft = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0;
    z-index: 3;
    margin-left: 17vw;
`;

export const Subtitle = styled.div`
    font-size: 8px;
    
    margin-top: 70px;

    @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 50px;
    }
`;

export const Account = styled.div`
    padding: 100px 60px 0 60px;
    height: 90px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        padding-top: 20px;
    }
`;

export const Image = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 50%;
`;


export const LinkButton = styled(Link)<{active?: boolean}>`
    display: flex;
    color: var(--black);
    border: none;
    outline: none;
    text-decoration: none;

    & svg {
        width: 1.5rem;
        height: 2rem;
        fill: ${(props) => props.active ? "#fff" : "var(--green)"};
    }

    & .profile path {
        stroke-width: 1px;
    }
`