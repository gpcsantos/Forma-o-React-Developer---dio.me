import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

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
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (formData: IFormData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.password}`
      );
      if (data.length === 1) {
        navigate('/feed');
      } else {
        alert('E-mail ou senha inválidos!');
      }
    } catch (error) {
      alert('Houve um erro, tente novamente.');
    }
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
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;
