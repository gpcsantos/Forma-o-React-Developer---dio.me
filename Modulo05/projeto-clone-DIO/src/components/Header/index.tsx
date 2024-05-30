import { Button } from '../Button';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-full.svg';
import {
  Container,
  Row,
  Wrapper,
  BuscarInputContainer,
  Menu,
  Input,
  Flex1,
  Flex2,
  MenuRight,
  UserPicture,
  LogoDIO,
} from './styles';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
  const { user, handleSignOut } = useAuth();

  const navigate = useNavigate();

  const habdleClickSignIn = () => {
    navigate('/login');
  };
  const habdleClickRegister = () => {
    navigate('/register');
  };
  const habdleClickHome = () => {
    navigate('/');
  };
  return (
    <Wrapper>
      <Container>
        <Row>
          <Flex2>
            <LogoDIO
              src={logo}
              alt='Logo da DIO'
              height={30}
              onClick={habdleClickHome}
            />
            {user.id ? (
              <>
                <BuscarInputContainer>
                  <Input placeholder='Busca...' />
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Flex2>
          <Flex1>
            <>
              {user.id ? (
                <>
                  <Link to='/feed'>
                    <UserPicture src='https://avatars.githubusercontent.com/u/69162677?v=4' />{' '}
                  </Link>
                  <a href='#' onClick={handleSignOut}>
                    Sair
                  </a>
                </>
              ) : (
                <>
                  <MenuRight onClick={habdleClickHome}>Home</MenuRight>
                  <Button title='Entrar' onClick={habdleClickSignIn} />
                  <Button title='Cadastrar' onClick={habdleClickRegister} />
                </>
              )}
            </>
          </Flex1>
        </Row>
      </Container>
    </Wrapper>
  );
};
export { Header };
