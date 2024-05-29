import { ButtonContainer } from './styles';
import { IButton } from './types';

const Button = ({
  title = 'Title Default',
  variant = 'primary',
  onClick,
}: IButton) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};
export { Button };
