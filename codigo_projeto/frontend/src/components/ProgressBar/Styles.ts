import styled from "styled-components";

export interface IProgress {
    state?: number
}

export const Container = styled.div<IProgress>`
    width: ${(props) => props.state == 1 ? "50%" : (props) => props.state == 2 ? "100%" : "0%"};
    height: 4px;
    background-color: blue;
    background-color: #00A868;
    transition: 1s;
`