import { Subtitle, Title, TitleSubtitleContainer } from "./Styles";
import { Container } from "./Styles";
import ChoosePlan from "../../components/ChoosePlan";
import { useState } from "react";
import ChooseMachine from "../../components/ChooseMachine";
import Header from "../../components/Common/Header/Header";
export interface IRequest {
    address_id: string,
    plan_id: string,
    product_id: string
}

const steps = [
    {
        id: "plans",
        title: "Escolha o seu plano",
        subtitle: "Planos e taxas válidas apenas pra novos pedidos de maquininha."
    },
    {
        id: "products",
        title: "Agora escolha a sua maquininha",
        subtitle: "Taxa 0% no Pix nos primeiros 30 dias pras máquinas T3 e T3 Smart."
    }
]

export default function Catalog() {    

    // Estado local para armazenar o índice atual
    const [index, setIndex] = useState(0);

    // Estado local para armazenar o corpo da solicitação (request)
    const [requestBody, setRequestBody] = useState<IRequest>({
        address_id: "",
        plan_id: "",
        product_id: ""
    });


    return (
        <>
        <Header/>
        <Container>
            
            <TitleSubtitleContainer>
                <Title>
                    {steps[index].title}
                </Title>
                <Subtitle>
                    {steps[index].subtitle}
                </Subtitle>
            </TitleSubtitleContainer>
            {
                index === 0 ?
                <ChoosePlan 
                    request={
                        { data: requestBody, set: setRequestBody }
                    }
                    index={index}
                    setIndex={setIndex}
                />
                : 
                <ChooseMachine
                    request={
                        { data: requestBody, set: setRequestBody }
                    }
                    index={index}
                    setIndex={setIndex}
                />
            }
        </Container>
        </>
    )

}