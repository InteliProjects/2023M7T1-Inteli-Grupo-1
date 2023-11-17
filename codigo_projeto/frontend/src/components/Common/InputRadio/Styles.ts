import styled from 'styled-components';

export const RadioContainer = styled.div`
  justify-content: center;
  display: flex;
`;

export const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

export const StyledRadio = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 100%;
  height: 30px;
  border: 1px solid rgba(102,112,125, .2);
  border-radius: 0 0 1rem 1rem; 
  transition: all 0.2s;
  background-image: ${props => (props.checked ? "linear-gradient(to bottom right, var(--green), yellow)" : "transparent")};
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3px;
    height: 7.5px;
    border: 2px solid white;
    border-left: none;
    border-top: none;
    opacity: ${props => (props.checked ? "1" : "0")};
    transform: ${props => (props.checked ? "translate(-50%, -50%) rotate(45deg)" : "translate(-50%, -50%) rotate(0)")};
  }
`;


export const RadioLabel = styled.label`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`;

export const RadioText = styled.span<{checked: boolean, width?: string, padding?: string, margin?: string}>`
  width: ${props => (props.width || "100%")};  
  margin: ${props => (props.margin || "0")};
  border-radius: 1rem 1rem 0 0;
  padding: ${props => (props.padding || ".5rem 1rem 2rem 1rem")};
  border: 1px solid;
  border-color: ${props => (props.checked ? "var(--green)" : "rgba(102,112,125, .2)")};
  box-shadow: 2px 8px 24px rgba(103,116,129,.15);

  @media(max-width: 768px) {
    width: 100%;
  }
  
  &:hover {
      ${props => (!props.checked && "border-color: var(--black);")};
  }
  `;