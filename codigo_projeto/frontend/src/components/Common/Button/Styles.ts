import styled from "styled-components";

export interface ButtonProps {
    width?: string,
    height?: string,
    value?: string,
    variant: "primary" | "secondary" | "outline-white" | "outline-green",
    onClick: () => void,
    padding?: string,
    disabled?: boolean,
    margin?: string,
    borderradius?: string,
    uppercase?: boolean,
    maxwidth?: string,
    size?: number
}

export const Container = styled.button<ButtonProps>`
    background-color: 
    ${(props) => 
        props.variant === "primary" ? "var(--green)" : 
        props.variant === "secondary" ? "var(--gray)" :
        "transparent"
    };
    margin: ${(props) => props.margin || "0"};
    border: ${(props) => props.variant === "outline-white" ? "1px solid #fff" : props.variant === "outline-green" ? "1px solid var(--green)" : "none"};
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "max-content"};
    margin: ${(props) => props.margin || "initial"};
    font-weight: ${(props) => props.variant === "primary" ? "700" : "initial"};
    text-transform: ${(props) => props.uppercase ? "uppercase" : ""};
    color: ${props => (props.variant === "outline-green" ? "var(--green)" : "#fff")};
    padding: ${(props) => props.padding || ".5rem 1rem"};
    border-radius: ${(props) => props.borderradius || "1rem"}; 
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: ${(props) => props.maxwidth || "auto"};

    &:disabled, &[disabled] {
        background: #c7c7c7;
        cursor: not-allowed;
    }

    @media(min-width: 768px) {

        transition: .2s ease-in-out;

        &:hover {
            
        }

    }
`