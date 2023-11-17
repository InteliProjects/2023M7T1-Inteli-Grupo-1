/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

// importando estilos
import {
  RadioContainer,
  HiddenRadio,
  StyledRadio,
  RadioLabel,
  RadioText,
} from './Styles';

// criando contrato do custom radio props
interface CustomRadioProps {
  className?: string,
  checked: boolean,
  onChange: (e: any) => void,
  label: string | React.ReactNode,
  value: string,
  hiddenRadio?: boolean,
  padding?: string,
  width?: string,
  margin?: string
}

// criando um custom radio implementando a CustomRadioProps
const CustomRadio: React.FC<CustomRadioProps> = ({ className, checked, onChange, label, value, hiddenRadio, width, padding, margin }) => (
  <RadioContainer className={className}>
    <RadioLabel>

      
      
      <RadioText margin={margin} padding={padding} width={width} checked={checked}>{label}</RadioText>
      <HiddenRadio checked={checked} onChange={onChange} value={value} />
      {!hiddenRadio && <StyledRadio checked={checked} />}

    </RadioLabel>
  </RadioContainer>
);

export default CustomRadio;