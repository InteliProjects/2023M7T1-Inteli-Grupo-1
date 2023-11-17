import styled from 'styled-components';

export interface SelectOption {
    value: string;
    label: string;
}

export interface SelectProps {
    options?: SelectOption[];
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    color?: string;
    disabled?: boolean;
    padding?: string;
    borderradius?: string;
    label?: string;
    border?: string;
    borderwidth?: string;
    width?: string;
    margin?: string;
    variant: string;
}

export const Container = styled.div<{ width?: string; margin?: string }>`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    width: ${(props) => props.width || '100%'};
    max-width: 45rem;
    margin: ${(props) => props.margin};
`;

export const Label = styled.label`
    font-size: 0.9rem;
`;

export const SelectElement = styled.select<SelectProps>`
    border-radius: ${(props) => props.borderradius || '.5rem'};
    padding: ${(props) => props.padding || '.5rem'};
    background-color: ${(props) => props.variant};
    border-width: ${(props) => props.borderwidth || 'initial'};
    &:hover {
        background-color: "var(--black)";
    }

`;

export const OptionsContainer = styled.div<SelectProps>`

    border-radius: ${(props) => props.borderradius || '.5rem'};

`;

export const Option = styled.option<SelectProps>`
   &:hover {
        background-color: "var(--black)";
    }
`;
