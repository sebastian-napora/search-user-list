import React from 'react';

import { SearchBarProps } from './types';

import { StyledInput } from './styles';

export default ({ onChange }: SearchBarProps): JSX.Element => (
  <StyledInput type={'text'} placeholder={'Search by user name...'} onChange={onChange} />
);
