import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

import { useNavigate } from 'react-router-dom';

import {
  Container,
  Title,
  TitleHighlight,
  TextContent,
  PositionBannerContent,
} from './styles';

export default function Home() {
  const navigate = useNavigate();
  const habdleClickSignIn = () => {
    navigate('/login');
  };

  return (
    <>
      <Header />
      <Container>
        <PositionBannerContent>
          <Title>
            <TitleHighlight>Implemente</TitleHighlight>
            <br />o seu futuro Global
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts
          </TextContent>
          <Button
            title='Começara agora'
            variant='secondary'
            onClick={habdleClickSignIn}
          />
        </PositionBannerContent>
      </Container>
    </>
  );
}
