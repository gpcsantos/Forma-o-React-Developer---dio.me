import { ItemContainer } from './styles';

function ItemRepo({ repo, handleRemoveRepo }) {
  const handelRemove = () => {
    handleRemoveRepo(repo.id);
  };
  return (
    <ItemContainer onClick={handelRemove}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target='_black' rel='noreferrer'>
        Ver Repositório
      </a>
      <br />
      <a className='remover' href='#' rel='noreferrer'>
        Remover
      </a>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
