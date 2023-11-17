import React from 'react';
import styled, { css } from 'styled-components';

// Implementação do contrato do breakpoint
interface Breakpoints {
  smallMobile?: boolean;
  mobile?: boolean;
  tablet?: boolean;
  laptop?: boolean;
}

// Tipo de propriedades para o componente Hide
type HideProps = {
  children: React.ReactNode;
} & Breakpoints;

// Larguras dos breakpoints
const breakpointWidths: Record<keyof Breakpoints, string> = {
  smallMobile: '320px',
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
};

/**
 * Gera estilos de ocultação com base nos breakpoints especificados.
 *
 * @param {Breakpoints} props - As propriedades de breakpoint para gerar estilos de ocultação.
 * @returns {Array<ReturnType<typeof css>>} - Um array de estilos de ocultação baseados nos breakpoints.
 */
const generateHideStyles = (props: Breakpoints) => {
  const breakpoints = Object.keys(breakpointWidths) as Array<keyof Breakpoints>;
  return breakpoints?.map(bp => {
    if (props[bp]) {
      const maxWidth = breakpointWidths[bp];
      return css`
        @media (max-width: ${maxWidth}) {
          display: none;
        }
      `;
    }
    return '';
  });
};

// Componente estilizado que aplica estilos de ocultação com base nos breakpoints
const HideContainer = styled.div<Breakpoints>`
  ${({ ...props }) => generateHideStyles(props)};
`;

/**
 * Componente funcional Hide que oculta o conteúdo em determinados breakpoints.
 *
 * @param {HideProps} props - As propriedades do componente Hide.
 * @returns {JSX.Element} - O componente Hide que envolve o conteúdo a ser ocultado.
 */
const Hide: React.FC<HideProps> = ({ children, ...props }) => {
  return <HideContainer {...props}>{children}</HideContainer>;
};

export default Hide;
