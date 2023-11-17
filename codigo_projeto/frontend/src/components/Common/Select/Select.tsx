import { Container, Label, SelectElement } from './Styles';
import { SelectProps } from './Styles';

// exportando Select implementando SelectProps
export default function Select(props: SelectProps) {
    return (
        // consumindo dados carregados
        <Container
            width={props.width}
            margin={props.margin}
        >
            {props.label && <Label>{props.label}</Label>}
            <SelectElement
                width={props.width}
                variant={props.variant}
                value={props.value}
                color={props.color}
                borderradius={props.borderradius}
                onChange={props.onChange}
                disabled={props.disabled}
                border={props.border}
                padding={props.padding}
                borderwidth={props.borderwidth}
            >   
                {props.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </SelectElement>
        </Container>
    );
}
