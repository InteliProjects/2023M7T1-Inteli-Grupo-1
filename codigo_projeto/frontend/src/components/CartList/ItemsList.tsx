import CartItem, {ICartItem} from './CartItem/Item';

import { Container } from './Styles';

// criando contrato do items list e defiindo o tipo do componente como um array de CartItems
interface IItemsList {
    data: ICartItem[]
}

// lista de Cart items
export default function ItemsList(props: IItemsList) {
    return (
        <>
            <Container>
            {/* Função que mapeia os cart items com as suas respectivas props */}
            {
                    props.data?.map((item) => {
                        return (
                            <CartItem
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                favorite={item.favorite}
                                quantity={item.quantity}
                                image={item.image}
                                
                            />
                        )
                    })

                    || <>
                        asd
                    </>
                } 
            </Container>
        </>
    )
}