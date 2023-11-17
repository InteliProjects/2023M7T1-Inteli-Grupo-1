/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, InputBox, Text, CheckBox, Label, Alert, Check, Line, LabelOr, ButtonGoogle, StyledLink, Image } from "./Styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import Title from "../../components/Common/Title/Title";
import Input from "../../components/Common/Input/Input";
import Button from "../../components/Common/Button/Button";
import Img from "../../../src/assets/img/google-icon-1.png";

import { GLOBAL_CONFIG } from "../../config";

export default function Login() {
    // função de navigation do react-router-dom
const navigate = useNavigate();

// função de login do authentication context
const { login } = useAuth();

// variaveis de estado
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");
const [error, setError] = useState(""); // estado de erro

// iniciar processo de login
const handleLogin = async () => {
    try {
        // limpar erros anteriores
        setEmailError("");
        setPasswordError("");

        // interface validar erros
        interface ValidationErrors {
            email?: string;
            password?: string;
        }

        const errors: ValidationErrors = {};

        // validações do campo de e-mail
        if (!email) {
            errors.email = "O campo de email é obrigatório.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Por favor, insira um email válido.";
        }

        // validalções de senha
        if (!password || password.length < 8) {
            errors.password = "A senha deve ter pelo menos 8 caracteres.";
        }

        // checar ocorrencia de erros
        if (Object.keys(errors).length > 0) {
            if (errors.email) {
                setEmailError(errors.email);
            }
            if (errors.password) {
                setPasswordError(errors.password);
            }
            return;
        }

        // mandar informação de cadastro para a base
        fetch(`${GLOBAL_CONFIG.API_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password }),
        })
        .then(response => response.json())
        .then(response => {
            if (!(response.status === 200)) {
                // mostar mensagem de erro
                setError("E-mail ou Senha é inválido. Tente Novamente.");
                return;
            }

            // logar na plataforma
            login();

            // guardar a informação que o perfil esta logado em local storage
            localStorage.setItem('session_data', JSON.stringify(response.success.data));

            // ir para a pagina inial ao ter sucesso no login
            navigate("/");
        });

        } catch (error) {
            // mostrar erros
            console.error("Error during login:", error);
            setError("An error occurred during login.");
        }
    };


    // JSX rendering
    return (
        <Container>
            <InputBox>
                {/* Titulo */}
                <Title
                    textalign="left"
                    size={1}
                    content="Login"
                    margin="0 0 20px 0"
                />
                <Title
                    textalign="left"
                    size={4}
                    content="Bem vindo de volta!"
                    color="#4B5768"
                />

                {/* campo de E-mail  */}
                <Input
                    label="Email"
                    variant="gray"
                    value={email}
                    margin="60px 0 0 0"
                    placeholder="email@exemplo.com"
                    type="text"
                    onChange={(e: any) => setEmail(e.target.value)}
                />
                {emailError && <Alert style={{ color: "red", justifyContent: "left" }}>{emailError}</Alert>}
        

                {/* campo de senha */}
                <Input
                    label="Senha"
                    variant="gray"
                    value={password}
                    margin="30px 0 0 0"
                    placeholder="*********"
                    type="password"
                    onChange={(e: any) => setPassword(e.target.value)}
                />
                <Text onClick={() => navigate("/pswrd-recovery")}>Esqueceu sua senha?</Text>
                {passwordError && <Alert style={{ color: "red" }}>{passwordError}</Alert>}
                {error && <Alert style={{ color: "red" }}>{error}</Alert>}

                {/* Checkbox para "Continuar conectado" */}
                <Check>
                    <CheckBox type="checkbox" />
                    <Label>
                        Continuar conectado
                    </Label>
                </Check>

                {/* Botão de Login */}
                <Button
                    margin="30px 0 0 0"
                    value="Login"
                    variant="primary"
                    width="100%"
                    onClick={handleLogin}
                />

                {/* seção "or" */}
                <Check>
                    <Line />
                    <LabelOr>
                        ou entre com...
                    </LabelOr>
                    <Line />
                </Check>

                {/* Botão Google sign-in */}
                <ButtonGoogle>
                    <Image src={Img} />
                    Entrar com Google
                </ButtonGoogle>

                {/* Link para pagina de registro */}
                <StyledLink href="/register">
                    Crie uma conta
                </StyledLink>
            </InputBox>
        </Container>
    )
}
