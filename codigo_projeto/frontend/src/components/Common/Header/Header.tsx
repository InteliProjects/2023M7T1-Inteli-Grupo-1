import { ReactSVG } from "react-svg";

import { LinkButton, Container, Menu, MenuItem } from "./Styles";
import home from '../../../assets/img/home2.svg';
import cart from '../../../assets/img/cart2.svg';
import person from '../../../assets/img/logout.svg';
import orders from '../../../assets/img/orders.svg';
import User from "../User/User";

import { useState } from "react";
import HamburgerIcon from "../Hamburuger";
import { useAuth } from "../../../contexts/AuthContext";

// exportando navbar
export default function Header() {

    // Variável que recebe o status de conexão da conta do usuário e a função de logout do contexto de autenticação
  const { isLoggedIn, logout } = useAuth();

  // Estado local para controlar a visibilidade do menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Função chamada para alternar a visibilidade do menu.
   * Atualiza o estado 'isMenuOpen' para o valor oposto.
   *
   * @returns {void}
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Verifica se o usuário está autenticado
  if (isLoggedIn) {
    // ... (continuação da lógica)
    return (
      <>
      
      <Container>
      
        <LinkButton onClick={toggleMenu}>
            <LinkButton onClick={toggleMenu}>
                <HamburgerIcon onClick={toggleMenu} />
            </LinkButton>
        </LinkButton>
        <User/>
        {/* Menu aberto */}
        {isMenuOpen && (
          <Menu>
            <MenuItem to={'/'}>
              <ReactSVG src={home} />
              <span>Home</span>
            </MenuItem>
            <MenuItem to={'/cart'}>
              <ReactSVG src={cart} />
              <span>Carrinho</span>
            </MenuItem>
            <MenuItem to={'/orders'}>
              <ReactSVG src={orders} />
              <span>Meus Pedidos</span>
            </MenuItem>
            <MenuItem onClick={() => {logout()}} to={''}>
              <ReactSVG src={person} />
              <span>Sair</span>
            </MenuItem>
          </Menu>
        )}
      </Container>
      </>
    );
    }
    
    // caso o menu esteja fechado
    else {
      return (
        <>

      <Container>
      
        <LinkButton onClick={toggleMenu}>
            <LinkButton onClick={toggleMenu}>
                <HamburgerIcon onClick={toggleMenu} />
            </LinkButton>
        </LinkButton>
        <User/>
        {isMenuOpen && (
          <Menu>
            <MenuItem to={'/'}>
              <ReactSVG src={home} />
              <span>Home</span>
            </MenuItem>
            <MenuItem to={'/cart'}>
              <ReactSVG src={cart} />
              <span>Carrinho</span>
            </MenuItem>
          </Menu>
        )}
      </Container>
      </>
    );
    }
    

  }
  