import styled from "styled-components";


export const Container = styled.div`
    padding: 6rem 3rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media(max-width: 768px) {
        
        position: initial;
        padding: 3rem 2rem;
        height: calc(100vh - 4rem);

        & p:first-of-type {
            text-align: left;
        }

    }
`;

export const Content = styled.div`
    width: 40vw;
    padding: 20px 0;

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
    padding: 30px 0;
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

