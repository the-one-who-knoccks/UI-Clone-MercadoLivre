import React from "react";

import { Container, SearchIcon } from "./styles";



const Header: React.FC = () => {
  return (
    <Container>
      <input type="text" placeholder="Buscar produtos, marcas e muito mais..." />
      <SearchIcon />
    </Container>

  );
};

export default Header;
