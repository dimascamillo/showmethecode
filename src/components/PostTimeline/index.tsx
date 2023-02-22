import { useState } from "react";
import { ButtonSendoComment, TagComment, TextAreaComment, TitleComment, Footer } from "./styles";

export function PostTimeline() {

  const [comment, setComment] = useState('');

  return (
    <TagComment>
      <TitleComment>Send your comment!</TitleComment>

      <TextAreaComment 
      placeholder="Insert your comment" 
      onChange={e => setComment(e.target.value)}
      value={comment}
      />

      <Footer>
        <ButtonSendoComment disabled={!comment} >Send</ButtonSendoComment>
      </Footer>
    </TagComment>
  );
}