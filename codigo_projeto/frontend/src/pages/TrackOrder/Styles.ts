import styled from "styled-components";
import { Link } from 'react-router-dom';

export const HeaderTrack= styled.div`
    text-align: center;
`

export const TopHeader = styled.div`
    height: 120px;
    display: flex;

    @media (max-width: 768px) {
        height: 60px;

    }
`

export const TitleBox = styled.div`
    margin: 72px 0 0 20px;
    @media (max-width: 768px) {
        margin: 20px 0 0 20px;

    }
`

export const BottomHeader = styled.div`
    background-color: #00A868;
    height: 80px;
    padding: 20px 0 0 57px;
`

export const LinkButton = styled(Link)<{active?: boolean}>`
    display: flex;
    color: var(--black);
    border: none;
    outline: none;
    text-decoration: none;

    margin: 80px 0 0 20px;

    & svg {
        width: 1.5rem;
        height: 2rem;
        fill: ${(props) => props.active ? "#fff" : "var(--green)"};
    }

    & .profile path {
        stroke-width: 1px;
    }

    @media (max-width: 768px) {
        margin: 24px 0 0 20px;

    }
`

export const BreakLine = styled.div`
    height: 3px;
    width: 80vw;
    margin: auto;
    background-color: #00A868;
`

export const OrderState = styled.div`
    width: 70vw;
    margin: 30px auto;
`

export const Item = styled.div`
    width: 80px;
`

export const OrderStateBar = styled.div`
    margin-top: 10px;
    display: flex;
    height: 30px;
    justify-content: space-around;
`

export const Bar = styled.div`
    width: 46vw;
    height: 4px;
    margin: 21px 0;
    background-color: blue;
    display: flex;
    position: absolute;
    padding: auto;
    background-color: gray;
    z-index: -1;
    @media (max-width: 768px) {
        margin: 17px 0;
    }
`

export const Progress = styled.div`
    width: 0%;
    height: 4px;
    background-color: blue;
    background-color: #00A868;
`

export const OrderInfo = styled.div`
    margin: 60px 0;

    @media (max-width: 768px) {
        margin: 60px 0 90px 0;
    }
`
