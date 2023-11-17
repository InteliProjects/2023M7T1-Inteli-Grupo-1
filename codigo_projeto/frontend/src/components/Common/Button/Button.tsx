import { Container } from "./Styles"
import { ButtonProps } from "./Styles"

// exportar botão implementando a interface ButtonProps
export default function Button(props: ButtonProps) {

    return (
        <Container
            variant={props.variant}
            onClick={props.onClick}
            width={props.width}
            height={props.height}
            maxwidth={props.maxwidth}
            padding={props.padding}
            disabled={props.disabled}
            margin={props.margin}
            borderradius={props.borderradius}
            size={props.size}
        >
            {props.value}
        </Container>
    )

}