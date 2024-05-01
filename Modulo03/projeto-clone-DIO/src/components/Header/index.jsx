import { Button } from '../Button';
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
} from './styles';

const Header = ({ autenticado }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Flex2>
            <img src={logo} alt='Logo da DIO' height={30} />
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
                  <Button title='Entrar' />
                  <Button title='Cadastrar' />
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
