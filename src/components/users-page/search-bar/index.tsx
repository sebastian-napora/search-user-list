import { SearchBarProps } from "./types";

import { BASIC_PROPS_INPUT } from "./utils";

import * as S from "./styles";

export default ({ onChange }: SearchBarProps) => <S.StyledInput {...{ ...BASIC_PROPS_INPUT, onChange }} />;
