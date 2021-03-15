import { SearchBarProps } from "./types";

import * as S from "./styles";

export default ({ onChange }: SearchBarProps) => (
  <S.StyledInput {...{ type: "text", placeholder: "Search by user name...", onChange }} />
);
