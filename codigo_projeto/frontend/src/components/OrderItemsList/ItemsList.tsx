import CartItem, {IOrderItem} from './OrderItem/Item';

import { Container } from './Styles';

// definindo OrderItemsList como uma lista de OrderItems
interface IOrderItemsList {
    data: IOrderItem[]
}

export default function OrderItemsList(props: IOrderItemsList) {
    return (
        <>
            <Container>
                {/* carregar order items com base nos dados recebidos */}
            {
                    props.data?.map((item) => {
                        return (
                            <CartItem
                                order_id={item.order_id}
                                name={item.name}
                                unit_price={item.unit_price}
                                quantity={item.quantity}
                                image={item.image}
                                street={item.street}
                                number={item.number}
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