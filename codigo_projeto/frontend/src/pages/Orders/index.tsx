import { useEffect, useState } from "react";
import Title from "../../components/Common/Title/Title";
import { Container, StyledLink, Table } from "./Styles";
import { format } from "date-fns";
import { GLOBAL_CONFIG } from "../../config";
import Header from "../../components/Common/Header/Header";

interface IOrder {
    purchase_date: Date,
    order_id: string,
    street: string,
    name: string,
    unit_price: string,
    number: number 
}

const user_data = JSON.parse(localStorage.getItem("session_data") as string);
export default function Orders() {

    // State variable to store orders
    const [orders, setOrders] = useState([]);

    // Fetch orders from the API when the component mounts
    useEffect(() => {
        // Fetch orders using the user's token for authentication
        fetch(`${GLOBAL_CONFIG.API_URL}/order`, {
            headers: {
                "Authorization": `Bearer ${user_data.token}`
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Update the state with the fetched orders
            setOrders(data.success.data);
        });
    }, []);

    // Log the orders to the console
    console.log(orders);


    return (
        <>
        <Header/>
        <Container>
            <Title
                size={1} 
                content="Meus pedidos"
                width="100%"
                textalign="left"
            />          
            <Table>
                <thead>
                    <tr>
                        <th>ID do Pedido</th>
                        <th>Item</th>
                        <th>Preço</th>
                        <th>Endereço</th>
                        <th>Data da compra</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order: IOrder) => {
                            const data = new Date(order.purchase_date);
                            const formatted_date = format(data, 'dd/MM/yyyy');
                            console.log(formatted_date);
                            
                            return (
                                <tr>
                                    <td><StyledLink to={`/track-order/${order.order_id}`}>{order.order_id}</StyledLink></td>
                                    <td>{order.name}</td>
                                    <td>{parseFloat(order.unit_price).toFixed(2)}</td>
                                    <td>{order.street + ", " + order.number}</td>
                                    <td>{formatted_date}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
        </>
    )

}