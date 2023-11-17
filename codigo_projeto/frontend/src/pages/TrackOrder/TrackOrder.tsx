import { useEffect, useState } from "react";
import { HeaderTrack, TopHeader, BottomHeader, LinkButton, BreakLine, OrderState, OrderStateBar, Bar, Item, TitleBox, OrderInfo } from "./Styles";
import Title from "../../components/Common/Title/Title";
import OrderItemsList from "../../components/OrderItemsList/ItemsList"
import { IOrderItem } from "../../components/OrderItemsList/OrderItem/Item";
import BarItem from "../../components/BarItem/Item";
import Progress from "../../components/ProgressBar/ProgressBar";
import Header from "../../components/Common/Header/Header";
import { FaArrowLeft } from 'react-icons/fa';

import { GLOBAL_CONFIG } from "../../config";
const user_data = JSON.parse(localStorage.getItem("session_data") as string);

export default function TrackOrder() {
    const [orders, setOrders] = useState<IOrderItem[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [titleColor, setTitleColor] = useState(["#00A868", "gray", "gray"]); // Inicialize as cores dos títulos

    useEffect(() => {

        fetch(`${GLOBAL_CONFIG.API_URL}/order`, {
            headers: {
                "Authorization": `Bearer ${user_data.token}`
            }
        })
        .then(response => response.json())
        .then(data => {console.log(data); setOrders(data.success.data)});

    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 10000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const newTitleColor = ["gray", "gray", "gray"];
        newTitleColor[activeIndex] = "#00A868";
        setTitleColor(newTitleColor);
    }, [activeIndex]);

    return (
        <>
            <Header/>
            <HeaderTrack>
                <TopHeader>
                    <LinkButton to={'/'}>
                        <FaArrowLeft />
                    </LinkButton>
                    <TitleBox>
                        <Title
                            content="Detalhes do Pedido" 
                            size={3}
                            textalign="center"
                        />
                    </TitleBox>
                </TopHeader>
                <BottomHeader>
                    <Title
                        content="Pedido Finalizado" 
                        size={5}
                        color="#fff"
                    />
                    <Title
                        content="Obrigado por comprar com a Jade Store ®" 
                        size={7}
                        color="#fff"
                    />
                </BottomHeader>
            </HeaderTrack>

            <OrderState>
                <OrderStateBar>
                    <Bar>
                        <Progress
                        state={activeIndex}  />
                    </Bar>
                    <Item>
                <Title
                    content="Confirmado"
                    size={8}
                    color={titleColor[0]}
                    textalign="center"
                />
                <BarItem
                    margin="auto"
                    isActive={activeIndex >= 0}
                />
            </Item>

            <Item>
                <Title
                    content="Enviado"
                    size={8}
                    color={titleColor[1]} 
                    textalign="center"
                />
                <BarItem
                    margin="auto"
                    isActive={activeIndex >= 1}
                />
            </Item>

            <Item>
                <Title
                    content="Entregue"
                    size={8}
                    color={titleColor[2]} 
                    textalign="center"
                />
                <BarItem
                    margin="auto"
                    isActive={activeIndex >= 2}
                />
            </Item>
                </OrderStateBar>
            </OrderState>
            <Title
                content="Lista de itens" 
                size={5}
                color="black"
                textalign="center"
                margin="30px 0 0 0"
            />
            <BreakLine />


            <OrderItemsList data={orders}/>
           
            
            <Title
                content="Informações de Entrega" 
                size={5}
                color="black"
                textalign="center"
                margin="30px 0 0 0"
            />
            <BreakLine />

            <OrderInfo>
            <Title
                content="Preço Total: R$ 0,00" 
                size={8}
                color="gray"
                textalign="center"
                />
            <Title
                content="Prazo de entrega: 00/00/000" 
                size={8}
                color="gray"
                textalign="center"
                />
            <Title
                content="Endereço de Entrega:"
                size={8}
                color="gray"
                textalign="center"
                />
            </OrderInfo>
        </>
    );
}
