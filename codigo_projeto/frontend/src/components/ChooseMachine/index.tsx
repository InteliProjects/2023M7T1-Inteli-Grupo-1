/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { AddAddress, Address, AddressAttribute, AddressesContainer, Container, PreviousButton } from './Styles';
import MachineCard from './MachineCard';
import { ReactSVG } from 'react-svg';
import rightArrow from '../../assets/img/right-arrow.svg';
import { GLOBAL_CONFIG } from '../../config';

import chipImage from '../../assets/img/ton/comchip1.png';
import needsPhoneImage from '../../assets/img/ton/precisadecelular1.png';
import batteryImage from '../../assets/img/ton/bateria1.png';
import binImage from '../../assets/img/ton/combobina1.png';
import touchscreenImage from '../../assets/img/ton/touchscreen1.png';
import ModalStructure from '../Modals/ModalStructure';
import { IRequest } from '../../pages/Catalog';
import CustomRadio from '../Common/InputRadio';
import { errorToast, successToast } from '../Toasts';
import { Navigate } from 'react-router-dom';

// contrato de escolher máquinas
interface ChooseMachineProps {
    index: number,
    setIndex: any,
    request: {
      data: IRequest,
      set: any
    }
}

// contrato da maquina
interface IMachine {
    id: string,
    name: string,
    image_url: string,
    features_images: string[],
    discount_price: number,
    unit_price: number,
    installments_price: number,
    features: string[]
}

// contrato do endereço
export interface IAddress {
    id?: string,
    street: string,
    number: number,
    neighborhood: string,
    city: string,
    state: string,
    zip_code?: string
}

const mocked_machines = {
    t1: {
        features_images: [needsPhoneImage],
        features:  [
            "Frete grátis e troca em todo o Brasil",
            "Receba suas vendas em 1 dia útil",
            "Precisa de celular com internet",
            "Receba por aproximação (NFC)",
            "Comprovante por SMS",
            "Venda pelo App com TapTon, Link, Pix e Boleto"
        ]
    },
    t1_chip: {
        features_images: [chipImage],
        features: [
            "Frete e troca grátis pra todo o Brasil",
            "Receba suas vendas em 1 dia útil",
            "Com Chip 2G e Wi-Fi",
            "Receba por aproximação (NFC)",
            "Comprovante por SMS",
            "Venda pelo App com TapTon, Link, Pix e Boleto"
        ],
    },
    t2: {
        features_images: [batteryImage, chipImage],
        features: [
            "Frete e troca grátis pra todo o Brasil",
            "Receba suas vendas em 1 dia útil",
            "Com Chip 3G e Wi-Fi",
            "Receba por aproximação (NFC)",
            "Comprovante por SMS",
            "Venda pelo App com TapTon, Link, Pix e Boleto",
            "Bateria de longa duração"
        ],
    },
    t3: {
        features_images: [binImage, chipImage],   
        features: [
            "Frete e troca grátis pra todo o Brasil",
            "Receba suas vendas em 1 dia útil",
            "Com Chip 3G e Wi-Fi",
            "Receba por aproximação (NFC)",
            "Comprovante impresso ou SMS",
            "Venda pelo App com TapTon, Link, Pix e Boleto",
            "Aceite Pix QR Code na Maquininha"
        ],
    },
    t3_smart: {
        features_images: [batteryImage, touchscreenImage],
        features: [
            "Frete e troca grátis pra todo o Brasil",
            "Receba suas vendas em 1 dia útil",
            "Com Chip 4G e Wi-Fi",
            "Receba por aproximação (NFC)",
            "Comprovante impresso ou SMS",
            "Venda pelo App com TapTon, Link, Pix e Boleto",
            "Bateria de longa duração",
            "Sistema Android com Visor Touchscreen",
            "Aceite Pix QR Code na Maquininha",
        ]
    }
}

const ChooseMachine: React.FC<ChooseMachineProps> = (props) => {

    // Estado local para armazenar a lista de máquinas
    const [machines, setMachines] = useState<IMachine[]>([]);

    // Estado local para armazenar a lista de endereços
    const [addressList, setAddressList] = useState<IAddress[]>([]);

    // Estado local para armazenar o endereço selecionado
    const [selectedAddress, setSelectedAddress] = useState<string>("");

    // Estado local para controlar a visibilidade do modal
    const [modalVisible, setModalVisible] = useState(false);

    // Obter dados do usuário a partir do armazenamento local
    const user_data = JSON.parse(localStorage.getItem('session_data') as string);

    // Redireciona para a página de login se o usuário não estiver autenticado
    if (!user_data) {
        return <Navigate to={'/login'} />;
    }

    /**
     * Função chamada ao selecionar um endereço.
     * Atualiza o estado 'selectedAddress' e a propriedade 'address_id' nas informações da solicitação.
     *
     * @param {Event} e - O evento de seleção de endereço.
     * @returns {void}
     */
    const handleSelectAddress = (e: any) => {
        setSelectedAddress(e.target.value);
        props.request.set((prevRequest: any) => ({
            ...prevRequest,
            address_id: e.target.value
        }));
    };

    /**
     * Função chamada ao confirmar o endereço selecionado.
     * Realiza uma requisição para criar um pedido com o endereço selecionado.
     * Exibe mensagens de erro ou sucesso com base na resposta da API.
     *
     * @returns {void}
     */
    const handleConfirm = async () => {
        console.log(props.request.data);

        // Envia um erro se nenhum endereço foi selecionado
        if (!selectedAddress) {
            errorToast("Você precisa selecionar um endereço.");
            return;
        }

        // Realiza uma requisição para criar um pedido
        const response = await fetch(`${GLOBAL_CONFIG.API_URL}/order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user_data.token}`
            },
            body: JSON.stringify(props.request.data)
        });

        const data = await response.json();

        // Exibe mensagens de erro ou sucesso com base na resposta da API
        if (data.success) {
            successToast(data.success.title);
            return window.location.href = `/track-order/${data.success.data.id}`;
        } else {
            errorToast(data.error.title);
        }
    };

    /**
     * Efeito colateral que é executado após a renderização inicial do componente.
     * Obtém a lista de produtos e a lista de endereços do usuário autenticado.
     *
     * @returns {void}
     */
    useEffect(() => {
        // Obtém a lista de produtos
        fetch(`${GLOBAL_CONFIG.PRODUCT_URL}`)
        .then((response) => response.json())
        .then((data) => setMachines(data.success.data))

        // Obtém a lista de endereços do usuário autenticado
        fetch(`${GLOBAL_CONFIG.API_URL}/address/list-by-user/${user_data.id}`, {
            headers: {
                Authorization: `Bearer ${user_data.token}`
            }
        })
            .then((response) => response.json())
            .then((data) => setAddressList(data.success.data));
    }, []);


    return (
        <Container>
            {
                modalVisible &&
                <ModalStructure
                    title="Escolha um endereço"
                    onCancel={() => {setModalVisible(false)}}
                    onConfirm={handleConfirm}
                >
                    <AddressesContainer>
                        {
                            addressList.length !== 0 ? addressList?.map((address, index) => {
                                return (
                                    <CustomRadio
                                        key={index}
                                        width='100%'
                                        padding="1rem"
                                        margin='0'
                                        hiddenRadio
                                        label={
                                            <Address>
                                                <AddressAttribute>
                                                    {address.street}, {address.number}
                                                </AddressAttribute>
                                                <AddressAttribute>
                                                    {address.neighborhood}
                                                </AddressAttribute>
                                                <AddressAttribute>
                                                    {address.city}, {address.state}
                                                </AddressAttribute>
                                            </Address>
                                        }
                                        value={address.id as string}
                                        checked={address.id === selectedAddress}
                                        onChange={handleSelectAddress}
                                    />
                                )
                            }) 
                            : 
                            <>
                                Nenhum endereço encontrado.
                            </>
                        }
                    </AddressesContainer>
                    <AddAddress to="/add-address">Adicionar um endereço</AddAddress>
                </ModalStructure>
            }
            <PreviousButton onClick={() => {props.setIndex(props.index - 1)}} visible={true}>
                <ReactSVG
                    src={rightArrow}
                    width={4}
                    height={4}
                />
            </PreviousButton>
            {
                machines?.map((machine: IMachine) => {
                    return (
                        <MachineCard
                            key={machine.id}
                            {...machine}
                            image={machine.image_url}
                            features_images={mocked_machines[machine.id as keyof typeof mocked_machines].features_images}
                            discount_price={machine.discount_price}
                            current_price={machine.unit_price}
                            setModalVisible={setModalVisible}
                            set_request={props.request.set}
                            installments_price={machine.installments_price}
                            features={mocked_machines[machine.id as keyof typeof mocked_machines].features}
                            plan={props.request?.data.plan_id}
                        />
                    )
                })
            }
        </Container>
    )    

}

export default ChooseMachine;