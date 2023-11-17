import React from 'react';
import pixfee from '../../../assets/img/ton/taxapixqrcode.png';
import { PlanCardProps, CardContainer, CardImage, CardHeader, CardFees, CardTitle, CardSubtitle, TitleSubtitleContainer, Fee } from './Styles';

// definir plan card implementando a interface PlanCardProps, consumindo as informações passadas nas props
const PlanCard: React.FC<PlanCardProps> = ({ title, subtitle, debit_fee, credit_fee, installments_fee }) => (
  <CardContainer>
    <CardHeader>
      <TitleSubtitleContainer>
        {/* definir titulo do card pelo valor recebido */}
        <CardTitle>
            {title}
        </CardTitle>
        {/* definir sub-titulo do card pelo valor recebido */}
        <CardSubtitle>
            {subtitle}
        </CardSubtitle>
      </TitleSubtitleContainer>
      {/* definir imagem do card pelo valor recebido */}
        <CardImage src={pixfee} alt={title} />
    </CardHeader>
    {/* definir informações do card pelo valor recebido */}
    <CardFees>
      <Fee before='Débito'>
        {debit_fee}%
      </Fee>
      <Fee before='Crédito'>
        {credit_fee}%
      </Fee>
      <Fee before='Crédito 12x'>
        {installments_fee}%
      </Fee>
    </CardFees>
  </CardContainer>
);

export default PlanCard;