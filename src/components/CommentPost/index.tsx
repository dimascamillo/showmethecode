import { ThumbsUp, Trash } from "phosphor-react";
import {
  Avatar,
  AuthorAndTime,
  Comment,
  CommentBox,
  ContainerComment,
  CommentContent,
  Footer,
  Header,
  Author,
  Time,
  ButtonDelete,
  ButtonThanks,
  CountLikes,
  Thanks,
} from "./styles";

export function CommentPost() {
  return (
    <ContainerComment>
      <Avatar src="https://github.com/dimascamillo.png" />

      <CommentBox>
        <CommentContent>
          <Header>
            <AuthorAndTime>
              <Author>Dimas Camillo</Author>

              <Time>Cerca de 1h atrás</Time>
            </AuthorAndTime>

            <ButtonDelete title="Dele comment">
              <Trash size={24} />
            </ButtonDelete>
          </Header>

          <Comment>Thanks, great code!</Comment>
        </CommentContent>

        <Footer>
          <ButtonThanks>
            <ThumbsUp />
            <Thanks>Thanks</Thanks>
            <CountLikes>20</CountLikes>
          </ButtonThanks>
        </Footer>
      </CommentBox>
    </ContainerComment>
  );
}
