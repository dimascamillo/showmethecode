import {
  Author,
  AuthorInfo,
  AuthorInfoName,
  AuthorInfoRole,
  Avatar,
  Content,
  Main,
  NewPost,
  Post,
  PostHeader,
  Pre,
  ProfileCard,
  ProfileCardHeader,
  ProfileRole,
  ProfileTitle,
  Time,
  Timeline,
  TitlePost,
} from "./styles";

import { NavLink } from "react-router-dom";

interface PropsHome {
  titleProfile: string;
}

const Roles = {
  webDeveloper: "Web Developer",
  backEndDeveloper: "Back End Developer"
};

const Posts = {
  id: 1,
  title: "Alignt itens Center"
}


export function Home({ titleProfile }: PropsHome) {
  return (
    <Main>
      <ProfileCard>
        <ProfileCardHeader>
          <img
            src={
              "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
            }
          />

          <Avatar statusColor="green">
            <img src={"https://github.com/dimascamillo.png"} />
          </Avatar>

          <ProfileTitle>{(titleProfile = "Dimas Camillo")}</ProfileTitle>

          <ProfileRole>{Roles.webDeveloper}</ProfileRole>

          <NavLink to="/profile">Edit Profile</NavLink>
        </ProfileCardHeader>
      </ProfileCard>

      <Timeline>
        <NewPost>New Post</NewPost>

        <Post>
          <PostHeader>
            <Author>
              <img src="https://github.com/dimascamillo.png" />

              <AuthorInfo>
                  <AuthorInfoName>{(titleProfile = "Dimas Camillo")}</AuthorInfoName>
                  <AuthorInfoRole>{Roles.webDeveloper}</AuthorInfoRole>
              </AuthorInfo>
            </Author>

            <Time dateTime="2023-02-17 09:40" title="17 de fevereiro às 09:34">Publicado há 1h</Time>
          
            <Content>
              <TitlePost>{Posts.title}</TitlePost>
              <Pre>
                margin: auto;
              </Pre>
            </Content>
          </PostHeader>
        </Post>

        <Post>
          <PostHeader>
            <Author>
              <img src="https://github.com/dimascamillo.png" />

              <AuthorInfo>
                  <AuthorInfoName>{(titleProfile = "Dimas Camillo")}</AuthorInfoName>
                  <AuthorInfoRole>{Roles.webDeveloper}</AuthorInfoRole>
              </AuthorInfo>
            </Author>

            <Time dateTime="2023-02-17 09:34" title="17 de fevereiro às 09:34">Publicado há 1h</Time>
          
            <Content>
              <TitlePost>{Posts.title}</TitlePost>
              <Pre>
                margin: auto;
              </Pre>
            </Content>
          </PostHeader>
        </Post>
      </Timeline>
    </Main>
  );
}
