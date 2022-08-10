import { ReactElement } from "react";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

import { Button, Container } from "components/Header/styles";
import logoImg from "assets/logo.svg";

export const Header = (): ReactElement => {
  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="" />
      </Link>

      <span>
        <Button type="button" aria-label="Ouro Branco, MG" $color="secondary">
          <MapPin size={24} weight="fill" style={{ marginRight: "0.4rem" }} />
          Ouro Branco, MG
        </Button>
        <Button type="button" aria-label="Cart" $color="primary">
          <ShoppingCart size={24} weight="fill" />
        </Button>
      </span>
    </Container>
  );
};
