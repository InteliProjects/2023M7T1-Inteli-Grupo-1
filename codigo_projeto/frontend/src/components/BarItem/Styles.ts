import styled from "styled-components";

// Contrato do Bar Item
export interface IBarItem {
    isActive?: boolean,
    margin?: string
}

// estilização do ítem
export const Container = styled.div<IBarItem>`
    background-color: green;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    background-color: ${(props) => props.isActive ? "#00A868" : "gray"};
    margin: ${(props) => props.margin || "auto"};
    z-index: 2;
`