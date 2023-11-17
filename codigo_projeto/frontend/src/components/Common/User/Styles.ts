import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    cursor: pointer;
`

export const ContainerNoImage = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    width: 120px;
    height: 40px;
    border: 2px solid #fff;
    border-radius: 50px;
    display: flex;
    background-color: rgba(217, 217, 217, 0);
    &:hover {
        background-color: rgba(217, 217, 217, .5);
        transition: .3s;
    }
`

export const Image = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin: auto 3px;
`

export const NoImage = styled.div`
    font-size: 34px;
    color: #fff;
    border-radius: 50%;
    margin: auto 3px;
`
