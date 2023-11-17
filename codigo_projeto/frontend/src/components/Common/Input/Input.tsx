import { Container, Label, InputElement } from "./Styles";
import { InputProps } from "./Styles";

// exportando o input e consumindo a interface InputProps
export default function Input(props: InputProps) {

    return (
        // criando elementos com os dados cerregados
        <Container 
            width={props.width}
            margin={props.margin}
        >
            {
                props.label &&
                <Label>
                    {props.label}
                </Label>
            }
            <InputElement
                width={props.width}
                variant={props.variant}
                type={props.type}
                value={props.value}
                name={props.name}
                color={props.color}
                borderradius={props.borderradius}
                valid={props.valid}
                onChange={props.onChange}
                disabled={props.disabled}
                border={props.border}
                padding={props.padding}
                borderwidth={props.borderwidth}
                placeholder={props.placeholder}
                size={props.size}
            />
        </Container>
    )

} 