import { Container } from "./Styles";
import { IProgress } from "./Styles";

// criando progress bar
export default function Progress(props: IProgress) {
    return (
        <Container
            state={props.state}
        >
        </Container>
    );
}
