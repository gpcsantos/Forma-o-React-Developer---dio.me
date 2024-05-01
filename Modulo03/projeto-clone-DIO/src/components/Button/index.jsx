import { ButtonContainer } from './styles';

const Button = ({ title = 'Title Default', variant = 'primary', onClick }) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};
export { Button };
