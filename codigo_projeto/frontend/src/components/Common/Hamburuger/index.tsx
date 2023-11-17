/* eslint-disable @typescript-eslint/no-explicit-any */
import { HamburgerIconWrapper, HamburgerBar } from './Styles';

// exportando botão de hamburguer para os menus de mobile
const HamburgerIcon = ({ onClick }: any) => {
  return (
    <HamburgerIconWrapper onClick={onClick}>
      <HamburgerBar />
      <HamburgerBar />
      <HamburgerBar />
    </HamburgerIconWrapper>
  );
};

export default HamburgerIcon;