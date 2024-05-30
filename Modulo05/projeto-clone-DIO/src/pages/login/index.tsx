import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';

import {
  Container,
  Wrapper,
  Title,
  Column,
  Row,
  TitleLogin,
  SubTitleLogin,
  EsqueciText,
  CriarText,
} from './styles';
import { IFormData } from './type';
import { useAuth } from '../../hooks/useAuth';

const schema = yup
  .object({
    email: yup
      .string()
      .email('E-mail não é válido')
      .required('Campo obrigatório'),
    password: yup
      .string()
      .min(3, 'Mínimo 3 caracteres')
      .required('Campo obrigatório'),
  })
  .required();

const Login = () => {
  const { handleLogin } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (formData: IFormData) => {
    handleLogin(formData);
  };

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
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name='email'
                control={control}
                errorMessage={errors?.email?.message}
                placeholder='E-mail'
                leftIcon={<EmailIcon fontSize='small' />}
              />
              <Input
                name='password'
                errorMessage={errors?.password?.message}
                control={control}
                placeholder='Senha'
                type='password'
                leftIcon={<LockIcon fontSize='small' />}
              />
              <Button title='Entrar' variant='secondary' type='submit' />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText href='/register'>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;
