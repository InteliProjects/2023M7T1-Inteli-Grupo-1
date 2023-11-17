/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';

export interface InputProps {

    variant: "otp" | "gray" | "white" | "register",
    value: string,
    onChange: (e: any) => void,
    color?: string,
    placeholder: string,
    type: string,
    borderWidth?: string,
    disabled?: boolean,
    padding?: string,
    borderradius?: string,
    name?: string,
    label?: string,
    border?: string,
    valid?: boolean,
    borderwidth?: string,
    width?: string,
    margin?: string
    size?: string;

}

export const Container = styled.div<{width?: string, margin?: string}>`
    display: flex;
    width: ${(props) => props.width || "initial"};
    flex-direction: column;
    gap: .25rem;
    width: ${(props) => props.width || "100%"};
    max-width: 45rem;
    margin: ${(props) => props.margin};
`;

export const Label = styled.label`
    font-size: .9rem;
`;

export const InputElement = styled.input<InputProps>`
    display: flex;
    margin: ${(props) => props.margin || "initial"};
    align-items: center;
    text-align: ${(props) => props.variant === "otp" ?
    "center" : "initial"};
    border: ${(props) => 
        props.variant === "gray" ? "1px solid #666" :
        props.variant === "register" ? "1px solid #EFEFF0" :
        props.variant === "otp" ? "2px solid #D0D5DD" :
        "1px solid #D0D5DD"};
    border-radius: ${(props) => props.borderradius || ".5rem"};
    width: ${(props) => props.variant === "otp" ?
    "3.5rem" : "100%"};
    height: ${(props) => props.variant === "otp" ? 
    "3.5rem" : "100%"};
    padding: ${(props) => props.padding || ".5rem"};
    font-size: ${(props) => props.size || "1rem"};
    transition: .2s ease-in-out;
    background-color: ${(props) => 
        props.variant === "gray" ? "#F7F7F7" : "transparent"
    };
    border-width: ${(props) => props.borderwidth || "initial"};
    color: ${(props) => props.variant === "gray" ? "black" : "#4B5768"};
    &::placeholder {
        color: ${(props) => 
            props.variant === "gray" ? "#808080"
            : "#999DA3" };
    }

    &:focus {
        outline: none;
        border: ${(props) => 
            props.variant === "white" ?
            "2px solid #4B5768;" :
            props.variant === "otp" ?
            "2px solid var(--green)"
            : ""
        };
        border-color: ${(props) => 
            props.variant === "register" ?
            "var(--green)" : "var(--gray)"};
    }
    

    &:disabled {
        cursor: not-allowed;
    }

    &[type="number"] {
        -moz-appearance: textfield;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
        margin: 0;
    }
`