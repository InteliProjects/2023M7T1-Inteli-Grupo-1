import { useState } from 'react';
import { Container, Image, Title, Subtitle, QtdBtn, ImageContainer, IconContainer, ButtonTrash, BottomBtns, CenterDiv} from "./Styles";
import Button from '../../Common/Button/Button';
import { FaHeart, FaTrash } from 'react-icons/fa';

// Contrato do cart Item
export interface ICartItem {
    id: number,
    image: string,
    title: string,
    price: number,
    favorite?: boolean,
    quantity: number
}

// ítens da tela de Cart
export default function CartItem(props: ICartItem) {

    // Inicializa o estado local 'quantity' com o valor fornecido em 'props.quantity'
    // e 'isActive' com 'false'.
    const [quantity, setQuantity] = useState(props.quantity);

    // Inicializa o estado local 'isActive' com 'false'.
    const [isActive, setIsActive] = useState(false);

    /**
     * Função para detectar itens.
     * Inverte o valor do estado 'isActive' quando o ícone é clicado.
     *
     * @returns {void}
     */
    const handleIconClick = () => {
        setIsActive(!isActive);
    };

    /**
     * Função para diminuir a quantidade de unidades de cada item ao clicar no botão (-).
     * Verifica se a quantidade atual é maior que 1 antes de decrementar.
     *
     * @returns {void}
     */
    const handleDecrease = () => {
        // Verifica se a quantidade atual é maior que 1 antes de decrementar.
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    /**
     * Função para aumentar a quantidade de unidades de cada item ao clicar no botão (+).
     * Incrementa a quantidade em 1.
     *
     * @returns {void}
     */
    const handleIncrease = () => {
        // Incrementa a quantidade em 1.
        setQuantity(quantity + 1);
    };


    return (
        <Container>
            {/* Imagem do container */}
            <ImageContainer>
                <Image src={props.image} />
            </ImageContainer>

            {/* Informações do pedido */}
            <CenterDiv>

                {/* Título e preço do ítem */}
                <Title>{props.title}</Title>
                <Subtitle>${props.price}</Subtitle>

                <BottomBtns>
                {/* Botão de favoritar ítem */}
                <IconContainer onClick={handleIconClick} isActive={isActive}>
                    <FaHeart />
                </IconContainer>

                {/* Botão de apagar ítem */}
                <ButtonTrash>
                    <FaTrash />
                </ButtonTrash>
                    
                </BottomBtns>
            </CenterDiv>

            {/* Botão de alterar quantidade do ítem */}
            <QtdBtn>
                <Button
                    variant="primary"
                    height="20px"
                    value="-"
                    width="20px"
                    padding="0"
                    borderradius='4px'
                    onClick={handleDecrease}
                />
                <Title>{quantity}</Title>
                <Button
                    variant="primary"
                    height="20px"
                    value="+"
                    width="20px"
                    padding="0"
                    borderradius='4px'
                    onClick={handleIncrease}
                />
            </QtdBtn>
        </Container>
    );
}


