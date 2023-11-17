import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import 
import { GLOBAL_CONFIG } from "../../config";
import { Container, InputBox, Alert, Check, Line, ButtonGoogle, JaPossuiConta, LabelConta, StyledLink, Image, LabelOr } from "./Styles";
import Title from "../../components/Common/Title/Title";
import Input from "../../components/Common/Input/Input";
import Button from "../../components/Common/Button/Button";
import Img from "../../../src/assets/img/google-icon-1.png";

export default function Register() {
  // State variables for input fields and errors
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate(); // Initialize useHistory hook

  // Function to handle the registration process
  const handleRegister = async () => {
    try {
      // Clear previous errors
      setNameError("");
      setEmailError("");
      setPasswordError("");
      setError("");

      // Interface for validation errors
      interface ValidationErrors {
        name?: string;
        email?: string;
        password?: string;
      }

      const errors: ValidationErrors = {};

      // Validations for name field
      if (!name) {
        errors.name = "O campo de nome é obrigatório.";
      } else {
        const nameParts = name.split(' ');

        if (nameParts.length < 2) {
          errors.name = "Por favor, insira nome e sobrenome";
        } else {
          const firstName = nameParts[0];
          const lastName = nameParts[1];
          const nameRegex = /^[a-zA-Z\u00C0-\u017F\s']+$/;

          if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
            errors.name = "Por favor, insira nome e sobrenome com caracteres válidos";
          }
        }
      }

      // Validations for email field
      if (!email) {
        errors.email = "O campo de email é obrigatório.";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Por favor, insira um email válido.";
      }

      // Validations for password field
      if (!password || password.length < 8) {
        errors.password = "A senha deve ter pelo menos 8 caracteres.";
      }

      // Check if there are any errors
      if (Object.keys(errors).length > 0) {
        // Handle errors here
        if (errors.name) {
          setNameError(errors.name);
        }
        if (errors.email) {
          setEmailError(errors.email);
        }
        if (errors.password) {
          setPasswordError(errors.password);
        }
        return;
      }

      // If no errors, proceed with further processing
      // ...
      
      // Store the user data (not implemented in this code snippet)
      const userData = {
        name: name,
        email: email,
        password: password,
      };

      // Check if email is already in use
      fetch(`${GLOBAL_CONFIG.API_URL}/user/check-email`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email }),
      }).then(response => response.json())
        .then(response => {
          if (!response.isValid) {
            setError("Esse e-mail já foi utilizado, escolha outro.");
            return;
          }

          navigate("/confirm-registration", { state: userData }); // Navigate to confirmation page
        });

    } catch (error) {
      console.error("An error occurred:", error);
      setError("Ocorreu um erro. Por favor, tente novamente.");
    }
  };

  return (
    <Container>
      <InputBox>
        {/* Title */}
        <Title textalign="left" size={1} content="Crie uma conta" margin="0 0 20px 0" />
        
        {/* Input fields for name, email, and password */}
        <Input
          label="Nome"
          variant="gray"
          margin="60px 0 0 0"
          placeholder="Nome Sobrenome"
          type="text"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
        />
        {nameError && <Alert style={{ color: "red" }}>{nameError}</Alert>}
        <Input
          label="Email"
          variant="gray"
          margin="30px 0 0 0"
          placeholder="email@exemplo.com"
          type="text"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        {emailError && <Alert style={{ color: "red" }}>{emailError}</Alert>}
        <Input
          label="Senha"
          variant="gray"
          margin="30px 0 0 0"
          placeholder="*********"
          type="password"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
        />
        {passwordError && <Alert style={{ color: "red" }}>{passwordError}</Alert>}
        
        {/* Error message for general errors */}
        {error && <Alert style={{ color: "red" }}>{error}</Alert>}
        
        {/* Register button */}
        <Button margin="30px 0 0 0" value="Continuar" variant="primary" width="100%" onClick={handleRegister} />
        
        {/* "Or" section */}
        <Check>
          <Line />
          <LabelOr>ou</LabelOr>
          <Line />
        </Check>
        
        {/* Google sign-in button */}
        <ButtonGoogle>
          <Image src={Img} />
          Entrar com Google
        </ButtonGoogle>
        
        {/* Already have an account? Login link */}
        <JaPossuiConta>
          <LabelConta>Ja tem uma conta?</LabelConta>
          <StyledLink href="/login">Faça login</StyledLink>
        </JaPossuiConta>
      </InputBox>
    </Container>
  );
}
