/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Input from "../../components/Common/Input/Input";
import { cpf } from "cpf-cnpj-validator";
import Title from "../../components/Common/Title/Title";
import Button from "../../components/Common/Button/Button";
import { GLOBAL_CONFIG } from "../../config";
import { errorToast, successToast } from "../../components/Toasts";
import {
    ButtonsRow,
    Container,
    Hint,
    ProgressBar,
    ProgressBarBg,
    TitleInputContainer
} from "./Styles";


const steps = [
    {
        id: "name",
        title: "Qual o seu nome?",
        placeholder: "Nome completo aqui",
        type: "text",
        validation: (entry: string) => /[a-zA-Z]{3,}/.test(entry),
        value: ""
    },
    {
        id: "email",
        title: "Qual o seu email?",
        placeholder: "Seu melhor email aqui",
        type: "email",
        hint: "Você precisará confirmar ele depois",
        validation: (entry: string) => /\S+@\S+\.\S+/.test(entry),
        value: ""
    },
    {
        id: "cpf",
        title: "Insira seu CPF",
        placeholder: "Seu CPF aqui",
        hint: "Apenas números (ex: 12345678910)",
        type: "number",
        validation: (entry: string) => cpf.isValid(entry),
        value: ""
    },
    {
        id: "password",
        title: "Insira uma senha",
        placeholder: "Sua senha aqui",
        hint: "Pelo menos 8 caracteres",
        type: "password",
        validation: (entry: string) => /^.{8,}$/.test(entry),
        value: ""
    },
    {
        id: "confirm-password",
        title: "Confirme sua senha",
        placeholder: "Insira a sua senha novamente",
        hint: "As senhas precisam coincidir",
        type: "password",
        validation: (entry: string): boolean => entry === steps[3].value,
        value: ""
    },
    {
        id: "birthdate",
        title: "Qual a sua data de nascimento?",
        placeholder: "Sua data de nascimento aqui",
        hint: "A data deve estar no formato DD/MM/YYYYY",
        type: "text",
        validation: (entry: string) => /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(entry),
        value: ""
    }
];

export default function NewRegister() {

    // State variables to manage the form steps
    const [index, setIndex] = useState(0);
    const [value, setValue] = useState(steps[index]?.value);
    const isNotFinished = index < steps.length - 1;

    // Function to handle input value changes
    const handleValueChange = (e: any) => {
        setValue(e.target.value);
        steps[index].value = e.target.value;
    }

    // Function to navigate to the previous step
    const handlePrevious = () => {
        if (index > 0) {
            setValue(steps[index - 1].value);
            setIndex(index - 1);
        }
    }

    // Function to navigate to the next step
    const handleNext = async () => {
        // Additional check for a specific step with ID "email"
        if (steps[index].id === "email") {
            const response = await fetch(`${GLOBAL_CONFIG.API_URL}/user/check-email`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: steps[index].value })
            });
            const json = await response.json();
            if (json.error) {
                return errorToast(json.error.title);
            }
        }

        // Move to the next step if not the last step
        if (index < steps.length - 1) {
            if (steps[index + 1]?.value === "") {
                setIndex(index + 1);
                return setValue("");
            }
            setValue(steps[index + 1].value);
            return setIndex(index + 1);
        }
    }

// Function to submit the form
const handleSubmit = async () => {
    // Gather form data
    const data = {
        name: steps[0].value,
        email: steps[1].value,
        password: steps[3].value,
        birthdate: steps[5].value
    };

    // Send form data to the API for user registration
    const response = await fetch(`${GLOBAL_CONFIG.API_URL}/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    // Handle API response
    const json = await response.json();
    if (json.success.title) {
        successToast(json.success.data);
        return window.location.href = "/";
    }

    errorToast(json.error.title);
}


    return (
        <Container>
            <ProgressBarBg>
                <ProgressBar
                    progress={(index)/steps.length}
                />
            </ProgressBarBg>
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