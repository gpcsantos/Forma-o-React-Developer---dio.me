import styled, { css } from 'styled-components';
import { IButtonContainer } from './types';

export const ButtonContainer = styled.button<IButtonContainer>`
  width: 100%;
  height: 42px;
  background-color: #81259d;
  color: #fff;

  border: 1px solid #81259d;
  border-radius: 21px;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: pointer;
    `}
`;
