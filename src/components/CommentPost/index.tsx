import { ThumbsUp, Trash } from "phosphor-react";
import { AvatarTag } from "../AvatarTag";
import {
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

const comments = [1, 2, 3];

export function CommentPost() {
  return (
    <>
      {comments.map((comment) => {
        return (
          <ContainerComment>
            <AvatarTag src={"https://github.com/dimascamillo.png"} />

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
      })}
      ;
    </>
  );
}
