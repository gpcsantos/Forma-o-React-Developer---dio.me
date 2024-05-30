import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 40px;
  height: 500px;
  display: flex;
  align-items: center;
`;
export const Column = styled.div`
  flex: 1;
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
export const TitleRegister = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 20px;
  line-height: 44px;
`;
export const SubTitleRegister = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 35px;
  line-height: 25px;
`;

export const Wrapper = styled.div`
  max-width: 350px;
`;

export const ComplementarText = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-top: 25px;
  line-height: 25px;

  p {
    margin-top: 20px;
    font-size: 15px;
    font-weight: 700;
  }
  a {
    color: green;
    text-decoration: none;
    margin-left: 10px;
  }
  a:hover {
    opacity: 0.9;
    font-weight: 700;
  }
`;
