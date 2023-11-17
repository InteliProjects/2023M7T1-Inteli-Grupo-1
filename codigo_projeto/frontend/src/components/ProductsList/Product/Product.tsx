// importando estilos
import {    
    Container,
    DetailsContainer,
    Div,
    Price,
    PriceDetails, 
    ProductImage,
    ProductName,
    SeeDetails, 
    StyledLink} from "./Styles";

// implementando contrato de Product
export interface IProduct {
    id: string,
    name: string,
    unit_price: number,
    description: string,
    image_url: string
}

// exportando produto implementando IProduct
export default function Product(props: IProduct) {

    return (
        // link para a tela de produtos com base no ID
        <StyledLink to={`/product/${props.id}`}>
            <Container>
                {/* criando container com base nos dados recebidos */}
                    <ProductImage src={props.image_url} />
                    <PriceDetails id={props.id}>
                        <Div>
                            <ProductName>
                                {props.name}
                            </ProductName>
                            <Price>
                                R${props.unit_price}
                            </Price>
                        </Div>
                        <DetailsContainer>
                            <SeeDetails>
                                &rarr;
                            </SeeDetails>
                        </DetailsContainer>
                    </PriceDetails>
            </Container>
        </StyledLink>
    )

}