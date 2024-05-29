import { ButtonContainer } from './styles';
import { IButtonProps } from './types';

const Button = ({ title, disabled }: IButtonProps) => {
  return (
    <ButtonContainer
      disabled={!disabled}
      onClick={() => {
        alert('SUMBIT');
      }}
    >
      {title}
    </ButtonContainer>
  );
};

export default Button;
