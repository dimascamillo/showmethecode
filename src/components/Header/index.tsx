import { List, X } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { LogoHeader, TagHeader, Container, Menu } from "./styles";

import logoShowMeTheCode from '../../assets/logo-header-show-me-the-code.svg';

export function Header(){
  return (
    <TagHeader>
      <Container>
        <LogoHeader src={logoShowMeTheCode}/>
        <List size={20} color="white" />
        <Menu id="menu">
          <X size={20} color="white" className="closeMenu" />
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/perfil">
            Perfil
          </NavLink>
        </Menu>
      </Container>
    </TagHeader>
  );
}