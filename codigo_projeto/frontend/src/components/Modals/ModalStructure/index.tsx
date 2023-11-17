import { ReactNode } from "react";
import { ButtonsRow, Content, Overlay } from "./Styles";
import Button from "../../Common/Button/Button";
import Title from "../../Common/Title/Title";

// implementando contrato do modal
interface ModalStructureProps {
    title: string,
    children: ReactNode,
    onCancel: () => void,
    onConfirm: () => void,
}

// criando modal 
export default function ModalStructure(props: ModalStructureProps) {

    return (
        <Overlay>
            {/* implementando as props recebidas no container */}
            <Content>
                <Title
                    size={4}
                    content={props.title}
                />
                {props.children}
                <ButtonsRow>
                    <Button
                        variant="outline-green"
                        padding=".8rem"
                        value="Cancelar"
                        borderradius=".5rem"
                        onClick={props.onCancel}
                    />
                    <Button
                        variant="primary"
                        padding=".88rem"
                        value="Confirmar"
                        borderradius=".5rem"
                        onClick={props.onConfirm}
                    />
                </ButtonsRow>
            </Content>
        </Overlay>
    )

}