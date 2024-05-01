import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';

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

const Login = () => {
  const navigate = useNavigate();

  const habdleClickSignIn = () => {
    navigate('/feed');
  };
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as proncipais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
            <form action=''>
              <Input
                placeholder='E-mail'
                leftIcon={<EmailIcon fontSize='small' />}
              />
              <Input
                placeholder='Senha'
                type='password'
                leftIcon={<LockIcon fontSize='small' />}
              />
              <Button
                title='Entrar'
                variant='secondary'
                onClick={habdleClickSignIn}
                type='button'
              />
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
