import React from 'react';

import {
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon

} from './styles';

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Novo | 15 vendidos </Condition>
      <Row>
        <h1>Camiseta Branca</h1>
        <HeartIcon />
      </Row>

      <DispatchTag>Enviando normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fractions">29</span>
          <span className="cents">90</span>
        </PriceRow>

        <InstallmentsInfo>em 3x de 11,67</InstallmentsInfo>
      </PriceCard>

      <StockStatus>Estoque disponível</StockStatus>

      <MethodCard>
        <CheckIcon />
        <div>
          <span className="title">Frete grátis</span>
          <span className="details">Benefício Mercado Pontos</span>
          <a href="/" className="more">
            Ver mais opções
          </a>
        </div>
      </MethodCard>

      <Actions>
        <Button solid>Comprar agora</Button>
        <Button >Adicionar ao carrinho</Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon />
          <p>
            Compra garantida. Receba o produto que está esperando ou devolvemos o seu dinheiro.
          </p>
        </li>
      </Benefits>
    </Container>
  )
}

export default ProductAction;