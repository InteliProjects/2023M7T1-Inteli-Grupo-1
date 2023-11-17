/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactSVG } from "react-svg";
import { useAuth } from "../../../contexts/AuthContext";
import { Container, Currency, CurrentPrice, DiscountPrice, Feature, FeaturesList, Image, ImagesContainer, InCash, InstallmentPrice, Installments, InstallmentsContainer, MachineName, PurchaseButton, PriceContainer, Btns, AddToCartButton } from "./Styles";
import cart from '../../../assets/img/cart2.svg';

// declarando contrato de cada máquina
interface MachineProps {
    id?: string
    name: string,
    image: string,
    features_images: string[],
    discount_price: number,
    current_price: number,
    set_request: any,
    setModalVisible: any,
    installments_price: number,
    features: string[],
    plan: string
}

// exportando o componente implementando a interface MachineProps
export default function MachineCard(props: MachineProps) {

    // Verifica se o usuário está logado usando o hook useAuth().
    const { isLoggedIn } = useAuth();

    /**
     * Função para prosseguir com a compra.
     *
     * @param {string} id - O identificador do produto que está sendo comprado.
     * @returns {Promise<void>} - Uma promessa que não retorna um valor específico.
     */
    const handlePurchase = async (id: string) => {
        // Verifica se o usuário não está logado.
        if (!isLoggedIn) {
            // Se não estiver logado, redireciona o usuário para a página de login.
            return (window.location.href = "/login");
        }

        // Se o usuário estiver logado, atualiza as informações da solicitação (request).
        props.set_request((prevRequest: any) => ({
            ...prevRequest,
            product_id: id
        }));

        // Torna o modal visível.
        props.setModalVisible(true);
    };


    // criação do componente de produtos
    return (
        <Container>
            {/* Imagem do container */}
            <ImagesContainer>
                <Image
                    src={props.image}
                    margin="-4rem 0"
                    height="8rem"
                    width="auto"
                />
                {
                    props.features_images?.map((image: string) => {
                        return (
                            <Image
                                height="4rem"
                                width="auto"
                                src={image}
                            />
                        )
                    })
                }
            </ImagesContainer>
            
            {/* Nome da máquina */}
            <MachineName>
                <strong>{props.name}</strong> Promo
            </MachineName>

            {/* Informações de preço da máquina */}
            <PriceContainer>
                <div>
                    <DiscountPrice>
                        R$ {props.discount_price}
                    </DiscountPrice>
                    <CurrentPrice>
                        R$ {props.current_price}
                    </CurrentPrice>
                    <InCash>
                        à vista ou
                    </InCash>
                </div>
                <InstallmentsContainer>
                    <div>
                        <Installments>
                            12x
                        </Installments>
                        <Currency>
                            R$
                        </Currency>
                    </div>
                    <InstallmentPrice>
                        {parseFloat("" + props.installments_price as string).toFixed(2)}
                    </InstallmentPrice>
                </InstallmentsContainer>
            </PriceContainer>
            <Btns>

            {/* botão de compra */}
            <PurchaseButton onClick={() => {handlePurchase(props.id as string)}}>
                Pedir {props.name} Promo
            </PurchaseButton>

            {/* botão de adicionar ao carrinho */}
            <AddToCartButton>
                <ReactSVG src={cart} />
            </AddToCartButton>
            </Btns>
            <FeaturesList>
                {
                    props.features?.map((item: string) => {
                        return (
                            <Feature>
                                {item}
                            </Feature>
                        )
                    })
                }
            </FeaturesList>
        </Container>
    )

}