import { Avatar, Main, ProfileCard, ProfileCardHeader, ProfileRole, ProfileTitle } from "./styles";

import { NavLink } from "react-router-dom";

interface PropsHome {
  titleProfile: string;
}

const Roles = {
  roles: {
    webDeveloper: 'Web Developer',
    backEndDeveloper: 'Back End Developer'
  }
}

export function Home({ titleProfile }: PropsHome) {
  return (
    <Main>
      <ProfileCard>
        <ProfileCardHeader>
          <img src={"https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"} />
        
          <Avatar statusColor="green">
            <img src={"https://github.com/dimascamillo.png"}/>
          </Avatar>

          <ProfileTitle>{titleProfile="Dimas Camillo"}</ProfileTitle>

          <ProfileRole>{Roles.roles.webDeveloper}</ProfileRole>

          <NavLink to="/profile">
            Edit Profile
          </NavLink>
        </ProfileCardHeader>
      </ProfileCard>
    </Main>
  );
}