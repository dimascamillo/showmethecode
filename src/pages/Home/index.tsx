import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
  Author,
  AuthorInfo,
  AuthorInfoName,
  AuthorInfoRole,
  Avatar,
  Container,
  Content,
  Main,
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
import { Copy } from "phosphor-react";
import { ButtonNewpost } from "../../components/ButtonNewpost";
import { PostTimeline } from "../../components/PostTimeline";
import { CommentPost } from "../../components/CommentPost";
import { AvatarTag } from "../../components/AvatarTag";
import { TagAvatar } from "../../components/AvatarTag/styles";

interface PropsHome {
  titleProfile: string;
  newPost: string;
}

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/dimascamillo.png",
      name: "Dimas Camillo",
      role: "Web Developer"
    },
    title: "Centrilize Content",
    content: `
      div {
        margin: auto;
      }
    `,
    publishedAt: new Date('2023-02-21 00:05:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/brunarossi.png",
      name: "Bruna Rossi",
      role: "Web Developer"
    },
    title: "Align Text Midle",
    content: `
      p {
        text-align: center;
      }
    `,
    publishedAt: new Date('2023-02-22 14:32:00')
  }
];


export function Home() {
  
  return (
    <Main>
      <ProfileCard>
        <ProfileCardHeader>
          <img
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
            />

          <Avatar statusColor="yellow">
            <AvatarTag src="https://github.com/dimascamillo.png"/>
          </Avatar>

          <ProfileTitle>Dimas Camillo</ProfileTitle>

          <ProfileRole>Web Developer</ProfileRole>

          <NavLink to="/profile">Edit Profile</NavLink>
        </ProfileCardHeader>
      </ProfileCard>

      <Timeline>
        <>
          <ButtonNewpost />

          {posts.map(post => {
            const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
              locale: ptBR
            })

            const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
              locale: ptBR,
              addSuffix: true
            })

            return (
            <Post>
              <PostHeader>
                <Author statusColor="green">   
                  <AvatarTag src={post.author.avatarUrl}/>

                  <AuthorInfo>
                    <AuthorInfoName>
                      {post.author.name}
                    </AuthorInfoName>
                    <AuthorInfoRole>{post.author.role}</AuthorInfoRole>
                  </AuthorInfo>
                </Author>

                <Time dateTime={publishedDateFormatted} title={post.publishedAt.toISOString()}>
                  {publishedDateRelativeToNow}
                </Time>
              </PostHeader>
              <Content>
                  <TitlePost>{post.title}</TitlePost>
                  <Pre>
                    {post.content}
                    <Copy size={18} color="white" />
                  </Pre>
              </Content>

              <PostTimeline />

              <Container statusColor="red">
                <CommentPost />
              </Container>

            </Post>
            );
          })}
        </>
        
      </Timeline>
    </Main>
  );
}
