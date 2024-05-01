import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Container, Title, TitleHighLight, Column } from './styles';

export default function Home() {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighLight># HANKIN 5 TOP DA SEMANA</TitleHighLight>
          <UserInfo
            nome='Glauco Santos'
            image='https://avatars.githubusercontent.com/u/69162677?v=4'
            percentual={80}
          />
          <UserInfo
            nome='Glauco Santos'
            image='https://avatars.githubusercontent.com/u/69162677?v=4'
            percentual={70}
          />
          <UserInfo
            nome='Glauco Santos'
            image='https://avatars.githubusercontent.com/u/69162677?v=4'
            percentual={60}
          />
          <UserInfo
            nome='Glauco Santos'
            image='https://avatars.githubusercontent.com/u/69162677?v=4'
            percentual={50}
          />
          <UserInfo
            nome='Glauco Santos'
            image='https://avatars.githubusercontent.com/u/69162677?v=4'
            percentual={45}
          />
        </Column>
      </Container>
    </>
  );
}
