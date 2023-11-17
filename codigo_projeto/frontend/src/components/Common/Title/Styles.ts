import styled from "styled-components";
import { TitleProps } from "./Title";

const DESKTOP_LARGEST_FONT = 39.81;
const MOBILE_LARGEST_FONT = 27.65;

export const Text = styled.p<TitleProps>`
    font-weight: ${(props) => props.weight || 700};
    font-size: ${(props) => (DESKTOP_LARGEST_FONT / (1.2 ** (props.size - 1))).toFixed(2)}px;
    color: ${(props) => props.color || "var(--green)"};
    margin: ${(props) => props.margin || "initial"};
    text-align: ${(props) => props.textalign || "initial"};
    padding: ${(props) => props.padding || "initial"};
    width: ${(props) => props.width || "auto"};

    @media(max-width: 768px) {
        font-size: ${(props) => (MOBILE_LARGEST_FONT / (1.2 ** (props.size - 1))).toFixed(2)}px;
    }
`;