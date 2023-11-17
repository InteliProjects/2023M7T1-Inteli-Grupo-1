/* eslint-disable @typescript-eslint/no-explicit-any */
import Input from "../../components/Common/Input/Input";
import Title from "../../components/Common/Title/Title";
import { ButtonsRow, Container, Hint, ProgressBar, ProgressBarBg, TitleInputContainer } from "./Style";
import { useState } from "react";
import { GLOBAL_CONFIG } from "../../config";
import { successToast, errorToast } from "../../components/Toasts";
import Button from "../../components/Common/Button/Button";

// definindo as informações que aparecem em cada passo
const steps = [
    {
        id: "street",
        title: "Qual a sua rua?",
        placeholder: "Rua das dores",
        type: "text",
        validation: (entry: string) => /[a-zA-Z]{3,}/.test(entry),
        value: ""
    },
    {
        id: "number",
        title: "Número da residência",
        placeholder: "80",
        type: "number",
        validation: (entry: string) => /^\d+$/.test(entry),
        value: ""
    },
    {
        id: "neighborhood",
        title: "Insira seu bairro",
        placeholder: "Seu bairro aqui",
        type: "text",
        validation: (entry: string) => /[a-zA-Z]{3,}/.test(entry),
        value: ""
    },
    {
        id: "city",
        title: "Insira sua cidade",
        placeholder: "Sua cidade aqui",
        type: "text",
        validation: (entry: string) => /[a-zA-Z]{3,}/.test(entry),
        value: ""
    },
    {
        id: "state",
        title: "Insira seu estado",
        placeholder: "Seu estado aqui",
        type: "text",
        validation: (entry: string) => /[a-zA-Z]{3,}/.test(entry),
        value: ""
    },
    {
        id: "zip-code",
        title: "Qual o seu CEP?",
        placeholder: "Seu CEP aqui",
        hint: "O CEP deve estar no formato 00000-000",
        type: "text",
        validation: (entry: string) => /^\d{5}-\d{3}$/.test(entry),
        value: ""
    },
];

// exportando a tela AddAddress
export default function AddAddress() {

    // Estado local para controlar o índice atual do processo de formulário
    const [index, setIndex] = useState(0);

    // Estado local para armazenar o valor atual do passo do formulário
    const [value, setValue] = useState(steps[index]?.value);

    // Verifica se ainda há passos não concluídos no processo do formulário
    const isNotFinished = index < steps.length - 1;

    /**
     * Atualiza o valor do estado com base na alteração do input e armazena o valor no passo atual.
     *
     * @param {Object} e - O evento de mudança no input.
     * @returns {void}
     */
    const handleValueChange = (e: any) => {
        setValue(e.target.value);
        steps[index].value = e.target.value;
    };

    /**
     * Volta para o passo anterior do formulário.
     *
     * @returns {void}
     */
    const handlePrevious = () => {
        if (index > 0) {
            setValue(steps[index - 1].value);
            setIndex(index - 1);
        }
    };

    /**
     * Avança para o próximo passo do formulário se disponível, validando se o próximo passo possui um valor.
     *
     * @returns {void}
     */
    const handleNext = async () => {
        if (index < steps.length - 1) {
            if (steps[index + 1]?.value === "") {
                setIndex(index + 1);
                return setValue("");
            }
            setValue(steps[index + 1].value);
            setIndex(index + 1);
        }
    };

    /**
     * Submete o formulário, enviando os dados para a API.
     *
     * @returns {void}
     */
    const handleSubmit = async () => {
        // Recupera os dados do usuário da sessão
        const user_data = JSON.parse(localStorage.getItem('session_data') as string);

        // Prepara os dados para serem enviados à API
        const data = {
            street: steps[0].value,
            number: steps[1].value,
            neighborhood: steps[2].value,
            city: steps[3].value,
            state: steps[4].value,
            zip_code: steps[5].value
        };

        // Envia uma requisição POST para a API com os dados do endereço
        const response = await fetch(`${GLOBAL_CONFIG.API_URL}/address`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user_data.token}`
            },
            body: JSON.stringify(data)
        });

        // Converte a resposta da API para JSON
        const json = await response.json();

        // Se a operação for bem-sucedida, exibe um toast de sucesso e redireciona para a página inicial
        if (json.success.title) {
            successToast(json.success.data);
            return window.location.href = "/";
        }

        // Se houver um erro, exibe um toast de erro
        errorToast(json.error.title);
    };


    // retornar a tela de adicionar Address
    return (
        <Container>
            {/* Progress bar */}
            <ProgressBarBg>
                <ProgressBar
                    progress={(index)/steps.length}
                />
            </ProgressBarBg>

            {/* Campo de preenchimento */}
            <TitleInputContainer>
                <Title
                    content={steps[index]?.title}
                    size={1}
                />
                <div>
                    <Input 
                        variant="register"
                        borderradius="0"
                        borderwidth="0 0 2px 0"
                        value={value}
                        valid={!steps[index].validation(value)}
                        onChange={handleValueChange}
                        placeholder={steps[index]?.placeholder}
                        type={steps[index]?.type}
                    />
                    {
                        steps[index].hint &&
                        <Hint valid={!steps[index].validation(value)}>
                            {steps[index].hint}
                        </Hint>
                    }
                </div>
            </TitleInputContainer>
            <ButtonsRow>
                <Button 
                    variant="primary"
                    value={"Anterior"}
                    onClick={handlePrevious}
                    width="100%"
                    uppercase
                    disabled={index == 0}
                    maxwidth="25rem"
                    padding="1rem"
                />
                <Button 
                    variant="primary"
                    value={isNotFinished ? "Próximo" : "Finalizar"}
                    onClick={isNotFinished ? handleNext : handleSubmit}
                    width="100%"
                    uppercase
                    disabled={!steps[index]?.validation(value) as boolean}
                    maxwidth="25rem"
                    padding="1rem"
                />
            </ButtonsRow>
        </Container>
    )

}