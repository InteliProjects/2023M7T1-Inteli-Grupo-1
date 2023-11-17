/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import CustomRadio from '../Common/InputRadio';
import PlanCard from './PlanCard';
import { Container, NextButton } from './Styles';
import { ReactSVG } from 'react-svg';
import right_arrow from '../../assets/img/right-arrow.svg';
import { GLOBAL_CONFIG } from '../../config';
import { IRequest } from '../../pages/Catalog';

// definindo contrato da seção de escolha seus planos
interface ChoosePlanProps {
  index: number,
  setIndex: any
  request: {
    data: IRequest,
    set: any
  }
}

// definindo contrato de cada plano
interface IPlan {
    id: string,
    name: string,
    description: string,
    debit_fee: number,
    credit_fee: number,
    installments_fee: number
}

// exportando seção de chooseplan, implementando interface do ChoosePlanProps
export default function ChoosePlan(props: ChoosePlanProps) {

  // Efeito colateral que é executado uma vez, após a renderização inicial,
  // para obter a lista de planos da API e atualizar o estado 'plans'.
  useState(() => {
    fetch(`${GLOBAL_CONFIG.PLAN_URL}`)
    .then((response) => response.json())
    .then((data) => setPlans(data.success.data));

  });

  // Estado local para armazenar a lista de planos
  const [plans, setPlans] = useState<IPlan[]>([]);

  // Estado local para armazenar o ID do plano selecionado
  const [selectedPlan, setSelectedPlan] = useState('');

  /**
  * Função chamada ao alterar a seleção de um plano.
  * Atualiza o estado 'selectedPlan' e a propriedade 'plan_id' nas informações da solicitação.
  *
  * @param {Event} event - O evento de alteração do rádio.
  * @returns {void}
  */
  const handleRadioChange = (event: any) => {
    setSelectedPlan(event.target.value);
    props.request.set((prevRequest: any) => ({
        ...prevRequest,
        plan_id: event.target.value
    }));
  };


  return (
    <Container>
      <NextButton onClick={() => {props.setIndex(props.index + 1)}} visible={selectedPlan !== ""}>
          <ReactSVG
              src={right_arrow}
              width={4}
              height={4}
          />
      </NextButton>
      {/* Função de mapear os planos */}
      {plans.map((plan) => (
        <CustomRadio
          key={plan.id}
          label={
            <PlanCard
              subtitle={plan.description}
              title={plan.name}
              debit_fee={plan.debit_fee}
              credit_fee={plan.credit_fee}
              installments_fee={plan.installments_fee}
            />
          }
          value={plan.id}
          checked={selectedPlan === plan.id}
          onChange={handleRadioChange}
        />
      ))}
    </Container>
  );
}