import { useEffect, useState } from "react";
import { HeaderCart, Subtitle, ContentLeft, Account, LinkButton } from "./Styles";
import Button from "../../components/Common/Button/Button";
import ItemsList from "../../components/CartList/ItemsList";
import { ICartItem } from "../../components/CartList/CartItem/Item";
import items from './cart.json';
import Header from "../../components/Common/Header/Header";
import { FaArrowLeft } from 'react-icons/fa';

// exortando dela de Cart
export default function Cart() {

    // Estado local para armazenar os itens do carrinho
    const [cartItems, setCartItems] = useState<ICartItem[]>([]);

    // Efeito que é executado após a renderização inicial para carregar os itens do arquivo JSON
    useEffect(() => {
        // Carrega os itens do arquivo JSON (presumivelmente definido em algum lugar como 'items')
        setCartItems(items);
    }, []);

    /**
     * Calcula o preço total dos itens no carrinho.
     *
     * @returns {string} - O preço total formatado como uma string.
     */
    const calculateTotal = () => {
        // Utiliza o método reduce para calcular o preço total dos itens multiplicado pela quantidade
        const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        // Formata o total para duas casas decimais e retorna como uma string
        return total.toFixed(2);
    };


    // retornar tela de cart
    return (
        <>
            <Header/>
            <HeaderCart>
                {/* Informações sobre o ítem */}
                <ContentLeft>
                    <Subtitle>
                        <p>Total</p>
                        <h1>R$ {calculateTotal()}</h1>
                    </Subtitle>
                </ContentLeft>

                {/* Botão de checkout */}
                <Button
                    variant="outline-white"
                    onClick={() => {}}
                    height="20px"
                    value="CHECK OUT"
                    width="150px"
                    margin="60px 0 0 0"
                />
            </HeaderCart>
            <Account>
                <LinkButton to={'/'}>
                    <FaArrowLeft />
                </LinkButton>
        
            </Account>

            {/* Lista de ítens do carrinho */}
            <ItemsList data={cartItems} />
        </>
    );
}