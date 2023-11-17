import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #ffff;
    width: 80vw;
    padding: 10px;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: #e3e3e3;
    border-radius: 8px;
    overflow: hidden;
`

export const IconContainer = styled.div<{isActive?: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.isActive ? "var(--green)" : "var(--gray)"};
    color: #fff;
    cursor: pointer;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    box-shadow: h-shadow v-shadow blur spread color;
`
export const Quantity = styled.div`
    align-items: center;
    margin-right: 20px;
`

export const CenterDiv = styled.div`
    width: 80%;
    
    @media (max-width: 768px) {
        width: 50%;
    }
`

export const Image = styled.img`
    height: 100%;
    background-color: #ed3e32;
`

export const Title = styled.h1`
    font-size: 15px;
`

export const Subtitle = styled.p`
    font-size: 10px;
`