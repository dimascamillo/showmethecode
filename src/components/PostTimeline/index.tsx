import { ButtonSendoComment, TagComment, TextAreaComment, TitleComment, Footer } from "./styles";

export function PostTimeline() {
  return (
    <TagComment>
      <TitleComment>Send your comment!</TitleComment>

      <TextAreaComment placeholder="Insert your comment" />

      <Footer>
        <ButtonSendoComment>Send</ButtonSendoComment>
      </Footer>
    </TagComment>
  );
}