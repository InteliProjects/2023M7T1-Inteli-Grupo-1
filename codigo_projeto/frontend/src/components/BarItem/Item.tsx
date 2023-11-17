import { Container } from "./Styles";
import { IBarItem } from "./Styles";


// Ítem da barra de status do pedido 
export default function BarItem(props: IBarItem) {
    return (
        <Container
            isActive={props.isActive}
            margin={props.margin}
        >
        </Container>
    )
}
