import {
  CardContainer,
  ImageBackgorund,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from './styles';

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const Card = () => {
  return (
    <CardContainer>
      <ImageBackgorund src='https://avatars.githubusercontent.com/u/69162677?v=4' />
      <Content>
        <UserInfo>
          <UserPicture src='https://avatars.githubusercontent.com/u/69162677?v=4' />
          <div>
            <h4>Glauco Santo</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso HTML e CSS</h4>
          <p>
            Projeto feito para o curso de HTML e CSS no bootcampo dio do Global
            avanade ... <strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTMML $CSS #JavaScript</h4>
          <p>
            <ThumbUpOffAltIcon fontSize='small' /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};
export { Card };
