import { List, X } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { LogoHeader, TagHeader, Container, Menu } from "./styles";

import logoShowMeTheCode from '../../assets/logo-header-show-me-the-code.svg';

interface linksMenu {
  home?: string;
  profile?: string;
}

export function Header({home, profile}: linksMenu){
  return (
    <TagHeader>
      <Container>
        <LogoHeader src={logoShowMeTheCode}/>
        <List size={35} color="white" />
        <Menu id="menu">
          <X size={20} color="white" className="closeMenu" />
          <NavLink to="/">
            {home ="Home"}
          </NavLink>
          <NavLink to="/perfil">
            {profile = "Profile"}
          </NavLink>
        </Menu>
      </Container>
    </TagHeader>
  );
}