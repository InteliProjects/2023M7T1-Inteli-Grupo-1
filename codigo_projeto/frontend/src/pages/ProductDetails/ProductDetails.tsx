import { AmountButton, Text ,ButtonsRow, Cart, ChooseAmount, Container, DetailsContainer, NameAmountContainer, ProductDescription, ProductImage, ProductName, Img } from "./Styles";

import Button from "../../components/Common/Button/Button";
import { ReactSVG } from "react-svg";
import cart from '../../assets/img/cart.svg';
import minus from '../../assets/img/minus.svg';
import plus from '../../assets/img/plus.svg';
import { useState } from "react";
import { GLOBAL_CONFIG } from "../../config";
import { useParams } from "react-router-dom";
import { IProduct } from "../../components/ProductsList/Product/Product";
import Header from "../../components/Common/Header/Header";

export default function ProductDetails() {

    // Extrair o parâmetro 'id' da URL usando o hook useParams
    const { id } = useParams();

    // Estado para armazenar os dados do produto
    const [ product, setProduct ] = useState<IProduct>();

    // Efeito colateral para obter dados do produto ao montar o componente
    useState(() => {

        const getProductData = async () => {

            // Fazer uma solicitação à API para obter dados do produto com o ID fornecido
            const response = await fetch(`${GLOBAL_CONFIG.PRODUCT_URL}/${id}`);
            const json = await response.json();
            // Atualizar o estado 'product' com os dados do produto obtidos
            setProduct(json.success?.data);

        };

        // Chamar a função para obter dados do produto ao montar o componente
        getProductData();
    });

    // Estado para armazenar a quantidade de produtos
    const [ amount, setAmount ] = useState(1);

    // Função para diminuir a quantidade de produtos, garantindo que não seja menor que 1
    const decreaseAmount = () => {
        if (amount > 1) {
            setAmount(amount - 1);
        }
    }

    // Função para aumentar a quantidade de produtos
    const increaseAmount = () => {
        setAmount(amount + 1);
    }

    return (
        <>
        <Header/>
        <Container>
            <ProductImage src={product?.image_url} />
            <DetailsContainer>
                <NameAmountContainer>
                    <ProductName>
                        {product?.name}
                    </ProductName>
                    <ChooseAmount>
                        <AmountButton onClick={decreaseAmount}>
                            <Img src={minus} />
                        </AmountButton>
                        <Text width="28px" margin="0 .5rem" weight="600">
                            {amount}
                        </Text>
                        <AmountButton onClick={increaseAmount}>
                            <Img src={plus} />
                        </AmountButton>
                        <Text width="64px" margin="0 .4rem">
                            R$ {product?.unit_price && amount * product?.unit_price}
                        </Text>
                    </ChooseAmount>
                </NameAmountContainer>
                <ProductDescription>
                    {product?.description}
                </ProductDescription>
                <ButtonsRow>
                    <Cart to={'/product'}>
                        <ReactSVG src={cart} />
                    </Cart>
                    <Button 
                        padding=".65rem"
                        value="Finalizar compra"
                        variant="primary"
                        onClick={() => {}}
                    />
                </ButtonsRow>
            </DetailsContainer>    
        </Container>
        </>
    );

}