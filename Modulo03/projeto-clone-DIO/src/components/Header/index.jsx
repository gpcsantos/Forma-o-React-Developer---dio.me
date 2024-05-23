import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';
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

const Header = ({ autenticado }) => {
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
            {autenticado ? (
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
              {autenticado ? (
                <UserPicture src='https://avatars.githubusercontent.com/u/69162677?v=4' />
              ) : (
                <>
                  <MenuRight href='#'>Home</MenuRight>
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
