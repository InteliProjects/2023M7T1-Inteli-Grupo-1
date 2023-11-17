/* eslint-disable @typescript-eslint/no-explicit-any */
import ModalStructure from '../ModalStructure';
import { AddressesContainer } from './Styles';

// exportando componente de endereço
export default function AddressModal({setModalVisible}: any) {

    return (
        <ModalStructure
            title="Escolha um endereço"
            onCancel={() => {setModalVisible(false)}}
            onConfirm={() => {setModalVisible(false)}}
        >
            <AddressesContainer>
                asdasd
            </AddressesContainer>
        </ModalStructure>
    )

}