/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { Container, InputBox, Text, Alert, LabelTermo, Termos, Check, Line, JaPossuiConta, LabelOr, ButtonGoogle, StyledLink, Image, LabelConta } from "./Styles";

import Select from '../../components/Common/Select/Select';
import Title from "../../components/Common/Title/Title";
import Button from "../../components/Common/Button/Button";
import Img from "../../../src/assets/img/google-icon-1.png";

import Input from "../../components/Common/Input/Input";

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { GLOBAL_CONFIG } from "../../config";

// Opções para o campo select
const options = [
    { value: 'seller', label: 'Vendedor' },
    { value: 'customer', label: 'Consumidor' }
];

export default function ConfirmRegistration() {
    // Obter as funções de localização e navegação de react-router-dom
    const location = useLocation();
    const navigate = useNavigate();

    // Verificar se há dados de estado na localização
    if (!location.state) {
        return <div>Nenhum dado disponível.</div>;
    }

    // Extrair dados do estado da localização
    const { name, email, password } = location.state;

    // Dividir o nome em partes
    const nameParts = name.split(" ");
    const first_name = nameParts[0];
    const last_name = nameParts.slice(1).join(" ");

    // Variáveis de estado para select, aniversário, erros e mais
    const [selectedOption, setSelectedOption] = useState(options[0].value);
    const [birthday, setBirthday] = useState(new Date());
    const [birthdayError, setBirthdayError] = useState("");
    const [error, setError] = useState("");

    // Função para lidar com a mudança do campo select
    const handleSelectChange = (selected: any) => {
        setSelectedOption(selected.target.value);
    };

    // Função para lidar com o processo de registro
    const handleRegistration = async () => {
        setBirthdayError("");
        setError("");

        // Validar e formatar a data de nascimento
        if (typeof birthday !== 'string') {
            setBirthdayError('Por favor, insira uma data válida.');
            return;
        }

        const parsedBirthday = new Date(birthday);

        const today = new Date();
        if (parsedBirthday >= today) {
            setBirthdayError('A data de nascimento deve ser anterior à data atual.');
            return;
        }

        const formattedBirthday = `${(parsedBirthday.getMonth() + 1).toString().padStart(2, '0')}/${(parsedBirthday.getDate() + 1).toString().padStart(2, '0')}/${parsedBirthday.getFullYear()}`;

        try {
            // Construir dados do usuário para registro
            const userData = {
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password,
                role: selectedOption,
                birthdate: formattedBirthday
            };

            const userEmail = {
                email: email
            };

            // Enviar dados de registro para a API
            fetch(`${GLOBAL_CONFIG.API_URL}/user/`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData),
            }).then(response => response.json())
                .then(response => {
                    if (!(response.status === 201)) {
                        // Lidar com erro de registro, mostrar mensagem de erro, etc.
                        setError('Seu cadastro não foi possível de ser realizado, tente novamente');
                        return;
                    }
                    // Redirecionar para a página de confirmação
                    navigate('/congrats', { state: userEmail });
                });
        } catch (error) {
            console.error("An error occurred:", error);
            setError('Um erro ocorreu durante o cadastro. Tente novamente mais tarde.');
        }
    };


    // Renderização JSX
    return (
        <Container>
            <InputBox>
                {/* Título */}
                <Title
                    textalign="left"
                    size={1}
                    content="Falta pouco"
                    margin="0 0 20px 0"
                />

                {/* Campo de entrada para a data de nascimento */}
                <Input
                    label="Data de Nascimento"
                    variant="gray"
                    margin="60px 0 0 0"
                    placeholder="DD/MM/YYYY"
                    type="Date"
                    value={birthday.toString()}
                    onChange={(e: any) => setBirthday(e.target.value)}
                />
                {birthdayError && <Alert style={{ color: "red" }}>{birthdayError}</Alert>}

                {/* Campo de seleção para a função */}
                <Select
                    label="Qual sua função?"
                    options={options}
                    value={selectedOption}
                    onChange={handleSelectChange}
                    variant="gray" // Você pode alterar a variante conforme necessário
                    margin="30px 0 0 0 "
                />

                {/* Seção de termos de serviço */}
                <Termos>
                    <LabelTermo>
                        ao se registrar, você concorda com os
                    </LabelTermo>
                    <StyledLink href="https://www.stone.com.br/contrato/">
                        termos de serviço.
                    </StyledLink>
                </Termos>

                {/* Botão de registro */}
                <Button
                    margin="30px 0 0 0"
                    value="Cadastrar"
                    variant="primary"
                    width="100%"
                    onClick={handleRegistration}
                />
                {error && <Text style={{ color: "red" }}>{error}</Text>}

                {/* Seção "Ou" */}
                <Check>
                    <Line />
                    <LabelOr>
                        ou
                    </LabelOr>
                    <Line />
                </Check>

                {/* Botão de login com o Google */}
                <ButtonGoogle>
                    <Image src={Img} />
                    Entrar com Google
                </ButtonGoogle>

                {/* Já tem uma conta? Link de login */}
                <JaPossuiConta>
                    <LabelConta>
                        Já tem uma conta?
                    </LabelConta>
                    <StyledLink href="/login">
                        Faça login
                    </StyledLink>
                </JaPossuiConta>
            </InputBox>
        </Container>
    )
}
