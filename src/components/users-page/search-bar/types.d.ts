import { ChangeEvent } from "react";

export interface SearchBarProps {
  onChange: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined;
}
