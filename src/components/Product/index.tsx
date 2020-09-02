import React from 'react';

import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';

import tshirtImage from '../../assets/tshirt.png';
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="/">Compartilhar</a>
        <a href="/">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction /> 
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Mercado Pago</p>
        <p className="description">Receba o que está esperando ou devolvemos o seu dinheiro</p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Garantia de 3 meses</p>
      </span>
    </div>

    <a href="/">Saiba mais sobre a garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores natus quas iure commodi enim ullam iste laudantium, dolore excepturi autem adipisci tempora ea placeat nam amet quod distinctio. Facilis, aliquid?
    <br />
    <br />
    Itens inclusos: <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
    <br />

    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea rerum cupiditate quia magnam nam voluptas, alias nemo a reiciendis est eum pariatur quasi quibusdam ad? Hic mollitia distinctio beatae iure!
    </p>
  </Description>
)


export default Product;


