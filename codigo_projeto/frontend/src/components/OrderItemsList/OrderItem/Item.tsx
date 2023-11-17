import { Container, Image, Title, Subtitle, ImageContainer, CenterDiv, Quantity} from "./Styles";

// implementando contrato de IOrderItem
export interface IOrderItem {
    order_id: number,
    image?: string,
    name: string,
    unit_price: number,
    quantity?: number,
    street?: string,
    number?: number
}

// exportando OrderItem implementando IOrderItem
export default function OrderItem(props: IOrderItem) {

    return (
        // criando os itens que aparecem na tela de track order, com base na data recebida
        <Container>
            <ImageContainer>
                <Image src="https://media.seudinheiro.com/uploads/2019/04/Stone-Divulga%C3%A7%C3%A3o-3.jpg" />
                
            </ImageContainer>
            <CenterDiv>
                <Title>{props.name}</Title>
                <Subtitle>${props.unit_price}</Subtitle>
            </CenterDiv>
            <Quantity>
                <Title>1</Title>
            </Quantity>
        </Container>
    );
}


