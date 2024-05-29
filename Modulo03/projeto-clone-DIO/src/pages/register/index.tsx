import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import EmailIcon from '@mui/icons-material/Email';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import LockIcon from '@mui/icons-material/Lock';

import {
  Container,
  Column,
  Title,
  TitleRegister,
  SubTitleRegister,
  Wrapper,
  ComplementarText,
} from './styles';

const schema = yup
  .object({
    email: yup
      .string()
      .email('E-mail não é válido')
      .required('Campo obrigatório'),
    name: yup
      .string()
      .min(3, 'Mínimo 3 caracteres')
      .required('Campo obrigatório'),
    password: yup
      .string()
      .min(3, 'Mínimo 3 caracteres')
      .required('Campo obrigatório'),
  })
  .required();

const onSubmit = async formData => {
  return console.log(formData);
};

const Cadastro = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <TitleRegister>Comece agora grátis</TitleRegister>
          <SubTitleRegister>
            Crie sua conta e make the change._
          </SubTitleRegister>
          <Wrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name='name'
                placeholder='Nome Completo'
                leftIcon={<PersonSharpIcon fontSize='small' />}
                control={control}
                errorMessage={errors?.name?.message}
              />
              <Input
                name='email'
                placeholder='E-mail'
                leftIcon={<EmailIcon fontSize='small' />}
                control={control}
                errorMessage={errors?.email?.message}
              />
              <Input
                name='password'
                errorMessage={errors?.password?.message}
                control={control}
                placeholder='Senha'
                type='password'
                leftIcon={<LockIcon fontSize='small' />}
              />
              <Button
                title='Criar minha conta'
                variant='secondary'
                type='submit'
              />
            </form>
            <ComplementarText>
              Ao clicar em "criar minha conta grátis", declaro que aceito as
              Políticas de Privacidade e os Termos de Uso da DIO
              <p>
                Já tenho conta. <span>Fazer login</span>
              </p>
            </ComplementarText>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Cadastro;
