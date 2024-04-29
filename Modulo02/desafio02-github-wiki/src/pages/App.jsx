import { useState } from 'react';
import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container } from './styles';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);
    if (data.id) {
      const isExist = repos.find(repo => repo.id === data.id);

      if (!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return;
      }
      return;
    }
    alert('Repositório não encontrado');
  };

  const handleRemoveRepo = id => {
    const filtered = repos.filter(repo => repo.id !== id);
    setRepos(filtered);
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='Logo github' />
      <Input
        value={currentRepo}
        onChange={event => setCurrentRepo(event.target.value)}
      />
      <Button title='Buscar' onClick={handleSearchRepo} />
      {repos.map(repo => (
        <ItemRepo
          key={repo.id}
          repo={repo}
          handleRemoveRepo={handleRemoveRepo}
        />
      ))}
    </Container>
  );
}

export default App;
