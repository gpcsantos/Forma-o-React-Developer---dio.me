import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  margin-top: 40px;
  height: 500px;

  display: flex;
  justify-content: start;
  align-items: center;
  background: linear-gradient(
        99.06deg,
        rgb(0, 0, 0) 45.8%,
        rgba(0, 0, 0, 0) 90.54%
      )
      center center / cover no-repeat,
    url('https://hermes.digitalinnovation.one/public/components/pages/home/header/banner-play.png');
  background-position: center center;
  background-size: 100%;
  padding: 1rem;

  @media only screen and (max-width: 768px) {
    background: linear-gradient(0deg, rgb(0, 0, 0) 70%, rgba(0, 0, 0, 0) 90.54%)
        center center / cover no-repeat,
      url('https://hermes.digitalinnovation.one/public/components/pages/home/header/banner-play.png');
    background-position: top center;
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 1rem;
    height: 350px;
  }
`;

export const Title = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;

  color: #ffffff;
`;

export const TitleHighlight = styled.span`
  color: #44105d;
`;

export const TextContent = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  width: 420px;
  margin-bottom: 20px;
  line-height: 22px;

  color: #ffffff;
`;

export const PositionBannerContent = styled.div`
  margin-left: 100px;
`;
