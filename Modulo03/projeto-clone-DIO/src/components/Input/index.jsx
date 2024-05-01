import { InputContainer, IconContainer, InputText } from './styles';

const Input = ({ leftIcon, name, ...rest }) => {
  return (
    <InputContainer>
      {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
      <InputText name={name} {...rest} />
    </InputContainer>
  );
};
export { Input };
