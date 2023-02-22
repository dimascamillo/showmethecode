import { TagAvatar } from "./styles";

export interface AvatarProps {
  src: string;
}

export function AvatarTag({src}):AvatarProps {
  return <TagAvatar src={src}/>
}