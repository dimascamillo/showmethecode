import { List } from "phosphor-react";
import { LogoHeader, TagHeader } from "./styles";

interface PropsHeader {
  content: string;
}

export function Header({content = "Show me the <code/>"}: PropsHeader) {
  return (
    <TagHeader>
      <LogoHeader>{content}</LogoHeader>
      <List size={20} color="white"/>
    </TagHeader>
  );
}