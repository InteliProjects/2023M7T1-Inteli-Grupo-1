import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    place-items: center;
    margin: 0 0 40px 0;
    padding-top: 80px;

    @media (max-width: 768px) {
        padding-top: 40px;
        margin-bottom: 200px;
    }
`